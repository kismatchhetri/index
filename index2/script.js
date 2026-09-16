let mode = document.querySelector(".right_nav");
let img = mode.firstElementChild;
let ul = document.querySelector("ul").firstElementChild;
let body = document.querySelector("body");
let skills = document.querySelectorAll(".pop")
    let color = "light";
    let music = "play";
    const audio = new Audio('aipodcast.mp3');
    const click = new Audio('click.mp3');
    const pop = new Audio('pop.mp3');

mode.addEventListener("click",()=>{
    if(color == "light"){
        img.src="images.png";
        body.classList.add("dark");
        body.classList.remove("light");
        color = "dark";
        ul.src="playdark.png";
        click.play();
       
    }else if(color == "dark"){
        body.classList.add("light");
        body.classList.remove("dark");
        color ="light"
        img.src="light.png";
         ul.src="play.png";
         click.play();
    }
})
ul.addEventListener("click",()=>{
    if(music == "play"){
      audio.play();
      click.play();
      ul.src="wave.png";
      music = "stop";
    }else if(music == "stop"){
      audio.pause();
      ul.src="play.png";
    music="play"
    }
      
})

skills.forEach((val)=>{
    val.addEventListener("mouseover",()=>{
        pop.play();
    })
})