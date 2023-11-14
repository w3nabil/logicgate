/*******************************************************
** THIS WEBSITE IS OWNED AND DEVELOPED BY NABIL AHMED **
********************************************************/

const or1 = document.getElementById('orgatebtn1');
const or2 = document.getElementById('orgatebtn2');
const orbulb = document.getElementById('orbulb');

or1.addEventListener('click', () => {
  or1.classList.toggle('active');
  checkButtons_or();

  if (or1.classList.contains('active')) {
    or1.textContent = "1";
  } else {
    or1.textContent = "0";
  }
});

or2.addEventListener('click', () => {
  or2.classList.toggle('active');
  checkButtons_or();

  if (or2.classList.contains('active')) {
    or2.textContent = "1";
  } else {
    or2.textContent = "0";
  }
});

function checkButtons_or() {
    console.log("OR GATE RUNNING WITHOUT ANY ERROR. PASS....")
  if (or1.classList.contains('active') || or2.classList.contains('active')) {
    orbulb.src = "https://www.w3schools.com/js/pic_bulbon.gif";
  } else {
    orbulb.src = "https://www.w3schools.com/js/pic_bulboff.gif";
  }
}
console.log("Successfully Loaded OR GATE... (2/7)")