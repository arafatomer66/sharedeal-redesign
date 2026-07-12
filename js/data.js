/* ShareDeal redesign — data layer.
   Products, prices and images are real, pulled from sharedealnow.com.
   Group membership counts and deadlines are simulated for the prototype. */

const PRODUCTS = [
 {
  "id": 486,
  "name": "Banana Flower (Kolar Mocha)",
  "mrp": 110.0,
  "price": 80.0,
  "img": "https://sharedealnow.com/storage/844/converted-512x512-%2813%29.png",
  "cat": "vegetables"
 },
 {
  "id": 485,
  "name": "Kochur Loti 500 GM",
  "mrp": 40.0,
  "price": 35.0,
  "img": "https://sharedealnow.com/storage/843/converted-512x512-%2812%29.png",
  "cat": "vegetables"
 },
 {
  "id": 484,
  "name": "Gajor 250 Gm",
  "mrp": 60.0,
  "price": 50.0,
  "img": "https://sharedealnow.com/storage/842/converted-512x512-%2811%29.png",
  "cat": "vegetables"
 },
 {
  "id": 483,
  "name": "Uchche (Local Bitter Gourd)",
  "mrp": 80.0,
  "price": 70.0,
  "img": "https://sharedealnow.com/storage/841/converted-512x512-%2810%29.png",
  "cat": "vegetables"
 },
 {
  "id": 482,
  "name": "Deshi Shosha",
  "mrp": 80.0,
  "price": 70.0,
  "img": "https://sharedealnow.com/storage/840/converted-512x512-%289%29.png",
  "cat": "vegetables"
 },
 {
  "id": 481,
  "name": "Kacha Morich (Green Chilli)",
  "mrp": 140.0,
  "price": 130.0,
  "img": "https://sharedealnow.com/storage/839/converted-512x512-%288%29.png",
  "cat": "vegetables"
 },
 {
  "id": 391,
  "name": "Deshi Lal Peyaj - Per KG",
  "mrp": 50.0,
  "price": 45.0,
  "img": "https://sharedealnow.com/storage/529/lal-peyaj-onion-red-50-gm-1-kg.png",
  "cat": "vegetables"
 },
 {
  "id": 487,
  "name": "ACI Nutrilife Brown Flour (Atta)",
  "mrp": 140.0,
  "price": 120.0,
  "img": "https://sharedealnow.com/storage/863/converted-512x512-%2814%29.png",
  "cat": "cooking"
 },
 {
  "id": 476,
  "name": "Nazirshail Rice Premium (Half Boiled)",
  "mrp": 90.0,
  "price": 80.0,
  "img": "https://sharedealnow.com/storage/828/converted-512x512-%283%29.png",
  "cat": "cooking"
 },
 {
  "id": 475,
  "name": "জিরা (Jira) 250 Gm",
  "mrp": 300.0,
  "price": 270.0,
  "img": "https://sharedealnow.com/storage/824/converted-512x512-%282%29.png",
  "cat": "cooking"
 },
 {
  "id": 474,
  "name": "Pulao Rice (খোলা)",
  "mrp": 170.0,
  "price": 160.0,
  "img": "https://sharedealnow.com/storage/823/converted-512x512.png",
  "cat": "cooking"
 },
 {
  "id": 414,
  "name": "Sajeeb Soya Sauce 300ml",
  "mrp": 120.0,
  "price": 98.0,
  "img": "https://sharedealnow.com/storage/598/sajeeb-soya-sauce-300-ml%5B1%5D",
  "cat": "cooking"
 },
 {
  "id": 432,
  "name": "Pran Mr. Noodles Magic Masala 992gm",
  "mrp": 340.0,
  "price": 335.0,
  "img": "https://sharedealnow.com/storage/627/65fa9692d61902ef2307b3af_Pran-Mr-Noodles-Magic-Masala-992gm_1%5B1%5D.webp",
  "cat": "snacks"
 },
 {
  "id": 431,
  "name": "Doodles Stick Noodles 150(±)25gm",
  "mrp": 25.0,
  "price": 20.0,
  "img": "https://sharedealnow.com/storage/626/65fa9671d61902ef2307b17f_Doodles-Stick-Noodles-1755gm_1%5B1%5D.webp",
  "cat": "snacks"
 },
 {
  "id": 464,
  "name": "Bombay Sweets Chanachur 500 gm",
  "mrp": 150.0,
  "price": 145.0,
  "img": "https://sharedealnow.com/storage/727/chanachur.png",
  "cat": "snacks"
 },
 {
  "id": 373,
  "name": "Ruchi Jhal Chanachur 150gm",
  "mrp": 50.0,
  "price": 48.0,
  "img": "https://sharedealnow.com/storage/506/ruchi-jhal-chanachur-150-gm.jpg",
  "cat": "snacks"
 },
 {
  "id": 375,
  "name": "Olympic Lexus Vegetable Crackers Biscuits 216 gm",
  "mrp": 100.0,
  "price": 95.0,
  "img": "https://sharedealnow.com/storage/508/olympic-lexus-vegetable-crackers-biscuits-216-gm.jpg",
  "cat": "snacks"
 },
 {
  "id": 374,
  "name": "Haque Mr. Cookie Butter Coconut Biscuit 175gm",
  "mrp": 50.0,
  "price": 50.0,
  "img": "https://sharedealnow.com/storage/507/haque-mr-cookie-butter-coconut-biscuit-175-gm.jpg",
  "cat": "snacks"
 },
 {
  "id": 467,
  "name": "Mr. Noodles Magic Masala Flavor 12 pcs Family Pack",
  "mrp": 260.0,
  "price": 255.0,
  "img": "https://sharedealnow.com/storage/781/converted-512x512.png",
  "cat": "snacks"
 },
 {
  "id": 382,
  "name": "Nestle Maggi 2 Minute Masala Instant Noodles 8 Pack",
  "mrp": 180.0,
  "price": 170.0,
  "img": "https://sharedealnow.com/storage/517/nestle-maggi-2-minute-masala-instant-noodles-8-pack.jpg",
  "cat": "snacks"
 },
 {
  "id": 421,
  "name": "Radhuni Firni Mix",
  "mrp": 70.0,
  "price": 67.0,
  "img": "https://sharedealnow.com/storage/611/65fa95d3115075f231eccab1_Radhuni-Firni-Mix-150gm_1%5B1%5D.webp",
  "cat": "snacks"
 },
 {
  "id": 480,
  "name": "Clemon ( 6 piece )",
  "mrp": 660.0,
  "price": 630.0,
  "img": "https://sharedealnow.com/storage/838/converted-512x512-%287%29.png",
  "cat": "beverages"
 },
 {
  "id": 479,
  "name": "RC Cola ( 12 Piece )",
  "mrp": 240.0,
  "price": 225.0,
  "img": "https://sharedealnow.com/storage/837/converted-512x512-%286%29.png",
  "cat": "beverages"
 },
 {
  "id": 478,
  "name": "Sprite 2.25 Ltr ( 6 Piece )",
  "mrp": 900.0,
  "price": 850.0,
  "img": "https://sharedealnow.com/storage/836/converted-512x512-%285%29.png",
  "cat": "beverages"
 },
 {
  "id": 477,
  "name": "Mojo Soft Drink",
  "mrp": 110.0,
  "price": 105.0,
  "img": "https://sharedealnow.com/storage/835/converted-512x512-%284%29.png",
  "cat": "beverages"
 },
 {
  "id": 462,
  "name": "Nescafe Classic Coffee 200gm (Pouch)",
  "mrp": 950.0,
  "price": 945.0,
  "img": "https://sharedealnow.com/storage/678/converted-512x512-%283%29.png",
  "cat": "beverages"
 },
 {
  "id": 460,
  "name": "SEYLON 3 In 1 Instant Milk Tea",
  "mrp": 10.0,
  "price": 10.0,
  "img": "https://sharedealnow.com/storage/674/converted-512x512-%281%29.png",
  "cat": "beverages"
 },
 {
  "id": 388,
  "name": "Nescafe 3 In 1 Original Instant Coffee",
  "mrp": 15.0,
  "price": 14.0,
  "img": "https://sharedealnow.com/storage/525/Nescafe-3-In-1-Original.png",
  "cat": "beverages"
 },
 {
  "id": 334,
  "name": "Ispahani Mirzapore Tea Bags 50 (double chamber)",
  "mrp": 95.0,
  "price": 94.0,
  "img": "https://sharedealnow.com/storage/442/ispahani-mirzapore-tea-bag-50-pcs.jpg",
  "cat": "beverages"
 },
 {
  "id": 452,
  "name": "Kazi & Kazi Green Tea 60gm",
  "mrp": 235.0,
  "price": 230.0,
  "img": "https://sharedealnow.com/storage/657/converted-512x512-%282%29.png",
  "cat": "beverages"
 },
 {
  "id": 416,
  "name": "Marks Full Cream Milk Powder Poly - 500 gm",
  "mrp": 520.0,
  "price": 480.0,
  "img": "https://sharedealnow.com/storage/603/marks-full-cream-milk-powder-poly-500-gm%5B1%5D",
  "cat": "dairy"
 },
 {
  "id": 415,
  "name": "Dano Daily Pushti Milk Powder - 1KG",
  "mrp": 770.0,
  "price": 760.0,
  "img": "https://sharedealnow.com/storage/602/dano-daily-pushti-milk-powder-1-kg%5B1%5D",
  "cat": "dairy"
 },
 {
  "id": 383,
  "name": "Diploma Instant Milk Powder 500gm",
  "mrp": 490.0,
  "price": 480.0,
  "img": "https://sharedealnow.com/storage/518/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC82NzQzNlwvNjc0MzYtRGlwbG9tYS1JbnN0YW50LUZ1bGwtQ3JlYW0tTWlsay1Qb3dkZXItNTAwZ20tcGFjay03ZnU2b2kucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiO.png",
  "cat": "dairy"
 },
 {
  "id": 378,
  "name": "Fresh Instant Full Cream Milk Powder 500gm",
  "mrp": 480.0,
  "price": 460.0,
  "img": "https://sharedealnow.com/storage/513/fresh-instant-full-cream-milk-powder-500-gm.jpg",
  "cat": "dairy"
 },
 {
  "id": 377,
  "name": "Fresh Instant Full Cream Milk Powder 1 KG",
  "mrp": 950.0,
  "price": 930.0,
  "img": "https://sharedealnow.com/storage/512/fresh-instant-full-cream-milk-powder-500-gm.jpg",
  "cat": "dairy"
 },
 {
  "id": 361,
  "name": "Dano Daily Pusti Milk Powder 500gm",
  "mrp": 400.0,
  "price": 390.0,
  "img": "https://sharedealnow.com/storage/485/dano-daily-pushti-milk-powder-1-kg.jpg",
  "cat": "dairy"
 },
 {
  "id": 406,
  "name": "Starship Full Cream Milk Powder 500gm",
  "mrp": 380.0,
  "price": 370.0,
  "img": "https://sharedealnow.com/storage/565/starship-full-cream-milk-powder-500-gm%5B1%5D",
  "cat": "dairy"
 },
 {
  "id": 433,
  "name": "Banoful Special Lachha Shemai 200gm",
  "mrp": 60.0,
  "price": 50.0,
  "img": "https://sharedealnow.com/storage/628/65fa9630d61902ef23078d6e_Banoful-Special-Lachha-Shemai-200gm_1%5B1%5D.webp",
  "cat": "dairy"
 },
 {
  "id": 422,
  "name": "Neocare Premium Belt System Baby Diaper (3-6 kg) (30 Pcs)",
  "mrp": 780.0,
  "price": 609.0,
  "img": "https://sharedealnow.com/storage/616/Neocare-Premium-Belt-System-Baby-Diaper-%283-6-kg%29-%2830-Pcs%29.png",
  "cat": "baby"
 },
 {
  "id": 411,
  "name": "Smart Care Wet Wipes with Tube (220 pcs)",
  "mrp": 300.0,
  "price": 249.0,
  "img": "https://sharedealnow.com/storage/612/Smart-Care-Wet-Wipes-with-Tube-%28220-pcs%29.png",
  "cat": "baby"
 },
 {
  "id": 410,
  "name": "NeoCare Premium Baby Diaper Belt S (3-6 kg) (50 Pcs)",
  "mrp": 1200.0,
  "price": 930.0,
  "img": "https://sharedealnow.com/storage/613/NeoCare-Premium-Baby-Diaper-Belt-S-%283-6-kg%29.png",
  "cat": "baby"
 },
 {
  "id": 404,
  "name": "Savlon Twinkle Baby Pant Diaper S 8 KG 42 Pack",
  "mrp": 890.0,
  "price": 810.0,
  "img": "https://sharedealnow.com/storage/614/Savlon-Twinkle-Baby-Pant-Diaper-S-8-KG-42-Pack.png",
  "cat": "baby"
 },
 {
  "id": 454,
  "name": "Rok Wood Cleaner 250(±)100ml (Spray)",
  "mrp": 160.0,
  "price": 150.0,
  "img": "https://sharedealnow.com/storage/659/converted-512x512.png",
  "cat": "cleaning"
 },
 {
  "id": 451,
  "name": "Dish Wash (Foam Scrub pad)",
  "mrp": 24.0,
  "price": 20.0,
  "img": "https://sharedealnow.com/storage/656/converted-512x512-%281%29.png",
  "cat": "cleaning"
 },
 {
  "id": 449,
  "name": "Hit Cockroaches Aerosol 400ml",
  "mrp": 355.0,
  "price": 350.0,
  "img": "https://sharedealnow.com/storage/654/66f37ab6d757d87bcf412352_Hit-Cockroaches-Aerosol-400ml_1-512x512.png",
  "cat": "cleaning"
 },
 {
  "id": 448,
  "name": "Lifebuoy Germ Protection Hand Wash 5Ltr.",
  "mrp": 1405.0,
  "price": 1390.0,
  "img": "https://sharedealnow.com/storage/653/WhatsApp-Image-2026-03-30-at-12.07.09-PM.jpeg",
  "cat": "cleaning"
 },
 {
  "id": 473,
  "name": "Grass Broom (Ful Jharu)",
  "mrp": 100.0,
  "price": 100.0,
  "img": "https://sharedealnow.com/storage/793/converted-512x512-%286%29.png",
  "cat": "cleaning"
 },
 {
  "id": 472,
  "name": "Matador All-time 24 pcs",
  "mrp": 130.0,
  "price": 120.0,
  "img": "https://sharedealnow.com/storage/792/converted-512x512-%285%29.png",
  "cat": "cleaning"
 },
 {
  "id": 470,
  "name": "Rok Glass Cleaner 350(±)100ml (Spray)",
  "mrp": 140.0,
  "price": 140.0,
  "img": "https://sharedealnow.com/storage/790/converted-512x512-%282%29.png",
  "cat": "cleaning"
 },
 {
  "id": 469,
  "name": "45ml mosquito repellent for effective protection.",
  "mrp": 130.0,
  "price": 130.0,
  "img": "https://sharedealnow.com/storage/789/converted-512x512-%281%29.png",
  "cat": "cleaning"
 },
 {
  "id": 466,
  "name": "Lux Flaw Less Glow Rose Soap 90gm",
  "mrp": 60.0,
  "price": 60.0,
  "img": "https://sharedealnow.com/storage/729/converted-512x512-%284%29.png",
  "cat": "cleaning"
 },
 {
  "id": 387,
  "name": "Fresh Perfumed Facial Tissue (150 X 2) ply Box",
  "mrp": 115.0,
  "price": 95.0,
  "img": "https://sharedealnow.com/storage/524/Fresh-Perfumed-Facial-Tissue.png",
  "cat": "tissue"
 },
 {
  "id": 358,
  "name": "Partex Cleen Hand Towel 200X2Ply",
  "mrp": 85.0,
  "price": 81.0,
  "img": "https://sharedealnow.com/storage/481/partex-cleen-hand-towel-200x2-ply-1-pcs.jpg",
  "cat": "tissue"
 },
 {
  "id": 354,
  "name": "Partex Cleen Toilet Tissue-3 ply (Blue Tissue) 4 roll",
  "mrp": 95.0,
  "price": 85.0,
  "img": "https://sharedealnow.com/storage/473/hlci01000310cac.jpg",
  "cat": "tissue"
 },
 {
  "id": 251,
  "name": "Bashundhara Hand Towel",
  "mrp": 104.0,
  "price": 95.0,
  "img": "https://sharedealnow.com/storage/323/fffqf1.jpg",
  "cat": "tissue"
 },
 {
  "id": 250,
  "name": "Bashundhara Toilet Tissue (Gold)",
  "mrp": 38.0,
  "price": 34.0,
  "img": "https://sharedealnow.com/storage/322/0481783_bashundhara-toilet-tissue-gold.jpeg",
  "cat": "tissue"
 },
 {
  "id": 249,
  "name": "Bashundhara paper napkin",
  "mrp": 75.0,
  "price": 65.0,
  "img": "https://sharedealnow.com/storage/321/bashundhara-paper-napkins-13-unscented-100-pcs.jpg",
  "cat": "tissue"
 },
 {
  "id": 381,
  "name": "Pran BBQ Sauce 280gm",
  "mrp": 240.0,
  "price": 220.0,
  "img": "https://sharedealnow.com/storage/516/6655ae780e5834e013de54dc_Pran-BBQ-Sauce-280gm_1.jpg",
  "cat": "sauces"
 },
 {
  "id": 380,
  "name": "PRAN Hot TS Plastic Jar 1kg",
  "mrp": 290.0,
  "price": 280.0,
  "img": "https://sharedealnow.com/storage/515/65fa95f2115075f231eccc5f_Pran-Hot-Tomato-Sauce-1kg-Pet_1.jpg",
  "cat": "sauces"
 },
 {
  "id": 257,
  "name": "Pran Hot Tomato Sauce 750gm",
  "mrp": 200.0,
  "price": 170.0,
  "img": "https://sharedealnow.com/storage/330/1000042248.jpg",
  "cat": "sauces"
 },
 {
  "id": 175,
  "name": "Pran Hot Tomato Sauce 1 KG",
  "mrp": 340.0,
  "price": 310.0,
  "img": "https://sharedealnow.com/storage/601/pran-tomato-sauce-1-kg%5B1%5D",
  "cat": "sauces"
 },
 {
  "id": 155,
  "name": "Radhuni Kasundi 285ml",
  "mrp": 65.0,
  "price": 60.0,
  "img": "https://sharedealnow.com/storage/216/radhuni-kasundi-285-ml",
  "cat": "sauces"
 },
 {
  "id": 9001,
  "name": "Deshi Moshur Dal Loose Premium 1 Kg",
  "mrp": 170.0,
  "price": 150.0,
  "img": "https://sharedealnow.com/storage/604/65fa94e9115075f231ec5687_Deshi-Moshur-Dal-Loose_1.webp",
  "cat": "cooking"
 },
 {
  "id": 9002,
  "name": "Atta (Loose) Per KG",
  "mrp": 65.0,
  "price": 60.0,
  "img": "https://sharedealnow.com/storage/535/Atta%28Loose%29-Per-KG.png",
  "cat": "cooking"
 }
];

