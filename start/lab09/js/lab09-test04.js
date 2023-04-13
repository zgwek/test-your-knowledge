document.addEventListener("DOMContentLoaded", function() { 

    /* add code after this comment */
const thumbnails = document.querySelectorAll("#thumbBox img");
const largeImg = document.querySelector("figure img");
for (let thumb of thumbnails) {
    thumb.addEventListener("click", function () {
        let smImg = thumb.getAttribute('src');
        largeImg.setAttribute("src", smImg.replace("small","medium"))
        
        
        document.querySelector('figcaption em').textContent = img.getAttribute('title') ;
        document.querySelector('figcaption span').textContent = img.getAttribute('alt'); 
        });
}


});