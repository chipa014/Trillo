import Navigation from "./Navigation/Navigation";
import Search from "./Search";

import styles from "./Header.module.css";

const Header = function () {
  return (
    <header className={styles.header}>
      <img
        src={require("../../resources/img/logo.png")}
        alt="Trillo Logo"
        className={styles.logo}
      />
      <Search className={styles.search}/>
      <Navigation className={styles.navigation}/>
    </header>
  );
};

export default Header;
