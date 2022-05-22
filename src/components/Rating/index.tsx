import iconPlusSrc from "../../images/icon-plus.svg";
import iconMinusSrc from "../../images/icon-minus.svg";

import "./_style.scss";

type RatingProps = {
  score: number;
};
export default function Rating(props: RatingProps) {
  return (
    <div className="rating">
      <button className="rating__up__btn">
        <img src={iconPlusSrc} alt="" />
      </button>
      <span className="rating__score"> {props.score} </span>
      <button className="rating__down__btn">
        <img src={iconMinusSrc} alt="" />
      </button>
    </div>
  );
}
