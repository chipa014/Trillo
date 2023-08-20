import Icons from "../../resources/sprite.svg";

const Icon = function (props) {
  return (
    <svg className={props.className}>
      <use xlinkHref={`${Icons}#icon-${props.name}`} />
    </svg>
  );
};

export default Icon;
