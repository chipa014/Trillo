import styles from "./ButtonDoubleText.module.scss";

const ButtonDoubleText = function (props) {
  return (
    <button className={styles.button}>
      <span className={styles.visible}>{props.visible}</span>
      <span className={styles.invisible}>{props.invisible}</span>
    </button>
  );
};

export default ButtonDoubleText;
