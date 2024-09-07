"use strict";

let start_point, end_point, counter = 0;


let dog_slider = document.querySelector(".dog_slider");


let dog_slider_main = document.querySelector(".dog_slider_main");



/*-----------Start_Point--------------*/


dog_slider_main.addEventListener("touchstart", (e)=>{

 start_point = e.touches[0].clientX;
   
});

/*------------End_Point---------------*/


dog_slider_main.addEventListener("touchend", (e)=>{
  
end_point = e.changedTouches[0].clientX;

if(start_point > end_point + 50){
    
    if(counter === 2){
        counter = -1;
    }
    
    counter++;
    
    dog_slider.style.transform = `translateX(-${counter * 80}%)`;
}

/*------------------------------------*/



if(start_point < end_point - 50){
   
   if(counter === 0){
       counter = 3;
   }
   
    counter--;
    
    dog_slider.style.transform = `translateX(-${counter * 80}%)`;
    
} 
    
});
