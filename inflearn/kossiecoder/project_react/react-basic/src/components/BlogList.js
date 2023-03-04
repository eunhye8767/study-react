import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import Card from "../components/Card";
import LoadingSpinner from "../components/LoadingSpinner";

const BlogList = () => {
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
  
  if (loading) {
    return <LoadingSpinner />;
  }

  if (posts.length === 0) {
    return <div>No Blog posts found!</div>;
  }

  return posts.filter((post) => {
    return post.publish
  }).map((post) => {
    return (
      <Card
        key={post.id}
        title={post.title}
        onclick={() => history.push(`/blogs/${post.id}`)}
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
  });
}

export default BlogList
