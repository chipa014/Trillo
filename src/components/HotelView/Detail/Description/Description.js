import Advantage from "./Advantage";
import Recommendations from "./Recommendations";

import styles from "./Description.module.css";

const Description = function () {
  const advantages = [
    "Close to the beach",
    "Breakfast included",
    "Free airport shuttle",
    "Free wifi in all rooms",
    "Air conditioning and heating",
    "Pets allowed",
    "We speak all languages",
    "Perfect for families",
  ];
  return (
    <div className={styles.description}>
      <p className={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi
        dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut
        corporis incidunt deserunt quae architecto voluptate.
      </p>
      <p className={styles.paragraph}>
        Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto
        voluptate delectus, inventore iure aliquid aliquam.
      </p>
      <ul className={styles.list}>
        {advantages.map((advantage) => (
          <Advantage key={advantage}>{advantage}</Advantage>
        ))}
      </ul>
      <Recommendations />
    </div>
  );
};

export default Description;
