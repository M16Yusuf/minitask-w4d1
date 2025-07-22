// buat container baru terlebih dahulu
const baruContainer = document.createElement("section");
const iniBody = document.querySelector("body");
iniBody.insertAdjacentElement("afterbegin", baruContainer);

let warna = "";
const jumlahCatur = 64;
let tempCount = 0;

for (let i=0; i < jumlahCatur; i++){
    if(i % 8 == 0){
        tempCount++;
    }
    tempCount++;
    if(tempCount % 2 == 0){
        // jika genap 
        warna = "putih";
    } 
    else if (tempCount % 2 != 0) {
        // jika ganjil 
        warna = "hitam";
    }
    
    const divBaru = document.createElement("div"); // div baru
    divBaru.className = warna;
    divBaru.textContent = `${i}, ${tempCount}`;
    divBaru.style["color"] = "blue";
    const locSection = document.querySelector("section");
    locSection.insertAdjacentElement("beforeend", divBaru);
}

