let imageBox = document.querySelector(".image");
let image = document.querySelector("img")
let mainContain =  document.querySelector("main");
let clickPara =  document.querySelector("#para");
const music = new Audio('wildwoods.mp3');


imageBox.addEventListener("mouseenter",()=>{
    music.play();
    mainContain.classList.add("backcolor");
    if (clicked) {
        mainContain.classList.add("backcolor2");
    }

})
imageBox.addEventListener("mouseleave",()=>{
    mainContain.classList.remove("backcolor");
    mainContain.classList.remove("backcolor2");
    music.pause();
    
})
imageBox.addEventListener("click",()=>{
    clicked = true;
    music.play();
   mainContain.classList.add("backcolor2");
   clickPara.style.visibility = "hidden";
}) 
