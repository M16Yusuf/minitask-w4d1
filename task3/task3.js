
// diketahui sebuah object
const profile = {
    name: "John Doe",
    age: 30,
    profession: "web Developer",
    hobbies: ["Reading", "Hiking", "Photography"]
};

// buat div setelah begin body
const baruDiv = document.createElement("div");
baruDiv.className = "profile-card";
const iniBody = document.querySelector("body");
iniBody.insertAdjacentElement("afterbegin", baruDiv);

// buat h2 baru didalam div
const baruH2 = document.createElement("h2");
baruH2.textContent = profile.name;
const iniCard = document.querySelector("div");
iniCard.insertAdjacentElement("beforeend", baruH2);

// buat paragraf age & perofession
const baruP = document.createElement("p");
baruP.textContent = `Umur : ${profile.age}`;
iniCard.insertAdjacentElement("beforeend", baruP);

const baruP2 = document.createElement("p");
baruP2.textContent = `Profession : ${profile.profession}`;
iniCard.insertAdjacentElement("beforeend", baruP2);

// list hobbies 
const baruUl = document.createElement("ul");
iniCard.insertAdjacentElement("beforeend", baruUl);
// perulangan ambil data hobies
for(let i =0; i< profile.hobbies.length; i++){
    const baruli = document.createElement("li");
    baruli.textContent = profile.hobbies[i];
    const iniUl = document.querySelector("ul");
    iniUl.insertAdjacentElement("beforeend", baruli);
}
