import Icon from "../../UI/Icon";
import styles from "./IconBox.module.scss";

const IconBox = function (props) {
  return (
    <div className={styles.box}>
      <Icon name={props.iconName} className={styles.icon} />
      <span className={styles.notification}>{props.notification}</span>
    </div>
  );
};

export default IconBox;
