import iconPlusSrc from "../../images/icon-plus.svg";
import iconMinusSrc from "../../images/icon-minus.svg";

type RatingProps = {
  score: number;
};
export default function Rating(props: RatingProps) {
  return (
    <div className="rating">
      <button className="rating_up_btn">
        <img src={iconPlusSrc} alt="" />
      </button>
      <span className="rating__score"> {props.score} </span>
      <button className="rating_down_btn">
        <img src={iconMinusSrc} alt="" />
      </button>
    </div>
  );
}
