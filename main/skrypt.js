// JavaScript (skrypt.js)
const textElement = document.getElementById("powitanie");
const originalText = textElement.innerText;
textElement.innerText = ''; 

let currentIndex = 0;

function animateText() {
  if (currentIndex < originalText.length) {
    if (originalText[currentIndex] === ' ') {
      textElement.innerHTML += '&nbsp;'; 
    } else {
      textElement.innerText += originalText[currentIndex];
    }
    currentIndex++;
    setTimeout(animateText, 100); 
  }
}

animateText();



window.addEventListener("load", function () {
    const sliderElements = document.querySelectorAll(".slider_element");
    let currentIndex = 0;
  
    function showNextElement() {
      if (currentIndex < sliderElements.length) {
        sliderElements[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % sliderElements.length;
        sliderElements[currentIndex].classList.add("active");
        setTimeout(hideCurrentElement, 4000);
      }
    }
  
    function hideCurrentElement() {
      if (currentIndex > 0) {
        sliderElements[currentIndex - 1].classList.add("fadeOut");
        setTimeout(() => {
          sliderElements[currentIndex - 1].classList.remove("active", "fadeOut");
        }, 3000); 
      }
  
      setTimeout(showNextElement, 4000);
    }
  
    sliderElements[currentIndex].classList.add("active");
    setTimeout(showNextElement, 6000);
  });
  
