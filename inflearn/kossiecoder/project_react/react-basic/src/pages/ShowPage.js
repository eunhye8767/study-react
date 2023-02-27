import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

const ShowPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const getPosts = (id) => {
    axios.get(`http://localhost:3001/posts/${id}`).then((res) => {
      setPost(res.data);
      setLoading(false);
    });
  };

  const printDate = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  useEffect(() => {
    getPosts(id);
  }, [id]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <div className="d-flex">
        <h1 className="flex-grow-1">{post.title}</h1>
        <div>
          <Link className="btn btn-primary" to={`/blogs/${id}/edit`}>
            Edit
          </Link>
        </div>
      </div>
      <small className="text-muted">
        Created At : {printDate(post.createdAt)}
      </small>
      <hr />
      <p>{post.body}</p>
    </div>
  );
};

export default ShowPage;
