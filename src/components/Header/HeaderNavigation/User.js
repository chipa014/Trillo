import styles from "./User.module.scss";

const User = function (props) {
  return (
    <div className={styles.user}>
      <img
        src={props.src}
        alt="User profile"
        className={styles["profile-pic"]}
      />
      <span className={styles.userName}>{props.name}</span>
    </div>
  );
};

export default User;
