import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Card from "../components/Card";

const ListPage = () => {
  const [posts, setPosts] = useState([]);

  const history = useHistory();

  const getPosts = async () => {
    axios.get("http://localhost:3001/posts").then((res) => setPosts(res.data));
  };

  const handleDelete = (e) => {
    e.stopPropagation();
  }

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
      {posts.map((post) => {
        return (
          <Card
            key={post.id}
            title={post.title}
            onclick={() => history.push("/blogs/edit")}
          >
            <div>
              <button
                className="btn btn-danger btn-sm"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default ListPage;
