import Icon from "../UI/Icon";
import styles from "./NavItem.module.scss";

const NavItem = function (props) {
  console.log(props);
  return (
    <li className={`${styles.item} ${props.active && styles.active}`}>
      <a href="#" className={styles.link}>
        <Icon name={props.icon} className={styles.icon} />
        <span>{props.children}</span>
      </a>
    </li>
  );
};

export default NavItem;
