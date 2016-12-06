/**
 * Created by sebpa on 04/12/2016.
 */

class Gallery {
    constructor() {
        this.images = [];
        this.currentPhotoId = 0;
        this.buildImagesArray();
        this.displayCurrentPhoto();
        this.setupClickListeners();
    }

    clickHandler(buttonId) {
        switch (buttonId) {
            case 'next-button':
                if (this.currentPhotoId < this.images.length - 1) this.currentPhotoId++;
                break;
            case 'previous-button':
                if (this.currentPhotoId > 0) this.currentPhotoId--;
                break;
            default:
                break;
        }
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

    setupClickListeners() {
        // 1. pobrac z DOM przyciski previous-button i next-button
        // 2. dodać nasłuchiwanie na tych przyciskach
        // 3. uruchomić funkcję
        let $previousButton = document.getElementById("previous-button");
        let $nextButton = document.getElementById("next-button");
        $previousButton.addEventListener("click", () => {
            this.clickHandler($previousButton.id);
            this.displayCurrentPhoto();
        });
        $nextButton.addEventListener("click", () => {
            this.clickHandler($nextButton.id);
            this.displayCurrentPhoto();
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let gallery = new Gallery();
});


