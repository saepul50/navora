// data-dummy.js

const dataProducts = [
  // =========================================================================
  // 1. KATEGORI: HEALTH & BEAUTY
  // =========================================================================
  {
    id: "hb-01",
    kategori: "Health & Beauty",
    subKategori: "Skincare & Bath",
    nama: "Sabun Cuci Muka Sari Lerak",
    price: 45000,
    images: [ "../assets/foto-produk/facewash-lerak.png" ],
    deskripsi: "Pembersih wajah ini memanfaatkan ekstraksi buah lerak (Sapindus rarak) liar sebagai bahan pembersih alami pengganti deterjen kimia. Kandungan zat saponin alami yang pekat dari buah lerak berkhasiat melarutkan debu, minyak, dan polusi pada pori-pori wajah tanpa merusak lapisan pelindung kulit, sehingga kulit tetap lembap setelah dibilas. Sisa bilasan sabun ini bersifat organik sehingga dapat terurai dengan cepat di alam tanpa meracuni ekosistem sungai.",
    komposisi: "Ekstrak buah lerak (Sapindus rarak) liar, air murni, dan essential oil melati."
  },
  {
    id: "hb-02",
    kategori: "Health & Beauty",
    subKategori: "Skincare & Bath",
    nama: "Air Mawar Murni",
    price: 25000,
    images: [ "../assets/foto-produk/rose-water.png" ],
    deskripsi: "Penyegar wajah ini dibuat dari hasil distilasi uap kelopak mawar merah lokal yang dipadukan dengan konsentrat daun teh hijau (Camellia sinensis) dari perkebunan domestik. Air mawar murni berkhasiat menenangkan kulit yang mengalami kemerahan akibat iritasi ringan sekaligus mengembalikan hidrasi alami wajah. Tambahan zat antioksidan tinggi dari teh hijau berfungsi menangkal radikal bebas dan menjaga elastisitas kulit agar tetap kenyal sepanjang hari.",
    komposisi: "Hasil distilasi uap kelopak mawar (Rosa damascena) lokal, dan ekstrak daun teh hijau (Camellia sinensis)."
  },
  {
    id: "hb-03",
    kategori: "Health & Beauty",
    subKategori: "Skincare & Bath",
    nama: "Serum Kelapa Alami",
    price: 78500,
    images: [ "../assets/foto-produk/coconut-serum.png" ],
    deskripsi: "Serum wajah ini berbasis Virgin Coconut Oil (VCO) yang diproses menggunakan metode ekstraksi dingin tanpa pemanasan untuk menjaga kemurnian nutrisinya, lalu dikombinasikan dengan minyak esensial kenanga (Cananga odorata). Asam laurat dan vitamin E yang melimpah pada kelapa murni berkhasiat masuk ke lapisan kulit terdalam untuk menghaluskan tekstur kasar dan mengunci kelembapan tanpa menyumbat pori-pori. Aroma alami dari sulingan bunga kenanga memberikan efek relaksasi yang menenangkan sistem saraf kulit yang stres.",
    komposisi: "Virgin Coconut Oil (VCO) ekstraksi dingin, dan minyak esensial bunga kenanga (Cananga odorata)."
  },
  {
    id: "hb-04",
    kategori: "Health & Beauty",
    subKategori: "Skincare & Bath",
    nama: "Sabun Sampo Lerak 2-in-1",
    price: 55000,
    images: [ "../assets/foto-produk/sabun-sampo-lerak.png" ],
    deskripsi: "Produk pembersih serbaguna untuk rambut dan seluruh tubuh ini memadukan konsentrat buah lerak liar dengan ekstrak lidah buaya murni serta minyak kelapa dasar. Busa lembut yang dihasilkan dari zat saponin alami buah lerak berkhasiat melarutkan kotoran, keringat, dan minyak berlebih tanpa mengikis kelembapan alami kulit maupun kulit kepala. Didukung oleh nutrisi lidah buaya yang memperkuat akar rambut dan minyak kelapa yang menjaga kelembutan kulit, produk multifungsi ini menjadi solusi mandi praktis yang aman bagi kelestarian air bilasan dan memangkas penggunaan banyak botol plastik di kamar mandi.",
    komposisi: "Konsentrat buah lerak (Sapindus rarak) liar, ekstrak lidah buaya murni (Aloe vera), dan minyak kelapa (Cocos nucifera) dasar."
  },
  {
    id: "hb-05",
    kategori: "Health & Beauty",
    subKategori: "Skincare & Bath",
    nama: "Masker Wajah Kelor",
    price: 35000,
    images: [ "../assets/foto-produk/masker-kelor.png" ],
    deskripsi: "Masker bubuk ini terbuat dari 100% daun kelor (Moringa oleifera) murni yang dikeringkan secara perlahan di dalam ruangan steril guna mempertahankan kualitas nutrisinya. Daun kelor memiliki kadar antioksidan, vitamin C, dan flavonoid yang sangat tinggi, yang berkhasiat mempercepat penyembuhan jerawat, mengontrol produksi sebum, dan mendetoksifikasi racun kimia akibat sisa kosmetik harian. Penggunaan secara rutin mampu menutrisi kulit yang lelah akibat paparan asap dan debu kendaraan.",
    komposisi: "100% bubuk daun kelor (Moringa oleifera) murni tanpa bahan tambahan."
  },
  {
    id: "hb-06",
    kategori: "Health & Beauty",
    subKategori: "Skincare & Bath",
    nama: "Sabun Antiseptik Herbal",
    price: 30000,
    images: [ "../assets/foto-produk/sabun-antiseptik.png" ],
    deskripsi: "Sabun batang multifungsi ini dibuat dari saponifikasi minyak kelapa murni yang dikombinasikan dengan konsentrat daun sirih (Piper betle) pekat. Senyawa kavikol and kavibetol yang terkandung dalam daun sirih memberikan daya antiseptik alami yang kuat untuk membunuh kuman, jamur, dan bakteri pada kulit atau permukaan benda. Penggunaan sabun ini tidak menyisakan residu zat kimia berbahaya seperti triclosan, sehingga menjaga kelembapan tangan dan aman bagi kelestarian air bawah tanah.",
    komposisi: "Hasil saponifikasi minyak kelapa (Cocos nucifera), air murni, dan konsentrat ekstrak daun sirih (Piper betle)."
  },
  {
    id: "hb-07",
    kategori: "Health & Beauty",
    subKategori: "Body Treatment",
    nama: "Bedak Dingin Tradisional",
    price: 12000,
    images: [ "../assets/foto-produk/bedak-dingin.png" ],
    deskripsi: "Masker butiran tradisional ini diracik dari fermentasi tepung beras organik hasil rendaman berminggu-minggu yang dicampur dengan ekstraksi bengkoang segar serta perasan jeruk nipis. Kandungan vitamin B kompleks dan asam amino pada tepung beras berkhasiat mempercepat regenerasi sel kulit mati dan meratakan warna kulit yang belang. Didukung oleh sari pati bengkoang, masker ini memberikan efek dingin instan yang efektif meredakan sensasi perih pada kulit wajah setelah terpapar terik matahari.",
    komposisi: "Tepung beras (Oryza sativa) organik terfermentasi, ekstraksi bengkoang (Pachyrhizus erosus) segar, dan perasan jeruk nipis (Citrus aurantiifolia)."
  },
  {
    id: "hb-08",
    kategori: "Health & Beauty",
    subKategori: "Body Treatment",
    nama: "Lulur Mandi Kopi",
    price: 40000,
    images: [ "../assets/foto-produk/lulur-mandi-kopi.png" ],
    deskripsi: "Lulur tubuh ini menerapkan prinsip daur ulang dengan memanfaatkan ampas kopi kering sisa proses seduh kedai lokal, yang dipadukan dengan bubuk cengkeh, kayu manis, dan minyak zaitun. Butiran mikro dari ampas kopi berfungsi sebagai eksfoliator fisik yang aman untuk merontokkan sel kulit mati dan menghaluskan permukaan kulit yang bersisik. Kandungan senyawa eugenol dari cengkeh dan kayu manis memberikan rasa hangat saat digosok, yang berkhasiat melancarkan sirkulasi darah di bawah kulit serta membantu menyamarkan tampilan selulit.",
    komposisi: "Ampas kopi (Coffea) kering daur ulang (upcycled), bubuk cengkeh (Syzygium aromaticum), bubuk kayu manis (Cinnamomum verum), dan minyak zaitun (Olea europaea)."
  },
  {
    id: "hb-09",
    kategori: "Health & Beauty",
    subKategori: "Personal Care & Wellness",
    nama: "Minyak Telon Bayi Alami",
    price: 28000,
    images: [ "../assets/foto-produk/minyak-telon.png" ],
    deskripsi: "Minyak penghangat ini diracik dari perpaduan minyak adas murni (fennel oil), minyak kayu putih murni, dan minyak kelapa sebagai basis pelarutnya. Senyawa aktif dalam minyak adas dan kayu putih berkhasiat memberikan kehangatan yang stabil pada permukaan kulit, meredakan gejala perut kembung, serta melemaskan otot-otot yang kaku. Selain itu, aroma alami yang keluar dari kombinasi minyak atsiri ini bekerja efektif sebagai penolak nyamuk alami.",
    komposisi: "Minyak adas murni (Foeniculum vulgare), minyak kayu putih murni, dan minyak kelapa murni (Cocos nucifera)."
  },
  {
    id: "hb-10",
    kategori: "Health & Beauty",
    subKategori: "Personal Care & Wellness",
    nama: "Minyak Kayu Putih Murni",
    price: 22000,
    images: [ "../assets/foto-produk/minyak-kayuh-putih.png" ],
    deskripsi: "Minyak ini terbuat dari 100% minyak atsiri murni hasil distilasi daun pohon kayu putih (Melaleuca leucadendra) yang tumbuh subur di daratan Pulau Buru, Maluku. Karakteristik minyak kayu putih dari wilayah ini memiliki kadar cineole yang sangat tinggi, sehingga menghasilkan rasa hangat yang kuat dan meresap lama ke dalam tubuh. Khasiat utamanya adalah melegakan saluran pernapasan saat tersumbat flu, mengurangi gejala masuk angin, dan meredakan rasa gatal akibat gigitan serangga.",
    komposisi: "100% minyak atsiri murni daun kayu putih (Melaleuca leucadendra) Pulau Buru."
  },
  {
    id: "hb-11",
    kategori: "Health & Beauty",
    subKategori: "Personal Care & Wellness",
    nama: "Deodorant Alami",
    price: 18000,
    images: [ "../assets/foto-produk/deodorant.png" ],
    deskripsi: "Deodoran padat ini diformulasikan dari campuran tepung garut (arrowroot powder), baking soda, shea butter, dan minyak atsiri tea tree. Tepung garut berkhasiat menyerap kelembapan dan keringat berlebih pada area ketiak secara lembut tanpa memicu iritasi. Didukung oleh sifat antibakteri alami dari minyak tea tree, produk ini ampuh membasmi kuman penyebab bau badan tanpa menyumbat kelenjar keringat atau meninggalkan noda kuning pada pakaian.",
    komposisi: "Tepung garut (Maranta arundinacea), baking soda, shea butter, dan minyak atsiri tea tree (Melaleuca alternifolia)."
  },

  // =========================================================================
  // 2. KATEGORI: HOME & LIVING
  // =========================================================================
  {
    id: "hl-01",
    kategori: "Home & Living",
    subKategori: "Eco-Cleaning Kit",
    nama: "Spons Loofah Alami",
    price: 15000,
    images: [ "../assets/foto-produk/spons-loofah.png" ],
    deskripsi: "Alat penggosok ini terbentuk dari 100% serat kering buah oyong atau gambas (Luffa cylindrica) yang dibiarkan menua di pohon secara alami. Jalinan serat loofah yang rapat memiliki kekuatan gosok yang tinggi untuk merontokkan sisa makanan dan noda pada piring atau wajan tanpa menggores lapisan permukaannya. Karena murni berbahan selulosa tumbuhan, spons ini tidak melepaskan partikel mikroplastik saat bergesekan dengan air dan dapat dibuang langsung ke komposter rumahan.",
    komposisi: "100% serat buah oyong/gambas (Luffa cylindrica) kering alami."
  },
  {
    id: "hl-02",
    kategori: "Home & Living",
    subKategori: "Eco-Cleaning Kit",
    nama: "Sikat Gigi Bambu",
    price: 8500,
    images: [ "../assets/foto-produk/sikat-gigi.png" ],
    deskripsi: "Alat pembersih mulut ini dibuat dengan memanfaatkan kayu bambu moso alami sebagai gagang utamanya dan nilon bebas BPA sebagai bulu sikatnya. Kayu bambu moso memiliki agen antimikroba alami yang membuat gagang sikat tahan terhadap pertumbuhan jamur meskipun sering diletakkan di area kamar mandi yang lembap. Bulu sikatnya yang lembut berkhasiat membersihkan sisa makanan di sela-sela gigi dengan optimal tanpa melukai gusi. Gagang bambu ini dapat terurai sempurna di dalam tanah saat masa pakainya habis.",
    komposisi: "Gagang kayu bambu moso alami, dan bulu sikat nilon bebas BPA."
  },
  {
    id: "hl-03",
    kategori: "Home & Living",
    subKategori: "Eco-Cleaning Kit",
    nama: "Sabun Cuci Piring Alami",
    price: 9000,
    images: [ "../assets/foto-produk/sabun-cuci-piring.png" ],
    deskripsi: "Cairan pembersih ini diracik dari rebusan buah lerak tradisional yang diperkaya dengan ekstraksi kulit jeruk nipis dan garam laut sebagai pengawet alami. Kandungan zat asam dari jeruk nipis bekerja cepat memutus ikatan lemak membandel dan menghilangkan bau amis pada peralatan makan. Busa alami dari buah lerak berkhasiat mengangkat kotoran secara total tanpa meninggalkan zat racun, sehingga air sisa cucian piring aman dialirkan langsung ke tanah atau digunakan kembali untuk menyiram tanaman.",
    komposisi: "Air rebusan buah lerak (Sapindus rarak), ekstraksi kulit jeruk nipis (Citrus aurantiifolia), dan garam laut alami (sea salt)."
  },
  {
    id: "hl-04",
    kategori: "Home & Living",
    subKategori: "Eco-Cleaning Kit",
    nama: "Sikat Sabut Kelapa",
    price: 11000,
    images: [ "../assets/foto-produk/sikat-sabut-kelapa.png" ],
    deskripsi: "Sikat pembersih berat ini dibuat dengan menjalin serat sabut kelapa tua pilihan pada poros kawat baja antikarat. Struktur serat sabut kelapa yang kasar, kaku, dan tebal berkhasiat mengikis kerak gosong, noda minyak yang membeku, dan kotoran pekat di bagian pantat panci atau panggangan dengan efektif. Alat ini menjadi solusi pembersih yang kokoh, berumur panjang, dan tidak menyisakan limbah plastik kecil yang merusak lingkungan.",
    komposisi: "Serat sabut kelapa (Cocos nucifera) tua pilihan, jalinan poros kawat baja antikarat, dan gagang kayu sisa (upcycled)."
  },
  {
    id: "hl-05",
    kategori: "Home & Living",
    subKategori: "Aromatherapy & Wellness",
    nama: "Lilin Aromaterapi Melati Cendana",
    price: 60000,
    images: [ "../assets/foto-produk/lilin-melati-cendana.png" ],
    deskripsi: "Lilin aromaterapi ini berbasis soy wax (lilin minyak kedelai) alami yang dicampur dengan minyak esensial bunga melati dan kayu cendana, lalu dicetak dalam wadah batok kelapa upcycled. Karakteristik soy wax yang memiliki titik leleh rendah membuat lilin ini menyala lebih lama dan menguapkan aroma secara konstan tanpa menghasilkan jelaga hitam hidrokarbon yang berbahaya bagi paru-paru. Keharuman melati dan cendana berkhasiat menurunkan kadar stres, menenangkan pikiran yang tegang, serta memperbaiki kualitas tidur.",
    komposisi: "Soy wax (lilin minyak kedelai alami), minyak esensial bunga melati (Jasminum), minyak esensial kayu cendana (Santalum album), sumbu katun organik, dan wadah batok kelapa daur ulang (upcycled)."
  },
  {
    id: "hl-06",
    kategori: "Home & Living",
    subKategori: "Aromatherapy & Wellness",
    nama: "Esensial Oil Aromaterapi",
    price: 32000,
    images: [ "../assets/foto-produk/esensial-oil.png" ],
    deskripsi: "Minyak atsiri ini diproduksi melalui metode distilasi uap 100% bahan baku segar dari tanaman serai wangi, bunga melati, atau serpihan kayu cendana asli tanpa campuran pelarut kimia sintetik. Ketika diuapkan melalui diffuser, molekul aromatik murni dari tumbuhan ini berkhasiat menjernihkan kualitas udara dalam ruangan, melegakan pernapasan yang sesak, serta membunuh bakteri yang melayang di udara. Wangi asli alam ini aman dihirup setiap hari dan tidak memicu reaksi alergi pernapasan.",
    komposisi: "100% minyak atsiri murni hasil distilasi uap (pilihan varian: serai wangi / Cymbopogon nardus, melati / Jasminum, atau cendana / Santalum album)."
  },
  {
    id: "hl-07",
    kategori: "Home & Living",
    subKategori: "Aromatherapy & Wellness",
    nama: "Dupa Gaharu Alami",
    price: 14500,
    images: [ "../assets/foto-produk/dupa-gaharu.png" ],
    deskripsi: "Dupa ini diracik secara tradisional menggunakan bubuk kayu gaharu dan cendana asli yang direkatkan dengan bubuk kulit pohon alami tanpa rendaman parfum kimia buatan. Pembakaran dupa ini menghasilkan kepulan asap tipis yang membawa wangi kayu hangat yang bertahan lama di dalam ruangan. Khasiat aromanya sangat efektif untuk membantu memusatkan fokus pikiran saat meditasi, meredakan kecemasan, serta membangun atmosfer ruangan yang damai dan sakral.",
    komposisi: "Bubuk kayu gaharu (Aquilaria), bubuk kayu cendana (Santalum album), dan bubuk kulit pohon alami sebagai perekat."
  },
  {
    id: "hl-08",
    kategori: "Home & Living",
    subKategori: "Sustainable Decor & Dining",
    nama: "Alat Makan Kayu Jati",
    price: 48000,
    rating: 4.25,
    reviewCount: 5,
    images: [ "../assets/foto-produk/alat-makan.png", "../assets/foto-produk/belakang-alat-makan.png", "../assets/foto-produk/isi-alat-makan.png" ],
    deskripsi: "Set sendok dan garpu ini diproduksi dengan memanfaatkan potongan kayu jati sisa dari industri furnitur lokal, yang kemudian dihaluskan dan dilapisi food-grade beeswax (lilin lebah). Karakteristik serat padat dari kayu jati sisa ini memiliki ketahanan tinggi terhadap kelembapan, suhu panas makanan, dan tidak mudah retak. Lapisan lilin lebah alami berkhasiat menutup pori-pori kayu agar sisa makanan tidak meresap dan memicu pertumbuhan bakteri, tanpa menggunakan pernis kimia berbahaya.",
    komposisi: "Kayu jati (Tectona grandis) sisa industri furnitur lokal (upcycled), dan pelapis food-grade beeswax (lilin lebah murni)."
  },
  {
    id: "hl-09",
    kategori: "Home & Living",
    subKategori: "Sustainable Decor & Dining",
    nama: "Tas Anyaman Rotan",
    price: 120000,
    images: [ "../assets/foto-produk/tas-anyam.png" ],
    deskripsi: "Tas belanja ini dibuat dari anyaman tangan menggunakan serutan bambu pilihan atau jalinan rotan alami yang dipanen secara lestari. Struktur anyaman tradisional yang rapat dan elastis memberikan kekuatan mekanis yang tinggi untuk menahan beban berat, sehingga ideal digunakan sebagai pengganti kantong plastik sekali pakai dalam jangka panjang. Bahan bambu dan rotan ini memiliki ketahanan alami terhadap benturan dan gesekan, menjadikannya tas yang awet dan modis.",
    komposisi: "Serutan serat batang bambu pilihan atau jalinan serat rotan alami lestari."
  },
  {
    id: "hl-10",
    kategori: "Home & Living",
    subKategori: "Sustainable Decor & Dining",
    nama: "Beeswax Wrap Alami",
    price: 22500,
    images: [ "../assets/foto-produk/beeswax-wrap.png" ],
    deskripsi: "Pelapis makanan alternatif ini dibuat dari lembaran kain katun organik yang diresapi campuran lilin lebah murni (beeswax), minyak jojoba, dan getah pohon damar. Sifat antibakteri dan antijamur alami yang terdapat pada lilin lebah dan minyak jojoba berkhasiat menghambat pertumbuhan mikroba, sehingga makanan yang dibungkus tetap segar dan tidak cepat membusuk di dalam kulkas. Kain berlapis lilin ini bersifat fleksibel, dapat dicuci berulang kali, dan efektif menggantikan gulungan plastik bening sekali pakai.",
    komposisi: "Kain katun organik, lilin lebah murni (beeswax), minyak jojoba (Simmondsia chinensis), dan getah pohon damar (Agathis dammara)."
  },

  // =========================================================================
  // 3. KATEGORI: FOOD & BEVERAGES
  // =========================================================================
  {
    id: "fb-01",
    kategori: "Food & Beverages",
    subKategori: "Seduhan Nusantara",
    nama: "Kopi Arabika Nusantara",
    price: 20000,
    images: [ "../assets/foto-produk/kopi.png" ],
    deskripsi: "Produk ini berisi 100% biji kopi Arabika atau Robusta pilihan yang ditanam secara organik di lereng pegunungan Nusantara melalui sistem tumpang sari yang menjaga kelestarian hutan. Kandungan kafein alami dan asam klorogenat dalam biji kopi ini berkhasiat meningkatkan fokus mental, memicu stamina tubuh, serta kaya akan antioksidan. Pembelian kopi dengan skema Fair Trade ini memastikan kestabilan ekonomi petani untuk terus mengelola lahan pertanian tanpa merusak ekosistem sekitar.",
    komposisi: "100% biji kopi (Arabika / Robusta) organik lokal pilihan."
  },
  {
    id: "fb-02",
    kategori: "Food & Beverages",
    subKategori: "Seduhan Nusantara",
    nama: "Teh Kombucha Fermentasi",
    price: 35000,
    images: [ "../assets/foto-produk/teh-kombucha.png" ],
    deskripsi: "Minuman segar ini diproduksi melalui proses fermentasi daun teh hitam lokal berkualitas tinggi bersama gula tebu organik menggunakan kultur SCOBY (Symbiotic Culture of Bacteria and Yeast). Proses fermentasi alami ini menghasilkan asam glukoronat, vitamin B kompleks, dan asam amino yang melimpah. Teh kombucha ini berkhasiat memperbaiki efisiensi sistem pencernaan, menjaga keseimbangan mikroflora di dalam usus, serta membantu meningkatkan sistem kekebalan tubuh dari serangan penyakit.",
    komposisi: "Air murni, daun teh hitam (Camellia sinensis) lokal, gula tebu organik, dan kultur koloni SCOBY."
  },
  {
    id: "fb-03",
    kategori: "Food & Beverages",
    subKategori: "Seduhan Nusantara",
    nama: "Teh Bunga Herbal",
    price: 20000,
    images: [ "../assets/foto-produk/teh-bunga.png" ],
    deskripsi: "Teh herbal ini diracik dari kelopak mawar, bunga telang, dan bunga melati lokal yang dikeringkan dengan metode dehidrasi suhu rendah untuk mengunci kandungan nutrisinya. Karena murni terbuat dari bunga tanpa campuran daun teh (Camellia sinensis), seduhan ini 100% bebas kafein. Kandungan zat antosianin pada bunga telang dan senyawa penenang pada melati berkhasiat meredakan ketegangan saraf, menurunkan tekanan darah ringan, serta mempermudah tubuh memasuki fase tidur yang lelap.",
    komposisi: "Kelopak mawar (Rosa) kering, bunga telang (Clitoria ternatea) kering, dan bunga melati (Jasminum) kering lokal."
  },
  {
    id: "fb-04",
    kategori: "Food & Beverages",
    subKategori: "Seduhan Nusantara",
    nama: "Wedang Uwuh Tradisional",
    price: 18000,
    images: [ "../assets/foto-produk/wedhang-uwuh.png" ],
    deskripsi: "Minuman tradisional ini berisi racikan rempah utuh yang dikeringkan, terdiri dari serutan kayu secang, jahe emprit, daun cengkih, daun kayu manis, dan gula batu tebu. Senyawa brazilin pada kayu secang memberikan warna merah alami yang kaya antioksidan, dipadukan dengan kandungan gingerol dari jahe emprit yang berkhasiat meningkatkan suhu internal tubuh. Seduhan rempah hangat ini efektif untuk mengusir masuk angin, melegakan tenggorokan yang gatal, serta mengurangi rasa pegal pada otot setelah bekerja keras.",
    komposisi: "Serutan kayu secang (Caesalpinia sappan), jahe emprit (Zingiber officinale var. amarum), daun cengkih (Syzygium aromaticum), daun kayu manis (Cinnamomum verum), dan gula batu tebu lokal."
  },
  {
    id: "fb-05",
    kategori: "Food & Beverages",
    subKategori: "Sari Alam",
    nama: "Madu Murni Hutan",
    price: 55000,
    images: [ "../assets/foto-produk/madu-murni.png" ],
    deskripsi: "Madu ini dipanen langsung dari sarang lebah liar (Apis dorsata) yang bertelur di pohon-pohon tinggi pedalaman hutan Nusantara menggunakan metode panen lestari tanpa merusak koloni. Madu hutan murni kaya akan enzim alami, hidrogen peroksida alami, dan vitamin yang berfungsi sebagai antibakteri dan antiradang. Mengonsumsi madu ini berkhasiat mempercepat penyembuhan radang tenggorokan, menjadi sumber energi instan yang aman bagi tubuh, serta meningkatkan vitalitas harian.",
    komposisi: "100% madu murni dari nektar bunga liar hutan alami lebah liar (Apis dorsata)."
  },
  {
    id: "fb-06",
    kategori: "Food & Beverages",
    subKategori: "Sari Alam",
    nama: "Minyak Kelapa Murni",
    price: 42000,
    images: [ "../assets/foto-produk/minyak-kelapa.png" ],
    deskripsi: "Minyak goreng alternatif ini diproses secara mekanis dari daging buah kelapa tua pilihan tanpa melalui proses pemucatan atau penghilangan bau menggunakan zat kimia sintetik (Non-RBD). Minyak kelapa murni didominasi oleh Medium Chain Fatty Acids (MCFA) atau asam lemak rantai sedang yang sangat stabil pada suhu tinggi saat digunakan untuk menumis atau menggoreng. Kandungan asam laurat di dalamnya berkhasiat membantu meningkatkan metabolisme tubuh dan tidak gampang berubah menjadi lemak jenuh berbahaya.",
    komposisi: "100% minyak daging buah kelapa (Cocos nucifera) tua murni murni diproses mekanis (Non-RBD)."
  },
  {
    id: "fb-07",
    kategori: "Food & Beverages",
    subKategori: "Kudapan Sehat",
    nama: "Kripik Buah & Sayur",
    price: 16000,
    images: [ "../assets/foto-produk/kripik-buah-sayur.png" ],
    deskripsi: "Camilan renyah ini diproduksi dengan memanfaatkan buah nangka, apel, atau buncis hasil panen lokal yang diolah menggunakan teknologi penggorengan hampa udara (vacuum frying). Penggunaan suhu rendah dalam ruang hampa udara berkhasiat menguapkan kadar air tanpa merusak struktur serat, warna asli, maupun kandungan vitamin dasar dari buah dan sayur tersebut. Camilan ini menjadi sumber serat pangan dan kalium alami yang sehat dikonsumsi harian tanpa tambahan MSG atau pengawet kimia.",
    komposisi: "Buah tropis atau sayur segar hasil panen lokal (pilihan varian: nangka, apel, atau buncis), dan sedikit minyak kelapa (Cocos nucifera)."
  },
  {
    id: "fb-08",
    kategori: "Food & Beverages",
    subKategori: "Kudapan Sehat",
    nama: "Selai Nanas Organik",
    price: 28000,
    images: [ "../assets/foto-produk/selai-nanas.png" ],
    deskripsi: "Selai premium ini diproduksi dengan mengolah buah nanas tropis pilihan hasil panen lokal yang matang alami di pohon. Nanas segar dimasak perlahan bersama pemanis gula kelapa organik untuk mempertahankan serat kasar alami dan kandungan vitamin asli buah tanpa tambahan zat pengental gelatin hewani ataupun pewarna buatan. Teksturnya yang kaya akan bulir buah asli memberikan asupan serat pangan alami yang sangat baik untuk mendukung kelancaran metabolisme pencernaan.",
    komposisi: "Buah nanas lokal segar, dan pemanis gula kelapa organik."
  },
  {
    id: "fb-09",
    kategori: "Food & Beverages",
    subKategori: "Kudapan Sehat",
    nama: "Coklat Organic Local",
    price: 65000,
    images: [ "../assets/foto-produk/coklat.png" ],
    deskripsi: "Cokelat batangan ini diproduksi secara terintegrasi langsung di area perkebunan, mulai dari proses fermentasi biji kakao lokal pilihan, pemisahan lemak kakao murni, hingga dicampur dengan gula aren organik. Kandungan polifenol dan theobromine yang tinggi pada kakao murni berkhasiat melancarkan peredaran darah, menjaga kesehatan fungsi kardiovaskular, serta merangsang pelepasan hormon endorfin untuk memperbaiki suasana hati. Konsep tree-to-bar ini memangkas jarak transportasi sehingga sangat efektif menekan emisi karbon logistik.",
    komposisi: "Biji kakao (Theobroma cacao) terfermentasi lokal, lemak kakao murni, dan gula aren organik."
  },
  {
    id: "fb-10",
    kategori: "Food & Beverages",
    subKategori: "Kudapan Sehat",
    nama: "Granola Sehat",
    price: 24000,
    images: [ "../assets/foto-produk/granola.png" ],
    deskripsi: "Menu sarapan sehat ini memadukan gandum giling (rolled oats) dengan kacang mede lokal hasil panen petani domestik, potongan pisang kering, dan nektar pohon lontar sebagai pemanis. Serat beta-glukan yang tinggi dari gandum berkhasiat memberikan rasa kenyang yang bertahan lama dan membantu mengontrol kadar kolesterol jahat. Didukung oleh lemak tak jenuh tunggal dan magnesium dari kacang mede lokal, kudapan ini sangat baik untuk mendukung kesehatan fungsi jantung dan menjaga kestabilan energi harian.",
    komposisi: "Gandum giling (rolled oats), kacang mede (Anacardium occidentale) lokal, potongan pisang kering, dan nektar pohon lontar (Borassus flabellifer)."
  }
];

