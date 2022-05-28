import { ChangeEvent, FormEvent, useState } from "react";
import profileImage from "../../utilities/ProfileImage";
import "./_style.scss";

interface CommentInputPropsMethod {
  onSubmit: (value: string) => void;
}

export default function CommentInput(props: CommentInputPropsMethod) {
  const [comment, setComment] = useState("");
  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (comment) {
      props.onSubmit(comment);
      setComment("");
    }
  };
  return (
    <div className="comment__input">
      <div className="comment__input__img">
        <img src={profileImage("juliusomo")} />
      </div>
      <form onSubmit={onSubmit} className="comment__input__form">
        <textarea
          placeholder="Add a comment..."
          onChange={onChangeHandler}
          value={comment}
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
