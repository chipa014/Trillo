import Star from "./Star";
import styles from "./StarRating.module.scss";

const StarRating = function (props) {
  const fullStars = Math.round(+props.rating);
  const emptyStars = 5 - fullStars;
  return (
    <div className={styles.stars}>
      {Array.from({ length: fullStars }, (_, i) => (
        <Star className="full" key={i} />
      ))}
      {Array.from({ length: emptyStars }, (_, i) => (
        <Star className="empty" key={i + 10} />
      ))}
    </div>
  );
};

export default StarRating;
