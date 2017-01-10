/**
 * Created by sebpa on 04/12/2016.
 */

class Gallery {
    constructor() {
        this.images = [];
        this.currentPhotoId = 0;
        this.buildImagesArray();
        this.displayCurrentPhoto();
        this.setupNavigationListeners();
        this.setupPhotosListeners();
    }

    clickNavHandler(buttonId) {
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
        // gets url for the current photo and inserts it in proper place
        let currentPhotoSource = this.images[this.currentPhotoId].src;
        let $imgTag = document.getElementById("current-photo");
        $imgTag.setAttribute("src", currentPhotoSource)
    }

    setupNavigationListeners() {
        let $previousButton = document.getElementById("previous-button");
        let $nextButton = document.getElementById("next-button");
        $previousButton.addEventListener("click", () => {
            this.clickNavHandler($previousButton.id);
            this.displayCurrentPhoto();
        });
        $nextButton.addEventListener("click", () => {
            this.clickNavHandler($nextButton.id);
            this.displayCurrentPhoto();
        });
    }

    setupPhotosListeners() {
        let $photos = document.querySelectorAll("header > img");
        let photosArray = Array.prototype.slice.call($photos);
        photosArray.forEach((photo) => {
            photo.addEventListener("click", () => {
                this.currentPhotoId = photo.id;
                this.displayCurrentPhoto();
            })
        })
    }

    setupPhotosListeners2() {
        let $photos = document.querySelectorAll("header > img");
        let photosArray = Array.prototype.slice.call($photos);
        photosArray.forEach(function(photo) {
            photo.addEventListener("click", function() {
                this.currentPhotoId = photo.id;
                this.displayCurrentPhoto();
            }.bind(this))
        }.bind(this))
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let gallery = new Gallery();
});


