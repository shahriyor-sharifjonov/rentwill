import * as functions from "./modules/functions.js";

functions.isWebp();

window.openPopup = function(popup){
    const item = document.getElementById(popup);
   item.classList.add('active');
   document.body.style.overflowY = "hidden";
}

window.popupClose = function(){
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
        popup.classList.remove('active');
    });
    document.body.style.overflowY = "visible";
}