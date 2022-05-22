import "./_style.scss";
import replySrc from "../../images/icon-reply.svg";
import profileImage from "../../utilities/ProfileImage";
import Rating from "../Rating";
type Image = {
  png: string;
  webp: string;
};

type User = {
  username: string;
  image: Image;
};

interface Replies extends CommentProps {
  replyingTo: string;
}
type CommentProps = {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replies?: Replies[];
};

export default function Comment(props: CommentProps) {
  return (
    <div className="comment">
      <div className="comment__rating">
        <Rating score={props.score} />
      </div>
      <div className="comment__content">
        <div className="comment__content__header">
          <div className="comment__content__header__user">
            <div className="comment__content__header__user__image">
              <img
                src={profileImage(props.user.username)}
                alt={props.user.username}
              />
            </div>
            <span className="comment__content__header__user__name">
              {props.user.username}
            </span>
          </div>
          <span className="comment__content__header__time">
            {props.createdAt}
          </span>

          <div className="comment__content__header__reply">
            <button>
              <img src={replySrc} alt="replybtn" />
              <span>Reply</span>
            </button>
          </div>
        </div>

        <div className="comment__content__message">
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
}
