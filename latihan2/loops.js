//for loop

for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (let x = 10; x >= 0; x--) {
  console.log(x);
}

let teks = "JAVASCRIPT";
for (let j = 0; j < teks.length; j++) {
  console.log(teks[j]);
}

//do while
let hasil = "";
let a = 0;

do {
  a = a + 1;
  hasil = hasil + a;
} while (a < 5);

console.log(hasil);
