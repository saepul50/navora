// =========================================================
// NAVORA — data produk terpusat (statis, tanpa database)
// Dipakai oleh index.html, shop.html, dan product.html
// =========================================================

const CATEGORIES = {
  health: {
    label: 'Health & Beauty',
    tagline: 'Perawatan Raga & Estetika',
    color: 'clay',
    subs: {
      'skincare-bath': 'Skincare & Bath',
      'body-treatment': 'Body Treatment',
      'personal-care': 'Personal Care & Wellness'
    }
  },
  home: {
    label: 'Home & Living',
    tagline: 'Griya & Gaya Hidup Lestari',
    color: 'gold',
    subs: {
      'eco-cleaning': 'Eco-Cleaning Kit',
      'aromatherapy': 'Aromatherapy & Wellness',
      'sustainable-decor': 'Sustainable Decor & Dining'
    }
  },
  food: {
    label: 'Food',
    tagline: 'Pangan Lokal & Berkelanjutan',
    color: 'green',
    subs: {
      'seduhan-nusantara': 'Seduhan Nusantara',
      'sari-alam': 'Sari Alam',
      'kudapan-sehat': 'Kudapan Sehat'
    }
  }
};

const PRODUCTS = [
  // ---------- HEALTH & BEAUTY — Skincare & Bath ----------
  {
    id: 'sari-lerak-facial-wash',
    name: 'Sari Lerak Facial Wash',
    category: 'health', sub: 'skincare-bath',
    price: 45000, unit: '100 ml',
    badge: 'Bebas Sulfat', shape: 'bottle', color: 'green',
    shortDesc: 'Pembersih wajah lembut dari ekstrak lerak, membersihkan tanpa membuat kulit kering.',
    description: 'Sari Lerak Facial Wash diformulasikan dari ekstrak buah lerak yang telah dipakai leluhur Nusantara sebagai pembersih alami selama ratusan tahun. Teksturnya lembut, berbusa halus, dan tidak meninggalkan rasa ketarik di kulit setelah dibilas — cocok untuk kulit sensitif sekalipun.',
    ingredients: ['Ekstrak Buah Lerak', 'Lidah Buaya', 'Minyak Atsiri Jeruk Nipis', 'Air Suling'],
    origin: 'Diracik di Yogyakarta dari buah lerak yang dipanen di kaki Gunung Merapi.'
  },
  {
    id: 'rembulan-rose-water',
    name: 'Rembulan Rose Water',
    category: 'health', sub: 'skincare-bath',
    price: 38000, unit: '120 ml',
    badge: 'Tanpa Alkohol', shape: 'bottle', color: 'clay',
    shortDesc: 'Toner air mawar murni hasil distilasi bunga mawar lokal, menyegarkan & melembapkan.',
    description: 'Disuling langsung dari kelopak mawar segar dengan metode uap tradisional, Rembulan Rose Water menghadirkan kesegaran alami tanpa tambahan alkohol atau pewangi sintetis. Cocok digunakan sebagai toner harian maupun penyegar wajah sepanjang hari.',
    ingredients: ['Air Mawar Murni (Rosa damascena)', 'Gliserin Nabati'],
    origin: 'Disuling oleh koperasi petani bunga di Bandungan, Jawa Tengah.'
  },
  {
    id: 'nirmala-kelapa-serum',
    name: 'Nirmala Kelapa Serum (VCO)',
    category: 'health', sub: 'skincare-bath',
    price: 72000, unit: '30 ml',
    badge: 'Cold-Pressed', shape: 'bottle', color: 'gold',
    shortDesc: 'Serum wajah dari minyak kelapa dara dingin, menutrisi dan melembapkan kulit secara mendalam.',
    description: 'Diproses dengan metode fermentasi dingin tanpa pemanasan tinggi, serum ini mempertahankan kandungan asam lemak dan antioksidan alami VCO secara utuh. Membantu menutrisi kulit kering dan menjaga kelembapan alami sepanjang hari.',
    ingredients: ['Virgin Coconut Oil', 'Vitamin E', 'Minyak Biji Anggur'],
    origin: 'Difermentasi dingin oleh kelompok perempuan tani di Karangasem, Bali.'
  },
  {
    id: 'shampoo-bar',
    name: 'Shampoo Bar',
    category: 'health', sub: 'skincare-bath',
    price: 42000, unit: '80 g',
    badge: 'Tanpa Botol Plastik', shape: 'bar', color: 'sirih',
    shortDesc: 'Sampo padat tanpa botol plastik, satu batang setara 2–3 botol sampo cair.',
    description: 'Dibuat dengan metode saponifikasi dingin, sampo batang ini membersihkan rambut secara menyeluruh tanpa residu berat. Kemasan kertas dapat didaur ulang sepenuhnya, mengurangi sampah botol plastik dari rutinitas mandi Anda.',
    ingredients: ['Minyak Kelapa Saponifikasi', 'Minyak Zaitun', 'Ekstrak Lidah Buaya', 'Minyak Esensial Lavender'],
    origin: 'Diproduksi dalam batch kecil di dapur produksi Yogyakarta.'
  },

  // ---------- HEALTH & BEAUTY — Body Treatment ----------
  {
    id: 'sekar-jagad-bedak-dingin',
    name: 'Sekar Jagad Bedak Dingin',
    category: 'health', sub: 'body-treatment',
    price: 35000, unit: '80 g',
    badge: 'Resep Leluhur', shape: 'jar', color: 'clay',
    shortDesc: 'Bedak dingin tradisional yang mendinginkan dan mencerahkan kulit wajah secara alami.',
    description: 'Resep bedak dingin ini diwariskan turun-temurun dari peracik jamu di Yogyakarta. Dibuat dari tepung beras pilihan dan bunga melati kering, memberikan sensasi sejuk di kulit sekaligus membantu mencerahkan warna kulit secara bertahap.',
    ingredients: ['Tepung Beras', 'Bunga Melati Kering', 'Air Mawar'],
    origin: 'Diracik oleh peracik jamu tradisional di Kotagede, Yogyakarta.'
  },
  {
    id: 'rempah-wangi-body-scrub',
    name: 'Rempah Wangi Body Scrub',
    category: 'health', sub: 'body-treatment',
    price: 48000, unit: '200 g',
    badge: 'Dari Ampas Kopi', shape: 'jar', color: 'gold',
    shortDesc: 'Scrub tubuh dari ampas kopi & cengkeh yang mengangkat sel kulit mati secara lembut.',
    description: 'Alih-alih dibuang, ampas kopi dari kedai mitra kami diolah ulang menjadi butiran scrub alami yang efektif mengangkat sel kulit mati. Aroma cengkeh dan kopi memberikan sensasi hangat yang menenangkan saat mandi.',
    ingredients: ['Ampas Kopi Robusta', 'Bubuk Cengkeh', 'Minyak Kelapa', 'Gula Aren'],
    origin: 'Ampas kopi dikumpulkan dari kedai kopi mitra di Yogyakarta.'
  },
  {
    id: 'masker-daun-kelor',
    name: 'Masker Organik Daun Kelor',
    category: 'health', sub: 'body-treatment',
    price: 33000, unit: '60 g',
    badge: 'Kaya Antioksidan', shape: 'pouch', color: 'sirih',
    shortDesc: 'Masker bubuk daun kelor kaya antioksidan untuk membantu meremajakan kulit wajah.',
    description: 'Daun kelor dikenal sebagai "pohon ajaib" karena kandungan nutrisinya yang tinggi. Dikeringkan dan dihaluskan menjadi bubuk masker, produk ini membantu menenangkan kulit lelah dan meremajakan tampilan wajah secara alami.',
    ingredients: ['Bubuk Daun Kelor Organik', 'Bengkoang', 'Beras'],
    origin: 'Daun kelor ditanam oleh petani mitra di lereng Gunung Merbabu.'
  },

  // ---------- HEALTH & BEAUTY — Personal Care & Wellness ----------
  {
    id: 'minyak-telon-herbal',
    name: 'Minyak Telon Herbal Lokal',
    category: 'health', sub: 'personal-care',
    price: 28000, unit: '60 ml',
    badge: 'Aman untuk Bayi', shape: 'bottle', color: 'green',
    shortDesc: 'Minyak telon hangat untuk bayi & keluarga, diracik dari rempah pilihan tanpa bahan sintetis.',
    description: 'Diformulasikan dengan perbandingan rempah yang lembut di kulit bayi namun tetap efektif menghangatkan tubuh. Cocok digunakan sehari-hari untuk pijat ringan maupun sekadar menjaga kehangatan si kecil.',
    ingredients: ['Minyak Kayu Putih', 'Minyak Adas', 'Minyak Kelapa', 'Ekstrak Jahe'],
    origin: 'Diracik oleh apoteker herbal mitra di Solo, Jawa Tengah.'
  },
  {
    id: 'minyak-kayu-putih-buru',
    name: 'Minyak Kayu Putih Murni Pulau Buru',
    category: 'health', sub: 'personal-care',
    price: 55000, unit: '100 ml',
    badge: 'Petani Mitra Adil', shape: 'bottle', color: 'clay',
    shortDesc: 'Minyak kayu putih 100% murni, disuling langsung dari daun kayu putih Pulau Buru, Maluku.',
    description: 'Disuling secara tradisional oleh penyuling di Pulau Buru menggunakan metode uap turun-temurun. Tanpa campuran minyak tanah atau pelarut lain, aroma khasnya lebih tajam dan alami dibanding minyak kayu putih pada umumnya.',
    ingredients: ['Minyak Atsiri Daun Kayu Putih (Melaleuca leucadendra) 100%'],
    origin: 'Disuling oleh kelompok penyuling tradisional di Pulau Buru, Maluku.'
  },
  {
    id: 'sikat-gigi-bambu',
    name: 'Sikat Gigi Bambu',
    category: 'health', sub: 'personal-care',
    price: 18000, unit: '1 pcs',
    badge: 'Terurai Alami', shape: 'brush', color: 'sirih',
    shortDesc: 'Sikat gigi bergagang bambu yang dapat terurai secara alami, dengan bulu sikat lembut.',
    description: 'Gagang bambu dipanen dari kebun yang dikelola lestari, tumbuh kembali jauh lebih cepat dibanding kayu keras. Bulu sikat tetap lembut di gusi namun cukup kuat membersihkan sela-sela gigi secara menyeluruh.',
    ingredients: ['Gagang Bambu', 'Bulu Nilon Lembut (Bebas BPA)'],
    origin: 'Diproduksi oleh pengrajin bambu di Magelang, Jawa Tengah.'
  },
  {
    id: 'deodorant-balm-alami',
    name: 'Deodorant Balm Alami',
    category: 'health', sub: 'personal-care',
    price: 39000, unit: '50 g',
    badge: 'Bebas Aluminium', shape: 'jar', color: 'gold',
    shortDesc: 'Deodoran balm dalam wadah jar kaca yang dapat diisi ulang, bebas aluminium dan paraben.',
    description: 'Balm lembut ini menyerap dengan cepat dan menetralkan bau badan sepanjang hari tanpa menyumbat pori-pori. Wadah kaca dapat dikembalikan ke gerai mitra kami untuk diisi ulang, mengurangi sampah kemasan sekali pakai.',
    ingredients: ['Minyak Kelapa', 'Baking Soda', 'Tepung Maizena', 'Minyak Esensial Tea Tree'],
    origin: 'Diproduksi dalam batch kecil di dapur produksi Yogyakarta.'
  },

  // ---------- HOME & LIVING — Eco-Cleaning Kit ----------
  {
    id: 'amerta-eco-antiseptic-soap',
    name: 'Amerta Eco Antiseptic Soap',
    category: 'home', sub: 'eco-cleaning',
    price: 25000, unit: '100 g',
    badge: 'Multifungsi', shape: 'bar', color: 'sirih',
    shortDesc: 'Sabun batang multifungsi antiseptik alami untuk tangan, tubuh, hingga kebutuhan rumah tangga ringan.',
    description: 'Dengan kandungan daun sirih dan cengkeh yang dikenal antiseptik alami, sabun ini fleksibel digunakan untuk mencuci tangan maupun membersihkan permukaan ringan di rumah — satu batang, banyak fungsi.',
    ingredients: ['Minyak Kelapa Saponifikasi', 'Ekstrak Daun Sirih', 'Minyak Cengkeh'],
    origin: 'Diproduksi oleh koperasi pengrajin sabun di Kalimantan Barat.'
  },
  {
    id: 'sabun-cuci-piring-lerak',
    name: 'Sabun Cuci Piring Ekstrak Lerak Cair',
    category: 'home', sub: 'eco-cleaning',
    price: 30000, unit: '500 ml',
    badge: 'Aman untuk Saluran Air', shape: 'bottle', color: 'green',
    shortDesc: 'Sabun cuci piring cair dari ekstrak buah lerak, aman terurai dan tidak mencemari saluran air.',
    description: 'Berbeda dari sabun cuci piring konvensional yang mengandung surfaktan sintetis, produk ini mengandalkan saponin alami dari buah lerak yang telah lama dipakai sebagai pembersih tradisional Nusantara — efektif namun ramah lingkungan.',
    ingredients: ['Ekstrak Lerak Cair', 'Air', 'Minyak Jeruk Nipis'],
    origin: 'Buah lerak dipanen dari kebun petani mitra di Jawa Tengah.'
  },
  {
    id: 'spons-loofah',
    name: 'Spons Loofah (Gambas Kering)',
    category: 'home', sub: 'eco-cleaning',
    price: 15000, unit: '1 pcs',
    badge: 'Bisa Dikompos', shape: 'misc', color: 'gold',
    shortDesc: 'Spons cuci piring alami dari gambas kering, dapat dikomposkan setelah masa pakainya selesai.',
    description: 'Dipanen dari tanaman gambas yang dikeringkan hingga membentuk serat alami menyerupai spons. Cukup efektif membersihkan noda membandel di peralatan dapur, dan sepenuhnya dapat terurai di tanah setelah tidak terpakai.',
    ingredients: ['Serat Gambas (Luffa) Kering 100%'],
    origin: 'Ditanam dan dikeringkan oleh petani mitra di Jawa Timur.'
  },
  {
    id: 'sikat-panci-sabut-kelapa',
    name: 'Sikat Panci Sabut Kelapa',
    category: 'home', sub: 'eco-cleaning',
    price: 20000, unit: '1 pcs',
    badge: 'Gagang Kayu Lokal', shape: 'brush', color: 'clay',
    shortDesc: 'Sikat pembersih panci dari sabut kelapa dengan gagang kayu lokal, kuat mengangkat kerak membandel.',
    description: 'Serat sabut kelapa dikenal cukup kasar untuk mengangkat kerak membandel di panci dan wajan, namun tetap aman untuk permukaan alat masak. Gagang kayu lokal membuatnya nyaman digenggam dan tahan lama.',
    ingredients: ['Sabut Kelapa', 'Gagang Kayu Lokal'],
    origin: 'Diproduksi oleh pengrajin sabut kelapa di pesisir Jawa Tengah.'
  },

  // ---------- HOME & LIVING — Aromatherapy & Wellness ----------
  {
    id: 'kala-aromatherapy-candle',
    name: 'Kala Aromatherapy Candle',
    category: 'home', sub: 'aromatherapy',
    price: 65000, unit: '120 g',
    badge: 'Wadah Batok Kelapa', shape: 'candle', color: 'gold',
    shortDesc: 'Lilin aromaterapi soy wax dalam wadah batok kelapa, membakar bersih dan tahan lama.',
    description: 'Soy wax dipilih karena membakar lebih bersih dan tahan lebih lama dibanding lilin parafin biasa. Batok kelapa sebagai wadah adalah hasil daur ulang dari limbah pengolahan kelapa, memberikan tampilan alami sekaligus mengurangi sampah.',
    ingredients: ['Soy Wax', 'Sumbu Kapas', 'Minyak Esensial Serai Wangi', 'Wadah Batok Kelapa'],
    origin: 'Dituang tangan oleh perajin lilin di Bali.'
  },
  {
    id: 'essential-oil-murni',
    name: 'Essential Oil Murni (Serai, Melati, Cendana)',
    category: 'home', sub: 'aromatherapy',
    price: 58000, unit: '15 ml',
    badge: 'Petani Mitra Adil', shape: 'bottle', color: 'sirih',
    shortDesc: 'Minyak esensial murni tersedia dalam tiga varian: serai, melati, dan cendana.',
    description: 'Setiap varian disuling langsung dari tanaman segar tanpa campuran pelarut sintetis. Cocok digunakan pada diffuser aromaterapi, dicampur minyak pijat, atau diteteskan pada air mandi untuk relaksasi sehari-hari.',
    ingredients: ['Minyak Atsiri Serai / Melati / Cendana 100% Murni'],
    origin: 'Disuling dari kebun petani mitra di Jawa Tengah, Jawa Barat, dan Sumba.'
  },
  {
    id: 'dupa-herbal',
    name: 'Dupa Herbal Penenang Pikiran',
    category: 'home', sub: 'aromatherapy',
    price: 22000, unit: '20 batang',
    badge: 'Bahan Alami', shape: 'pouch', color: 'clay',
    shortDesc: 'Dupa herbal dari rempah & bunga kering untuk menenangkan pikiran saat meditasi atau relaksasi.',
    description: 'Racikan serbuk cendana, kenanga, dan kayu manis dibentuk tanpa bahan pewangi sintetis maupun perekat kimia. Aroma yang dihasilkan lembut dan tidak menyengat, cocok untuk ruang meditasi maupun relaksasi malam hari.',
    ingredients: ['Serbuk Cendana', 'Kembang Kenanga Kering', 'Kayu Manis', 'Perekat Alami Getah Pohon'],
    origin: 'Dibuat oleh perajin dupa tradisional di Bali.'
  },

  // ---------- HOME & LIVING — Sustainable Decor & Dining ----------
  {
    id: 'alat-makan-kayu-jati',
    name: 'Alat Makan Kayu Jati Lokal',
    category: 'home', sub: 'sustainable-decor',
    price: 85000, unit: '1 set (3 pcs)',
    badge: 'Sisa Produksi', shape: 'cutlery', color: 'gold',
    shortDesc: 'Set sendok, garpu, dan sumpit dari sisa produksi kayu jati, diampelas dan dipoles halus.',
    description: 'Alih-alih dibuang sebagai limbah, potongan kayu jati sisa produksi mebel diolah kembali menjadi alat makan yang halus dan aman untuk makanan. Setiap pola serat kayu tampil unik, tidak ada dua set yang benar-benar sama.',
    ingredients: ['Kayu Jati Sisa Produksi', 'Finishing Minyak Kelapa'],
    origin: 'Diproduksi oleh pengrajin kayu di Jepara, Jawa Tengah.'
  },
  {
    id: 'tote-bag-anyaman-bambu',
    name: 'Tote Bag Anyaman Bambu / Rotan',
    category: 'home', sub: 'sustainable-decor',
    price: 95000, unit: '1 pcs',
    badge: 'Anyaman Tangan', shape: 'tote', color: 'clay',
    shortDesc: 'Tas jinjing anyaman bambu atau rotan hasil kerajinan tangan pengrajin lokal.',
    description: 'Setiap tas dianyam dengan tangan oleh pengrajin berpengalaman puluhan tahun, menghasilkan pola yang rapi namun tetap terasa organik. Cocok untuk belanja harian sebagai pengganti kantong plastik sekali pakai.',
    ingredients: ['Anyaman Bambu / Serat Rotan', 'Tali Katun'],
    origin: 'Dianyam oleh pengrajin di Tasikmalaya, Jawa Barat.'
  },
  {
    id: 'beeswax-wrap',
    name: 'Beeswax Wrap',
    category: 'home', sub: 'sustainable-decor',
    price: 48000, unit: '1 set (3 ukuran)',
    badge: 'Pengganti Plastic Wrap', shape: 'wrap', color: 'sirih',
    shortDesc: 'Kain pelapis makanan berlapis lilin lebah, pengganti plastic wrap yang bisa dicuci & dipakai ulang.',
    description: 'Lapisan lilin lebah dan resin pohon pada kain katun organik membuatnya lengket secara alami saat dibentuk dengan hangat tangan, cukup untuk membungkus makanan atau menutup mangkuk. Dapat dicuci dengan air dingin dan dipakai berulang kali.',
    ingredients: ['Kain Katun Organik', 'Lilin Lebah', 'Resin Pohon', 'Minyak Jojoba'],
    origin: 'Dibuat oleh kelompok perajin rumahan di Yogyakarta.'
  },

  // ---------- FOOD — Seduhan Nusantara ----------
  {
    id: 'kopi-lokal-fair-trade',
    name: 'Biji Kopi Lokal Fair Trade',
    category: 'food', sub: 'seduhan-nusantara',
    price: 68000, unit: '200 g',
    badge: 'Langsung dari Petani', shape: 'pouch', color: 'green',
    shortDesc: 'Biji kopi arabika/robusta pilihan, dibeli langsung dari petani mitra dengan harga adil.',
    description: 'Kami membeli kopi langsung dari kelompok tani tanpa perantara panjang, memastikan petani menerima harga yang layak di atas rata-rata pasar. Disangrai dalam batch kecil agar karakter rasa aslinya tetap terjaga.',
    ingredients: ['100% Biji Kopi Arabika / Robusta Pilihan'],
    origin: 'Ditanam oleh petani mitra di dataran tinggi Jawa Tengah dan Sumatra.'
  },
  {
    id: 'kombucha-lokal',
    name: 'Teh Kombucha Lokal Fermentasi',
    category: 'food', sub: 'seduhan-nusantara',
    price: 32000, unit: '350 ml',
    badge: 'Probiotik Alami', shape: 'bottle', color: 'gold',
    shortDesc: 'Minuman fermentasi teh probiotik segar, dibuat dalam batch kecil setiap minggu.',
    description: 'Difermentasi selama 7–10 hari menggunakan kultur SCOBY alami, menghasilkan minuman dengan probiotik hidup dan rasa asam-manis yang menyegarkan. Diproduksi dalam batch kecil untuk menjaga kualitas fermentasi.',
    ingredients: ['Teh Hijau', 'Gula Aren', 'Kultur SCOBY', 'Air Mineral'],
    origin: 'Difermentasi oleh dapur produksi kombucha lokal di Bandung.'
  },
  {
    id: 'teh-herbal-mawar-melati',
    name: 'Teh Herbal Kelopak Mawar & Melati Kering',
    category: 'food', sub: 'seduhan-nusantara',
    price: 34000, unit: '50 g',
    badge: 'Tanpa Kafein', shape: 'pouch', color: 'clay',
    shortDesc: 'Teh bunga kering yang menenangkan, cocok diseduh menjelang malam tanpa efek kafein.',
    description: 'Kelopak mawar dan bunga melati dikeringkan dengan metode alami di bawah naungan untuk mempertahankan aroma dan warnanya. Diseduh hangat, teh ini memberikan efek menenangkan yang cocok untuk menutup hari.',
    ingredients: ['Kelopak Mawar Kering', 'Bunga Melati Kering'],
    origin: 'Dikeringkan oleh petani bunga di Bandungan, Jawa Tengah.'
  },
  {
    id: 'wedang-uwuh-instan',
    name: 'Wedang Uwuh Instan Tanpa Pengawet',
    category: 'food', sub: 'seduhan-nusantara',
    price: 28000, unit: '10 sachet',
    badge: 'Tanpa Pengawet', shape: 'pouch', color: 'sirih',
    shortDesc: 'Minuman rempah hangat instan khas Yogyakarta, tanpa bahan pengawet tambahan.',
    description: 'Wedang uwuh secara harfiah berarti "minuman sampah" karena tampilan rempahnya yang beragam mengambang di air seduhan — namun rasanya justru menghangatkan tubuh. Setiap sachet berisi rempah kering asli tanpa pengawet buatan.',
    ingredients: ['Kayu Secang', 'Jahe', 'Cengkeh', 'Kayu Manis', 'Daun Pala', 'Gula Batu'],
    origin: 'Diracik oleh kelompok tani rempah di Imogiri, Yogyakarta.'
  },

  // ---------- FOOD — Sari Alam ----------
  {
    id: 'madu-hutan-murni',
    name: 'Madu Hutan Murni Tangkapan Liar',
    category: 'food', sub: 'sari-alam',
    price: 95000, unit: '350 g',
    badge: 'Tangkapan Liar', shape: 'jar', color: 'gold',
    shortDesc: 'Madu murni dari hutan tanpa campuran gula, dipanen langsung dari sarang lebah liar.',
    description: 'Dipanen oleh pemburu madu tradisional dari sarang lebah liar di hutan, tanpa proses pemanasan berlebih agar enzim alaminya tetap terjaga. Rasanya lebih kompleks dibanding madu ternak karena berasal dari nektar bunga hutan yang beragam.',
    ingredients: ['100% Madu Hutan Murni'],
    origin: 'Dipanen oleh pemburu madu tradisional di hutan Sumbawa.'
  },
  {
    id: 'gula-semut',
    name: 'Gula Semut (Gula Kelapa Organik)',
    category: 'food', sub: 'sari-alam',
    price: 30000, unit: '250 g',
    badge: 'Indeks Glikemik Rendah', shape: 'pouch', color: 'clay',
    shortDesc: 'Gula kelapa kristal organik sebagai pengganti gula pasir dengan indeks glikemik lebih rendah.',
    description: 'Dibuat dari nira kelapa organik yang dimasak dan dikristalkan tanpa bahan pemutih atau pengawet. Teksturnya seperti gula pasir namun dengan aroma karamel khas gula kelapa, cocok untuk kopi, teh, maupun memasak.',
    ingredients: ['100% Nira Kelapa Organik'],
    origin: 'Diproduksi oleh koperasi petani kelapa di Kebumen, Jawa Tengah.'
  },
  {
    id: 'minyak-kelapa-memasak',
    name: 'Minyak Kelapa Murni untuk Memasak',
    category: 'food', sub: 'sari-alam',
    price: 52000, unit: '500 ml',
    badge: 'Food Grade', shape: 'bottle', color: 'green',
    shortDesc: 'VCO food grade untuk kebutuhan memasak sehari-hari, tahan panas tinggi.',
    description: 'Diproses dengan metode fermentasi dingin dari kelapa segar pilihan, minyak ini cocok untuk menumis maupun menggoreng karena titik asapnya yang cukup tinggi, sekaligus mempertahankan rasa gurih khas kelapa asli.',
    ingredients: ['100% Kelapa Segar Pilihan'],
    origin: 'Diproduksi oleh kelompok perempuan tani di Karangasem, Bali.'
  },
  {
    id: 'selai-buah-lokal',
    name: 'Selai Buah Lokal Buatan Rumahan',
    category: 'food', sub: 'sari-alam',
    price: 36000, unit: '200 g',
    badge: 'Tanpa Pemanis Buatan', shape: 'jar', color: 'sirih',
    shortDesc: 'Selai buah musiman buatan rumahan tanpa pemanis buatan, dimasak dalam batch kecil.',
    description: 'Menggunakan buah musiman yang sedang melimpah agar tidak terbuang sia-sia, selai ini dimasak perlahan dengan gula aren dan sedikit perasan lemon sebagai pengawet alami — tanpa pemanis maupun pengawet buatan.',
    ingredients: ['Buah Segar Musiman', 'Gula Aren', 'Perasan Lemon'],
    origin: 'Dimasak oleh dapur rumahan mitra di Malang, Jawa Timur.'
  },

  // ---------- FOOD — Kudapan Sehat ----------
  {
    id: 'kripik-buah-sayur',
    name: 'Kripik Buah/Sayur Kering',
    category: 'food', sub: 'kudapan-sehat',
    price: 26000, unit: '100 g',
    badge: 'Panen Surplus', shape: 'pouch', color: 'gold',
    shortDesc: 'Camilan sehat dari hasil panen surplus petani desa yang berisiko terbuang sia-sia.',
    description: 'Saat panen melimpah, harga jual buah dan sayur segar seringkali jatuh hingga petani merugi. Kami membeli surplus panen tersebut dan mengeringkannya menjadi kripik renyah — mengurangi kerugian petani sekaligus limbah pangan.',
    ingredients: ['Buah/Sayur Segar Pilihan', 'Minyak Kelapa untuk Menggoreng'],
    origin: 'Diolah dari hasil panen surplus petani desa di Malang, Jawa Timur.'
  },
  {
    id: 'granola-lokal-mede',
    name: 'Granola Lokal dengan Kacang Mede',
    category: 'food', sub: 'kudapan-sehat',
    price: 42000, unit: '250 g',
    badge: 'Oat & Mede Lokal', shape: 'pouch', color: 'clay',
    shortDesc: 'Granola sehat dari oat lokal dan kacang mede, cocok untuk sarapan atau camilan.',
    description: 'Dipanggang perlahan dengan madu hutan sebagai pemanis alami, granola ini memadukan oat lokal, kacang mede, dan kismis untuk sarapan yang mengenyangkan tanpa tambahan gula rafinasi.',
    ingredients: ['Oat Lokal', 'Kacang Mede', 'Madu Hutan', 'Kismis', 'Minyak Kelapa'],
    origin: 'Dipanggang oleh dapur produksi lokal di Yogyakarta.'
  },
  {
    id: 'cokelat-tree-to-bar',
    name: 'Cokelat Batangan Organik Tree-to-Bar',
    category: 'food', sub: 'kudapan-sehat',
    price: 45000, unit: '70 g',
    badge: 'Tree-to-Bar', shape: 'box', color: 'sirih',
    shortDesc: 'Cokelat dari biji kakao petani lokal yang diolah langsung dari kebun hingga jadi batangan.',
    description: 'Berbeda dari cokelat massal, proses tree-to-bar berarti biji kakao diolah sendiri oleh produsen kecil mulai dari fermentasi, sangrai, hingga pencetakan — menjaga kualitas rasa sekaligus memastikan petani menerima nilai tambah yang lebih besar.',
    ingredients: ['Biji Kakao Organik Lokal', 'Gula Semut', 'Cocoa Butter'],
    origin: 'Diolah oleh produsen cokelat kecil di Tabanan, Bali.'
  }
];

