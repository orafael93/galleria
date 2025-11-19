import { galleryData } from "./script.js";

export let currentArt = null;

export const handleSlideshowDataSets = () => {
  const startSlideshowButton = document.querySelector(".start-slideshow");

  document.documentElement.dataset.active_slideshow =
    document.documentElement.dataset.active_slideshow === "true" ? false : true;

  const isSlideshowActive =
    document.documentElement.dataset.active_slideshow === "true";

  startSlideshowButton.textContent = isSlideshowActive
    ? "pause slideshow"
    : "start slideshow";

  return document.documentElement.dataset.active_slideshow === "true";
};

const handleLeftArrowState = (art) => {
  const prevArrow = document.querySelector(".prev-arrow");

  if (art.id === 1) {
    prevArrow.classList.add("disabled");
  }

  if (art.id !== 1 && prevArrow.classList.contains("disabled")) {
    prevArrow.classList.remove("disabled");
  }
};

export const updateArt = (art) => {
  currentArt = art;

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

  handleLeftArrowState(art);
};

export const handleCloseGalleryArt = () => {
  const overlay = document.querySelector(".overlay");
  const closeArt = document.querySelector(".close-art");

  closeArt.addEventListener("click", () => {
    overlay.style.display = "none";
  });
};

export const handleShowGalleryArt = (art) => {
  const viewImage = document.querySelector(".view-image");
  const overlay = document.querySelector(".overlay");
  const overlayImage = overlay.querySelector("img");

  viewImage.addEventListener("click", () => {
    overlay.style.display = "block";

    overlayImage.src = art.images.hero.large;

    handleCloseGalleryArt();
  });
};

export const handleSlideShow = () => {
  const startSlideshow = (art) => {
    updateArt(art);
    handleShowGalleryArt(art);
  };

  return {
    startSlideshow,
    canShowSlideshow: handleSlideshowDataSets,
  };
};

export const startSlideshow = (art) => {
  handleSlideshowDataSets();
  updateArt(art);
  handleShowGalleryArt(art);
};

export const handleNavigateBetweenSlideshows = () => {
  const prevArrow = document.querySelector(".prev-arrow");
  const nextArrow = document.querySelector(".next-arrow");

  const getArtToGo = (modifier) => galleryData[getCurrentArtIndex() + modifier];

  const getCurrentArtIndex = () =>
    galleryData.findIndex(
      (galleryDataArt) => galleryDataArt.id === currentArt.id
    );

  const goToPrevSlideshow = () => {
    const prevArt = getArtToGo(-1);

    if (prevArt) {
      scrollTo({
        top: 0,
        behavior: "smooth",
      });

      updateArt(prevArt);
    }
  };

  const goToNextSlideshow = () => {
    const nextArt = getArtToGo(+1);

    if (nextArt) {
      scrollTo({
        top: 0,
        behavior: "smooth",
      });
      updateArt(nextArt);
    }
  };

  if (prevArrow) {
    prevArrow.addEventListener("click", goToPrevSlideshow);
  }

  if (nextArrow) {
    nextArrow.addEventListener("click", goToNextSlideshow);
  }

  return {
    goToNextSlideshow,
    goToPrevSlideshow,
  };
};
