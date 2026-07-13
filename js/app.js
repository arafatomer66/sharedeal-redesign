/* ShareDeal redesign — shared engine
   cart store (localStorage) · BN/EN i18n · renderers · micro-animations */

/* ============ i18n ============ */
const I18N = {
  bn: {
    topbar_pre: 'আজ', topbar_post: 'এর মধ্যে অর্ডার করলে ঢাকায় আজই ডেলিভারি',
    search_ph: 'চাল, ডাল, তেল, ডায়াপার খুঁজুন…',
    deliver_to: 'ডেলিভারি', login: 'লগইন', cart: 'কার্ট',
    nav_deals: 'গ্রুপ ডিল', nav_shop: 'সব পণ্য', nav_how: 'কীভাবে কাজ করে', nav_track: 'অর্ডার ট্র্যাকিং', nav_seller: 'সেলার হোন', nav_faq: 'জিজ্ঞাসা',
    hero_t1: 'একসাথে কিনুন,', hero_t2: 'বেশি বাঁচান', hero_lead: 'প্রতিবেশীদের সাথে গ্রুপ করে বাজার করুন — পাইকারি দামে সেরা মানের পণ্য, ফ্রি হোম ডেলিভারিতে। গ্রুপ পূরণ না হলে সম্পূর্ণ টাকা ফেরত।',
    hero_cta1: 'আজকের গ্রুপ ডিল দেখুন', hero_cta2: 'কীভাবে কাজ করে',
    stat1: 'পরিবার যুক্ত', stat2: 'এই মাসে সাশ্রয়', stat3: 'সর্বোচ্চ ছাড়',
    live_now: 'এই মুহূর্তে চলছে', join_group: 'গ্রুপে যোগ দিন',
    how_title: 'গ্রুপ বাই কীভাবে কাজ করে?', how_sub: 'মাত্র ৩টি ধাপ — ৩০ সেকেন্ডেই শুরু',
    how1t: 'ডিল বাছাই করুন', how1p: 'পছন্দের পণ্যের গ্রুপে যোগ দিন, অথবা নিজেই নতুন গ্রুপ শুরু করুন।',
    how2t: 'গ্রুপ পূরণ করুন', how2p: 'লিংক শেয়ার করুন — প্রতিবেশী, বন্ধু বা পরিবার যোগ দিলেই দাম কমে যাবে।',
    how3t: 'পাইকারি দামে পান', how3p: 'গ্রুপ পূরণ হলেই সবার অর্ডার কনফার্ম — ফ্রি ডেলিভারি আপনার দরজায়।',
    deals_title: 'আজকের গ্রুপ ডিল', deals_sub: 'গ্রুপ পূরণ হলেই সবাই পাবেন পাইকারি দাম', see_all: 'সব দেখুন',
    solo_price: 'একা কিনলে', group_price: 'গ্রুপে কিনলে',
    joined: 'জন যোগ দিয়েছেন', need_more: 'জন বাকি', full: 'গ্রুপ সম্পূর্ণ!', almost: 'আর মাত্র',
    bestseller: 'সেরা বিক্রিত পণ্য', bestseller_sub: 'ঢাকার হাজারো পরিবারের পছন্দ',
    shop_title: 'সব পণ্য', shop_sub: 'বাজারের চেয়ে কম দামে, বাসায় বসে',
    all: 'সব', add: 'যোগ করুন', added: 'কার্টে যোগ হয়েছে',
    next_day: 'পরের দিন', piece: 'পিস',
    trust_title: 'কেন ShareDeal বেছে নেবেন?',
    trust1t: '১০০% মান নিশ্চয়তা', trust1p: 'ডেলিভারিতে চেক করুন, পছন্দ না হলে সাথে সাথে ফেরত।',
    trust2t: 'ফ্রি ডেলিভারি', trust2p: '৳৫০০+ অর্ডারে ঢাকার কভারেজ এলাকায় সম্পূর্ণ ফ্রি।',
    trust3t: 'পাইকারি দাম', trust3p: 'গ্রুপ করে কিনলে ৪৭% পর্যন্ত ছাড় — সরাসরি উৎস থেকে।',
    trust4t: 'টাকা ফেরত গ্যারান্টি', trust4p: 'গ্রুপ পূরণ না হলে সম্পূর্ণ রিফান্ড, কোনো প্রশ্ন ছাড়াই।',
    tstm_title: 'গ্রাহকরা যা বলছেন', tstm_sub: 'বনশ্রী, রামপুরা ও আফতাব নগরের হাজারো পরিবার',
    saved: 'সাশ্রয়',
    faq_title: 'সাধারণ জিজ্ঞাসা',
    app_title: 'অ্যাপে আরও সহজ, আরও অফার', app_sub: 'গ্রুপের আপডেট নোটিফিকেশনে পান, এক ট্যাপে রি-অর্ডার করুন। অ্যাপ-এক্সক্লুসিভ ডিলও আছে!', app_cta: 'Google Play থেকে নামান',
    f_about: 'ShareDeal — বাংলাদেশের প্রথম গ্রুপ বাইং গ্রোসারি প্ল্যাটফর্ম। একসাথে কিনুন, পাইকারি দামে বাঁচান।',
    f_company: 'কোম্পানি', f_help: 'সহায়তা', f_coverage: 'ডেলিভারি এলাকা',
    f_about_l: 'আমাদের সম্পর্কে', f_career: 'ক্যারিয়ার', f_blog: 'ব্লগ', f_partner: 'সেলার হোন',
    f_contact: 'যোগাযোগ', f_faq: 'জিজ্ঞাসা', f_return: 'রিটার্ন নীতি', f_privacy: 'প্রাইভেসি', f_terms: 'শর্তাবলী',
    f_pay: 'পেমেন্ট মাধ্যম',
    crumb_home: 'হোম', crumb_deals: 'গ্রুপ ডিল',
    buy_solo: 'একা কিনুন', buy_group: 'গ্রুপে কিনুন', save_word: 'বাঁচান',
    per_unit: 'প্রতি ইউনিট', grp_note: 'জন হলেই কনফার্ম',
    add_cart: 'কার্টে যোগ করুন', buy_now: 'এখনই অর্ডার করুন',
    share_nudge: 'গ্রুপ দ্রুত পূরণ করতে লিংক শেয়ার করুন —', share_btn: 'লিংক কপি', copied: 'লিংক কপি হয়েছে!',
    t1: 'মান নিশ্চয়তা', t2: 'ক্যাশ অন ডেলিভারি', t3: 'সহজ রিটার্ন',
    desc_title: 'পণ্যের বিবরণ', related: 'এগুলোও দেখুন',
    cart_title: 'আপনার কার্ট', cart_empty: 'কার্ট খালি!', cart_empty_sub: 'গ্রুপ ডিল থেকে শুরু করুন — সবচেয়ে বেশি সাশ্রয় ওখানেই।', cart_empty_cta: 'গ্রুপ ডিল দেখুন',
    free_prog: 'ফ্রি ডেলিভারির জন্য আর', free_done: '🎉 অভিনন্দন! আপনি ফ্রি ডেলিভারি পাচ্ছেন', free_left: 'কিনুন',
    sum_title: 'অর্ডার সামারি', sub_total: 'সাবটোটাল', delivery: 'ডেলিভারি চার্জ', free: 'ফ্রি',
    you_save: 'আপনি বাঁচাচ্ছেন', total: 'মোট', to_checkout: 'চেকআউট করুন', promo_ph: 'প্রোমো কোড', apply: 'প্রয়োগ',
    xsell: 'সাথে এগুলোও নিতে পারেন', group_mode: 'গ্রুপ প্রাইস', solo_mode: 'একক প্রাইস', remove: 'মুছুন',
    co_title: 'চেকআউট', co_contact: 'যোগাযোগের তথ্য', co_addr: 'ডেলিভারি ঠিকানা', co_slot: 'ডেলিভারি সময়', co_pay: 'পেমেন্ট',
    f_name: 'নাম', f_phone: 'মোবাইল নম্বর', f_area: 'এলাকা', f_address: 'সম্পূর্ণ ঠিকানা', f_note: 'ডেলিভারি নোট (ঐচ্ছিক)',
    err_name: 'নাম লিখুন', err_phone: 'সঠিক ১১ ডিজিটের নম্বর দিন (01XXXXXXXXX)', err_area: 'এলাকা বাছাই করুন', err_addr: 'ঠিকানা লিখুন', err_slot: 'ডেলিভারি সময় বাছাই করুন',
    slot_today: 'আজ', slot_tmrw: 'আগামীকাল',
    pay_cod: 'ক্যাশ অন ডেলিভারি', pay_cod_s: 'পণ্য হাতে পেয়ে টাকা দিন', pay_bkash_s: 'বিকাশ নম্বর দিয়ে পে করুন', pay_nagad_s: 'নগদ অ্যাকাউন্ট দিয়ে পে করুন', pay_card: 'কার্ড', pay_card_s: 'ভিসা / মাস্টারকার্ড',
    place_order: 'অর্ডার কনফার্ম করুন', secure: 'আপনার তথ্য SSL-এ সুরক্ষিত',
    placing: 'অর্ডার হচ্ছে…',
    sc_title: 'অর্ডার কনফার্ম হয়েছে! 🎉', sc_sub: 'অর্ডার নম্বর', sc_eta: 'আনুমানিক ডেলিভারি',
    tl1: 'কনফার্মড', tl2: 'প্যাকিং', tl3: 'পথে', tl4: 'ডেলিভারড',
    rf_title: 'গ্রুপে আরও সদস্য আনুন, পরের অর্ডারে ৳৫০ ছাড় নিন!', rf_sub: 'আপনার লিংক দিয়ে কেউ প্রথম অর্ডার করলেই দুজনেই পাবেন ৳৫০ ছাড়।',
    rf_wa: 'WhatsApp-এ শেয়ার', rf_fb: 'Facebook-এ শেয়ার', rf_copy: 'লিংক কপি',
    sc_track: 'অর্ডার ট্র্যাক করুন', sc_more: 'আরও কেনাকাটা করুন',
    toast_removed: 'কার্ট থেকে মুছে ফেলা হয়েছে', toast_promo: 'প্রোমো কোড প্রয়োগ হয়েছে!', toast_badpromo: 'কোডটি সঠিক নয়',
    gm_what_t: 'গ্রুপ বাই কী?', gm_what_s: '৩০ সেকেন্ডে বুঝে নিন — তারপর ছাড় আপনার',
    gm_what_1: '<b>অনেকে মিলে কিনলে পাইকারি দাম</b> — দোকানের মতো একা নয়, পাড়া মিলে সরাসরি উৎস থেকে',
    gm_what_2: '<b>গ্রুপ পূরণ হলেই অর্ডার কনফার্ম</b> — সবাই একসাথে ডেলিভারি পাবেন',
    gm_what_3: '<b>পূরণ না হলে ১০০% টাকা ফেরত</b> — কোনো ঝুঁকি নেই, কোনো প্রশ্ন নেই',
    gm_next: 'বুঝেছি, পরের ধাপ', gm_back: 'পেছনে',
    gm_how_t: 'গ্রুপ দ্রুত পূরণ করুন', gm_how_s: 'যত দ্রুত পূরণ, তত দ্রুত ডেলিভারি',
    gm_share_hint: 'প্রতিবেশী, বন্ধু বা পরিবারকে লিংক পাঠান — তারা যোগ দিলেই সবার জন্য দাম আনলক!',
    gm_copy: 'লিংক কপি',
    gm_join_this: 'এই গ্রুপে যোগ দিন', gm_create_new: '+ নতুন গ্রুপ তৈরি করুন',
    gm_done_join: '🎉 আপনার জায়গা রিজার্ভ হয়েছে!', gm_done_create: '🎉 আপনার গ্রুপ তৈরি হয়েছে!',
    gm_done_s: 'শেষ ধাপটা অ্যাপে সম্পন্ন করুন',
    gm_app_p: 'গ্রুপের লাইভ আপডেট, পেমেন্ট আর ডেলিভারি ট্র্যাকিং — সব ShareDeal অ্যাপে। এখনই ইনস্টল করে অর্ডার কনফার্ম করুন।',
    gm_perk1: '🔔 গ্রুপ আপডেট', gm_perk2: '⚡ ১-ট্যাপ রি-অর্ডার', gm_perk3: '🎁 অ্যাপ-অনলি অফার',
    gm_get_app: 'Google Play থেকে অ্যাপ নামান',
    gm_web: 'অ্যাপ ছাড়াই ওয়েবে চালিয়ে যান →',
    gm_reserved_toast: 'গ্রুপে যোগ হয়েছে — কার্ট দেখুন',
    gm_auth_t: 'মোবাইল নম্বর দিয়ে যোগ দিন', gm_auth_s: 'কোনো পাসওয়ার্ড লাগবে না — ৩০ সেকেন্ডেই হয়ে যাবে',
    gm_auth_phone_l: 'আপনার মোবাইল নম্বর', gm_send_otp: 'OTP পাঠান',
    gm_auth_note: '🔒 নম্বরটি শুধু আপনার গ্রুপ ও অর্ডার আপডেটের জন্য ব্যবহার হবে',
    gm_otp_t: 'OTP কোডটি দিন', gm_otp_sent: 'কোড পাঠানো হয়েছে', gm_otp_hint: '(ডেমো: যেকোনো ৪ সংখ্যা দিন)',
    gm_verify: 'ভেরিফাই করে যোগ দিন', gm_change_num: 'নম্বর পরিবর্তন করুন',
    gm_welcome: 'স্বাগতম!', logged_as: 'লগইন',
    gm_app_badge: '📱 অ্যাপে',
    gm_join_done_s: 'গ্রুপ পূরণ হলেই ডেলিভারি শুরু',
    gm_join_done_p: 'আপনার স্পটটি ধরে রাখা হয়েছে। লিংক শেয়ার করে গ্রুপটি দ্রুত পূরণ করুন — পূরণ হলেই ডেলিভারি শুরু।',
    gm_finish_web: 'অর্ডার সম্পন্ন করুন',
    gm_app_bonus: 'অ্যাপে পাবেন গ্রুপের লাইভ আপডেট ও অ্যাপ-অনলি অফার',
    gm_create_gate_t: 'নতুন গ্রুপ তৈরি হয় অ্যাপে', gm_create_gate_s: 'গ্রুপ খুলুন, ম্যানেজ করুন, ইনভাইট করুন — সব এক জায়গায়',
    gm_create_gate_p: 'অ্যাপ ইনস্টল করে ৩০ সেকেন্ডেই নিজের গ্রুপ খুলুন। আপনার লিংক দিয়ে প্রতিবেশীরা সরাসরি যোগ দেবেন, আর আপনি প্রতিটি সদস্যের আপডেট নোটিফিকেশনে পাবেন।',
    gm_or_join: '← অথবা চলমান গ্রুপেই যোগ দিন',
    gm_full_t: 'গ্রুপ সম্পূর্ণ — ছাড় কনফার্মড!', gm_full_s: 'অভিনন্দন! সেরা দামটা আপনার হয়ে গেছে',
    gm_full_p: 'সবাই মিলে গ্রুপ পূরণ করে ফেলেছেন! পণ্য এখন প্যাকিং হয়ে ডেলিভারির পথে রওনা দেবে। লাইভ ট্র্যাকিং আর ডেলিভারি আপডেট পেতে অ্যাপ ইনস্টল করুন।',
    gm_full_saved: 'আপনার সাশ্রয়',
    gm_st1: 'ছাড় আনলকড', gm_st2: 'প্যাকিং হচ্ছে', gm_st3: 'ডেলিভারি শীঘ্রই',
    gm_full_track: 'অ্যাপে অর্ডার ট্র্যাক করুন',
    gm_viz_def: 'প্রতিবেশীরা মিলে একসাথে কিনলে সবাই পাইকারি দাম পান — এটাই গ্রুপ বাই',
    gm_viz_caption: 'যত বেশি প্রতিবেশী, তত কম দাম!',
    gm_viz_refund: 'গ্রুপ পূরণ না হলে ১০০% টাকা ফেরত',
        gm_unlocked: 'পাইকারি দাম আনলকড!',
    nav_blog: 'ব্লগ', blog_title: 'ShareDeal ব্লগ', blog_sub: 'বাজার, সাশ্রয় আর গ্রুপ বাই নিয়ে টিপস ও গাইড',
    blog_min: 'মিনিট', read_more: 'পড়ুন', related_posts: 'আরও পড়ুন',
    blog_cta_t: 'পড়া শেষ? এবার সাশ্রয় শুরু!', blog_cta_p: 'আজকের গ্রুপ ডিলে যোগ দিন — পাইকারি দামে বাজার করুন',
    share_label: 'শেয়ার করুন', home_blog_t: 'টিপস ও গাইড', home_blog_s: 'বাজার আর সাশ্রয়ের খুঁটিনাটি — ShareDeal ব্লগে',
    pt_title: 'আমাদের পার্টনার হোন', pt_sub: 'আপনার পণ্য গ্রুপ বাইংয়ের জন্য জমা দিন আর পৌঁছে যান হাজারো ক্রেতার কাছে। পাইকারি অর্ডারের জন্য বিশেষ দাম দিন — ব্যবসা বাড়ান।',
    pt_b1: 'হাজারো ক্রেতার কাছে পৌঁছান', pt_b2: 'এক অর্ডারেই বাল্ক বিক্রি', pt_b3: 'দ্রুত পেমেন্ট, কোনো ঝামেলা নেই',
    pt_s1: 'পণ্যের তথ্য', pt_s2: 'দাম ও স্টক', pt_s3: 'আপনার তথ্য',
    pt_pname: 'পণ্যের নাম', pt_pname_ph: 'আপনার পণ্যের নাম লিখুন', pt_err_pname: 'পণ্যের নাম লিখুন',
    pt_url: 'রেফারেন্স ইউআরএল (URL)', pt_img: 'পণ্যের ছবি', pt_img_cta: 'ছবি আপলোড করতে ক্লিক করুন', pt_img_change: 'বদলাতে আবার ক্লিক করুন',
    pt_mrp: 'বর্তমান বাজার মূল্য (৳)', pt_offer: 'অফার মূল্য (৳)', pt_err_price: 'সঠিক দাম দিন', pt_err_offer: 'অফার মূল্য বাজার মূল্যের কম হতে হবে',
    pt_stock: 'আপনার স্টকের পরিমাণ', pt_stock_ph: 'কত ইউনিট পণ্য আছে?', pt_err_stock: 'স্টকের পরিমাণ দিন',
    pt_addr: 'ঠিকানা', pt_addr_ph: 'জেলা ও পোস্টাল কোডসহ সম্পূর্ণ ঠিকানা', pt_off_live: 'ছাড়',
    pt_submit: 'পণ্য অফার জমা দিন', pt_note: 'আমাদের টিম ২৪ ঘণ্টার মধ্যে যোগাযোগ করবে',
    pt_done_t: '✅ অফার জমা হয়েছে!', pt_done_p: 'ধন্যবাদ! আমাদের সোর্সিং টিম আপনার পণ্যটি যাচাই করে ২৪ ঘণ্টার মধ্যে ফোন করবে।',
    /* --- positioning + momentum (above the fold) --- */
    hero_eyebrow: 'বাংলাদেশের ফার্ম-টু-কনজিউমার গ্রুপ বাইং গ্রোসারি প্ল্যাটফর্ম',
    hero_momentum: '৮ মাসে ইউজার গ্রোথ',
    /* --- traction --- */
    trc_eyebrow: 'ট্র্যাকশন', trc_title: 'প্রতিশ্রুতি নয়, প্রমাণ।',
    trc_sub: 'বাস্তব সংখ্যা, বাস্তব প্রবৃদ্ধি — ঢাকাজুড়ে।',
    trc_users: 'রেজিস্টার্ড ইউজার', trc_farmers: 'কৃষক পার্টনার',
    trc_ret: 'ইউজার রিটেনশন', trc_orders: 'মোট অর্ডার',
    trc_zones_v: 'সক্রিয় জোন', trc_zones_s: 'বনশ্রী · রামপুরা · আফতাবনগর · মিরপুর',
    trc_growth_l: 'ইউজার গ্রোথ', trc_growth_note: '৫,০০০ → ৭৫,০০০ ইউজার · ২০২৪–২০২৫',
    /* --- partners --- */
    prt_eyebrow: 'পার্টনারশিপ', prt_title: 'আমাদের B2B পার্টনার নেটওয়ার্ক',
    prt_sub: 'বাংলাদেশের বিশ্বস্ত প্রতিষ্ঠানের সাথে গড়ে তুলছি ফার্ম-টু-হোম নেটওয়ার্ক',
    /* --- scale / map --- */
    map_eyebrow: 'স্কেল', map_title: 'ঢাকাজুড়ে লাইভ',
    map_sub: 'বর্তমানে ৪টি জোনে ডেলিভারি করছি — আরও আসছে',
    map_live: 'লাইভ', map_soon: 'শীঘ্রই',
    map_zones_h: 'সক্রিয় ডেলিভারি জোন', map_next_h: 'পরবর্তী সম্প্রসারণ',
    /* --- farmer story --- */
    frm_eyebrow: 'কৃষকের গল্প', frm_title: 'তাদের খেত থেকে, আপনার ঘরে।',
    frm_quote: 'আগে ফড়িয়ারা দাম ঠিক করত। এখন ShareDeal-এ সরাসরি বিক্রি করি — ন্যায্য দাম পাই, আর অর্ডার আগেই জানি।',
    frm_name: 'তোতা মিয়া', frm_role: 'ক্ষুদ্র কৃষক · বগুড়া',
    frm_p1t: '৭০%', frm_p1s: 'কৃষক আগে ফড়িয়ার উপর নির্ভরশীল ছিল',
    frm_p2t: 'ন্যায্য দাম', frm_p2s: 'সরাসরি খেত থেকে, মাঝে কেউ নেই',
    frm_p3t: 'আগাম চাহিদা', frm_p3s: 'গ্রুপ অর্ডার আগেই জানা যায়',
    /* --- founders / our story --- */
    team_eyebrow: 'আমাদের গল্প', team_title: 'ShareDeal যারা গড়ছেন',
    team_sub: 'একটি ভাঙা বাজার ঠিক করার মিশনে — কৃষক পান ন্যায্য দাম, পরিবার পায় সাশ্রয়।',
    team_foysal_role: 'সিইও ও ফাউন্ডার',
    team_foysal_bio: '৮ মাসে ০ থেকে ৭৫,০০০ ইউজার। প্রাক্তন ফাউন্ডার — Yienia.com; ই-কমার্স, গ্রোথ ও ডিজিটাল মার্কেটিংয়ে ৫+ বছর।',
    team_omer_role: 'সিটিও ও কো-ফাউন্ডার',
    team_omer_bio: 'প্রাক্তন সফটওয়্যার ইঞ্জিনিয়ার — Allianz Australia; পূর্বে bdstall.com, SCT ও Retail Tech। সফটওয়্যার ইঞ্জিনিয়ারিং ও প্রোডাক্টে ৫+ বছর।',
    team_linkedin: 'LinkedIn',
    /* --- investors --- */
    inv_link: 'ইনভেস্টর', inv_eyebrow: 'ইনভেস্টর',
    inv_title: 'ফার্ম-টু-হোম কমার্সের ভবিষ্যৎ গড়ছি।',
    inv_p: '$৮.৫B গ্রোসারি মার্কেট, বছরে ১১% বৃদ্ধি। ১৪× গ্রোথ আর প্রমাণিত রেভিনিউ নিয়ে আমরা দ্রুত স্কেল করছি। পিচ ডেক ডাউনলোড করুন অথবা যোগাযোগ করুন।',
    inv_s1: 'টোটাল মার্কেট (TAM)', inv_s2: 'ইউজার গ্রোথ', inv_s3: 'রেভিনিউ জেনারেটেড',
    inv_cta_deck: 'পিচ ডেক ডাউনলোড করুন', inv_cta_call: 'কল বুক করুন',
  },
  en: {
    topbar_pre: 'Order within', topbar_post: 'for same-day delivery in Dhaka',
    search_ph: 'Search rice, dal, oil, diapers…',
    deliver_to: 'Deliver to', login: 'Login', cart: 'Cart',
    nav_deals: 'Group Deals', nav_shop: 'All Products', nav_how: 'How It Works', nav_track: 'Track Order', nav_seller: 'Become a Seller', nav_faq: 'FAQ',
    hero_t1: 'Buy together,', hero_t2: 'save more', hero_lead: 'Team up with your neighbours and shop at wholesale prices — top-quality groceries with free home delivery. Full refund if your group doesn\'t fill.',
    hero_cta1: "See today's group deals", hero_cta2: 'How it works',
    stat1: 'families joined', stat2: 'saved this month', stat3: 'max discount',
    live_now: 'LIVE right now', join_group: 'Join group',
    how_title: 'How does group buy work?', how_sub: 'Just 3 steps — start in 30 seconds',
    how1t: 'Pick a deal', how1p: 'Join an open group for a product you like, or start your own.',
    how2t: 'Fill the group', how2p: 'Share the link — when neighbours, friends or family join, the price drops.',
    how3t: 'Get wholesale price', how3p: 'When the group fills, everyone\'s order confirms — free delivery to your door.',
    deals_title: "Today's Group Deals", deals_sub: 'When the group fills, everyone gets the wholesale price', see_all: 'View all',
    solo_price: 'Solo price', group_price: 'Group price',
    joined: 'joined', need_more: 'more needed', full: 'Group full!', almost: 'Only',
    bestseller: 'Best Sellers', bestseller_sub: 'Loved by thousands of Dhaka families',
    shop_title: 'All Products', shop_sub: 'Cheaper than the bazaar, from your couch',
    all: 'All', add: 'Add', added: 'Added to cart',
    next_day: 'Next Day', piece: 'Piece',
    trust_title: 'Why choose ShareDeal?',
    trust1t: '100% quality guarantee', trust1p: 'Check at delivery; return on the spot if unhappy.',
    trust2t: 'Free delivery', trust2p: 'Completely free on ৳500+ orders in our Dhaka coverage areas.',
    trust3t: 'Wholesale prices', trust3p: 'Up to 47% off when you buy as a group — straight from the source.',
    trust4t: 'Money-back guarantee', trust4p: 'Full refund if the group doesn\'t fill. No questions asked.',
    tstm_title: 'What customers say', tstm_sub: 'Thousands of families in Banasree, Rampura & Aftab Nagar',
    saved: 'saved',
    faq_title: 'Frequently asked questions',
    app_title: 'Even easier in the app — with extra offers', app_sub: 'Get group updates as notifications, reorder in one tap, and unlock app-exclusive deals!', app_cta: 'Get it on Google Play',
    f_about: 'ShareDeal — Bangladesh\'s first group-buying grocery platform. Buy together, save at wholesale prices.',
    f_company: 'Company', f_help: 'Support', f_coverage: 'Delivery areas',
    f_about_l: 'About us', f_career: 'Career', f_blog: 'Blog', f_partner: 'Become a seller',
    f_contact: 'Contact', f_faq: 'FAQ', f_return: 'Return policy', f_privacy: 'Privacy', f_terms: 'Terms',
    f_pay: 'Payment methods',
    crumb_home: 'Home', crumb_deals: 'Group Deals',
    buy_solo: 'Buy solo', buy_group: 'Buy in group', save_word: 'Save',
    per_unit: 'per unit', grp_note: 'members confirms the deal',
    add_cart: 'Add to cart', buy_now: 'Order now',
    share_nudge: 'Share the link to fill this group faster —', share_btn: 'Copy link', copied: 'Link copied!',
    t1: 'Quality guaranteed', t2: 'Cash on delivery', t3: 'Easy returns',
    desc_title: 'Product details', related: 'You may also like',
    cart_title: 'Your Cart', cart_empty: 'Your cart is empty!', cart_empty_sub: 'Start with a group deal — that\'s where the biggest savings are.', cart_empty_cta: 'See group deals',
    free_prog: 'Add', free_done: '🎉 Congrats! You\'ve unlocked free delivery', free_left: 'more for free delivery',
    sum_title: 'Order Summary', sub_total: 'Subtotal', delivery: 'Delivery fee', free: 'FREE',
    you_save: 'You\'re saving', total: 'Total', to_checkout: 'Proceed to checkout', promo_ph: 'Promo code', apply: 'Apply',
    xsell: 'Frequently bought together', group_mode: 'Group price', solo_mode: 'Solo price', remove: 'Remove',
    co_title: 'Checkout', co_contact: 'Contact info', co_addr: 'Delivery address', co_slot: 'Delivery slot', co_pay: 'Payment',
    f_name: 'Name', f_phone: 'Mobile number', f_area: 'Area', f_address: 'Full address', f_note: 'Delivery note (optional)',
    err_name: 'Please enter your name', err_phone: 'Enter a valid 11-digit number (01XXXXXXXXX)', err_area: 'Select your area', err_addr: 'Enter your address', err_slot: 'Pick a delivery slot',
    slot_today: 'Today', slot_tmrw: 'Tomorrow',
    pay_cod: 'Cash on Delivery', pay_cod_s: 'Pay when you receive', pay_bkash_s: 'Pay with your bKash number', pay_nagad_s: 'Pay with your Nagad account', pay_card: 'Card', pay_card_s: 'Visa / Mastercard',
    place_order: 'Confirm order', secure: 'Your data is protected with SSL',
    placing: 'Placing order…',
    sc_title: 'Order confirmed! 🎉', sc_sub: 'Order number', sc_eta: 'Estimated delivery',
    tl1: 'Confirmed', tl2: 'Packing', tl3: 'On the way', tl4: 'Delivered',
    rf_title: 'Bring more members to your group — get ৳50 off your next order!', rf_sub: 'When someone places their first order via your link, you both get ৳50 off.',
    rf_wa: 'Share on WhatsApp', rf_fb: 'Share on Facebook', rf_copy: 'Copy link',
    sc_track: 'Track order', sc_more: 'Continue shopping',
    toast_removed: 'Removed from cart', toast_promo: 'Promo code applied!', toast_badpromo: 'Invalid promo code',
    gm_what_t: 'What is group buy?', gm_what_s: '30 seconds to understand — then the discount is yours',
    gm_what_1: '<b>Buying together unlocks wholesale prices</b> — your neighbourhood orders straight from the source',
    gm_what_2: '<b>Order confirms when the group fills</b> — everyone gets delivery together',
    gm_what_3: '<b>100% refund if it doesn\'t fill</b> — zero risk, no questions asked',
    gm_next: 'Got it, next step', gm_back: 'Back',
    gm_how_t: 'Fill the group faster', gm_how_s: 'The faster it fills, the faster you get delivery',
    gm_share_hint: 'Send the link to neighbours, friends or family — every join unlocks the price for everyone!',
    gm_copy: 'Copy link',
    gm_join_this: 'Join this group', gm_create_new: '+ Create a new group',
    gm_done_join: '🎉 Your spot is reserved!', gm_done_create: '🎉 Your group is created!',
    gm_done_s: 'Finish the last step in the app',
    gm_app_p: 'Live group updates, payment and delivery tracking — all in the ShareDeal app. Install now to confirm your order.',
    gm_perk1: '🔔 Group updates', gm_perk2: '⚡ 1-tap reorder', gm_perk3: '🎁 App-only offers',
    gm_get_app: 'Get the app on Google Play',
    gm_web: 'Continue on the web instead →',
    gm_reserved_toast: 'Added to your group — view cart',
    gm_auth_t: 'Join with your mobile number', gm_auth_s: 'No password needed — done in 30 seconds',
    gm_auth_phone_l: 'Your mobile number', gm_send_otp: 'Send OTP',
    gm_auth_note: '🔒 Your number is only used for group & order updates',
    gm_otp_t: 'Enter the OTP code', gm_otp_sent: 'Code sent to', gm_otp_hint: '(demo: any 4 digits work)',
    gm_verify: 'Verify & join', gm_change_num: 'Change number',
    gm_welcome: 'Welcome!', logged_as: 'Login',
    gm_app_badge: '📱 In app',
    gm_join_done_s: 'Delivery starts as soon as the group fills',
    gm_join_done_p: 'Your spot is being held. Share the link to fill the group faster — delivery starts as soon as it fills.',
    gm_finish_web: 'Complete my order',
    gm_app_bonus: 'Get live group updates & app-only offers in the app',
    gm_create_gate_t: 'New groups are created in the app', gm_create_gate_s: 'Open, manage and invite — all in one place',
    gm_create_gate_p: 'Install the app and open your own group in 30 seconds. Neighbours join straight from your link, and you get a notification for every member.',
    gm_or_join: '← Or just join the running group',
    gm_full_t: 'Group complete — discount confirmed!', gm_full_s: 'Congrats! You locked in the best price',
    gm_full_p: 'The group is full! Your product is being packed and will be on its way soon. Install the app for live tracking and delivery updates.',
    gm_full_saved: 'You saved',
    gm_st1: 'Discount unlocked', gm_st2: 'Being packed', gm_st3: 'Delivery soon',
    gm_full_track: 'Track your order in the app',
    gm_viz_def: 'When neighbours buy together, everyone gets the wholesale price — that\'s group buy',
    gm_viz_caption: 'More neighbours, lower price!',
    gm_viz_refund: '100% refund if the group doesn\'t fill',
        gm_unlocked: 'Wholesale price unlocked!',
    nav_blog: 'Blog', blog_title: 'ShareDeal Blog', blog_sub: 'Tips & guides on groceries, savings and group buying',
    blog_min: 'min', read_more: 'Read', related_posts: 'Read more',
    blog_cta_t: 'Done reading? Start saving!', blog_cta_p: 'Join today\'s group deals — shop at wholesale prices',
    share_label: 'Share', home_blog_t: 'Tips & Guides', home_blog_s: 'The ins and outs of shopping smart — on the ShareDeal blog',
    pt_title: 'Become our partner', pt_sub: 'List your products for group buying and reach thousands of buyers. Offer special bulk prices — grow your business.',
    pt_b1: 'Reach thousands of buyers', pt_b2: 'Bulk sales in one order', pt_b3: 'Fast payment, zero hassle',
    pt_s1: 'Product details', pt_s2: 'Price & stock', pt_s3: 'Your details',
    pt_pname: 'Product name', pt_pname_ph: 'Enter your product name', pt_err_pname: 'Enter the product name',
    pt_url: 'Reference URL', pt_img: 'Product photo', pt_img_cta: 'Click to upload a photo', pt_img_change: 'Click again to change',
    pt_mrp: 'Current market price (৳)', pt_offer: 'Offer price (৳)', pt_err_price: 'Enter a valid price', pt_err_offer: 'Offer must be below market price',
    pt_stock: 'Available stock', pt_stock_ph: 'How many units do you have?', pt_err_stock: 'Enter stock quantity',
    pt_addr: 'Address', pt_addr_ph: 'Full address incl. district & postal code', pt_off_live: 'OFF',
    pt_submit: 'Submit product offer', pt_note: 'Our team will contact you within 24 hours',
    pt_done_t: '✅ Offer submitted!', pt_done_p: 'Thank you! Our sourcing team will verify your product and call you within 24 hours.',
    /* --- positioning + momentum (above the fold) --- */
    hero_eyebrow: "Bangladesh's farm-to-consumer group-buying grocery platform",
    hero_momentum: 'user growth in 8 months',
    /* --- traction --- */
    trc_eyebrow: 'TRACTION', trc_title: 'Proof, not promises.',
    trc_sub: 'Real numbers, real growth — across Dhaka.',
    trc_users: 'Registered users', trc_farmers: 'Farmer partners',
    trc_ret: 'User retention', trc_orders: 'Total orders',
    trc_zones_v: 'Active zones', trc_zones_s: 'Banasree · Rampura · Aftabnagar · Mirpur',
    trc_growth_l: 'User growth', trc_growth_note: '5,000 → 75,000 users · 2024–2025',
    /* --- partners --- */
    prt_eyebrow: 'PARTNERSHIPS', prt_title: 'Our B2B partner network',
    prt_sub: 'Building the farm-to-home network with trusted Bangladeshi companies',
    /* --- scale / map --- */
    map_eyebrow: 'SCALE', map_title: 'Live across Dhaka',
    map_sub: 'Delivering in 4 zones today — more on the way',
    map_live: 'Live', map_soon: 'Soon',
    map_zones_h: 'Active delivery zones', map_next_h: 'Next expansion',
    /* --- farmer story --- */
    frm_eyebrow: 'FARMER STORY', frm_title: 'From their field, to your home.',
    frm_quote: 'Middlemen used to set my price. Now I sell direct through ShareDeal — a fair price, and I know the orders in advance.',
    frm_name: 'Tota Mia', frm_role: 'Smallholder farmer · Bogura',
    frm_p1t: '70%', frm_p1s: 'of smallholder farmers relied on middlemen',
    frm_p2t: 'Fair price', frm_p2s: 'straight from the field, no one in between',
    frm_p3t: 'Demand upfront', frm_p3s: 'group orders known in advance',
    /* --- founders / our story --- */
    team_eyebrow: 'OUR STORY', team_title: 'The people building ShareDeal',
    team_sub: 'On a mission to fix a broken market — fair prices for farmers, real savings for families.',
    team_foysal_role: 'CEO & Founder',
    team_foysal_bio: '0 → 75,000 users in 8 months. Ex-founder of Yienia.com; 5+ years in e-commerce, growth & digital marketing.',
    team_omer_role: 'CTO & Co-Founder',
    team_omer_bio: 'Former Software Engineer at Allianz Australia; earlier at bdstall.com, SCT & Retail Tech. 5+ years in software engineering & product.',
    team_linkedin: 'LinkedIn',
    /* --- investors --- */
    inv_link: 'Investors', inv_eyebrow: 'INVESTORS',
    inv_title: 'Building the future of farm-to-home commerce.',
    inv_p: 'An $8.5B grocery market growing 11% a year. With 14× growth and proven revenue, we\'re scaling fast. Download our pitch deck or reach out.',
    inv_s1: 'Total market (TAM)', inv_s2: 'User growth', inv_s3: 'Revenue generated',
    inv_cta_deck: 'Download the pitch deck', inv_cta_call: 'Book a call',
  }
};

