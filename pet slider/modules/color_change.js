"use strict";

function color_change(box, img, target, full_box, full_image){

for(let i=0; i<5; i++){

if(target === i){
    continue;
}

full_image[i].style.filter = "brightness(1)";
full_box[i].style.backgroundColor = "";
full_box[i].style.color = ""; 
    
    
}


/*------------------------------------*/


if(full_box[0].classList.contains("active_slider")){
 full_box[0].classList.remove("active_slider"); 
 
}


/*------------------------------------*/


if(full_image[0].classList.contains("active_slider_bright")){
 
full_image[0].classList.remove("active_slider_bright");     
    
}

/*------------------------------------*/


img.style.filter = "brightness(1000%)";
box.style.backgroundColor = "#D61C38";
box.style.color = "white"; 
    
}

export default color_change; 
