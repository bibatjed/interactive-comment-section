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
      <div className="comment__rating"></div>
      <div className="comment__user">
        <div className="comment__user__image">
          <img src={props.user.image.png} />
        </div>
        <span className="comemnt__user__name">{props.user.username}</span>
      </div>
      <span className="comment__time">{props.createdAt}</span>

      <div className="comment__reply__button"></div>

      <div className="comment_message">
        <p>{props.content}</p>
      </div>
    </div>
  );
}
