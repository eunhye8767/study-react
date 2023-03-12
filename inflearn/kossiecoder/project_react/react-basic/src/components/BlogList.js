import axios from "axios";
import { bool } from "prop-types";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import Card from "../components/Card";
import LoadingSpinner from "../components/LoadingSpinner";
import Pagination from "./Pagination";

const BlogList = ({ isAdmin }) => {
  const history = useHistory();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPosts, setNumberOfPosts] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);

  let limit = 5;

  useEffect(() => {
    // 올림함수 (Math.ceil())를 이용하여 전달
    setNumberOfPages(Math.ceil(numberOfPosts / limit));
  }, [numberOfPosts])

  const getPosts = async (page = 1) => {
    setCurrentPage(page);

    let params = {
      _page: page,
      _limit: limit,
      _sort: "id",
      _order: "desc",
    };

    if (!isAdmin) {
      params = { ...params, publish: true };
    }

    axios.get(`http://localhost:3001/posts`, { params }).then((res) => {
      setNumberOfPosts(res.headers['x-total-count']);
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

  const renderBlogList = () => {
    return posts.map((post) => {
      return (
        <Card
          key={post.id}
          title={post.title}
          onclick={() => history.push(`/blogs/${post.id}`)}
        >
          {isAdmin && (
            <div>
              <button
                className="btn btn-danger btn-sm"
                onClick={(e) => handleDelete(e, post.id)}
              >
                Delete
              </button>
            </div>
          )}
        </Card>
      );
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

  return (
    <div>
      {renderBlogList()}
      {numberOfPages > 1 && <Pagination
        currentPage={currentPage}
        numberOfPages={numberOfPages}
        onClick={getPosts}
      />}
    </div>
  );
};

BlogList.propTypes = {
  isAdmin: bool,
};

BlogList.defaultProps = {
  isAdmin: false,
};

export default BlogList;
