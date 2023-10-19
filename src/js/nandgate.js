/*******************************************************
** THIS WEBSITE IS OWNED AND DEVELOPED BY NABIL AHMED **
********************************************************/

const nand1 = document.getElementById('nand1');
const nand2 = document.getElementById('nand2');
const nandbulb = document.getElementById('nandbulb');

nand1.addEventListener('click', () => {
  nand1.classList.toggle('nand-active');
  checkButtons_nand();

  if (nand1.classList.contains('nand-active')) {
    nand1.textContent = "1";
  } else {
    nand1.textContent = "0";
  }
});

nand2.addEventListener('click', () => {
  nand2.classList.toggle('nand-active');
  checkButtons_nand();

  if (nand2.classList.contains('nand-active')) {
    nand2.textContent = "1";
  } else {
    nand2.textContent = "0";
  }
});

function checkButtons_nand() {
    console.log("NAND GATE WORKING WITHOUT ANY ERROR. PASS...");
    if (nand1.classList.contains('nand-active') && nand2.classList.contains('nand-active')) {
        nandbulb.src = "https://www.w3schools.com/js/pic_bulboff.gif";
    } else {
        nandbulb.src = "https://www.w3schools.com/js/pic_bulbon.gif";
    }
}

console.log("Successfully Loaded AND GATE.. (4/7)")
