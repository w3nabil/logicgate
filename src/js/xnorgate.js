<<<<<<< HEAD
const xnor1 = document.getElementById("xnor1");
const xnor2 = document.getElementById("xnor2");
const xnorbulb = document.getElementById("xnorbulb");

xnor1.addEventListener('click', ()=> {
    xnor1.classList.toggle('xnor-active');
    checkButtons_xnor();
    if (xnor1.classList.contains('xnor-active')){
        xnor1.textContent = "1";
    }else{
        xnor1.textContent = "0";
    }
})

xnor2.addEventListener('click', ()=> {
    xnor2.classList.toggle('xnor-active');
    checkButtons_xnor();
    if (xnor2.classList.contains('xnor-active')){
        xnor2.textContent = "1";
    }else{
        xnor2.textContent = "0";
    }
})

function checkButtons_xnor() {
    const isXnor1Active = xnor1.classList.contains('xnor-active');
    const isXnor2Active = xnor2.classList.contains('xnor-active');

    if ((isXnor1Active && isXnor2Active) || (!isXnor1Active && !isXnor2Active)) {
        xnorbulb.src = "https://www.w3schools.com/js/pic_bulbon.gif";
    } else {
        xnorbulb.src = "https://www.w3schools.com/js/pic_bulboff.gif";
    }
}


=======
const xnor1 = document.getElementById("xnor1");
const xnor2 = document.getElementById("xnor2");
const xnorbulb = document.getElementById("xnorbulb");

xnor1.addEventListener('click', ()=> {
    xnor1.classList.toggle('xnor-active');
    checkButtons_xnor();
    if (xnor1.classList.contains('xnor-active')){
        xnor1.textContent = "1";
    }else{
        xnor1.textContent = "0";
    }
})

xnor2.addEventListener('click', ()=> {
    xnor2.classList.toggle('xnor-active');
    checkButtons_xnor();
    if (xnor2.classList.contains('xnor-active')){
        xnor2.textContent = "1";
    }else{
        xnor2.textContent = "0";
    }
})

function checkButtons_xnor() {
    const isXnor1Active = xnor1.classList.contains('xnor-active');
    const isXnor2Active = xnor2.classList.contains('xnor-active');

    if ((isXnor1Active && isXnor2Active) || (!isXnor1Active && !isXnor2Active)) {
        xnorbulb.src = "https://www.w3schools.com/js/pic_bulbon.gif";
    } else {
        xnorbulb.src = "https://www.w3schools.com/js/pic_bulboff.gif";
    }
}


>>>>>>> 271e3179ae2bfecce85fd2190853c712740167be
console.log("Successfully Loaded XOR GATE... (7/7)");