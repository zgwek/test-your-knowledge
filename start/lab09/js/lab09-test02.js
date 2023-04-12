const photos = JSON.parse(content);

/* put your code after this */

// Modify lab09-test02.js in your editor. You will need to select the <section> 
// element that has an id=parent. Loop through the photos array and create 
// a <figure> element that will get appended to the parent element. You 
// may want to examine photos.json again to reacquaint yourself with its 
// structure.

let parent = document.getElementById("parent");
for (photo of photos){
    let figure = document.createElement("figure");
    figure.appendChild( createImage(photo) );
    figure.appendChild( createCaption(photo) );
    parent.appendChild(figure);
}

function createImage(photo){
    let image = document.createElement('img');
    image.setAttribute("src", `images/${photo.filename}`);
   image.setAttribute("alt", `${photo.title}`);
   return image;
}

function createCaption(photo) {
    let caption = document.createElement('figcaption');
 
    caption.appendChild( createHeader(photo) );
    caption.appendChild( createParagraph(photo) );
 
    createColorScheme(caption, photo);
    return caption;
 }

 