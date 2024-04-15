var selamFonksiyonu = function selam(){
    console.log("Merhaba");
}
selamFonksiyonu();

const hiFunc = function hello(){
    console.log("hello");
}
hiFunc();

const hiFunc2 = () => console.log("hello");
hiFunc2();
const selamVer =(mesaj) =>{
    console.log("merhaba");
}

const selamVer2 =(mesaj) =>{
    console.log("merhaba");
}
selamVer("hello js");

let topla = (sayi1, sayi2) => {
    return sayi1+sayi2;
}

let toplam = topla(3,5);
console.log(toplam);

const dizi = [1,2,3,4,5,6,7,8,9];
const karekokDizi =[];

dizi.forEach(sayi =>{
    karekokDizi.push(sayi*sayi);
});

console.log(karekokDizi);

//map
const mapDizi = dizi.map(sayi =>{
    sayi*sayi;
})
console.log(mapDizi)

//filter
const filterDizi = dizi.filter(sayi => {
    sayi / 4 == 0;
})
console.log(filterDizi)




