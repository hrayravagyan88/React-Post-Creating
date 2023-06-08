import React from "react";
import PostItems from "./PostItems";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PostList = ({ posts, title, removePost }) => {
  if (!posts.length) {
    return (
      <div style={{ width: "1000px" }}>
        {" "}
        <h1 style={{ textAlign: "center" }}>No Posts</h1>
      </div>
    );
  }

  return (
    <div style={{ minWidth: "1000px" }}>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post) => (
          <CSSTransition
            key={post.id}
            timeout={500}
            classNames="post"
          >
            <PostItems removePost={removePost} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
