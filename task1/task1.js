const lampRed = 3;
const lampYellow = 2;
const lampGreen = 3;


let loop = 0;
async function traffic () {
    loop++;
    console.log(loop);
    const lampuMerah = document.querySelector("section.lamp div:first-child");
    for(let i = lampRed; i>= 0;i--){
        lampuMerah.className = "merahnyala";
        await new Promise(resolve=> setTimeout(resolve, 1000));
        if (i == 0){
            lampuMerah.className = "merahmati";
            continue;
        }
        lampuMerah.textContent = parseInt(lampuMerah.textContent) - 1;
    }
    lampuMerah.textContent = lampRed.toString();
    
    const lampuKuning = document.querySelector("section.lamp div:nth-child(2)");
    for(let i = lampYellow; i>= 0;i--){
        lampuKuning.className = "kuningnyala";
        await new Promise(resolve=> setTimeout(resolve, 1000));
        if (i == 0){
            lampuKuning.className = "kuningmati";
            continue;
        }
        lampuKuning.textContent = parseInt(lampuKuning.textContent) - 1;
    }
    lampuKuning.textContent = lampYellow.toString();
    
    const lampuHijau = document.querySelector("section.lamp div:last-child");
    for(let i = lampGreen; i>= 0;i--){
        lampuHijau.className = "hijaunyala";
        await new Promise(resolve=> setTimeout(resolve, 1000));
        if (i == 0){
            lampuHijau.className = "hijaumati";
            continue;
        }
        lampuHijau.textContent = parseInt(lampuHijau.textContent) - 1;
    }
    lampuHijau.textContent = lampGreen.toString();
}


(async function () {
    const looper = true;
    while(looper) {
        await traffic();   
    }
})();