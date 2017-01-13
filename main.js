/**
 * Created by sebpa on 04/12/2016.
 */
const DELAY = 3000;

class Gallery {
    constructor() {
        this.images = [];
        this.currentPhotoId = 0;
        this.interval = null;
        this.buildImagesArray();
        this.displayCurrentPhoto();
        this.setupNavigationListeners();
        this.setupPhotosListeners();
        this.setupInterval();
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
            this.showPreviousPhoto();
            this.restartInterval(); //because we want to postpone auto change of photo
        });
        $nextButton.addEventListener("click", () => {
            this.showNextPhoto();
            this.restartInterval(); //because we want to postpone auto change of photo
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

    showNextPhoto() {
        this.currentPhotoId = (this.currentPhotoId + 1) % this.images.length;
        this.displayCurrentPhoto();
    }

    showPreviousPhoto() {
        if (this.currentPhotoId == 0) {
            this.currentPhotoId = this.images.length - 1;
        } else {
            this.currentPhotoId -= 1;
        }
        this.displayCurrentPhoto();
    }

    setupInterval() {
        this.interval = setInterval( () => {
            this.showNextPhoto();
        }, DELAY)
    }

    restartInterval() {
        clearInterval(this.interval);
        this.setupInterval();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let gallery = new Gallery();
});


