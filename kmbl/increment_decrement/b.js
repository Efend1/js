let tombol_tambah = document.querySelector("#plus");
let tombol_kurang = document.querySelector("#minus");
let output = document.querySelector(".output");

tombol_tambah.addEventListener("click", () => {
    let a = output.innerHTML;
    console.log(a);
    a++;
    output.innerHTML = a;
});

tombol_kurang.addEventListener("click", () => {
  let b = output.innerHTML;
  b--;
  output.innerHTML = b;
})