// Isi field `image` (path relatif dari halaman) bila belum ada
dataProducts.forEach(function (p) {
  if (!p.image && p.images && p.images.length) {
    p.image = p.images[0];
  }
});

function slugifyValue(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// =========================================================================
// DATA KATEGORI PRODUK
// =========================================================================
const dataCategories = [
  {
    id: 'cat-01',
    nama: 'Kesehatan & Kecantikan',
    slug: 'kesehatan-kecantikan',
    ikon: 'fas fa-spa',
    deskripsi: 'Produk kesehatan dan kecantikan alami dari bahan-bahan organik pilihan'
  },
  {
    id: 'cat-02',
    nama: 'Rumah & Gaya Hidup',
    slug: 'rumah-gaya-hidup',
    ikon: 'fas fa-home',
    deskripsi: 'Produk rumah tangga dan hidup berkelanjutan ramah lingkungan'
  },
  {
    id: 'cat-03',
    nama: 'Makanan & Minuman',
    slug: 'makanan-minuman',
    ikon: 'fas fa-utensils',
    deskripsi: 'Makanan dan minuman organik berkualitas dari petani lokal'
  }
];

// =========================================================================
// DATA SUB-KATEGORI PRODUK
// =========================================================================
const dataSubCategories = [
  // Kesehatan & Kecantikan subcategories
  {
    id: 'subcat-01',
    idKategori: 'cat-01',
    kategoriSlug: 'kesehatan-kecantikan',
    namaKategori: 'Kesehatan & Kecantikan',
    nama: 'Perawatan Kulit & Mandi',
    slug: 'perawatan-kulit-mandi',
    deskripsi: 'Produk pembersih dan perawatan wajah dengan bahan alami',
    bannerImage: '../assets/banner-produk/banner-kulit-mandi.png'
  },
  {
    id: 'subcat-02',
    idKategori: 'cat-01',
    kategoriSlug: 'kesehatan-kecantikan',
    namaKategori: 'Kesehatan & Kecantikan',
    nama: 'Perawatan Tubuh',
    slug: 'perawatan-tubuh',
    deskripsi: 'Perawatan tubuh lengkap dari tradisional hingga modern',
    bannerImage: '../assets/banner-produk/banner-perawatan-diri.png'
  },
  {
    id: 'subcat-03',
    idKategori: 'cat-01',
    kategoriSlug: 'kesehatan-kecantikan',
    namaKategori: 'Kesehatan & Kecantikan',
    nama: 'Perawatan Diri & Kesehatan',
    slug: 'perawatan-diri-kesehatan',
    deskripsi: 'Produk perawatan diri dan kesehatan keluarga',
    bannerImage: '../assets/banner-produk/banner-perawatan-diri.png'
  },
  // Rumah & Gaya Hidup subcategories
  {
    id: 'subcat-04',
    idKategori: 'cat-02',
    kategoriSlug: 'rumah-gaya-hidup',
    namaKategori: 'Rumah & Gaya Hidup',
    nama: 'Peralatan Pembersih Ramah Lingkungan',
    slug: 'peralatan-pembersih-ramah-lingkungan',
    deskripsi: 'Alat dan produk pembersih rumah yang aman untuk lingkungan',
    bannerImage: '../assets/banner-produk/banner-peralatan-pembersih.png'
  },
  {
    id: 'subcat-05',
    idKategori: 'cat-02',
    kategoriSlug: 'rumah-gaya-hidup',
    namaKategori: 'Rumah & Gaya Hidup',
    nama: 'Aromaterapi & Kesehatan',
    slug: 'aromaterapi-kesehatan',
    deskripsi: 'Produk aromaterapi untuk menciptakan suasana rumah yang nyaman',
    bannerImage: '../assets/banner-produk/banner-perawatan-diri.png'
  },
  {
    id: 'subcat-06',
    idKategori: 'cat-02',
    kategoriSlug: 'rumah-gaya-hidup',
    namaKategori: 'Rumah & Gaya Hidup',
    nama: 'Dekorasi & Peralatan Makan Berkelanjutan',
    slug: 'dekorasi-peralatan-makan-berkelanjutan',
    deskripsi: 'Dekorasi rumah dan peralatan makan berkelanjutan',
    bannerImage: '../assets/banner-produk/banner-dekorasi-peralatan-makan.png'
  },
  // Makanan & Minuman subcategories
  {
    id: 'subcat-07',
    idKategori: 'cat-03',
    kategoriSlug: 'makanan-minuman',
    namaKategori: 'Makanan & Minuman',
    nama: 'Seduhan Nusantara',
    slug: 'seduhan-nusantara',
    deskripsi: 'Minuman tradisional dari bahan-bahan pilihan nusantara',
    bannerImage: '../assets/banner-produk/Food&Beverages.jpg'
  },
  {
    id: 'subcat-08',
    idKategori: 'cat-03',
    kategoriSlug: 'makanan-minuman',
    namaKategori: 'Makanan & Minuman',
    nama: 'Sari Alam',
    slug: 'sari-alam',
    deskripsi: 'Produk pangan alami dari hasil alam bumi nusantara',
    bannerImage: '../assets/banner-produk/Food&Beverages.jpg'
  },
  {
    id: 'subcat-09',
    idKategori: 'cat-03',
    kategoriSlug: 'makanan-minuman',
    namaKategori: 'Makanan & Minuman',
    nama: 'Kudapan Sehat',
    slug: 'kudapan-sehat',
    deskripsi: 'Camilan dan snack sehat tanpa pengawet dan MSG',
    bannerImage: '../assets/banner-produk/banner-kudapan-sehat.png'
  }
];

var categoryMap = {
  'Health & Beauty': { id: 'cat-01', nama: 'Kesehatan & Kecantikan', slug: 'kesehatan-kecantikan' },
  'Home & Living': { id: 'cat-02', nama: 'Rumah & Gaya Hidup', slug: 'rumah-gaya-hidup' },
  'Food & Beverages': { id: 'cat-03', nama: 'Makanan & Minuman', slug: 'makanan-minuman' }
};

var subcategoryMap = {
  'Skincare & Bath': { id: 'subcat-01', nama: 'Perawatan Kulit & Mandi', slug: 'perawatan-kulit-mandi' },
  'Body Treatment': { id: 'subcat-02', nama: 'Perawatan Tubuh', slug: 'perawatan-tubuh' },
  'Personal Care & Wellness': { id: 'subcat-03', nama: 'Perawatan Diri & Kesehatan', slug: 'perawatan-diri-kesehatan' },
  'Eco-Cleaning Kit': { id: 'subcat-04', nama: 'Peralatan Pembersih Ramah Lingkungan', slug: 'peralatan-pembersih-ramah-lingkungan' },
  'Aromatherapy & Wellness': { id: 'subcat-05', nama: 'Aromaterapi & Kesehatan', slug: 'aromaterapi-kesehatan' },
  'Sustainable Decor & Dining': { id: 'subcat-06', nama: 'Dekorasi & Peralatan Makan Berkelanjutan', slug: 'dekorasi-peralatan-makan-berkelanjutan' },
  'Seduhan Nusantara': { id: 'subcat-07', nama: 'Seduhan Nusantara', slug: 'seduhan-nusantara' },
  'Sari Alam': { id: 'subcat-08', nama: 'Sari Alam', slug: 'sari-alam' },
  'Kudapan Sehat': { id: 'subcat-09', nama: 'Kudapan Sehat', slug: 'kudapan-sehat' }
};

// Enrich products with explicit links to category/subcategory metadata
// so rendering logic can stay deterministic and clean.
dataProducts.forEach(function (p) {
  var categoryMeta = categoryMap[p.kategori] || dataCategories.find(function (c) {
    return c.id === p.categoryId || c.nama === p.kategori || c.slug === p.categorySlug;
  }) || null;
  var subcategoryMeta = subcategoryMap[p.subKategori] || dataSubCategories.find(function (s) {
    return s.id === p.subcategoryId || s.nama === p.subKategori || s.slug === p.subcategorySlug;
  }) || null;

  p.categoryId = categoryMeta ? categoryMeta.id : (p.categoryId || '');
  p.categoryName = categoryMeta ? categoryMeta.nama : (p.categoryName || p.kategori || '');
  p.categorySlug = categoryMeta ? categoryMeta.slug : (p.categorySlug || slugifyValue(p.kategori));
  p.subcategoryId = subcategoryMeta ? subcategoryMeta.id : (p.subcategoryId || '');
  p.subcategoryName = subcategoryMeta ? subcategoryMeta.nama : (p.subcategoryName || p.subKategori || '');
  p.subcategorySlug = subcategoryMeta ? subcategoryMeta.slug : (p.subcategorySlug || slugifyValue(p.subKategori));
  p.rating = Number.isFinite(Number(p.rating)) && Number(p.rating) > 0 ? Number(p.rating) : 0;
  p.reviewCount = Number.isFinite(Number(p.reviewCount)) && Number(p.reviewCount) > 0 ? Number(p.reviewCount) : 0;

  if (!p.image && p.images && p.images.length) {
    p.image = p.images[0];
  }
});

// Expose ke global agar skrip non-module dapat menggunakan data
window.dataProducts = dataProducts;
window.dataCategories = dataCategories;
window.dataSubCategories = dataSubCategories;

// Export untuk module-aware usage (tetap kompatibel)
// export default dataProducts;