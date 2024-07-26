//data
const items = [
    {
        id: 1,
        nama: "barang-1",
        harga: 200
    },
    {
        id: 2,
        nama: "barang-2",
        harga: 214
    },
    {
        id: 3,
        nama: "barang-3",
        harga: 120
    }
];
console.log("Data")
console.table(items);

//CREATE
items.push({
    id: 4,
    nama: "barang-4",
    harga: 400
});
console.table(items);

//READ
console.log("Read")
const readItem = items.find(items => items.id === 2);
console.log(readItem);
let cari = items.filter(items => items.id === 2);
console.table(cari);


//UPDATE
console.log("Update")
const updateCari = items.find(items => items.id === 3);
const updateBarang = { ...updateCari, nama: "barang-3-update" };
const itemIndex = items.findIndex(items => items.id === 3);
items[itemIndex] = updateBarang;
console.table(items);

//DELETE
console.log("Delete")
const hapusItem = items.filter(items => items.id != 4);
console.table(hapusItem);
