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

  artYear.textContent = art.year;
  artText.textContent = art.description;
};

export const startSlidedhow = (allArts) => {
  const imagesWrapper = document.querySelector(".images-wrapper");
  imagesWrapper.style.display = "none";

  const slideshow = document.querySelector(".slideshow");
  slideshow.style.display = "block";

  const footerSlideshow = document.querySelector(".footer-slideshow");
  footerSlideshow.style.display = "block";

  const firstArt = allArts[0];

  updateArt(firstArt);
};
