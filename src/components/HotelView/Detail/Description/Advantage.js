import styles from "./Advantage.module.css";

const Advantage = function (props) {
  return <li className={styles.item}>{props.children}</li>;
};

export default Advantage;
