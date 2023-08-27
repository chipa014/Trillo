import Icon from "../../UI/Icon";
import InlineButton from "../../UI/InlineButton";

import styles from "./Location.module.scss";

const Location = function (props) {
  return (
    <div className={styles.location}>
      <Icon name="location-pin" className={styles.icon} />
      <InlineButton>Albufeira, Portugal</InlineButton>
    </div>
  );
};

export default Location;
