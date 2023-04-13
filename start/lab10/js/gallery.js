//import { GalleryItem } from "../../../done/lab10/js/gallery";

// add class definition here (must be before you use it)
class GalleryItem {
   // constructor replaces the function constructor
   constructor(id,name) {
   this.name = name;
   this.id = id;
   }

   render() {
      let list = document.createElement('li');
      list.textContent = this.name;
      //console.log(list.textContent);
      list.setAttribute('data-id', this.id);
      return list;
      }
   
}


// sample data using your class
const galleries = [
   new GalleryItem( 51,  "Albright-Knox Art Gallery" ),
   new GalleryItem( 18,  "Kunsthistorisches Museum"  ),
   new GalleryItem( 22,  "Belvedere Gallery"   ),  
   new GalleryItem( 42,  "Brooklyn Museum"   ),
   new GalleryItem( 27,  "J. Paul Getty Museum" ),
   new GalleryItem( 6,  "Metropolitan Museum of Art"  ),     
   new GalleryItem( 30,  "Rijksmuseum"  )
];

// add module code here
const getSampleGalleries = () => galleries;
export { GalleryItem, getSampleGalleries };