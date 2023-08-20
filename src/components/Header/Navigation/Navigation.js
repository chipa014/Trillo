import IconBox from "./IconBox";
import User from "./User";

import styles from "./Navigation.module.scss";

const Navigation = function () {
  return (
    <nav className={styles.nav}>
      <IconBox iconName="bookmark" notification={7} />
      <IconBox iconName="chat" notification={13} />
      <User src={require("../../../resources/img/user.jpg")} name="Jonas" />
    </nav>
  );
};

export default Navigation;
