import Gallery from "./Gallery/Gallery";
import Overview from "./Overview/Overview";

import styles from "./HotelView.module.css";

const HotelView = function () {
  return (
    <main className={styles["hotel-view"]}>
      <Gallery />
      <Overview />
    </main>
  );
};

export default HotelView;