let LANG = localStorage.getItem('sd_lang') || 'bn';
const t = k => (I18N[LANG] && I18N[LANG][k]) || I18N.bn[k] || k;
function toggleLang() {
  LANG = LANG === 'bn' ? 'en' : 'bn';
  localStorage.setItem('sd_lang', LANG);
  location.reload();
}
function applyI18n(scope = document) {
  scope.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = t(el.dataset.i18n); });
  scope.querySelectorAll('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
}

/* ============ helpers ============ */
const $ = (s, sc = document) => sc.querySelector(s);
const $$ = (s, sc = document) => [...sc.querySelectorAll(s)];
const tk = n => '৳' + Number(n).toLocaleString('en-IN');
const prodById = id => PRODUCTS.find(p => p.id === Number(id));
const dealByPid = pid => DEALS.find(d => d.productId === Number(pid));
const pctOff = (mrp, price) => Math.round((1 - price / mrp) * 100);
const AV_COLORS = ['#4cbf42', '#2f6fed', '#ff8f2e', '#9c27b0', '#e0417f', '#00a6a6'];
const AV_INITS = ['R', 'K', 'N', 'S', 'M', 'T', 'F', 'A', 'J', 'H', 'B', 'L'];

/* ============ cart store ============ */
function getCart() { try { return JSON.parse(localStorage.getItem('sd_cart')) || []; } catch { return []; } }
function saveCart(c) { localStorage.setItem('sd_cart', JSON.stringify(c)); updateCartBadge(true); }
function cartCount() { return getCart().reduce((s, i) => s + i.qty, 0); }

