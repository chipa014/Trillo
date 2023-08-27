import GalleryImage from "./GalleryImage";

import styles from "./Gallery.module.scss";

const Gallery = function () {
  const images = [
    { src: "hotel-1.jpg", alt: "Beautiful hotel" },
    { src: "hotel-2.jpg", alt: "Beautiful hotel" },
    { src: "hotel-3.jpg", alt: "Beautiful hotel" },
  ];

  return (
    <div className={styles.gallery}>
      {images.map((image) => (
        <GalleryImage src={image.src} alt={image.alt} key={image.src} />
      ))}
    </div>
  );
};

export default Gallery;
