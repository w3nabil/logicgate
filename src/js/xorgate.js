const xor1 = document.getElementById("xor1");
const xor2 = document.getElementById("xor2");
const xorbulb = document.getElementById("xorbulb");

xor1.addEventListener('click', () => {
    xor1.classList.toggle("xor-active");
    checkButtons_xor();
    if (xor1.classList.contains("xor-active")){
        xor1.textContent = "1";
    } else {
        xor1.textContent = "0";
    }
})

xor2.addEventListener('click', ()=> {
    xor2.classList.toggle("xor-active");
    checkButtons_xor();
    if (xor2.classList.contains("xor-active")){
        xor2.textContent = "1";
    } else {
        xor2.textContent = "0";
    }
})

function checkButtons_xor(){
    if (xor1.classList.contains("xor-active") && xor2.classList.contains("xor-active")){
        xorbulb.src = "https://www.w3schools.com/js/pic_bulboff.gif";
    } else if (xor1.classList.contains("xor-active") || xor2.classList.contains("xor-active")){
        xorbulb.src = "https://www.w3schools.com/js/pic_bulbon.gif";
    } else {
        xorbulb.src = "https://www.w3schools.com/js/pic_bulboff.gif";
    }
}

console.log("Successfully Loaded XOR GATE... (2/7)")