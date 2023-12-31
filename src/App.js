import Header from "./components/Header/Header";
import HotelView from "./components//HotelView/HotelView";
import Sidebar from "./components/Sidebar/Sidebar";

import styles from "./App.module.scss";

const App = function () {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <Sidebar className={styles.sidebar} />
        <HotelView className={styles["hotel-view"]} />
      </div>
    </div>
  );
};

export default App;
