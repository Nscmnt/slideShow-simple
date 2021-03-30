const slides = document.querySelector(".slides")
const slide = document.querySelectorAll('.slide')
const leftValue = ["-924px","-1848px","-2772px","-3696px"]
let i = 0;

setInterval(() =>{
  slides.style.left = leftValue[i]
  i++;
  
  if(i > leftValue.length) {
    i = 0; 
    slides.style.left = "0px";
  }
},4000)

