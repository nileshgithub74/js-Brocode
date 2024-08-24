
const mybutton = document.getElementById("mybtn");
const myImg = document.getElementById("myimg");


mybutton.addEventListener("click", (evetn)=>{
    myImg.style.display = "none";
    mybutton.textContent = "show";

}) 