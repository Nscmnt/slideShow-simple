const slide = document.querySelectorAll('.slide')
let i = 0;

setInterval(() =>{
  if(i >= slide.length) {
    slide.forEach((s)=> s.classList.remove('active'))
    i = 0;
  }else{
    slide[i].classList.add('active')
    i++;
  }
  
},4000)

