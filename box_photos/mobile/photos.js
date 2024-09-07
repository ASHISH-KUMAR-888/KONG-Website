"use strict";

let start_index, end_index, count = 0, name = "Default Name";

let images = document.querySelectorAll(".photos img");

let box = document.querySelector(".photos");

let title = document.querySelector(".name h2");

/*-----------------------------------*/


function start(e){
  start_index = e.touches[0].clientX;
}

/*-----------------------------------*/


function end(e){
  end_index = e.changedTouches[0].clientX;
 
  if(start_index > end_index + 50){
  
    if(count === 9){
        count = -1;
    }
        
     count++;   
        
     box.style.transform = `translateX(-${count * 100}%)`;
     
     console.log(count);
  }
  
  if(start_index < end_index - 50){
  
      if(count === 0){
          count = 10;
      }
      
      count--;
     
      box.style.transform = `translateX(-${count * 100}%)`;
      
  }
  
 
 
/*-----------------------------------*/

switch(count){
    
case 0:
name = "KONG CLASSIC";  
break;

case 1:
name = "KONG KING";  
break;

case 2:
name = "KONG EXTREME TIRES";  
break;

case 3:
name = "KONG PUPPY TIRES";  
break;

case 4:
name = "KONG EXTREME RING";  
break;

case 5:
name = "KONG AQUA";  
break;

case 6:
name = "KONG EXTREME GOODIE RIBBON";  
break;

case 7:
name = "KONG GOODIE RIBBON";  
break;

case 8:
name = "KONG EXTREME";  
break;

case 9:
name = "KONG PUPPY BINKIE";  
break;
    
}

title.innerHTML = name; 
  
  
}

/*-----------------------------------*/



box.addEventListener("touchstart", start);

box.addEventListener("touchend", end);



