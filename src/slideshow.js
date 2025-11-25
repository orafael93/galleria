import { galleryData } from "./index.js";

const prevArrow = `
  <svg
            width="26"
            height="24"
            viewBox="0 0 26 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="prev-arrow"
          >
            <path
              d="M3.6275 12.1122L24.1656 22.3817V1.84265L3.6275 12.1122Z"
              stroke="black"
              stroke-width="2"
            />
            <rect
              x="-0.371478"
              y="0.371478"
              width="0.742956"
              height="23.0316"
              transform="matrix(-1 0 0 1 0.742939 0)"
              stroke="black"
              stroke-width="0.742956"
            />
          </svg>
`;

const nextArrow = `
  <svg
    width="26"
    height="24"
    viewBox="0 0 26 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="next-arrow">
    <path
      d="M21.5381 12.1122L1 22.3817V1.84265L21.5381 12.1122Z"
      stroke="black"
      stroke-width="2"
    />
    <rect
      x="24.0512"
      y="0.371478"
      width="0.742956"
      height="23.0316"
      stroke="black"
      stroke-width="0.742956"
    />
  </svg>
`;

class HandleSlideShow {
  constructor() {
    this.currentArt = null;
    this.slideshowTimer = 0;
    this.intervalTimerId = null;

    this.createOverlayContent();
    this.createFooterContent();
  }

  canShowSlideshow() {
    const startSlideshowButton = document.querySelector(".start-slideshow");

    document.documentElement.dataset.active_slideshow =
      document.documentElement.dataset.active_slideshow === "true"
        ? false
        : true;

    const isSlideshowActive =
      document.documentElement.dataset.active_slideshow === "true";

    startSlideshowButton.textContent = isSlideshowActive
      ? "pause slideshow"
      : "start slideshow";

    return document.documentElement.dataset.active_slideshow === "true";
  }

  startSlideshow(art) {
    if (this.canShowSlideshow()) {
      this.updateArt(art);
      this.handleShowGalleryArt(art);

      this.intervalTimerId = setInterval(() => {
        this.slideshowTimer += 1;
      }, 1000);

      return;
    }

    if (this.intervalTimerId) {
      clearInterval(this.intervalTimerId);
    }
  }

  handleShowGalleryArt() {
    const viewImage = document.querySelector(".view-image");
    const overlay = document.querySelector(".overlay");
    const overlayImage = overlay.querySelector("img");

    viewImage.addEventListener("click", () => {
      overlay.style.display = "block";

      overlayImage.src = this.currentArt.images.hero.large;

      this.handleCloseGalleryArt();
    });
  }

  updateArt(art) {
    this.currentArt = art;

    const mainImage = document.querySelector(".main-image");

    mainImage.src = art.images.hero.large;

    const artContent = document.querySelector(".art-content");
    const artName = artContent.querySelector(".art-name");
    const artistName = artContent.querySelector(".artist-name");

    artName.textContent = art.name;
    artistName.textContent = art.artist.name;

    const artistImage = document.querySelector(".artist img");
    artistImage.src = art.artist.image;

    const artDescription = document.querySelector(".art-description");
    const artYear = artDescription.querySelector(".year");
    const artText = artDescription.querySelector(".art-text-wrapper p");
    const source = artDescription.querySelector(".source");

    artYear.textContent = art.year;
    artText.textContent = art.description;
    source.href = art.source;

    const currentSlideArt = document.querySelector(".current-slide-art");
    const currentSlideArtName = currentSlideArt.querySelector("p");
    const currentSlideArtistName = currentSlideArt.querySelector("span");

    currentSlideArtName.textContent = art.name;
    currentSlideArtistName.textContent = art.artist.name;

    this.handleLeftArrowState(art);
  }

  handleCloseGalleryArt() {
    const overlay = document.querySelector(".overlay");
    const closeArt = document.querySelector(".close-art");

    closeArt.addEventListener("click", () => {
      overlay.style.display = "none";
    });
  }

  handleLeftArrowState() {
    const prevArrow = document.querySelector(".prev-arrow");

    // if (this.currentArt.id === 1) {
    //   prevArrow.classList.add("disabled");
    // }

    // if (this.currentArt.id !== 1 && prevArrow.classList.contains("disabled")) {
    //   prevArrow.classList.remove("disabled");
    // }
  }

  handleNavigateBetweenSlideshows() {
    const prevArrow = document.querySelector(".prev-arrow");
    const nextArrow = document.querySelector(".next-arrow");

    const getArtToGo = (modifier) =>
      galleryData[getCurrentArtIndex() + modifier];

    const getCurrentArtIndex = () =>
      galleryData.findIndex(
        (galleryDataArt) => galleryDataArt.id === slideshow.currentArt.id
      );

    const goToPrevSlideshow = () => {
      const prevArt = getArtToGo(-1);

      if (prevArt) {
        scrollTo({
          top: 0,
          behavior: "smooth",
        });

        slideshow.updateArt(prevArt);
      }
    };

    const goToNextSlideshow = () => {
      const nextArt = getArtToGo(+1);

      if (nextArt) {
        scrollTo({
          top: 0,
          behavior: "smooth",
        });

        slideshow.updateArt(nextArt);
      }
    };

    if (prevArrow) {
      prevArrow.addEventListener("click", goToPrevSlideshow);
    }

    if (nextArrow) {
      nextArrow.addEventListener("click", goToNextSlideshow);
    }
  }

  createOverlayContent() {
    const container = document.querySelector(".container");

    const overlayWrapper = document.createElement("div");
    overlayWrapper.classList.add("overlay");

    const artContent = document.createElement("div");
    artContent.classList.add("art-content");

    overlayWrapper.appendChild(artContent);

    const art = document.createElement("div");
    art.classList.add("art");

    const closeArt = document.createElement("span");
    closeArt.classList.add("close-art");
    closeArt.textContent = "Close";

    const imageGallery = document.createElement("img");

    art.appendChild(closeArt);
    art.appendChild(imageGallery);
    artContent.appendChild(art);

    container.insertAdjacentElement("afterend", overlayWrapper);
  }

  createFooterContent() {
    const container = document.querySelector(".overlay");

    const footerSlideshow = document.createElement("footer");
    footerSlideshow.classList.add("footer-slideshow");

    const progressBar = document.createElement("div");
    progressBar.classList.add("progress-bar");

    const currentProgress = document.createElement("span");
    currentProgress.classList.add("current-progress");
    progressBar.appendChild(currentProgress);

    const footerContent = document.createElement("div");
    footerContent.classList.add("footer-content");
    const currentSlideArt = document.createElement("div");
    currentSlideArt.classList.add("current-slide-art");
    const slideArtText = document.createElement("p");
    const slideArtSpan = document.createElement("span");

    currentSlideArt.appendChild(slideArtText);
    currentSlideArt.appendChild(slideArtSpan);

    const nextPrevArrows = document.createElement("div");
    nextPrevArrows.classList.add("next-prev-arrows");
    nextPrevArrows.innerHTML += prevArrow;
    nextPrevArrows.innerHTML += nextArrow;

    footerContent.appendChild(currentSlideArt);
    footerContent.appendChild(nextPrevArrows);

    footerSlideshow.appendChild(progressBar);
    footerSlideshow.appendChild(footerContent);

    container.insertAdjacentElement("afterend", footerSlideshow);
  }
}

export const slideshow = new HandleSlideShow();