function linePrice(item) {
  const p = prodById(item.id); if (!p) return 0;
  const d = dealByPid(item.id);
  return (item.mode === 'group' && d) ? d.group : p.price;
}
function lineMrp(item) { const p = prodById(item.id); return p ? p.mrp : 0; }

function cartTotals() {
  const c = getCart();
  let sub = 0, mrp = 0;
  c.forEach(i => { sub += linePrice(i) * i.qty; mrp += lineMrp(i) * i.qty; });
  const FREE_AT = 500, FEE = 30;
  const delivery = (sub >= FREE_AT || sub === 0) ? 0 : FEE;
  const promo = Number(sessionStorage.getItem('sd_promo') || 0);
  return { sub, mrp, save: mrp - sub + promo, delivery, promo, total: Math.max(0, sub + delivery - promo), freeAt: FREE_AT };
}

function addToCart(id, mode = 'solo', qty = 1, fromEl = null) {
  const c = getCart();
  const hit = c.find(i => i.id === Number(id) && i.mode === mode);
  if (hit) hit.qty += qty; else c.push({ id: Number(id), mode, qty });
  saveCart(c);
  if (fromEl) flyToCart(fromEl);
  toast(`<span class="tick">✓</span> ${t('added')}`);
}
function setCartQty(id, mode, qty) {
  let c = getCart();
  const hit = c.find(i => i.id === Number(id) && i.mode === mode);
  if (!hit) return;
  hit.qty = qty;
  if (hit.qty <= 0) c = c.filter(i => i !== hit);
  saveCart(c);
}
function qtyOf(id) { return getCart().filter(i => i.id === Number(id)).reduce((s, i) => s + i.qty, 0); }

