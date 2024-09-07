"use strict";

import color_change from "../modules/color_change.js";

let pet_slider = document.querySelectorAll(".pet_slider");

let pet_slider_img = document.querySelectorAll(".pet_slider img");


pet_slider[0].addEventListener("click",color_change.bind("null",pet_slider[0],pet_slider_img[0], 0, pet_slider,pet_slider_img ));

pet_slider[1].addEventListener("click",color_change.bind("null",pet_slider[1],pet_slider_img[1], 1,pet_slider,pet_slider_img));

pet_slider[2].addEventListener("click",color_change.bind("null",pet_slider[2],pet_slider_img[2], 2,pet_slider,pet_slider_img));

pet_slider[3].addEventListener("click",color_change.bind("null",pet_slider[3],pet_slider_img[3], 3,pet_slider,pet_slider_img));

pet_slider[4].addEventListener("click",color_change.bind("null",pet_slider[4],pet_slider_img[4], 4,pet_slider,pet_slider_img));
