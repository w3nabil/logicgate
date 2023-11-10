const not1 = document.getElementById('notgatebtn1');
const notbulb = document.getElementById('notbulb');

not1.addEventListener('click', () => {
    not1.classList.toggle('not-active');
    checkButtons_not();
  
    if (not1.classList.contains('not-active')) {
      not1.textContent = "1";
    } else {
      not1.textContent = "0";
    }
  });
  
  
  function checkButtons_not() {
      console.log("NOT GATE WORKING WITHOUT ANY ERROR. PASS...");
      if (not1.classList.contains('not-active')) {
          notbulb.src = "https://www.w3schools.com/js/pic_bulboff.gif";
      } else {
          notbulb.src = "https://www.w3schools.com/js/pic_bulbon.gif";
      }
  }