function updateCartBadge(pop = false) {
  const el = $('#cartCount'); if (!el) return;
  const n = cartCount();
  el.textContent = n;
  el.classList.toggle('show', n > 0);
  if (pop && n > 0) { el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop'); }
  renderCartBar();
}

/* sticky mini-cart bar — mobile browse pages only (body[data-cartbar]) */
function renderCartBar() {
  if (!document.body.hasAttribute('data-cartbar')) return;
  let bar = $('#cartBar');
  if (!bar) {
    bar = document.createElement('div');
    bar.id = 'cartBar'; bar.className = 'cartbar';
    bar.onclick = () => location.href = 'cart.html';
    document.body.appendChild(bar);
  }
  const n = cartCount();
  if (!n) { bar.classList.remove('on'); return; }
  const T = cartTotals();
  bar.innerHTML = `
    <span class="cb-count">🛒 ${n}</span>
    <span><span class="cb-total">${tk(T.total)}</span>
    ${T.save > 0 ? `<span class="cb-save">💰 ${t('you_save')} ${tk(T.save)}</span>` : ''}</span>
    <span class="cb-go">${t('to_checkout')} →</span>`;
  bar.classList.add('on');
}

/* fly-to-cart micro-animation */
function flyToCart(fromEl) {
  const target = $('#cartBtn'); if (!target || !fromEl) return;
  const a = fromEl.getBoundingClientRect(), b = target.getBoundingClientRect();
  const dot = document.createElement('div');
  dot.className = 'fly-dot';
  dot.style.left = (a.left + a.width / 2) + 'px';
  dot.style.top = (a.top + a.height / 2) + 'px';
  document.body.appendChild(dot);
  const dx = b.left + b.width / 2 - (a.left + a.width / 2);
  const dy = b.top + b.height / 2 - (a.top + a.height / 2);
  dot.animate([
    { transform: 'translate(0,0) scale(1)', opacity: 1 },
    { transform: `translate(${dx * .5}px, ${dy - 90}px) scale(.9)`, opacity: 1, offset: .55 },
    { transform: `translate(${dx}px, ${dy}px) scale(.3)`, opacity: .6 }
  ], { duration: 650, easing: 'cubic-bezier(.5,-0.1,.6,1)' }).onfinish = () => dot.remove();
}

/* ============ toast ============ */
function toast(html, ms = 2200) {
  let box = $('.toast-box');
  if (!box) { box = document.createElement('div'); box.className = 'toast-box'; document.body.appendChild(box); }
  const el = document.createElement('div');
  el.className = 'toast'; el.innerHTML = html;
  box.appendChild(el);
  setTimeout(() => { el.classList.add('out'); setTimeout(() => el.remove(), 320); }, ms);
}

/* ============ header / footer ============ */
function renderHeader(active = '') {
  const host = $('#site-header'); if (!host) return;
  host.innerHTML = `
  <div class="topbar"><span data-i18n="topbar_pre"></span> <span class="cutdown" id="cutdown">--:--:--</span> <span data-i18n="topbar_post"></span></div>
  <header class="header" id="hdr">
    <div class="wrap header-in">
      <a class="logo" href="index.html"><img src="https://sharedealnow.com/logo.svg" alt="ShareDeal"></a>
      <div class="search">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
        <input id="searchInput" data-i18n-ph="search_ph" autocomplete="off">
      </div>
      <button class="loc-chip">📍 <span class="loc-lbl"><span data-i18n="deliver_to"></span>&nbsp;</span><span class="loc-area">Banasree ▾</span></button>
      <div class="hdr-actions">
        <button class="lang-btn" onclick="toggleLang()">${LANG === 'bn' ? 'EN' : 'বাং'}</button>
        ${getUser()
          ? `<a class="lang-btn" id="hdrUser" href="profile.html" style="border:none;color:var(--green-700)">👤 …${getUser().phone.slice(-4)}</a>`
          : `<a class="lang-btn" id="hdrUser" href="profile.html" style="border:none" data-i18n="login"></a>`}
        <a class="cart-btn" id="cartBtn" href="cart.html">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="9" cy="21" r="1.6"/><circle cx="20" cy="21" r="1.6"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>
          <span class="cart-txt" data-i18n="cart"></span>
          <span class="cart-count" id="cartCount">0</span>
        </a>
      </div>
    </div>
    <div class="navrow"><div class="wrap navrow-in">
      <a class="navlink ${active === 'deals' ? 'active' : ''}" href="index.html#deals">🔥 <span data-i18n="nav_deals"></span></a>
      <a class="navlink ${active === 'shop' ? 'active' : ''}" href="index.html#shop" data-i18n="nav_shop"></a>
      <a class="navlink" href="index.html#how" data-i18n="nav_how"></a>
      <a class="navlink" href="#" data-i18n="nav_track"></a>
      <a class="navlink ${active === 'blog' ? 'active' : ''}" href="blog.html" data-i18n="nav_blog"></a>
      <a class="navlink ${active === 'seller' ? 'active' : ''}" href="partner.html" data-i18n="nav_seller"></a>
      <a class="navlink" href="index.html#faq" data-i18n="nav_faq"></a>
    </div></div>
  </header>`;
  applyI18n(host);
  updateCartBadge();
  // shrink + shadow on scroll
  const hdr = $('#hdr');
  addEventListener('scroll', () => hdr.classList.toggle('scrolled', scrollY > 8), { passive: true });
  // delivery-cutoff countdown (17:00 daily)
  const cd = $('#cutdown');
  if (cd) setInterval(() => {
    const now = new Date(), cut = new Date(now); cut.setHours(17, 0, 0, 0);
    if (now > cut) cut.setDate(cut.getDate() + 1);
    cd.textContent = fmtDur(cut - now);
  }, 1000);
  // search → jump to shop grid & filter
  const si = $('#searchInput');
  if (si) si.addEventListener('keydown', e => {
    if (e.key === 'Enter' && si.value.trim()) location.href = 'index.html#shop?q=' + encodeURIComponent(si.value.trim());
  });
}

function renderFooter() {
  const host = $('#site-footer'); if (!host) return;
  host.innerHTML = `
  <footer class="footer">
    <div class="wrap footer-in">
      <div>
        <img class="flogo" src="https://sharedealnow.com/logo.svg" alt="ShareDeal">
        <p data-i18n="f_about"></p>
        <div class="pay-badges"><span>bKash</span><span>Nagad</span><span>VISA</span><span>COD</span></div>
      </div>
      <div><h4 data-i18n="f_company"></h4>
        <a href="index.html#our-story" data-i18n="f_about_l"></a><a href="index.html#investors" data-i18n="inv_link"></a><a href="blog.html" data-i18n="f_blog"></a><a href="partner.html" data-i18n="f_partner"></a></div>
      <div><h4 data-i18n="f_help"></h4>
        <a href="#" data-i18n="f_contact"></a><a href="index.html#faq" data-i18n="f_faq"></a><a href="#" data-i18n="f_return"></a><a href="#" data-i18n="f_privacy"></a><a href="#" data-i18n="f_terms"></a></div>
      <div><h4 data-i18n="f_coverage"></h4>${AREAS.map(a => `<a href="#">📍 ${a}</a>`).join('')}</div>
    </div>
    <div class="wrap footer-bot"><span>© ${new Date().getFullYear()} ShareDeal · sharedealnow.com</span><span>Made with 💚 in Dhaka</span></div>
  </footer>`;
  applyI18n(host);
}

/* ============ renderers ============ */
function productCardHTML(p) {
  const off = pctOff(p.mrp, p.price);
  const d = dealByPid(p.id);
  return `
  <div class="pcard reveal" data-name="${p.name.toLowerCase()}">
    ${off > 0 ? `<span class="off">-${off}%</span>` : ''}
    <a href="product.html?id=${p.id}" class="pimg skel"><img data-src="${p.img}" alt="${p.name}"></a>
    <a href="product.html?id=${p.id}" class="pname">${p.name}</a>
    <div class="pprice"><b>${tk(p.price)}</b>${p.mrp > p.price ? `<s>${tk(p.mrp)}</s>` : ''}</div>
    <div class="pmeta"><span class="fast">⚡ ${t('next_day')}</span>${d ? `<span style="color:var(--green-700);font-weight:800">👥 ${t('group_price')} ${tk(d.group)}</span>` : ''}</div>
    <div class="addwrap" data-id="${p.id}">
      <button class="add-btn">+ ${t('add')}</button>
      <div class="qty"><button class="q-minus">−</button><b class="q-num">1</b><button class="q-plus">+</button></div>
    </div>
  </div>`;
}

function dealCardHTML(d) {
  const p = prodById(d.productId); if (!p) return '';
  const off = pctOff(d.solo, d.group);
  const left = d.need - d.joined;
  const pct = Math.min(100, Math.round(d.joined / d.need * 100));
  const avatars = Array.from({ length: Math.min(4, d.joined) }, (_, i) =>
    `<span style="background:${AV_COLORS[(d.productId + i) % AV_COLORS.length]}">${AV_INITS[(d.productId + i) % AV_INITS.length]}</span>`).join('');
  return `
  <div class="deal-card reveal">
    <span class="deal-badge">-${off}%</span>
    <span class="deal-timer" data-ends="${d.endsAt}">⏱ --:--:--</span>
    <a class="deal-img" href="product.html?id=${p.id}"><img src="${p.img}" alt="${p.name}" loading="lazy"></a>
    <a class="deal-name" href="product.html?id=${p.id}">${p.name}</a>
    <div class="deal-prices">
      <div class="pbox solo"><div class="plabel">${t('solo_price')}</div><div class="pval">${tk(d.solo)}</div></div>
      <div class="pbox grp"><div class="plabel">${t('group_price')}</div><div class="pval">${tk(d.group)}</div></div>
    </div>
    <div class="gprog">
      <div class="gprog-top">
        <span class="left" style="display:flex;align-items:center"><span class="avatars">${avatars}</span> ${d.joined}/${d.need} ${t('joined')}</span>
        <span class="right ${left <= 2 ? 'almost' : ''}">${left <= 2 ? `🔥 ${t('almost')} ${left} ${t('need_more')}` : `${left} ${t('need_more')}`}</span>
      </div>
      <div class="gbar"><i data-w="${pct}"></i></div>
    </div>
    <button class="btn btn-primary btn-sm join-btn" data-id="${p.id}">👥 ${t('join_group')} · ${tk(d.group)}</button>
  </div>`;
}

/* bind add-to-cart morphing controls inside a container */
function bindAddControls(scope = document) {
  $$('.addwrap', scope).forEach(w => {
    const id = w.dataset.id;
    const num = $('.q-num', w);
    if (!$('.add-btn', w) || !num) return; /* skip page-specific qty widgets */
    const sync = () => {
      const q = getCart().filter(i => i.id === Number(id) && i.mode === 'solo').reduce((s, i) => s + i.qty, 0);
      w.classList.toggle('on', q > 0);
      if (q > 0) num.textContent = q;
    };
    sync();
    $('.add-btn', w).addEventListener('click', e => { addToCart(id, 'solo', 1, e.currentTarget); sync(); });
    $('.q-plus', w).addEventListener('click', () => { addToCart(id, 'solo', 1); sync(); });
    $('.q-minus', w).addEventListener('click', () => {
      const q = getCart().find(i => i.id === Number(id) && i.mode === 'solo');
      if (q) setCartQty(id, 'solo', q.qty - 1);
      sync();
    });
  });
  $$('.join-btn', scope).forEach(b => b.addEventListener('click', () => openGroupWizard(b.dataset.id)));
}

/* ============ group-join wizard (educate → invite → join/create → app) ============ */
const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.selefe.selefe';
let gmState = null;

function getUser() { try { return JSON.parse(localStorage.getItem('sd_user')) || null; } catch { return null; } }

function openGroupWizard(productId) {
  const p = prodById(productId);
  const d = dealByPid(productId);
  if (!p) return;
  if (!d) { addToCart(productId, 'solo', 1); return; }
  /* auth step only appears for users who haven't verified their number yet */
  const seq = getUser() ? ['edu', 'invite', 'done'] : ['edu', 'invite', 'auth', 'done'];
  gmState = { p, d, seq, idx: 0, choice: 'join', dir: 'fwd', phone: '', authPhase: 'phone' };

  const ov = document.createElement('div');
  ov.className = 'gmodal-overlay';
  ov.id = 'gmOverlay';
  ov.innerHTML = `<div class="gmodal">
    <button class="gmodal-close" aria-label="close">✕</button>
    <div class="gm-deal">
      <img src="${p.img}" alt="${p.name}">
      <div><div class="n">${p.name}</div>
        <div class="pr"><b>${tk(d.group)}</b><s>${tk(d.solo)}</s></div></div>
      <span class="savepill">${t('save_word')} ${tk(d.solo - d.group)}</span>
    </div>
    <div class="gm-dots">${seq.map(() => '<i></i>').join('')}</div>
    <div class="gm-body" id="gmBody"></div>
  </div>`;
  document.body.appendChild(ov);
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => ov.classList.add('show'));

  ov.addEventListener('click', e => { if (e.target === ov) closeGroupWizard(); });
  $('.gmodal-close', ov).onclick = closeGroupWizard;
  document.addEventListener('keydown', gmEsc);
  renderGmStep();
}

