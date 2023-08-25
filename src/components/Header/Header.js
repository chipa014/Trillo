import HeaderNavigation from "./HeaderNavigation/HeaderNavigation";
import Search from "./Search";

import styles from "./Header.module.scss";

const Header = function () {
  return (
    <header className={styles.header}>
      <img
        src={require("../../resources/img/logo.png")}
        alt="Trillo Logo"
        className={styles.logo}
      />
      <Search className={styles.search} />
      <HeaderNavigation className={styles.navigation} />
    </header>
  );
};

export default Header;
