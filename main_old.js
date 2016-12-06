/**
 * Created by sebpa on 04/12/2016.
 */
class Gallery {
    constructor() {
        this.images = [];
        this.currentPhotoId = 0;
        this.buildImagesArray();
        this.displayCurrentPhoto();
    }

    buildImagesArray() {
        for (let i = 0; i < 5; i++) {
            this.images.push({
                id: i,
                src: "./assets/photo" + i + ".jpg"
            })
        }
    }

    displayCurrentPhoto() {
        // 1. pobierz zdjecie z tablicy zdjec na podstawie aktualnego Id (currentPhotoId)
        // 2. wyswietlic zdjecie na stronie
        let currentPhotoSource = this.images[this.currentPhotoId].src;
        let $imgTag = document.getElementById("current-photo");
        $imgTag.setAttribute("src", currentPhotoSource)
    }


}

function setNewId(id) {
    gallery.currentPhotoId = id;
    gallery.displayCurrentPhoto();
}

let gallery = new Gallery();

document.addEventListener("DOMContentLoaded", function () {

});


/*let variable = 5;
 console.log("zmienna : " + variable);

 function suma(wartosc1, wartosc2) {
 return wartosc1 + wartosc2;
 }

 console.log(suma(13,34))*/

