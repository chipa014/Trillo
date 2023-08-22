import styles from "./UserRating.module.css";

const UserRating = function (props) {
  return (
    <div className={styles.rating}>
      <div className={styles.average}>{props.average}</div>
      <div className={styles.votes}>{props.votes} votes</div>
    </div>
  );
};

export default UserRating;
