class mobil {
  nama;
  harga;
  warna;
  kapasitas;
  nomorPolisi;
  isEngineStarted = false;

  constructor({ nama, harga, warna, kapasitas = 4, nomorPolisi }) {
    this.nama = nama;
    this.harga = harga;
    this.warna = warna;
    this.kapasitas = kapasitas;
    this.nomorPolisi = nomorPolisi;
  }

  start() {
    this.isEngineStarted = true;
    console.log('Start the engine');
  }

  stop() {
    this.isEngineStarted = false;
    console.log('Stop the engine');
  }

  maju() {
    console.log('Maju');
  }

  mundur() {
    console.log('mundur');
  }

  rem() {
    console.log('rem');
  }
}

// Membuat objek mobil dengann connstruction n function caar
const mobilFendi = new mobil({
  nama: 'Toyota',
  harga: 1000,
  warna: 'abu',
  nomorPolisi: 'Z 0101 ZZ',
});

const mobilEpen = new mobil({
  nama: 'Nissan',
  harga: 4000,
  warna: 'putih',
  nomorPolisi: 'Z 2101 ZZ',
});

// Menampilkan nilai dari objek mobil
console.log(mobilFendi);
console.log(mobilEpen);

// Memanggil method dari objek
mobilEpen.start();
mobilEpen.maju();
console.log(mobilEpen);

mobilFendi.start();
mobilFendi.maju();
console.log(mobilFendi);