const DEALS = [
 { productId: 9001, solo: 150, group: 90,  need: 10, joined: 9, endsAt: hrs(3.4)  },
 { productId: 474,  solo: 160, group: 99,  need: 10, joined: 8, endsAt: hrs(5.2)  },
 { productId: 476,  solo: 80,  group: 65,  need: 10, joined: 7, endsAt: hrs(8.1)  },
 { productId: 9002, solo: 60,  group: 45,  need: 12, joined: 6, endsAt: hrs(11.5) },
 { productId: 475,  solo: 270, group: 208, need: 8,  joined: 5, endsAt: hrs(14.0) },
 { productId: 478,  solo: 850, group: 770, need: 5,  joined: 3, endsAt: hrs(20.3) },
];

const CATEGORIES = [
 { key: 'vegetables', bn: 'তাজা শাকসবজি',        en: 'Fresh Vegetables',   icon: '🥬' },
 { key: 'cooking',    bn: 'রান্নার উপকরণ',        en: 'Cooking Essentials', icon: '🍚' },
 { key: 'dairy',      bn: 'দুধ ও নাস্তা',          en: 'Dairy & Breakfast',  icon: '🥛' },
 { key: 'snacks',     bn: 'স্ন্যাকস',              en: 'Snacks',             icon: '🍪' },
 { key: 'beverages',  bn: 'পানীয়',                en: 'Beverages',          icon: '🥤' },
 { key: 'baby',       bn: 'শিশু যত্ন',             en: 'Baby Care',          icon: '🍼' },
 { key: 'cleaning',   bn: 'ঘর ও পরিচ্ছন্নতা',      en: 'Home & Cleaning',    icon: '🧹' },
 { key: 'tissue',     bn: 'টিস্যু ও ওয়াইপস',       en: 'Tissue & Wipes',     icon: '🧻' },
 { key: 'sauces',     bn: 'সস ও আচার',            en: 'Sauces & Pickles',   icon: '🥫' },
];

