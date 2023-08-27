import styles from "./Advantage.module.scss";

const Advantage = function (props) {
  return <li className={styles.item}>{props.children}</li>;
};

export default Advantage;
