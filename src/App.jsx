import { useState, useEffect } from "react";
import "./App.css";
import PostList from "./components/PostList";
import Postform from "./components/Postform";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/Modal/MyModal";
import { usePosts } from "./components/hooks/usePosts";
import PostService from "./components/Api/PostService";
import Loader from "./components/Loader/loader";
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "aaa", body: "zzz" },
    { id: 2, title: "ccc", body: "aaa" },
    { id: 3, title: "bb", body: "ccc" },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [visible, setVisible] = useState(false);
  const [isPostLoading, setisPostLoading] = useState(false);
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() => {
    fetchPosts();
  }, []);


  const createPost = (post) => {
    setPosts([...posts, post]);
    setVisible(false)
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  async function fetchPosts() {
    setisPostLoading(true);
    const response = await PostService.getAll();
    setPosts(response);
    setisPostLoading(false);
  }

  return (
    <div className="App">
      <button
        className="myBtn"
        style={{ marginTop: "20px" }}
        onClick={() => setVisible(true)}
      >
        Create Post
      </button>
      <MyModal visible={visible} setVisible={setVisible}>
        <Postform create={createPost} />
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter} />
      {isPostLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          removePost={removePost}
          posts={sortedAndSearchPosts}
          tytle="Posts title"
        />
      )}
    </div>
  );
}

export default App;
