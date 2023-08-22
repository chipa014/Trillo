import styles from "./GalleryImage.module.css";

const GalleryImage = function (props) {
  return (
    <figure className={styles.item}>
      <img
        src={require(`../../../resources/img/${props.src}`)}
        alt={props.alt}
        className={styles.photo}
      />
    </figure>
  );
};

export default GalleryImage;