// ---------- Util bersama ----------
function formatRupiah(n){
  return 'Rp ' + n.toLocaleString('id-ID');
}

function getProductById(id){
  return PRODUCTS.find(p => p.id === id) || null;
}

function getRelatedProducts(product, limit){
  limit = limit || 4;
  return PRODUCTS.filter(p => p.sub === product.sub && p.id !== product.id).slice(0, limit);
}

// ---------- Visual generator (SVG ikon per bentuk produk, tanpa foto) ----------
const SHAPE_COLORS = {
  green:  { base: '#4F7A3D', light: '#8FB570', dark: '#34532A' },
  clay:   { base: '#C1673E', light: '#DE9A73', dark: '#8F4A2C' },
  gold:   { base: '#D6A93B', light: '#E8CB84', dark: '#A67F23' },
  sirih:  { base: '#5C6F45', light: '#8CA06C', dark: '#3E4C2E' }
};

function productVisualSVG(product){
  const c = SHAPE_COLORS[product.color] || SHAPE_COLORS.green;
  const shapes = {
    bottle: `<rect x="42" y="34" width="36" height="78" rx="10" fill="${c.base}"/><rect x="50" y="16" width="20" height="20" rx="5" fill="${c.dark}"/><rect x="42" y="34" width="36" height="20" rx="8" fill="${c.light}" opacity="0.55"/>`,
    jar: `<rect x="34" y="46" width="52" height="60" rx="12" fill="${c.base}"/><rect x="38" y="30" width="44" height="20" rx="8" fill="${c.dark}"/><ellipse cx="60" cy="52" rx="26" ry="8" fill="${c.light}" opacity="0.5"/>`,
    bar: `<rect x="28" y="52" width="64" height="34" rx="10" fill="${c.base}"/><rect x="28" y="52" width="64" height="12" rx="6" fill="${c.light}" opacity="0.6"/>`,
    pouch: `<path d="M36 40h48l6 60c1 8-5 14-13 14H43c-8 0-14-6-13-14Z" fill="${c.base}"/><rect x="44" y="30" width="32" height="16" rx="4" fill="${c.dark}"/>`,
    box: `<rect x="30" y="42" width="60" height="52" rx="6" fill="${c.base}"/><rect x="30" y="42" width="60" height="14" fill="${c.dark}"/>`,
    candle: `<circle cx="60" cy="90" r="30" fill="${c.dark}"/><rect x="48" y="46" width="24" height="46" rx="4" fill="${c.base}"/><path d="M60 24c5 7 5 14 0 20-5-6-5-13 0-20Z" fill="#F2A93C"/>`,
    brush: `<rect x="52" y="30" width="16" height="60" rx="6" fill="${c.dark}"/><rect x="34" y="80" width="52" height="18" rx="8" fill="${c.base}"/>`,
    wrap: `<rect x="26" y="34" width="68" height="52" rx="4" fill="${c.base}" opacity="0.9"/><path d="M26 44c14 6 54 6 68 0" stroke="${c.dark}" stroke-width="3" fill="none"/><path d="M26 60c14 6 54 6 68 0" stroke="${c.dark}" stroke-width="3" fill="none"/>`,
    cutlery: `<rect x="34" y="24" width="7" height="72" rx="3" fill="${c.base}"/><rect x="56" y="24" width="7" height="72" rx="3" fill="${c.base}"/><rect x="78" y="24" width="7" height="72" rx="3" fill="${c.base}"/>`,
    tote: `<path d="M32 46h56l-4 52a8 8 0 0 1-8 7H44a8 8 0 0 1-8-7Z" fill="${c.base}"/><path d="M44 46v-8a16 16 0 0 1 32 0v8" stroke="${c.dark}" stroke-width="5" fill="none"/>`,
    misc: `<circle cx="60" cy="64" r="34" fill="${c.base}"/><circle cx="60" cy="64" r="34" fill="${c.light}" opacity="0.25"/>`
  };
  const body = shapes[product.shape] || shapes.misc;
  return `<svg viewBox="0 0 120 120" aria-hidden="true">${body}</svg>`;
}

