import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Card from "../components/Card";

const ListPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  const getPosts = async () => {
    axios.get("http://localhost:3001/posts").then((res) => {
      setPosts(res.data);
      setLoading(false);
    });
  };

  const handleDelete = (e, id) => {
    e.stopPropagation();

    // 삭제
    axios.delete(`http://localhost:3001/posts/${id}`).then(() => {
      setPosts((prev) => prev.filter((post) => post.id !== id));
    });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h1>Blogs</h1>
        <div>
          <Link to="/blogs/create" className="btn btn-success">
            Create New
          </Link>
        </div>
      </div>
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : posts.length > 0 ? (
        posts.map((post) => {
          return (
            <Card
              key={post.id}
              title={post.title}
              onclick={() => history.push("/blogs/edit")}
            >
              <div>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={(e) => handleDelete(e, post.id)}
                >
                  Delete
                </button>
              </div>
            </Card>
          );
        })
      ) : (
        "No Blog posts found!"
      )}
    </div>
  );
};

export default ListPage;