function gmEsc(e) { if (e.key === 'Escape') closeGroupWizard(); }

function closeGroupWizard() {
  const ov = $('#gmOverlay'); if (!ov) return;
  ov.classList.remove('show');
  document.body.style.overflow = '';
  document.removeEventListener('keydown', gmEsc);
  setTimeout(() => ov.remove(), 260);
}

function gmGo(idx, dir = 'fwd') { gmState.idx = idx; gmState.dir = dir; renderGmStep(); }

function renderGmStep() {
  const { p, d, seq, idx, choice, dir } = gmState;
  const step = seq[idx];
  const body = $('#gmBody'); if (!body) return;
  $$('.gm-dots i').forEach((dot, i) => {
    dot.className = i === idx ? 'on' : (i < idx ? 'done' : '');
  });
  const stepCls = `gm-step ${dir === 'back' ? 'back' : ''}`;
  const shareUrl = `https://sharedealnow.com/product/details/${p.id}?ref=group`;
  const shareTxt = LANG === 'bn'
    ? `ShareDeal-এ "${p.name}" গ্রুপে যোগ দিন — ${tk(d.group)} (একা কিনলে ${tk(d.solo)})! ${shareUrl}`
    : `Join the "${p.name}" group on ShareDeal — ${tk(d.group)} (solo price ${tk(d.solo)})! ${shareUrl}`;

  if (step === 'edu') {
    /* animated explainer: neighbours join → price drops → wholesale unlocks (7s loop) */
    const s0 = d.solo, g0 = d.group;
    const p2 = Math.round(s0 - (s0 - g0) / 3), p3 = Math.round(s0 - 2 * (s0 - g0) / 3);
    body.innerHTML = `<div class="${stepCls}">
      <h3>${t('gm_what_t')}<small>${t('gm_viz_def')}</small></h3>
      <div class="ga-scene">
        <div class="ga-price">
          <b class="g1">${tk(s0)}</b><b class="g2">${tk(p2)}</b><b class="g3">${tk(p3)}</b><b class="g4">${tk(g0)}</b>
        </div>
        <div class="ga-avatars">
          <span class="ga-av a1">🧕</span><span class="ga-av a2">👨</span><span class="ga-av a3">👩</span><span class="ga-av a4">🧔</span><span class="ga-av a5">👵</span>
        </div>
        <div class="ga-bar"><i></i></div>
        <span class="ga-badge">🔓 ${t('gm_unlocked')}</span>
      </div>
      <p class="ga-caption">${t('gm_viz_caption')}</p>
      <div class="ga-refund">🛡️ ${t('gm_viz_refund')}</div>
      <div class="gm-cta"><button class="btn btn-primary btn-lg" id="gmNext">${t('gm_next')} →</button></div>
    </div>`;
    $('#gmNext').onclick = () => gmGo(idx + 1);

  } else if (step === 'invite') {
    const left = d.need - d.joined;
    const pct = Math.round(d.joined / d.need * 100);
    body.innerHTML = `<div class="${stepCls}">
      <h3>${t('gm_how_t')}<small>${t('gm_how_s')}</small></h3>
      <div class="pd-group-status" style="margin-bottom:14px">
        <div class="gprog" style="margin:0">
          <div class="gprog-top">
            <span class="left">${d.joined}/${d.need} ${t('joined')}</span>
            <span class="right ${left <= 2 ? 'almost' : ''}">${left <= 2 ? '🔥 ' : ''}${t('almost')} ${left} ${t('need_more')}</span>
          </div>
          <div class="gbar"><i style="width:${pct}%"></i></div>
        </div>
      </div>
      <p style="font-size:.85rem;color:var(--ink-2);text-align:center;margin-bottom:14px">${t('gm_share_hint')}</p>
      <div class="gm-share">
        <a href="https://wa.me/?text=${encodeURIComponent(shareTxt)}" target="_blank" rel="noopener"><span class="big">🟢</span>WhatsApp</a>
        <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}" target="_blank" rel="noopener"><span class="big">📘</span>Facebook</a>
        <button id="gmCopy"><span class="big">🔗</span>${t('gm_copy')}</button>
      </div>
      <div class="gm-cta">
        <button class="btn btn-primary btn-lg" id="gmJoin">👥 ${t('gm_join_this')} · ${tk(d.group)}</button>
        <button class="btn btn-ghost" id="gmCreate">${t('gm_create_new')}
          <span class="tag a" style="font-size:.68rem;padding:3px 9px">${t('gm_app_badge')}</span>
        </button>
      </div>
      <button class="gm-skiplink" id="gmBack">← ${t('gm_back')}</button>
    </div>`;
    $('#gmCopy').onclick = () => { navigator.clipboard?.writeText(shareUrl); toast(`<span class="tick">✓</span> ${t('copied')}`); };
    /* branch: join stays on web (verify first), create is app-only */
    $('#gmJoin').onclick = () => {
      gmState.choice = 'join';
      /* simulate the join: your spot fills one slot; if it was the last, the group completes */
      d.joined = Math.min(d.need, d.joined + 1);
      gmState.seq = getUser() ? ['edu', 'invite', 'done'] : ['edu', 'invite', 'auth', 'done'];
      gmRedots(); gmGo(idx + 1);
    };
    $('#gmCreate').onclick = () => {
      gmState.choice = 'create';
      gmState.seq = ['edu', 'invite', 'appgate'];
      gmRedots(); gmGo(idx + 1);
    };
    $('#gmBack').onclick = () => gmGo(idx - 1, 'back');

  } else if (step === 'auth') {
    if (gmState.authPhase === 'phone') {
      body.innerHTML = `<div class="${stepCls}">
        <h3>${t('gm_auth_t')}<small>${t('gm_auth_s')}</small></h3>
        <div class="field" id="gmPhoneField" style="margin:6px 0 14px">
          <label>${t('gm_auth_phone_l')}</label>
          <div class="gm-phone">
            <span class="pfx">🇧🇩 +88</span>
            <input id="gmPhone" inputmode="numeric" maxlength="11" placeholder="01XXXXXXXXX" value="${gmState.phone}" autocomplete="tel">
          </div>
          <span class="err">${t('err_phone')}</span>
        </div>
        <div class="gm-cta"><button class="btn btn-primary btn-lg" id="gmSendOtp">${t('gm_send_otp')} →</button></div>
        <p style="font-size:.76rem;color:var(--ink-3);text-align:center;margin-top:12px">${t('gm_auth_note')}</p>
        <button class="gm-skiplink" id="gmBack">← ${t('gm_back')}</button>
      </div>`;
      const inp = $('#gmPhone');
      inp.focus();
      const send = () => {
        if (!/^01\d{9}$/.test(inp.value.trim())) { $('#gmPhoneField').classList.add('bad'); inp.focus(); return; }
        gmState.phone = inp.value.trim();
        gmState.authPhase = 'otp';
        renderGmStep();
      };
      $('#gmSendOtp').onclick = send;
      inp.addEventListener('keydown', e => { if (e.key === 'Enter') send(); });
      $('#gmBack').onclick = () => gmGo(idx - 1, 'back');

    } else {
      body.innerHTML = `<div class="${stepCls}">
        <h3>${t('gm_otp_t')}<small>${t('gm_otp_sent')} <b>${gmState.phone}</b> ${t('gm_otp_hint')}</small></h3>
        <div class="otp-row" id="otpRow">
          <input class="otp-box" inputmode="numeric" maxlength="1">
          <input class="otp-box" inputmode="numeric" maxlength="1">
          <input class="otp-box" inputmode="numeric" maxlength="1">
          <input class="otp-box" inputmode="numeric" maxlength="1">
        </div>
        <div class="gm-cta"><button class="btn btn-primary btn-lg" id="gmVerify" disabled>✓ ${t('gm_verify')}</button></div>
        <button class="gm-skiplink" id="gmChange">${t('gm_change_num')}</button>
      </div>`;
      const boxes = $$('#otpRow .otp-box');
      const code = () => boxes.map(b => b.value).join('');
      boxes[0].focus();
      boxes.forEach((b, i) => {
        b.addEventListener('input', () => {
          b.value = b.value.replace(/\D/g, '').slice(0, 1);
          if (b.value && i < 3) boxes[i + 1].focus();
          $('#gmVerify').disabled = code().length < 4;
        });
        b.addEventListener('keydown', e => {
          if (e.key === 'Backspace' && !b.value && i > 0) boxes[i - 1].focus();
        });
      });
      $('#gmVerify').onclick = () => {
        localStorage.setItem('sd_user', JSON.stringify({ phone: gmState.phone, at: Date.now() }));
        toast(`<span class="tick">✓</span> ${t('gm_welcome')} ${gmState.phone}`);
        const lbl = $('#hdrUser'); if (lbl) lbl.textContent = '👤 …' + gmState.phone.slice(-4);
        gmGo(idx + 1);
      };
      $('#gmChange').onclick = () => { gmState.authPhase = 'phone'; gmState.dir = 'back'; renderGmStep(); };
    }

  } else if (step === 'appgate') {
    /* creating a new group is app-only */
    body.innerHTML = `<div class="${stepCls}">
      <div class="gm-app">
        <div class="phone-ic">📱</div>
        <h3 style="margin:0 0 4px">${t('gm_create_gate_t')}<small>${t('gm_create_gate_s')}</small></h3>
        <p style="font-size:.86rem;color:var(--ink-2);max-width:23rem;margin:10px auto 0">${t('gm_create_gate_p')}</p>
        <div class="perks"><span>${t('gm_perk1')}</span><span>${t('gm_perk2')}</span><span>${t('gm_perk3')}</span></div>
        <div class="gm-cta">
          <a class="btn btn-primary btn-lg" href="${PLAY_URL}" target="_blank" rel="noopener">▶ ${t('gm_get_app')}</a>
        </div>
        <button class="gm-skiplink" id="gmBackJoin">${t('gm_or_join')}</button>
      </div>
    </div>`;
    $('#gmBackJoin').onclick = () => {
      gmState.seq = ['edu', 'invite', 'appgate'];
      gmGo(1, 'back');
    };

  } else if (step === 'done' && d.joined >= d.need) {
    /* the user's join completed the group — celebrate, then push to app for tracking */
    body.innerHTML = `<div class="${stepCls}">
      <div class="gm-app">
        <div class="phone-ic">🎊</div>
        <h3 style="margin:0 0 4px">🎊 ${t('gm_full_t')}<small>${t('gm_full_s')}</small></h3>
        <div class="gprog full" style="margin:14px 0 4px">
          <div class="gprog-top">
            <span class="left">${d.need}/${d.need} ${t('joined')}</span>
            <span class="right" style="color:#a06a00">✨ ${t('full')}</span>
          </div>
          <div class="gbar"><i style="width:100%"></i></div>
        </div>
        <div class="srow save" style="border-radius:12px;margin:10px 0 4px;padding:10px 14px">
          <span>💰 ${t('gm_full_saved')}</span><b>${tk(d.solo - d.group)}</b>
        </div>
        <div class="perks" style="margin:12px 0 6px">
          <span>✅ ${t('gm_st1')}</span><span>📦 ${t('gm_st2')}</span><span>🚚 ${t('gm_st3')}</span>
        </div>
        <p style="font-size:.85rem;color:var(--ink-2);max-width:23rem;margin:6px auto 16px">${t('gm_full_p')}</p>
        <div class="gm-cta">
          <a class="btn btn-primary btn-lg" href="${PLAY_URL}" target="_blank" rel="noopener">📍 ${t('gm_full_track')}</a>
        </div>
        <p style="font-size:.74rem;color:var(--ink-3);margin-top:10px">${t('gm_app_bonus')}</p>
      </div>
    </div>`;
    gmConfetti();

  } else {
    /* join success — spot reserved; share to fill the group, app to track it */
    body.innerHTML = `<div class="${stepCls}">
      <div class="gm-app">
        <div class="phone-ic">🎉</div>
        <h3 style="margin:0 0 4px">${t('gm_done_join')}<small>${t('gm_join_done_s')}</small></h3>
        <p style="font-size:.86rem;color:var(--ink-2);max-width:22rem;margin:10px auto 16px">${t('gm_join_done_p')}</p>
        <div class="gm-share" style="margin-bottom:14px">
          <a href="https://wa.me/?text=${encodeURIComponent(shareTxt)}" target="_blank" rel="noopener"><span class="big">🟢</span>WhatsApp</a>
          <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}" target="_blank" rel="noopener"><span class="big">📘</span>Facebook</a>
          <button id="gmCopy2"><span class="big">🔗</span>${t('gm_copy')}</button>
        </div>
        <div class="gm-cta">
          <a class="btn btn-ghost" href="${PLAY_URL}" target="_blank" rel="noopener" style="font-size:.86rem">▶ ${t('gm_get_app')}</a>
        </div>
        <p style="font-size:.74rem;color:var(--ink-3);margin-top:10px">${t('gm_app_bonus')}</p>
      </div>
    </div>`;
    $('#gmCopy2').onclick = () => { navigator.clipboard?.writeText(shareUrl); toast(`<span class="tick">✓</span> ${t('copied')}`); };
  }
}

