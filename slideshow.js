const currentSlide = null;

export const handleSlideshowDataSets = () => {
  const startSlideshowButton = document.querySelector(".start-slideshow");

  document.documentElement.dataset.active_slideshow =
    document.documentElement.dataset.active_slideshow === "true" ? false : true;

  const isSlideshowActive =
    document.documentElement.dataset.active_slideshow === "true";

  startSlideshowButton.textContent = isSlideshowActive
    ? "pause slideshow"
    : "start slideshow";
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

export const startSlideshow = (art) => {
  handleSlideshowDataSets();
  updateArt(art);
  handleShowGalleryArt(art);
};
