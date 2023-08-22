import Icon from "../../UI/Icon";

import styles from "./Star.module.css";

const Star = function (props) {
  console.log(props);
  return (
    <Icon name="star" className={`${styles.star} ${styles[props.className]}`} />
  );
};

export default Star;