const AREAS = ['Banasree', 'Rampura', 'Aftab Nagar', 'Badda', 'Khilgaon', 'Bashabo'];

const TESTIMONIALS = [
 { name: 'Rahima Akter',  area: 'Banasree',    bn: 'প্রতি সপ্তাহে বাজারে ৪০০-৫০০ টাকা সাশ্রয় হচ্ছে। প্রতিবেশীদের সাথে গ্রুপ করে কেনা এখন অভ্যাস হয়ে গেছে!', en: 'I save ৳400–500 on groceries every week. Group buying with neighbours has become a habit!', saved: 1840 },
 { name: 'Kamrul Hasan',  area: 'Rampura',     bn: 'চালের দাম দেখে অবাক হয়েছি — বাজারের চেয়ে কেজিতে ৬০ টাকা কম! ডেলিভারিও সময়মতো।', en: 'The rice price shocked me — ৳60/kg less than the bazaar! Delivery was on time too.', saved: 2320 },
 { name: 'Nusrat Jahan',  area: 'Aftab Nagar', bn: 'বাচ্চার ডায়াপার গ্রুপ বাইতে কিনে মাসে প্রায় ৬০০ টাকা বাঁচাই। অ্যাপটাও খুব সহজ।', en: 'Buying diapers via group buy saves me almost ৳600 a month. The app is really simple.', saved: 3150 },
];