function gmRedots() {
  const dots = $('#gmOverlay .gm-dots');
  if (dots) dots.innerHTML = gmState.seq.map(() => '<i></i>').join('');
}

/* confetti burst inside the wizard (same look as the success page) */
function gmConfetti() {
  const colors = ['#4cbf42', '#ffb020', '#ff4d4f', '#2f6fed', '#9c27b0'];
  for (let i = 0; i < 55; i++) {
    const c = document.createElement('div');
    c.className = 'confetti';
    c.style.left = Math.random() * 100 + 'vw';
    c.style.background = colors[i % colors.length];
    c.style.animationDuration = (2.2 + Math.random() * 2) + 's';
    c.style.animationDelay = Math.random() * .7 + 's';
    if (i % 3 === 0) c.style.borderRadius = '50%';
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 5500);
  }
}

/* ============ micro-animation systems ============ */
function initReveals() {
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('in');
    // animate progress bars inside
    $$('.gbar > i[data-w]', e.target.parentElement ? document : e.target).forEach(bar => {
      if (bar.closest('.reveal') === e.target || e.target.contains(bar)) bar.style.width = bar.dataset.w + '%';
    });
    io.unobserve(e.target);
  }), { threshold: .12, rootMargin: '0px 0px -30px' });
  $$('.reveal').forEach((el, i) => {
    if (!el.style.getPropertyValue('--d')) el.style.setProperty('--d', (i % 6) * 0.06 + 's');
    io.observe(el);
  });
  // fallback: any bar already on screen
  setTimeout(() => $$('.gbar > i[data-w]').forEach(b => {
    if (b.getBoundingClientRect().top < innerHeight) b.style.width = b.dataset.w + '%';
  }), 600);
}