// ---------- Peta Warisan Nusantara — data asal bahan ----------
const HERITAGE_DATA = {
  yogya: {
    title: 'Kunyit, Beras &amp; Bedak Dingin',
    region: 'Bantul &amp; Kotagede — Yogyakarta',
    desc: 'Diracik oleh peracik jamu tradisional turun-temurun, dari sawah tadah hujan yang dirotasi dengan padi untuk menjaga kesuburan tanah.',
    tag: 'Resep leluhur, rotasi tanam'
  },
  sunda: {
    title: 'Beras, Melati &amp; Buah Musiman',
    region: 'Ciwidey &amp; Malang — Jawa Barat/Timur',
    desc: 'Melati dipetik pagi sebelum mekar penuh; buah dan sayur surplus panen diolah menjadi kripik agar tak terbuang percuma.',
    tag: 'Panen manual, tanpa limbah pangan'
  },
  kalimantan: {
    title: 'Daun Sirih &amp; Sabun Antiseptik',
    region: 'Kapuas Hulu — Kalimantan Barat',
    desc: 'Tumbuh liar di pekarangan hutan adat Dayak, dipetik secukupnya sesuai kebutuhan produksi agar populasi tanaman tetap lestari.',
    tag: 'Dipetik sesuai kebutuhan'
  },
  bali: {
    title: 'Kelapa Dara &amp; Lilin Aromaterapi',
    region: 'Karangasem &amp; Tabanan — Bali',
    desc: 'Diproses dengan fermentasi dingin oleh kelompok perempuan tani; batok kelapa bekas diubah jadi wadah lilin aromaterapi.',
    tag: 'Fermentasi dingin, nol limbah'
  },
  sumba: {
    title: 'Cendana &amp; Madu Hutan',
    region: 'Sumba Timur — NTT',
    desc: 'Setiap pohon cendana yang ditebang diganti lima bibit baru; madu dipanen langsung dari sarang lebah liar oleh pemburu tradisional.',
    tag: '1 tebang, 5 tanam kembali'
  },
  maluku: {
    title: 'Minyak Kayu Putih Murni',
    region: 'Pulau Buru — Maluku',
    desc: 'Disuling langsung dari daun kayu putih menggunakan metode uap tradisional tanpa campuran minyak tanah atau pelarut lain.',
    tag: 'Distilasi uap tradisional'
  }
};
