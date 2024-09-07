"use strict";

let result = 0;

let pet_slider_intro = document.querySelectorAll(".pet_slider p");


let choice_cat_switcher = document.querySelector(".choice_cat");

let choice_dog_switcher = document.querySelector(".choice_dog");



let pet_slider_image = document.querySelectorAll(".pet_slider img");






const pet_cat = [
{
 img: "pet slider/images/cat/ball.jpg",
 name: "Explore"   
}, 

{
 img: "pet slider/images/cat/cat.jpg",
 name: "Hide & Pounce"     
}, 

{
 img: "pet slider/images/cat/rope.jpg",
 name: "Interactive Teaser"     
}, 

{
 img: "pet slider/images/cat/puzzle.jpg",
 name: "Puzzle"      
}];



const pet_dog = [
{
 img: "pet slider/images/dog/ball.jpg",
 name: "Fetch & Retrieve"   
}, 

{
 img: "pet slider/images/dog/bite.jpg",
 name: "Treating"      
}, 

{
 img: "pet slider/images/dog/bone.jpg",
 name: "Chew"      
}, 

{
 img: "pet slider/images/dog/rope.jpg",
 name: "Interactive & Tug"      
}];








choice_cat_switcher.addEventListener("click", ()=>{

result = 1;   

if(result === 1){
  
for(let i=1; i<=4; i++){
    
pet_slider_image[i].src = pet_cat[i-1].img;

pet_slider_intro[i].innerHTML = pet_cat[i-1].name;
}}

});


choice_dog_switcher.addEventListener("click", ()=>{
  
  result = 0;
  
if(result === 0){
      
for(let i=1; i<=4; i++){
      
pet_slider_image[i].src = pet_dog[i-1].img;
       
pet_slider_intro[i].innerHTML = pet_dog[i-1].name;  
          
}}
});
