import json, re, os

ROOT = os.path.expanduser('~/Desktop/sharedeal-redesign')
SC = '/private/tmp/claude-501/-Users-mdomerarafat/b2da4326-ede9-4daf-b4dd-2224f762bbc5/scratchpad'
assets = json.load(open(os.path.join(os.path.dirname(__file__), 'artifact_assets.json')))
URIS, LOGO = assets['uris'], assets['logo']

def read(p): return open(os.path.join(ROOT, p), encoding='utf-8').read()

css = read('css/main.css')

data = read('js/data.js')
for url, uri in URIS.items():
    data = data.replace('"' + url + '"', '"' + uri + '"')
assert 'https://sharedealnow.com/storage' not in data, 'unreplaced product image'

app = read('js/app.js')
app = app.replace('https://sharedealnow.com/logo.svg', LOGO)
app = app.replace("bar.onclick = () => location.href = 'cart.html';", "bar.onclick = () => go('cart');")
app = app.replace('function initCountdowns() {', 'function initCountdowns() {\n  if (window.__cdI) return; window.__cdI = 1;')
app = app.replace("if (e.key === 'Enter' && si.value.trim()) location.href = 'index.html#shop?q=' + encodeURIComponent(si.value.trim());",
                  "if (e.key === 'Enter') e.preventDefault();")

PAGES = {}
FRAGS = {}
for page in ['index', 'product', 'cart', 'checkout', 'success', 'profile', 'blog', 'post', 'partner']:
    src = read(page + '.html')
    body = re.search(r'<body[^>]*>(.*)</body>', src, re.S).group(1)
    m = re.search(r'<script>\n(.*?)</script>', body, re.S)
    script = m.group(1)
    frag = body.replace(m.group(0), '')
    frag = re.sub(r'<script src="[^"]+"></script>', '', frag)
    frag = frag.replace('<div id="site-header"></div>', '').replace('<div id="site-footer"></div>', '')
    FRAGS[page] = frag.strip()
    PAGES[page] = script

# per-page script patches
PAGES['index'] = PAGES['index'].replace("bootCommon('deals');", '')
p = PAGES['product'].replace("bootCommon('shop');", '')
p = p.replace("const pid = Number(new URLSearchParams(location.search).get('id')) || DEALS[0].productId;",
              "const pid = Number(window.ART.productId) || DEALS[0].productId;")
p = p.replace("setTimeout(() => location.href = 'cart.html', 500)", "setTimeout(() => go('cart'), 500)")
PAGES['product'] = p
c = PAGES['cart'].replace("bootCommon('');", '')
PAGES['cart'] = c
co = PAGES['checkout'].replace("bootCommon('');", '')
co = co.replace("if (!getCart().length) location.replace('cart.html');", "if (!getCart().length) { go('cart'); return; }")
co = co.replace("location.href = 'success.html';", "go('success');")
PAGES['checkout'] = co
s = PAGES['success'].replace("bootCommon('');", '')
s = s.replace("if (!order) { location.replace('index.html'); throw new Error('no order'); }",
              "if (!order) { go('index'); return; }")
PAGES['success'] = s
pf = PAGES['profile'].replace("bootCommon('');", '')
pf = pf.replace("let tab = new URLSearchParams(location.search).get('tab') || 'info';", "let tab = window.ART.tab || 'info';")
pf = pf.replace("location.reload();", "go('profile');")
pf = pf.replace("setTimeout(() => location.href = 'index.html', 500);", "setTimeout(() => go('index'), 500);")
PAGES['profile'] = pf
PAGES['blog'] = PAGES['blog'].replace("bootCommon('blog');", '')
po = PAGES['post'].replace("bootCommon('blog');", '')
po = po.replace("const slug = new URLSearchParams(location.search).get('slug') || BLOG[0].slug;",
                "const slug = window.ART.slug || BLOG[0].slug;")
PAGES['post'] = po
PAGES['partner'] = PAGES['partner'].replace("bootCommon('seller');", '')

for k, v in PAGES.items():
    assert 'location.href' not in v and 'location.replace' not in v, f'{k} still navigates: ' + re.search(r'.{40}location\.(href|replace).{40}', v, re.S).group(0)

page_divs = '\n'.join(
    f'<div class="pg" id="pg-{k}"{"" if k == "index" else " hidden"}>\n{FRAGS[k]}\n</div>' for k in FRAGS)
page_fns = '\n'.join(
    f"PAGES['{k}'] = function() {{\n{PAGES[k]}\n}};" for k in PAGES)

router = """
window.ART = { productId: null, tab: null };
const PAGES = {};
%s
function go(page, opts) {
  opts = opts || {};
  if (opts.id) window.ART.productId = opts.id;
  window.ART.slug = opts.slug || null;
  window.ART.tab = opts.tab || null;
  document.querySelectorAll('.pg').forEach(d => { if (d.id === 'pg-' + page) d.removeAttribute('hidden'); else d.setAttribute('hidden',''); });
  window.scrollTo({ top: 0 });
  if (PAGES[page]) PAGES[page]();
  updateCartBadge();
  if (opts.hash) setTimeout(() => { const el = document.querySelector(opts.hash); el && el.scrollIntoView({ behavior: 'smooth' }); }, 80);
}
document.addEventListener('click', e => {
  const a = e.target.closest('a[href]');
  if (!a) return;
  const href = a.getAttribute('href');
  const m = href.match(/^(index|product|cart|checkout|success|profile|blog|post|partner)\\.html(?:\\?([^#]*))?(?:#([\\w-]+))?$/);
  if (!m) return;
  e.preventDefault();
  const q = new URLSearchParams(m[2] || '');
  go(m[1], { id: q.get('id'), tab: q.get('tab'), slug: q.get('slug'), hash: m[3] ? '#' + m[3] : null });
});
bootCommon('deals');
go('index');
"""
router = router % page_fns

storage_shim = """
try { localStorage.setItem('__t','1'); localStorage.removeItem('__t'); } catch (e) {
  const mk = () => { const m = {}; return { getItem: k => (k in m ? m[k] : null), setItem: (k,v) => { m[k] = String(v); }, removeItem: k => { delete m[k]; } }; };
  try { Object.defineProperty(window, 'localStorage', { value: mk() }); Object.defineProperty(window, 'sessionStorage', { value: mk() }); } catch (e2) {}
}
"""

html = f"""<meta charset="UTF-8">
<title>ShareDeal Redesign — Interactive Demo</title>
<style>
{css}
.demo-tag {{ position: fixed; left: 12px; top: 12px; z-index: 300; background: rgba(20,32,26,.85); color: #ffd25e; font: 700 11px/1 Inter, 'Hind Siliguri', sans-serif; padding: 7px 12px; border-radius: 999px; letter-spacing: .03em; pointer-events: none; }}
</style>
<span class="demo-tag">🎨 REDESIGN DEMO</span>
<div id="site-header"></div>
{page_divs}
<div id="site-footer"></div>
<script>{storage_shim}</script>
<script>
{data}
</script>
<script>
{app}
</script>
<script>
{router}
</script>
"""
out = os.path.join(SC, 'sharedeal-demo.html')
open(out, 'w', encoding='utf-8').write(html)
print('written', out, len(html) // 1024, 'KB')
