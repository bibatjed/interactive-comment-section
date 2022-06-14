import "./_style.scss";
import replySrc from "../../images/icon-reply.svg";
import profileImage from "../../utilities/ProfileImage";
import Rating from "../Rating";
import { useState } from "react";
type User = {
  username: string;
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
  isReply?: boolean;
  replies?: Replies[];
};

export default function Comment(props: CommentProps) {
  return (
    <>
      <div className={`comment ${props.isReply ? "reply" : ""}`}>
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
      {props.replies?.map((value) => {
        return <Comment key={value.id} isReply={true} {...value} />;
      })}
    </>
  );
}
