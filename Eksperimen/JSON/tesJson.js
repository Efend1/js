async function coba() {
  const requestUrl = latihan.json;
  const request = new Request(requestUrl);

  const response = await fetch(request);
  const cobaCoba = await response.json();

  cobaHeader(cobaCoba);
  cobaKedua(cobaCoba);
}
