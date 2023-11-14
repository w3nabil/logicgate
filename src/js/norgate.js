/*******************************************************
** THIS WEBSITE IS OWNED AND DEVELOPED BY NABIL AHMED **
********************************************************/

const nor1 = document.getElementById('nor1');
const nor2 = document.getElementById('nor2');
const norbulb = document.getElementById('norbulb');

nor1.addEventListener('click', () => {
  nor1.classList.toggle('nor-active');
  checkButtons_nor();

  if (nor1.classList.contains('nor-active')) {
    nor1.textContent = "1";
  } else {
    nor1.textContent = "0";
  }
});

nor2.addEventListener('click', () => {
  nor2.classList.toggle('nor-active');
  checkButtons_nor();

  if (nor2.classList.contains('nor-active')) {
    nor2.textContent = "1";
  } else {
    nor2.textContent = "0";
  }
});

function checkButtons_nor() {
    console.log("NOR GATE RUNNING WITHOUT ANY ERROR. PASS....")
  if (nor1.classList.contains('nor-active') || nor2.classList.contains('nor-active')) {
    norbulb.src = "https://www.w3schools.com/js/pic_bulboff.gif";
  } else {
    norbulb.src = "https://www.w3schools.com/js/pic_bulbon.gif";
  }
}


console.log("Successfully Loaded OR GATE... (5/7)")