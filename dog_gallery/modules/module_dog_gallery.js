"use strict";

let timing1 = 3, timing2 = 20, timing3 = 40, timing4 = 10, timing5 = 30 , timing6 = 50;

let Result1,Result2,Result3,Result4,Result5,Result6;

 
Result1 = Result2 = Result3 = Result4 = Result5 = Result6 = 0;
 
 



const gallery_one = [

"dog_gallery/images/dogs/one/1.jpg",

"dog_gallery/images/dogs/one/2.jpg",

"dog_gallery/images/dogs/one/3.jpg",

"dog_gallery/images/dogs/one/4.jpg",

"dog_gallery/images/dogs/one/5.jpg"

];


const gallery_two = [

"dog_gallery/images/dogs/two/1.jpg",

"dog_gallery/images/dogs/two/2.jpg",

"dog_gallery/images/dogs/two/3.jpg",

"dog_gallery/images/dogs/two/4.jpg",

"dog_gallery/images/dogs/two/5.jpg"

];


const gallery_three = [

"dog_gallery/images/dogs/three/1.jpg",

"dog_gallery/images/dogs/three/2.jpg",

"dog_gallery/images/dogs/three/3.jpg",

"dog_gallery/images/dogs/three/4.jpg",

"dog_gallery/images/dogs/three/5.jpg"

];


const gallery_four = [

"dog_gallery/images/dogs/four/1.jpg",

"dog_gallery/images/dogs/four/2.jpg",

"dog_gallery/images/dogs/four/3.jpg",

"dog_gallery/images/dogs/four/4.jpg",

"dog_gallery/images/dogs/four/5.jpg"

];


const gallery_five = [

"dog_gallery/images/dogs/five/1.jpg",

"dog_gallery/images/dogs/five/2.jpg",

"dog_gallery/images/dogs/five/3.jpg",

"dog_gallery/images/dogs/five/4.jpg",

"dog_gallery/images/dogs/five/5.jpg"

];


const gallery_six = [

"dog_gallery/images/dogs/six/1.jpg",

"dog_gallery/images/dogs/six/2.jpg",

"dog_gallery/images/dogs/six/3.jpg",

"dog_gallery/images/dogs/six/4.jpg",

"dog_gallery/images/dogs/six/5.jpg"

];


let pic1 = gallery_one, pic2 = gallery_two, pic3 = gallery_three, pic4 = gallery_four, pic5 = gallery_five, pic6 = gallery_six;



export function photo_shuffle1(image, num){
     
setInterval(()=>{

if(Result1 === 5){
    Result1 = 0;
}

image.src = pic1[Result1];

Result1++;
    
}, timing1 * 1000);
     
    
}



export function photo_shuffle2(image, num){
    
setInterval(()=>{

if(Result2 === 5){
    Result2 = 0;
}

image.src = pic2[Result2];

Result2++;
    
}, timing2 * 1000);
     
    
}



export function photo_shuffle3(image, num){
    
setInterval(()=>{

if(Result3 === 5){
    Result3 = 0;
}

image.src = pic3[Result3];

Result3++;
    
}, timing3 * 1000);
     
    
}



export function photo_shuffle4(image, num){
    
setInterval(()=>{

if(Result4 === 5){
    Result4 = 0;
}

image.src = pic4[Result4];

Result4++;
    
}, timing4 * 1000);
     
    
}



export function photo_shuffle5(image, num){
    
setInterval(()=>{

if(Result5 === 5){
    Result5 = 0;
}

image.src = pic5[Result5];

Result5++;
    
}, timing5 * 1000);
     
    
}



export function photo_shuffle6(image, num){
    
setInterval(()=>{

if(Result6 === 5){
    Result6 = 0;
}

image.src = pic6[Result6];

Result6++;
    
}, timing6 * 1000);
     
    
}







