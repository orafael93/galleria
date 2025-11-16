const updateArt = (art) => {
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
};

const handleCloseGalleryArt = () => {
  const overlay = document.querySelector(".overlay");
  const closeArt = document.querySelector(".close-art");

  closeArt.addEventListener("click", () => {
    overlay.style.display = "none";
  });
};

const handleShowGalleryArt = (art) => {
  const viewImage = document.querySelector(".view-image");
  const overlay = document.querySelector(".overlay");
  const overlayImage = overlay.querySelector("img");

  viewImage.addEventListener("click", () => {
    overlay.style.display = "block";

    overlayImage.src = art.images.hero.large;

    handleCloseGalleryArt();
  });
};

export const startSlidedhow = (allArts) => {
  const firstArt = allArts[3];

  updateArt(firstArt);

  handleShowGalleryArt(firstArt);
};
