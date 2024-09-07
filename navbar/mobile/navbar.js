"use strict";

let nav_container = document.querySelector(".nav_container");

let content_container = document.querySelector(".content_container");

let lines_container = document.querySelector(".lines_container");


lines_container.addEventListener("click", ()=>{


lines_container.classList.toggle("lines_container_rotate");

lines_container.classList.add("lines_container_shock"); 


setTimeout(()=>{

let rotate = window.getComputedStyle(lines_container);
 
 if(rotate.transform !== "none"){
     content_container.classList.add("content_container_display");
 }
  
    
}, 100);


setTimeout(()=>{

lines_container.classList.remove("lines_container_shock");

}, 100); 




setTimeout(()=>{
   
 content_container.classList.toggle("content_container_transition");
    
}, 150);   


setTimeout(()=>{

let rotate = window.getComputedStyle(lines_container);

if(rotate.transform === "none"){
 
content_container.classList.remove("content_container_display");
 
} 
    
}, 845);



    
});


window.addEventListener("scroll", ()=>{
    
let position_y = nav_container.getBoundingClientRect();

let scrolling_position_y = position_y.y + window.scrollY;

content_container.style.top = `${scrolling_position_y + 74}px`;   
    
});
