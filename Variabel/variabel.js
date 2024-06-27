// 1. variabel dengan let
let nama = "Udin Fernandez";

// tampilkan data
console.log(nama);

// kita ubah variabel nama
namw = "Oman Siregar";
console.log(nama);

// 2. variabel dengan var
var namDepan = "Ucup";
console.log(namDepan);
namDepan = "Otong";
console.log(namDepan);


// kasus khusus tanpa keyword akan jadi var
gorengan = "bala-bala";
{
  gorengan = "gehu";
  console.log(gorengan);
}
console.log(gorengan);

// kelakuan dari let
let namaBelakang = "Surucup";
{
  let namaBelakang = "Surotong";
  console.log(namaBelakang);
}
console.log(namaBelakang)

// kelakuan dari var
var namaTengah ="Keren";
{
  var namaTengah = "Ganteng";
  console.log(namaTengah);
}
console.log(namaTengah);

// 3. variabel dengan const
const JK = "Laki-laki";
console.log(JK);
// JK = "Perempuan";    akan error karena const tidak dapat diubah 
// console.log(JK)    