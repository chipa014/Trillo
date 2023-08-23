import styles from "./RecommendPhoto.module.scss";

const RecommendPhoto = function (props) {
  return (
    <img
      src={require(`../../../../resources/img/${props.src}`)}
      alt={props.alt}
      className={styles.photo}
    />
  );
};

export default RecommendPhoto;
