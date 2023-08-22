import styles from "./InlineButton.module.css";

const InlineButton = function (props) {
  return <button className={styles.btn}>{props.children}</button>;
};

export default InlineButton;
