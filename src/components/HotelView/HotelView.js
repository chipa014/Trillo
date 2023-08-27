import CallToAction from "./CallToAction";
import Detail from "./Detail/Detail";
import Gallery from "./Gallery/Gallery";
import Overview from "./Overview/Overview";

import styles from "./HotelView.module.scss";

const HotelView = function () {
  return (
    <main className={styles["hotel-view"]}>
      <Gallery />
      <Overview />
      <Detail />
      <CallToAction />
    </main>
  );
};

export default HotelView;