function initLazyImages(scope = document) {
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const img = e.target;
    img.src = img.dataset.src;
    img.onload = () => { img.classList.add('ld'); img.closest('.pimg')?.classList.remove('skel'); };
    io.unobserve(img);
  }), { rootMargin: '300px' });
  $$('img[data-src]', scope).forEach(i => io.observe(i));
}

function fmtDur(ms) {
  if (ms < 0) ms = 0;
  const s = Math.floor(ms / 1000);
  const h = String(Math.floor(s / 3600)).padStart(2, '0');
  const m = String(Math.floor(s % 3600 / 60)).padStart(2, '0');
  const ss = String(s % 60).padStart(2, '0');
  return `${h}:${m}:${ss}`;
}
function initCountdowns() {
  setInterval(() => $$('[data-ends]').forEach(el => {
    el.innerHTML = '⏱ ' + fmtDur(Number(el.dataset.ends) - Date.now());
  }), 1000);
}


/* auto-sliding rail: advances one card at a time, pauses on interaction */
function initAutoRail(sel, ms) {
  const rail = $(sel || '#dealRail'); if (!rail) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (rail.dataset.auto) return; /* don't double-bind on re-render */
  rail.dataset.auto = '1';
  let hover = false, cooldown = 0;
  rail.addEventListener('mouseenter', () => hover = true);
  rail.addEventListener('mouseleave', () => hover = false);
  ['pointerdown', 'touchstart', 'wheel'].forEach(ev =>
    rail.addEventListener(ev, () => cooldown = Date.now() + 6000, { passive: true }));
  window.__si ? window.__si(tick, ms || 3500) : setInterval(tick, ms || 3500);
  function tick() {
    if (hover || Date.now() < cooldown || document.hidden || !rail.isConnected) return;
    const card = rail.firstElementChild;
    if (!card) return;
    const step = card.getBoundingClientRect().width + parseFloat(getComputedStyle(rail).columnGap || 14);
    const atEnd = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 20;
    if (atEnd) rail.scrollTo({ left: 0, behavior: 'smooth' });
    else rail.scrollBy({ left: step, behavior: 'smooth' });
  }
}

