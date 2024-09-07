"use strict";

let Start, End, Counter = 0, translate = 85;


let Width = innerWidth;

if(Width >= 340){
    translate = 70;
}

if(Width >= 768){
   translate = 32; 
}



let product_wrapper = document.querySelector(".product_wrapper");

let product = document.querySelector(".product");

let product_pic = document.querySelectorAll(".product_pic");

/*----------------Start---------------*/


product_wrapper.addEventListener("touchstart", (e)=>{

Start = e.touches[0].clientX;
    
})


/*-----------------End----------------*/



product_wrapper.addEventListener("touchend", (e)=>{
 
End = e.changedTouches[0].clientX; 

if(Start > End + 50){

if(Counter >= product_pic.length - 1){
    Counter = -1;
}
   Counter++; 
   
   product.style.transform = `translateX(-${Counter * translate}%)`;
        
}

/*------------------------------------*/



if(Start < End - 50){
    
if(Counter === 0){
   Counter = 7;
}   
  
    Counter--;
    
    product.style.transform = `translateX(-${Counter * translate}%)`;
    
}
    
});
