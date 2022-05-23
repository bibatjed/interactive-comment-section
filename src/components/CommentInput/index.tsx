import { ChangeEvent, FormEvent, useState } from "react";

interface CommentInputPropsMethod {
  onSubmit: (value: string) => void;
}

export default function CommentInput(props: CommentInputPropsMethod) {
  const [comment, setComment] = useState("");
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (comment) {
      props.onSubmit(comment);
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChangeHandler} value={comment}></input>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
