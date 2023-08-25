import Location from "./Location";
import StarRating from "./StarRating";
import UserRating from "./UserRating";

import styles from "./Overview.module.scss";

const Overview = function () {
  return (
    <div className={styles.overview}>
      <h1 className={styles.heading}>Hotel Las Palmas</h1>
      <StarRating rating="5" />
      <Location />
      <UserRating average="8.6" votes="429" />
    </div>
  );
};

export default Overview;
