import InlineButton from "../../../UI/InlineButton";
import Review from "./Review";
import styles from "./UserReviews.module.scss";

const UserReviews = function () {
  const parseDate = function (dateString) {
    return new Date(Date.parse(dateString));
  };
  const reviews = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.",
      name: "Nick Smith",
      photo: {
        src: "user-1.jpg",
        alt: "Nick Smith, a user",
      },
      date: parseDate("2017-02-23"),
      rating: 7.8,
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.",
      name: "Mary Thomas",
      photo: {
        src: "user-2.jpg",
        alt: "Mary Thomas, a user",
      },
      date: parseDate("2017-09-13"),
      rating: 9.3,
    },
  ];

  return (
    <div className={styles.reviews}>
      {reviews.map((review) => (
        <Review data={review} key={review.name} />
      ))}
      <InlineButton>
        Show all <span>&rarr;</span>
      </InlineButton>
    </div>
  );
};

export default UserReviews;

//Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
//Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.
