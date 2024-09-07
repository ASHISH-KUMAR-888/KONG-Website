"use strict";

let blur_box = document.querySelectorAll(".blur_center");

let blur_images = document.querySelectorAll(".blur_image img");

/*--------------Image1----------------*/


blur_box[0].addEventListener("click",()=>{

blur_images[1].classList.remove("blur_bright");

blur_images[1].classList.add("blur_dog");

/*------------------------------------*/


blur_images[0].classList.remove("blur_dog");
 
blur_images[0].classList.add("blur_bright");
    
});


/*------------Image2-----------------*/




blur_box[1].addEventListener("click", ()=>{


blur_images[0].classList.remove("blur_bright");

blur_images[0].classList.add("blur_dog");

/*------------------------------------*/


blur_images[1].classList.remove("blur_dog");

blur_images[1].classList.add("blur_bright");
        
});













