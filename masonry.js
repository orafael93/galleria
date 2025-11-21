import { galleryData } from "./script.js";
import { handleSlideShow } from "./slideshow.js";

const gridContainer = document.querySelector(".images-wrapper");

const getDatasetToGridItem = (gridItem) =>
  gridItem.name.toLowerCase().split(" ").join("-");

const createGridItems = async (gridItems) => {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < gridItems.length; i++) {
    const { canShowSlideshow, startSlideshow } = handleSlideShow();

    const currentGridItem = gridItems[i];

    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");

    gridItem.addEventListener("click", () => {
      if (canShowSlideshow()) {
        startSlideshow(currentGridItem);
        scrollTo({
          top: 0,
        });
      }
    });

    gridItem.dataset.artName = getDatasetToGridItem(currentGridItem);

    const artistContent = document.createElement("div");
    artistContent.classList.add("art-name-and-artist");

    const artistName = document.createElement("p");
    artistName.classList.add("artist-name");
    artistName.innerText = currentGridItem.artist.name;

    const artName = document.createElement("h3");
    artName.classList.add("art-name");
    artName.innerText = currentGridItem.name;

    artistContent.appendChild(artName);
    artistContent.appendChild(artistName);

    const artThumbnail = new Image();

    artThumbnail.src = currentGridItem.images.thumbnail;
    artThumbnail.setAttribute("loading", "lazy");

    gridItem.appendChild(artThumbnail);
    gridItem.appendChild(artistContent);

    fragment.appendChild(gridItem);
  }

  gridContainer.appendChild(fragment);
};

export const createMasonryGrid = () => {
  const containerWidth = gridContainer.clientWidth;

  const minGridItemSize =
    document.documentElement.clientWidth < 400 ? 250 : 327;

  const gridColumns = Math.floor(containerWidth / minGridItemSize);

  const gridItemSize = containerWidth / gridColumns;

  const allGridItems = document.querySelectorAll(".grid-item");

  const columnHeight = Array.from({ length: gridColumns }).fill(0);

  allGridItems.forEach((gridItem) => {
    gridItem.style.width = `calc(min(${gridItemSize}px, 100%))`;

    const minColumnHeight = columnHeight.indexOf(Math.min(...columnHeight));

    const translateX = minColumnHeight * gridItemSize;
    const translateY = columnHeight[minColumnHeight];

    gridItem.style.transform = `translate(${translateX}px, ${translateY}px)`;

    columnHeight[minColumnHeight] += gridItem.offsetHeight;
  });

  gridContainer.style.height = `${Math.max(...columnHeight)}px`;
};

export const initializeMasonryGrid = async () => {
  createGridItems(galleryData);

  const allGridItemElements = document.querySelectorAll(".grid-item");

  const arrayOfPromises = Array.from(allGridItemElements).map((gridItem) => {
    const gridItemFirstChild = gridItem.firstChild;

    return new Promise((resolve) => {
      gridItemFirstChild.onload = () => {
        resolve(gridItem);
      };
    });
  });

  await Promise.all(arrayOfPromises);

  createMasonryGrid();
};
