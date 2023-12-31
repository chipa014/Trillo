import Icon from "../UI/Icon";
import styles from "./NavItem.module.scss";

const NavItem = function (props) {
  return (
    <li className={`${styles.item} ${props.active && styles.active}`}>
      <button className={styles.link}>
        <Icon name={props.icon} className={styles.icon} />
        <span>{props.children}</span>
      </button>
    </li>
  );
};

export default NavItem;
