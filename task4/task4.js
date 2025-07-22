// tambahkan baris baru dengan nama charlie dan 92
const baruTr = document.createElement("tr");
const iniTbody = document.querySelector("tbody");
iniTbody.insertAdjacentElement("beforeend", baruTr);

const baruTd =document.createElement("td");
baruTd.textContent = "Charlie";
const iniLastTr = document.querySelector("tbody tr:last-child");
iniLastTr.insertAdjacentElement("beforeend", baruTd);

const baruTd2 = document.createElement("td");
baruTd2.textContent = 92;
iniLastTr.insertAdjacentElement("beforeend", baruTd2);


// ubah nilai bob menjadi 89
const ambilBob = document.querySelector("tbody tr:nth-child(2) > td:last-child");
ambilBob.textContent = 89;


// berikan kelas top-score pada baris dengan nama Alice
const ambilAlice = document.querySelector("tbody tr:first-child");
ambilAlice.className = "top-score";


// hitung rata-rata dan masukan ke footer dengan isi average
const kakiTable = document.createElement("tfoot");
const lokasiKaki = document.querySelector("table");
lokasiKaki.insertAdjacentElement("beforeend", kakiTable);

let jumlahKan = 0;
for (let i = 1; i <= 3; i++){
    const dataTbody = document.querySelector(`tbody tr:nth-child(${i}) td:last-child`);
    jumlahKan += parseInt(dataTbody.textContent);
}
const result = jumlahKan / 3;
console.log(`ini result ${result}`)

// buat eelement kaki dan masukan nilai yang sudah diketahui
const trKaki = document.createElement("tr");
const lokasiTfoot = document.querySelector("tfoot");
lokasiTfoot.insertAdjacentElement("beforeend", trKaki);

const tdkaki1 = document.createElement("td");
tdkaki1.textContent = " rata-rata : ";
const lokasiTrKaki = document.querySelector("tfoot tr");
lokasiTrKaki.insertAdjacentElement("beforeend", tdkaki1);

const tdkaki2 = document.createElement("td");
tdkaki2.textContent = result.toString();
lokasiTrKaki.insertAdjacentElement("beforeend", tdkaki2);