/* animated number count-up — animates from `from`×target (0..1) up to target.
   Callers pass from>0 so the odometer never shows a zero/blank moment. */
function countUp(el, target, prefix = '', suffix = '', dur = 1400, from = 0) {
  const base = target * Math.max(0, Math.min(1, from));
  const start = performance.now();
  const step = now => {
    const k = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - k, 3);
    el.textContent = prefix + Math.round(base + (target - base) * eased).toLocaleString('en-IN') + suffix;
    if (k < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* Wire every [data-count]: show the REAL number immediately (never 0/blank).
   Above-the-fold counters render final at once; below-the-fold ones odometer
   up from 60% as they scroll into view — so a zero is never seen anywhere. */
function initCounters(scope = document) {
  $$('[data-count]', scope).forEach(el => {
    if (el.dataset.counted) return;
    el.dataset.counted = '1';
    const target = Number(el.dataset.count);
    const pfx = el.dataset.prefix || '', sfx = el.dataset.suffix || '';
    const fmt = v => pfx + Math.round(v).toLocaleString('en-IN') + sfx;
    const visible = el.getBoundingClientRect().top < innerHeight;
    if (visible || matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.textContent = fmt(target);          // real number, immediately
    } else {
      el.textContent = fmt(target * 0.6);     // pre-paint a real (non-zero) value
      const io = new IntersectionObserver(es => es.forEach(e => {
        if (!e.isIntersecting) return;
        countUp(el, target, pfx, sfx, 1100, 0.6);
        io.disconnect();
      }), { threshold: .35 });
      io.observe(el);
    }
  });
}

/* ============ boot ============ */
function bootCommon(activeNav = '') {
  renderHeader(activeNav);
  renderFooter();
  applyI18n();
  document.documentElement.lang = LANG;
}
