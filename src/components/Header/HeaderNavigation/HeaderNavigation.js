import IconBox from "./IconBox";
import User from "./User";

import styles from "./HeaderNavigation.module.scss";

const HeaderNavigation = function () {
  return (
    <nav className={styles.nav}>
      <IconBox iconName="bookmark" notification={7} />
      <IconBox iconName="chat" notification={13} />
      <User src={require("../../../resources/img/user.jpg")} name="Jonas" />
    </nav>
  );
};

export default HeaderNavigation;
