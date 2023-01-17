const face = document.querySelector('.face');
const btnBack = document.querySelector(".front-arrow");
const btnFront = document.querySelector(".back-arrow");
const btnShow = document.querySelector(".btn-show");
const btnClose = document.querySelector(".close-btn");
const modal = document.getElementById("modal");
const projects = document.querySelectorAll(".list-technologis");



const fliped = function(){
 face.classList.toggle('flip')
 document.querySelector("body").style.overflow = 'hidden'
}

const openModal = function(){
    modal.classList.toggle('hidden')
}







btnBack.addEventListener('click',fliped)
btnFront.addEventListener('click', fliped)
btnShow.addEventListener('click',openModal)
btnClose.addEventListener('click',openModal)