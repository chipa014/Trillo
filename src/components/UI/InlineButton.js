import styles from "./InlineButton.module.scss";

const InlineButton = function (props) {
  return <button className={styles.btn}>{props.children}</button>;
};

export default InlineButton;
