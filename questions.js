// questions.js
const QUESTION_BANK = {
  // Bab 1: Pos 1 - 3 (Cahaya dan Bunyi)
  bab1: [
    { id: 1, q: "Peristiwa terbentuknya pelangi membuktikan bahwa cahaya memiliki sifat...", a: ["Merambat lurus", "Dapat diuraikan (dispersi)", "Dapat dipantulkan", "Menembus benda bening"], c: 1 },
    { id: 2, q: "Bayangan kita pada cermin datar bersifat...", a: ["Maya, tegak, sama besar", "Nyata, terbalik, diperkecil", "Maya, terbalik, diperbesar", "Nyata, tegak, sama besar"], c: 0 },
    { id: 3, q: "Bunyi tidak dapat merambat melalui...", a: ["Air laut", "Besi padat", "Ruang hampa udara", "Udara terbuka"], c: 2 },
    { id: 4, q: "Sendok yang terlihat bengkok saat dicelupkan ke air adalah bukti...", a: ["Pembiasan cahaya", "Pemantulan cahaya", "Penguraian cahaya", "Penyerapan cahaya"], c: 0 },
    { id: 5, q: "Bunyi yang frekuensinya di atas 20.000 Hz disebut bunyi...", a: ["Infrasonik", "Audiosonik", "Ultrasonik", "Supersonik"], c: 2 },
    { id: 6, q: "Bagian mata yang mengatur banyaknya cahaya yang masuk adalah...", a: ["Retina", "Kornea", "Pupil", "Lensa mata"], c: 2 },
    { id: 7, q: "Hewan yang memanfaatkan pantulan gelombang bunyi (ekolokasi) adalah...", a: ["Kelelawar dan lumba-lumba", "Kucing dan anjing", "Gajah dan jerapah", "Elang dan ular"], c: 0 },
    { id: 8, q: "Gema terjadi karena bunyi pantul terdengar...", a: ["Bersamaan dengan bunyi asli", "Lengkap setelah bunyi asli", "Hanya di ruangan sempit", "Sebelum bunyi asli"], c: 1 },
    { id: 9, q: "Benda yang tidak tembus cahaya akan menghasilkan...", a: ["Pelangi", "Bayangan", "Cahaya baru", "Fatamorgana"], c: 1 },
    { id: 10, q: "Bunyi pantul yang terdengar hanya sebagian bersamaan dengan bunyi asli disebut...", a: ["Gaung/Kerdam", "Gema", "Nada", "Desah"], c: 0 }
  ],

  // Bab 2: Pos 4 - 7 (Ekosistem)
  bab2: [
    { id: 11, q: "Organisme yang mampu membuat makanannya sendiri disebut...", a: ["Konsumen", "Produsen (Autotrof)", "Pengurai", "Karnivora"], c: 1 },
    { id: 12, q: "Hubungan simbiosis antara lebah dan bunga adalah contoh simbiosis...", a: ["Komensalisme", "Parasitisme", "Mutualisme", "Netralisme"], c: 2 },
    { id: 13, q: "Dalam rantai makanan sawah: Padi -> Belalang -> Katak -> Ular, katak berperan sebagai...", a: ["Produsen", "Konsumen I", "Konsumen II", "Konsumen III"], c: 2 },
    { id: 14, q: "Bakteri dan jamur pada ekosistem berperan sebagai...", a: ["Dekomposer / Pengurai", "Konsumen puncak", "Produsen", "Parasit mutlak"], c: 0 },
    { id: 15, q: "Kumpulan dari beberapa rantai makanan yang saling berhubungan disebut...", a: ["Piramida makanan", "Jaring-jaring makanan", "Simbiosis", "Bioma"], c: 1 },
    { id: 16, q: "Ikan remora yang berenang di dekat ikan hiu merupakan contoh simbiosis...", a: ["Mutualisme", "Komensalisme", "Parasitisme", "Predasi"], c: 1 },
    { id: 17, q: "Faktor abiotik di dalam ekosistem akuatik meliputi...", a: ["Ikan, eceng gondok, terumbu karang", "Suhu, cahaya, oksigen terlarut", "Bakteri, alga, plankton", "Katak, cacing, tanaman"], c: 1 },
    { id: 18, q: "Jika populasi ular sawah menurun drastis, dampak langsung yang terjadi adalah...", a: ["Populasi padi meningkat", "Populasi katak meledak", "Populasi elang meningkat", "Populasi tikus menurun"], c: 1 },
    { id: 19, q: "Tempat hidup alami suatu makhluk hidup disebut...", a: ["Nisia", "Habitat", "Ekosistem", "Populasi"], c: 1 },
    { id: 20, q: "Benalu yang hidup menempel pada pohon mangga merugikan mangga. Ini adalah simbiosis...", a: ["Mutualisme", "Komensalisme", "Parasitisme", "Netralisme"], c: 2 }
  ],

  // Bab 3: Pos 8 - 10 (Magnet, Listrik, & Teknologi)
  bab3: [
    { id: 21, q: "Dua kutub magnet yang senama (misal U dan U) jika didekatkan akan...", a: ["Tarik-menarik", "Tolak-menolak", "Saling menempel", "Tidak bereaksi"], c: 1 },
    { id: 22, q: "Benda yang dapat ditarik dengan kuat oleh magnet disebut...", a: ["Feromagnetik", "Paramagnetik", "Diamagnetik", "Nonmagnetik"], c: 0 },
    { id: 23, q: "Rangkaian listrik di mana jika satu lampu mati lampu lain ikut mati adalah...", a: ["Rangkaian Paralel", "Rangkaian Seri", "Rangkaian Campuran", "Rangkaian Terbuka"], c: 1 },
    { id: 24, q: "Alat yang berfungsi untuk menyambung atau memutus arus listrik adalah...", a: ["Sekering", "Sakelar", "Stopkontak", "Dinamo"], c: 1 },
    { id: 25, q: "Kipas angin mengubah energi listrik menjadi energi...", a: ["Panas", "Bunyi", "Gerak (kinetik)", "Kimia"], c: 2 },
    { id: 26, q: "Benda yang tidak dapat menghantarkan arus listrik disebut...", a: ["Konduktor", "Isolator", "Semikonduktor", "Resistor"], c: 1 },
    { id: 27, q: "Pembuatan magnet dengan cara melilitkan kawat berarus listrik pada paku disebut...", a: ["Induksi", "Elektromagnetik", "Gosokan", "Radiasi"], c: 1 },
    { id: 28, q: "Kompas selalu menunjuk arah utara dan selatan karena pengaruh...", a: ["Gravitasi bulan", "Medan magnet bumi", "Rotasi bumi", "Angin atmosfer"], c: 1 },
    { id: 29, q: "Contoh sumber energi listrik terbarukan dan ramah lingkungan adalah...", a: ["Batu bara", "Panel surya (matahari)", "Minyak bumi", "Gas alam"], c: 1 },
    { id: 30, q: "Satuan untuk mengukur daya listrik dalam kehidupan sehari-hari adalah...", a: ["Volt", "Ampere", "Watt", "Ohm"], c: 2 }
  ]
};