function satu(){
  console.log("satu");
}

function dua(){
  console.log("function 2 sedang dieksekusi ")
  setTimeout(() => {
    console.log("dua")
  }, 3000);
}

function tiga(){
  console.log("tiga");
}

satu();
dua();
tiga();