import styles from "./Review.module.scss";

const Review = function (props) {
  const dateStringify = function (date) {
    const month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ][date.getMonth()];

    let suffix = "th";
    if (Math.floor(date.getDate() / 10) !== 1) {
      switch (date.getDate() % 10) {
        case 1:
          suffix = "st";
          break;
        case 2:
          suffix = "nd";
          break;
        case 3:
          suffix = "rd";
          break;
        default:
          suffix = "th";
      }
    }

    return `${month} ${date.getDate()}${suffix}, ${date.getFullYear()}`;
  };

  const data = props.data;
  const photo = data.photo;
  const date = dateStringify(data.date);

  return (
    <figure className={styles.review}>
      <blockquote className={styles.text}>{data.text}</blockquote>
      <figcaption className={styles.user}>
        <img
          className={styles.photo}
          src={require(`../../../../resources/img/${photo.src}`)}
          alt={photo.alt}
        />
        <div className={styles.userbox}>
          <p className={styles.name}>{data.name}</p>
          <p className={styles.date}>{date}</p>
        </div>
        <div className={styles.rating}>{data.rating}</div>
      </figcaption>
    </figure>
  );
};

export default Review;
