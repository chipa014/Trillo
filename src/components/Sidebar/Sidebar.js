import NavItem from "./NavItem";
import styles from "./Sidebar.module.css";

const Sidebar = function () {
  const navigation = [
    { icon: "home", text: "Hotel", active: true },
    { icon: "aircraft", text: "Flight" },
    { icon: "key", text: "Car rental" },
    { icon: "map", text: "Tours" },
  ];

  return (
    <nav className={styles.sidebar}>
      <ul className={styles.list}>
        {navigation.map((navItem) => (
          <NavItem
            icon={navItem.icon}
            active={navItem.active ?? false}
            key={navItem.text}
          >
            {navItem.text}
          </NavItem>
        ))}
      </ul>

      <div className={styles.legal}>
        &copy; 2017 by trillo. All rights reserved.
      </div>
    </nav>
  );
};

export default Sidebar;