const TICKER = [
 { bn: 'রহিমা (বনশ্রী) পোলাও চালের গ্রুপে যোগ দিলেন — ৳৬১ সাশ্রয়', en: 'Rahima (Banasree) joined the Pulao Rice group — saved ৳61' },
 { bn: 'কামরুল (রামপুরা) ২ মিনিট আগে মসুর ডালের গ্রুপ সম্পূর্ণ করলেন', en: 'Kamrul (Rampura) completed the Moshur Dal group 2 min ago' },
 { bn: 'আজ ঢাকায় ১৪৩টি গ্রুপ অর্ডার ডেলিভারি হয়েছে', en: '143 group orders delivered across Dhaka today' },
 { bn: 'নুসরাত (আফতাব নগর) ডায়াপারে ৳১৭১ সাশ্রয় করলেন', en: 'Nusrat (Aftab Nagar) saved ৳171 on diapers' },
 { bn: 'এই সপ্তাহে গ্রাহকরা মোট ৳২,৪১,০০০ সাশ্রয় করেছেন', en: 'Customers saved a total of ৳2,41,000 this week' },
];

const FAQS = [
 { qbn: 'গ্রুপ বাই কীভাবে কাজ করে?', qen: 'How does group buy work?',
   abn: 'একটি পণ্যের গ্রুপে যোগ দিন বা নতুন গ্রুপ শুরু করুন। নির্দিষ্ট সংখ্যক সদস্য হলেই সবাই পাইকারি দামে পণ্যটি পাবেন। সদস্য পূরণ না হলে আপনার টাকা সম্পূর্ণ ফেরত।', aen: 'Join a product group or start one. Once enough members join, everyone gets the wholesale price. If the group doesn\'t fill, you get a full refund.' },
 { qbn: 'গ্রুপ পূরণ না হলে কী হবে?', qen: 'What if the group doesn\'t fill up?',
   abn: 'সময় শেষ হওয়ার আগে গ্রুপ পূরণ না হলে আপনি একক মূল্যে কিনতে পারেন অথবা সম্পূর্ণ রিফান্ড নিতে পারেন — কোনো প্রশ্ন ছাড়াই।', aen: 'If the group doesn\'t fill before the deadline, you can buy at the solo price or take a full refund — no questions asked.' },
 { qbn: 'ডেলিভারি চার্জ কত?', qen: 'What is the delivery charge?',
   abn: '৳৫০০+ অর্ডারে ঢাকার কভারেজ এলাকায় ডেলিভারি সম্পূর্ণ ফ্রি। এর নিচে মাত্র ৳৩০।', aen: 'Free delivery on orders over ৳500 in our Dhaka coverage areas. Below that, just ৳30.' },
 { qbn: 'কীভাবে পেমেন্ট করব?', qen: 'How do I pay?',
   abn: 'ক্যাশ অন ডেলিভারি, বিকাশ, নগদ এবং কার্ড — সব মাধ্যমেই পেমেন্ট করতে পারবেন।', aen: 'Cash on delivery, bKash, Nagad and cards — all supported.' },
 { qbn: 'পণ্যের মান খারাপ হলে?', qen: 'What if product quality is bad?',
   abn: 'ডেলিভারির সময় পণ্য চেক করে নিন। মান নিয়ে অসন্তুষ্ট হলে সাথে সাথে ফেরত দিন — ১০০% টাকা ফেরত।', aen: 'Check products at delivery. If unhappy with quality, return on the spot — 100% money back.' },
];

