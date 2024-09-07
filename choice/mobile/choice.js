"use strict";

let choice_dog = document.querySelector(".choice_dog");

let choice_cat = document.querySelector(".choice_cat");

let dog_img = document.querySelector(".choice_dog img");

let cat_img = document.querySelector(".choice_cat img");


/*------------------DOG---------------*/
 


choice_dog.addEventListener("click", ()=>{

 
cat_img.style.filter = "brightness(1)";

choice_cat.style.backgroundColor = "white";

choice_cat.style.color = ""; 
 

/*------------------------------------*/
 
  
dog_img.style.filter = "brightness(1000%)";

choice_dog.style.backgroundColor = "#D61C38";

choice_dog.style.color = "white";
    
});



/*------------------CAT---------------*/
 



choice_cat.addEventListener("click", ()=>{

if(choice_dog.classList.contains("active_dog")){
    choice_dog.classList.remove("active_dog");
}


if(dog_img.classList.remove("active_dog_bright")){
    
 dog_img.classList.remove("dog_img"); 
}

/*------------------------------------*/
 
  
  
dog_img.style.filter = "brightness(1)";

choice_dog.style.backgroundColor = "white";

choice_dog.style.color = "";  
  
  
/*------------------------------------*/
     
cat_img.style.filter = "brightness(1000%)";

choice_cat.style.backgroundColor = "#D61C38";

choice_cat.style.color = "white";
    
});

