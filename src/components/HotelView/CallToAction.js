import ButtonDoubleText from "../UI/ButtonDoubleText";
import styles from "./CallToAction.module.scss";

const CallToAction = function () {
  return (
    <div className={styles.cta}>
      <h2 className={styles["book-now"]}>
        Good news! We have 4 free rooms for your selected dates!
      </h2>
      <ButtonDoubleText visible="Book now" invisible="Only 4 rooms left" />
    </div>
  );
};

export default CallToAction;
