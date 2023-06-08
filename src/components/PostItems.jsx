const PostItems = (props) => {
  return (
    <div className="post">
      <div className="post_content">
        <strong>{props.post.title}</strong>
      </div>
      <div className="post_content">
        <strong>{props.post.body}</strong>
      </div>
      <div className="post_btns">
        <button className="myBtn" onClick={() => props.removePost(props.post)}>
          delete
        </button>
      </div>
    </div>
  );
};

export default PostItems;
