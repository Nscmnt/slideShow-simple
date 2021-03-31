const slide = document.querySelectorAll('.slide')
let i = 0;

window.onload = () => {  

  setInterval(() =>{
    if(i >= slide.length) {
      slide.forEach((s)=> s.classList.remove('active'))
      i = 0;
    }else{
      slide[i].classList.add('active')
      i++;
    }
    
  },4000)
}

function slidePreviuos(){
  if(i <= 0) {
    slide.forEach((s) => s.classList.add('active'))
    i = slide.length;
  }
  else {
    i--
    slide[i].classList.remove('active')    
  }
}
function slideNext(){
  if(i >= slide.length) {
    slide.forEach((s) => s.classList.remove('active'))
    i = 0;
  }
  else {
    slide[i].classList.add('active') 
    i++   
  }
}