function hrs(h) { return Date.now() + h * 3600 * 1000; }

const BLOG = [
 { slug: 'save-2000-monthly', emoji: '💰', grad: 1, cat: 'সাশ্রয়', catEn: 'Savings', mins: 4, date: '২ জুলাই ২০২৬', dateEn: 'Jul 2, 2026',
   tbn: 'গ্রুপ বাই দিয়ে মাসে ৳২,০০০ সাশ্রয়ের ৭টি উপায়', ten: '7 ways to save ৳2,000 a month with group buying',
   ebn: 'ঢাকার একটি চার সদস্যের পরিবার শুধু বাজারের ধরন বদলে মাসে দুই হাজার টাকা পর্যন্ত বাঁচাতে পারে — কীভাবে, দেখে নিন।',
   een: 'A family of four in Dhaka can save up to ৳2,000 a month just by changing how they shop.',
   bbn: `<p>বাজারের দাম বাড়ছেই, কিন্তু আপনার খরচ বাড়তে হবে এমন কোনো কথা নেই। গ্রুপ বাই ঠিকভাবে ব্যবহার করলে একটি মাঝারি পরিবারের মাসিক মুদি খরচ ১৫-২০% পর্যন্ত কমে।</p>
<h3>যেভাবে শুরু করবেন</h3>
<ul><li><b>চাল-ডাল-তেল আগে:</b> যে পণ্য প্রতি মাসেই লাগে, সেগুলোর গ্রুপে আগে যোগ দিন — এখানেই সবচেয়ে বড় ছাড়।</li>
<li><b>প্রতিবেশী মিলিয়ে কিনুন:</b> একই বিল্ডিংয়ের ৩-৪টি পরিবার মিললেই গ্রুপ পূরণ হয়ে যায়, ডেলিভারিও একসাথে।</li>
<li><b>ফ্রি ডেলিভারির সীমা পার করুন:</b> ৳৫০০-এর ওপরে অর্ডার করলে ডেলিভারি ফ্রি — ছোট ছোট অর্ডার জমিয়ে এক অর্ডারে আনুন।</li>
<li><b>সাপ্তাহিক ডিল চেক করুন:</b> প্রতি সপ্তাহে নতুন গ্রুপ ডিল আসে — অ্যাপের নোটিফিকেশন চালু রাখুন।</li></ul>
<p>হিসাবটা সহজ: সপ্তাহে ৳৫০০ সাশ্রয় মানেই মাসে ৳২,০০০। শুরু করুন আজকের যেকোনো একটি গ্রুপ ডিল দিয়ে।</p>`,
   ben: `<p>Prices keep rising, but your spending doesn't have to. Used well, group buying cuts a family's monthly grocery bill by 15–20%.</p>
<h3>How to start</h3>
<ul><li><b>Staples first:</b> join groups for rice, dal and oil — the biggest discounts live there.</li>
<li><b>Team up with neighbours:</b> 3–4 families in one building fill a group fast, and delivery arrives together.</li>
<li><b>Cross the free-delivery line:</b> orders over ৳500 ship free — combine small orders into one.</li>
<li><b>Check weekly deals:</b> new group deals drop every week — keep app notifications on.</li></ul>
<p>The math is simple: ৳500 saved a week is ৳2,000 a month. Start with any group deal today.</p>` },

 { slug: 'rice-buying-guide', emoji: '🍚', grad: 2, cat: 'গাইড', catEn: 'Guide', mins: 5, date: '২৫ জুন ২০২৬', dateEn: 'Jun 25, 2026',
   tbn: 'চাল কেনার আগে যে ৫টি জিনিস দেখবেন', ten: '5 things to check before buying rice',
   ebn: 'নাজিরশাইল না মিনিকেট? আধা সিদ্ধ না আতপ? বাজারের সবচেয়ে বড় খরচটা ঠিকভাবে করার সম্পূর্ণ গাইড।',
   een: 'Nazirshail or Miniket? Half-boiled or atap? The complete guide to your biggest grocery spend.',
   bbn: `<p>বাঙালি পরিবারের মুদি খরচের সবচেয়ে বড় অংশ চাল। অথচ অনেকেই না দেখে, না বুঝে কেনেন। এই ৫টি বিষয় খেয়াল করুন:</p>
<h3>চেকলিস্ট</h3>
<ul><li><b>দানার আকার ও ভাঙা দানা:</b> মুঠোয় নিয়ে দেখুন — ভাঙা দানা ৫%-এর বেশি হলে দাম কম হওয়া উচিত।</li>
<li><b>গন্ধ:</b> পুরনো বা গুদামের গন্ধ মানেই দীর্ঘদিনের মজুত। তাজা চালের হালকা মিষ্টি গন্ধ থাকে।</li>
<li><b>পালিশ:</b> অতিরিক্ত চকচকে চাল মানে বেশি পালিশ — পুষ্টিও কম।</li>
<li><b>সিজন:</b> বোরো মৌসুমের (মে-জুন) পরে দাম সবচেয়ে কম থাকে — তখন গ্রুপে বেশি করে কিনে রাখুন।</li>
<li><b>উৎস:</b> ShareDeal-এর চাল সরাসরি মিল থেকে আসে — মাঝের ৩-৪ হাত বাদ, তাই কেজিতে ১০-১৫ টাকা কম।</li></ul>
<p>ভালো চাল ভালো দামে কেনার সবচেয়ে সহজ উপায়? প্রতিবেশীদের সাথে মিলে সরাসরি উৎস থেকে।</p>`,
   ben: `<p>Rice is the single biggest line in a Bengali family's grocery budget — yet most of us buy it on autopilot. Check these five things:</p>
<h3>The checklist</h3>
<ul><li><b>Grain size & brokens:</b> take a handful — more than 5% broken grains should mean a lower price.</li>
<li><b>Smell:</b> a musty odour means old stock; fresh rice smells faintly sweet.</li>
<li><b>Polish:</b> extra-shiny rice is over-polished — and less nutritious.</li>
<li><b>Season:</b> prices bottom out after the Boro harvest (May–June) — stock up via group buys then.</li>
<li><b>Source:</b> ShareDeal rice comes straight from the mill — 3–4 middlemen removed, ৳10–15 less per kg.</li></ul>
<p>The easiest way to buy good rice at a good price? Straight from the source, together with your neighbours.</p>` },

 { slug: 'fresh-vegetables-tips', emoji: '🥬', grad: 3, cat: 'টিপস', catEn: 'Tips', mins: 3, date: '১৮ জুন ২০২৬', dateEn: 'Jun 18, 2026',
   tbn: 'সবজি সপ্তাহজুড়ে তাজা রাখার ৬টি কৌশল', ten: '6 tricks to keep vegetables fresh all week',
   ebn: 'সপ্তাহে একবার বাজার করেও প্রতিদিন তাজা সবজি খাওয়া সম্ভব — ফ্রিজ সাজানোর সঠিক নিয়মটা জানলেই।',
   een: 'Shop once a week and still eat fresh every day — if you organise your fridge right.',
   bbn: `<p>গ্রুপে সবজি কিনলে দাম কম, কিন্তু বেশি কিনলে নষ্ট হওয়ার ভয়? এই কৌশলগুলো মানলে সবজি ৭ দিন পর্যন্ত তাজা থাকবে:</p>
<ul><li><b>ধুয়ে নয়, মুছে রাখুন:</b> ভেজা সবজি দ্রুত পচে। রান্নার আগে ধুয়ে নিন।</li>
<li><b>কাগজে মুড়িয়ে:</b> শাক ও ধনেপাতা খবরের কাগজে মুড়িয়ে রাখলে ৫-৬ দিন সতেজ থাকে।</li>
<li><b>আলু-পেঁয়াজ ফ্রিজের বাইরে:</b> ঠান্ডায় আলুর স্বাদ বদলে যায়; অন্ধকার শুকনো জায়গাই ভালো।</li>
<li><b>টমেটো বোঁটা নিচে:</b> উল্টো করে রাখলে ধীরে পাকে।</li>
<li><b>কাঁচামরিচের বোঁটা ফেলে:</b> বোঁটা ছাড়িয়ে বায়ুরোধী বক্সে রাখুন — দুই সপ্তাহ পর্যন্ত ভালো থাকে।</li>
<li><b>ফল আলাদা:</b> কলা-আমের ইথিলিন গ্যাস পাশের সবজি দ্রুত পাকিয়ে দেয়।</li></ul>
<p>এবার নিশ্চিন্তে সাপ্তাহিক গ্রুপ অর্ডার দিন — তাজাও থাকবে, সাশ্রয়ও হবে।</p>`,
   ben: `<p>Group-buying vegetables is cheaper, but worried about waste? Follow these and they'll stay fresh up to 7 days:</p>
<ul><li><b>Wipe, don't wash:</b> moisture speeds up rot — wash just before cooking.</li>
<li><b>Wrap greens in paper:</b> spinach and coriander wrapped in newspaper last 5–6 days.</li>
<li><b>Potatoes & onions outside the fridge:</b> cold changes their taste; a dark, dry spot is best.</li>
<li><b>Tomatoes stem-down:</b> they ripen slower upside down.</li>
<li><b>De-stem green chillies:</b> in an airtight box they keep two weeks.</li>
<li><b>Keep fruit separate:</b> ethylene from bananas and mangoes ripens everything nearby.</li></ul>
<p>Now place that weekly group order with confidence — fresh and cheap.</p>` },

 { slug: 'wholesale-vs-retail', emoji: '🏷️', grad: 4, cat: 'গ্রুপ বাই', catEn: 'Group Buy', mins: 4, date: '১০ জুন ২০২৬', dateEn: 'Jun 10, 2026',
   tbn: 'পাইকারি বনাম খুচরা: আপনার টাকা কোথায় যায়?', ten: 'Wholesale vs retail: where does your money go?',
   ebn: 'এক কেজি ডাল উৎপাদক থেকে আপনার রান্নাঘরে পৌঁছাতে ৪ বার হাত বদলায় — প্রতিবার দাম বাড়ে। গ্রুপ বাই সেই হাতগুলো বাদ দেয়।',
   een: 'A kilo of dal changes hands 4 times before reaching your kitchen — the price rises each time.',
   bbn: `<p>মসুর ডাল কৃষকের কাছ থেকে বের হয় কেজিপ্রতি ৮০-৯০ টাকায়। আপনি কেনেন ১৫০ টাকায়। মাঝের ৬০-৭০ টাকা গেল কোথায়?</p>
<h3>দামের সিঁড়ি</h3>
<ul><li>কৃষক/মিল → <b>আড়তদার</b> (+১০-১৫%)</li>
<li>আড়তদার → <b>পাইকারি বাজার</b> (+১০%)</li>
<li>পাইকারি → <b>মহল্লার দোকান</b> (+১৫-২৫%)</li>
<li>দোকান → <b>আপনি</b> (দোকানের ভাড়া, কর্মচারী — সব এই দামের ভেতরে)</li></ul>
<p>গ্রুপ বাই মডেলে অনেকের অর্ডার একসাথে করে সরাসরি মিল বা আড়ত থেকে কেনা হয় — মাঝের দুই-তিনটি ধাপ পুরো বাদ। সেই সাশ্রয়টাই আপনার ৪০% পর্যন্ত ছাড়।</p>
<p>এটা কোনো ম্যাজিক নয় — শুধু সাপ্লাই চেইনের গণিত। যত বড় গ্রুপ, তত ভালো দাম।</p>`,
   ben: `<p>Moshur dal leaves the farm at ৳80–90 a kilo. You buy it at ৳150. Where did the ৳60–70 in between go?</p>
<h3>The price ladder</h3>
<ul><li>Farmer/mill → <b>aratdar</b> (+10–15%)</li>
<li>Aratdar → <b>wholesale market</b> (+10%)</li>
<li>Wholesale → <b>neighbourhood shop</b> (+15–25%)</li>
<li>Shop → <b>you</b> (rent and staff are inside this price)</li></ul>
<p>Group buying pools many orders and purchases straight from the mill — removing two or three steps entirely. That saving is your up-to-40% discount.</p>
<p>No magic — just supply-chain math. The bigger the group, the better the price.</p>` },

 { slug: 'baby-diaper-savings', emoji: '🍼', grad: 5, cat: 'সাশ্রয়', catEn: 'Savings', mins: 3, date: '১ জুন ২০২৬', dateEn: 'Jun 1, 2026',
   tbn: 'ডায়াপারের খরচ অর্ধেক করার বাস্তব উপায়', ten: 'A realistic way to halve your diaper spending',
   ebn: 'নতুন বাবা-মায়ের মাসিক বাজেটের বড় অংশ যায় ডায়াপারে। প্যাক-সাইজ আর গ্রুপ প্রাইসের হিসাবটা জানলে খরচ প্রায় অর্ধেক।',
   een: 'Diapers eat a huge share of a new parent\'s budget. Pack-size math plus group prices nearly halves it.',
   bbn: `<p>একটি শিশুর মাসে গড়ে ১২০-১৫০টি ডায়াপার লাগে। খুচরা দামে এটা মাসে ৳২,৫০০-৩,০০০। কমানোর উপায়:</p>
<ul><li><b>বড় প্যাক কিনুন:</b> ৫০ পিসের প্যাকে প্রতি পিসের দাম ৩০ পিসের প্যাকের চেয়ে ২০-২৫% কম।</li>
<li><b>গ্রুপ প্রাইসে কিনুন:</b> NeoCare ৫০ পিস খুচরা ৳১,২০০ — গ্রুপে ৳৯৩০। প্রতি প্যাকে ৳২৭০ সাশ্রয়।</li>
<li><b>সাইজ বদলের আগে হিসাব:</b> শিশু সাইজের শেষ প্রান্তে থাকলে ছোট প্যাক নিন, নাহলে অব্যবহৃত থেকে যাবে।</li>
<li><b>অন্য বাবা-মায়ের সাথে গ্রুপ করুন:</b> একই বয়সী বাচ্চার পরিবার মিলে কিনলে গ্রুপ দ্রুত পূরণ হয়।</li></ul>
<p>মাসে ২ প্যাক লাগলে শুধু গ্রুপ প্রাইসেই বছরে সাশ্রয় ৳৬,০০০+।</p>`,
   ben: `<p>A baby needs 120–150 diapers a month — ৳2,500–3,000 at retail. How to cut it:</p>
<ul><li><b>Buy bigger packs:</b> per-piece price in a 50-pack is 20–25% lower than a 30-pack.</li>
<li><b>Buy at group price:</b> NeoCare 50 pcs retails at ৳1,200 — ৳930 in a group. ৳270 saved per pack.</li>
<li><b>Mind size changes:</b> near the end of a size, buy small packs so nothing goes unused.</li>
<li><b>Group with other parents:</b> families with same-age babies fill groups fastest.</li></ul>
<p>At 2 packs a month, group pricing alone saves ৳6,000+ a year.</p>` },

 { slug: 'how-sharedeal-works', emoji: '🚚', grad: 6, cat: 'গ্রুপ বাই', catEn: 'Group Buy', mins: 4, date: '২০ মে ২০২৬', dateEn: 'May 20, 2026',
   tbn: 'অর্ডার থেকে দরজা পর্যন্ত: ShareDeal যেভাবে কাজ করে', ten: 'From order to doorstep: how ShareDeal works',
   ebn: 'গ্রুপ পূরণ হওয়ার পর কী হয়? সোর্সিং, কোয়ালিটি চেক আর ডেলিভারির পুরো গল্পটা — পর্দার পেছন থেকে।',
   een: 'What happens after your group fills? Sourcing, quality checks and delivery — from behind the scenes.',
   bbn: `<p>"গ্রুপ পূরণ হয়েছে" নোটিফিকেশনের পর আপনার অর্ডারটা কোন পথে আসে, জানেন?</p>
<h3>৪টি ধাপ</h3>
<ul><li><b>১. একত্রীকরণ (রাত ১২টা):</b> দিনের সব পূরণ হওয়া গ্রুপের অর্ডার একসাথে করা হয় — এক পণ্যের শত শত কেজি।</li>
<li><b>২. সোর্সিং (ভোর ৫টা):</b> আমাদের টিম সরাসরি কারওয়ান বাজারের আড়ত ও মিল থেকে সেরা দামে কেনে।</li>
<li><b>৩. কোয়ালিটি চেক ও প্যাকিং (সকাল ৮টা):</b> প্রতিটি লট হাতে বাছাই হয় — মান খারাপ হলে পুরো লট ফেরত যায়।</li>
<li><b>৪. ডেলিভারি (বিকেল ৩-৬টা):</b> এলাকা ধরে ধরে রুট — এক ট্রিপে এক মহল্লার সবার অর্ডার, তাই ডেলিভারি ফ্রি রাখা সম্ভব।</li></ul>
<p>ডেলিভারির সময় পণ্য দেখে নিন — পছন্দ না হলে সাথে সাথে ফেরত। ঝুঁকি পুরোটাই আমাদের।</p>`,
   ben: `<p>Ever wondered what happens after the "group complete" notification?</p>
<h3>The 4 steps</h3>
<ul><li><b>1. Consolidation (12 AM):</b> all filled groups of the day are merged — hundreds of kilos per product.</li>
<li><b>2. Sourcing (5 AM):</b> our team buys directly from Karwan Bazar arats and mills at the best rates.</li>
<li><b>3. QC & packing (8 AM):</b> every lot is hand-sorted — a bad lot goes straight back.</li>
<li><b>4. Delivery (3–6 PM):</b> area-by-area routes — one trip serves a whole neighbourhood, which is how delivery stays free.</li></ul>
<p>Check your items at the door — return instantly if unhappy. The risk is entirely ours.</p>` },
];

