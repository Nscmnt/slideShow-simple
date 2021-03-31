const slide = document.querySelectorAll('.slide')
let i = 0;

const h1 = document.querySelector('h1')

function typeWriter(element){

  const parseArray = element.innerText.split("")
  element.innerText = ""

  parseArray.forEach((letra, index) => {

    setTimeout(() => {

      element.innerText += letra;

    }, 75 * index)

  });

}

typeWriter(h1)

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


