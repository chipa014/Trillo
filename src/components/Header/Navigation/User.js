import styles from "./User.module.css";

const User = function (props) {
  return (
    <div className={styles.user}>
      <img
        src={props.src}
        alt="User profile picture"
        className={styles["profile-pic"]}
      />
      <span className={styles.userName}>{props.name}</span>
    </div>
  );
};

export default User;
