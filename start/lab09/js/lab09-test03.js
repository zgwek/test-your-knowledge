/* add code after this comment */

document.addEventListener('DOMContentLoaded', function() {
    const panels = document.querySelectorAll(".panels .panel");
    for (let item of panels) {
    item.addEventListener("click", function () {
        this.classList.toggle('open');
    });
    }
    
   });