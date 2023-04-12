/* add code after this comment */

// Use getElementById to add a border via CSS to the <ul> element with the 
// name "thumb-list".

let list1 = document.getElementById("thumb-list");
list1.style.border = "solid 1px #CCCCCC ";

// Use querySelector to set the value property of the <textarea> to the textContent 
// property of the <p> element
let textarea = document.querySelector("textarea");
textarea.value = document.querySelector("p").textContent;

// Use querySelectorAll to add a box shadow to each of the <img> elements 
// within the <ul> element. The CSS property name is box-shadow so the 
// JavaScript DOM property name will be boxShadow. To see a sample b shadow, look at the example for the box class in lab09-ex01.css. Remember 
// that you will need to use a loop. The result should look similar to that shown 
// in Figure 9.5.


//const item = document.querySelector("ul img ");
//item.style.boxShadow= "10px 20px 30px black";


const items = document.querySelectorAll("ul img ");
  for (let i of items) {
    i.style.boxShadow = "5px 15px 20px 1px black";
  }


// document.querySelector('#msg').value = document.querySelector('.box fieldset p').textContent;

// const images = document.querySelectorAll('#thumb-list img');
// for (let img of images) {
//     img.style.boxShadow = "6px 5px 20px 1px rgba(0,0,0,0.22)";
// }
