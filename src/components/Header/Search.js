import Icon from "../UI/Icon";

import styles from "./Search.module.scss";

const Search = function (props) {
  return (
    <form action="#" className={`${props.className} ${styles.search}`}>
      <input type="text" placeholder="Search hotels" className={styles.input} />
      <button className={styles.btn}>
        <Icon name="magnifying-glass" className={styles.icon} />
      </button>
    </form>
  );
};

export default Search;
