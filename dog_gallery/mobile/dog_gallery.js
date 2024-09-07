"use strict";

import {photo_shuffle1,photo_shuffle2,photo_shuffle3,photo_shuffle4,photo_shuffle5,photo_shuffle6} from "../modules/module_dog_gallery.js";

let images = document.querySelectorAll(".dog_gallery img");



window.addEventListener("load", photo_shuffle1.bind("null", images[0], 1));


window.addEventListener("load", photo_shuffle2.bind("null", images[1], 2));

window.addEventListener("load", photo_shuffle3.bind("null", images[2], 3));

window.addEventListener("load", photo_shuffle4.bind("null", images[3], 4));

window.addEventListener("load", photo_shuffle5.bind("null", images[4], 5));

window.addEventListener("load", photo_shuffle6.bind("null", images[5], 6));

