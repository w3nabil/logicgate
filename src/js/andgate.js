/*******************************************************
** THIS WEBSITE IS OWNED AND DEVELOPED BY NABIL AHMED **
********************************************************/

const button1 = document.getElementById('and1');
const button2 = document.getElementById('and2');
const andbulb = document.getElementById('andbulb');

button1.addEventListener('click', () => {
  button1.classList.toggle('and-active');
  checkButtons_and();

  if (button1.classList.contains('and-active')) {
    button1.textContent = "1";
  } else {
    button1.textContent = "0";
  }
});

button2.addEventListener('click', () => {
  button2.classList.toggle('and-active');
  checkButtons_and();

  if (button2.classList.contains('and-active')) {
    button2.textContent = "1";
  } else {
    button2.textContent = "0";
  }
});

function checkButtons_and() {
    console.log("AND GATE WORKING WITHOUT ANY ERROR. PASS...");
    if (button1.classList.contains('and-active') && button2.classList.contains('and-active')) {
        andbulb.src = "https://www.w3schools.com/js/pic_bulbon.gif";
    } else {
        andbulb.src = "https://www.w3schools.com/js/pic_bulboff.gif";
    }
}

console.log("Successfully Loaded AND GATE.. (1/7)")
