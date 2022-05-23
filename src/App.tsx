import React, { SetStateAction, useState } from "react";
import Comment from "./components/Comment";
import CommentInput from "./components/CommentInput";
import "./App.scss";

import data from "./data.json";

function App() {
  const [comment, setComment] = useState(data.comments);

  const onSubmit = (value: string) => {
    setComment((currentComment) => {
      return [
        ...currentComment,
        {
          id: 2,
          content: value,
          createdAt: "just now",
          score: 0,
          user: {
            username: "juliusomo",
          },
          replies: [],
        },
      ];
    });
  };
  return (
    <div className="container">
      {comment.map((value, index) => {
        return <Comment {...value} key={value.id} />;
      })}

      <CommentInput onSubmit={onSubmit} />
    </div>
  );
}

export default App;
