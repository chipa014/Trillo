import Description from "./Description/Description";
import UserReviews from "./UserReviews/UserReviews";

import styles from "./Detail.module.scss";

const Detail = function () {
  return (
    <div className={styles.detail}>
      <Description />
      <UserReviews />
    </div>
  );
};

export default Detail;
