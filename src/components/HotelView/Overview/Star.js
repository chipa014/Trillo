import Icon from "../../UI/Icon";

import styles from "./Star.module.scss";

const Star = function (props) {
  return (
    <Icon name="star" className={`${styles.star} ${styles[props.className]}`} />
  );
};

export default Star;
