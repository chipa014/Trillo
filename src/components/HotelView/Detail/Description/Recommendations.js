import RecommendPhoto from "./RecommendPhoto";
import styles from "./Recommendations.module.css";

const Recommendations = function () {
  const photos = [
    { src: "user-3.jpg", alt: "Lucy" },
    { src: "user-4.jpg", alt: "Lucy's friend" },
    { src: "user-5.jpg", alt: "Lucy's friend" },
    { src: "user-6.jpg", alt: "Lucy's friend" },
  ];
  return (
    <div className={styles.recommend}>
      <p className={styles.count}>
        Lucy and 3 other friends recommend this hotel.
      </p>
      <div className={styles.friends}>
        {photos.map((photo) => (
          <RecommendPhoto src={photo.src} alt={photo.alt} key={photo.src} />
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
