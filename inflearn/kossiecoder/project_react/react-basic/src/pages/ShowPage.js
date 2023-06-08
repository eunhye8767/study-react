import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { useSelector } from "react-redux";

import useToast from "../hooks/toast";

const ShowPage = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [timer, setTimer] = useState(0);
  const [error, setError] = useState("");
  const { addToast } = useToast();

  const getPosts = (id) => {
    axios
      .get(`http://localhost:3001/posts/${id}`)
      .then((res) => {
        setPost(res.data);
        setLoading(false);
      })
      .catch((e) => {
        setError("Something went wrong in db");
        addToast({
          text: "Something went wrong in db",
          type: "danger",
        });
        setLoading(false);
      });
  };

  const printDate = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  useEffect(() => {
    getPosts(id);
  }, [id]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div className="d-flex">
        <h1 className="flex-grow-1">
          {post.title}({timer}초)
        </h1>
        {isLoggedIn && (
          <div>
            <Link className="btn btn-primary" to={`/blogs/${id}/edit`}>
              Edit
            </Link>
          </div>
        )}
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
