async function coba() {
  const requestUrl =
    "https://github.com/Efend1/js/blob/main/Eksperimen/JSON/latihan.json";
  const request = new Request(requestUrl);
  //const xhr = new XMLHttpRequest();
  //xhe.open("GET", "latihan.json", "true");

  const response = await fetch(request);
  const cobaCobaText = await response.text();

  const cobaCoba = JSON.parse(cobaCobaText);

  cobaHeader(cobaCoba);
  cobaKedua(cobaCoba);
}

function cobaHeader(obj) {
  const header = document.querySelector("header");
  const myH1 = document.createElement("h1");
  myH1.textContent = obj.pabrikan;
  header.appendChild(myH1);

  const myPara = document.createElement("p");
  myPara.textContent = `Asal Negara:
  ${obj.asal} // Tahun Berdiri :
  ${obj.tahunBerdiri}`;
  header.appendChild(myPara);
}

function cobaKedua(obj) {
  const section = document.querySelector("section");
  const series = obj.series;

  for (const detail of series) {
    const myArticle = document.createElement("article");
    const myH2 = document.createElement("h2");
    const myPara1 = document.createElement("p");
    const myPara2 = document.createElement("p");

    myH2.textContent = detail.nama;
    myPara1.textContent = `Jenis: ${detail.jenis}`;
    myPara2.textContent = `Varian: ${detail.varian}`;

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);

    section.appendChild(myArticle);
  }
}

coba();
