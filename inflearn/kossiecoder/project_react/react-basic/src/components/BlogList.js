import axios from "axios";
import propsTypes from "prop-types";
import { useEffect, useState, useCallback } from "react";
import { useHistory, useLocation } from "react-router-dom";

import Card from "../components/Card";
import LoadingSpinner from "../components/LoadingSpinner";
import Pagination from "./Pagination";

import Toast from "../components/Toast";
import useToast from "../hooks/toast";

import { useSelector } from "react-redux";

const BlogList = ({ isAdmin }) => {
  const [toasts, addToast, deleteToast] = useToast();

  const history = useHistory();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const pageParams = params.get("page");

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPosts, setNumberOfPosts] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [searchText, setSearchText] = useState("");

  const toasts1 = useSelector((state) => {
    return state.toast.toasts
  })

  let limit = 3;

  useEffect(() => {
    // 올림함수 (Math.ceil())를 이용하여 전달
    setNumberOfPages(Math.ceil(numberOfPosts / limit));
  }, [numberOfPosts]);

  useEffect(() => {
    setCurrentPage(parseInt(pageParams) || 1);
    getPosts(parseInt(pageParams) || 1);
  }, []);

  const getPosts = useCallback(
    (page = 1) => {
      let params = {
        _page: page,
        _limit: limit,
        _sort: "id",
        _order: "desc",
        title_like: searchText,
      };

      if (!isAdmin) {
        params = { ...params, publish: true };
      }

      axios.get(`http://localhost:3001/posts`, { params }).then((res) => {
        setNumberOfPosts(res.headers["x-total-count"]);
        setPosts(res.data);
        setLoading(false);
      });
    },
    [isAdmin, searchText]
  );

  const handleDelete = (e, id) => {
    e.stopPropagation();

    // 삭제
    axios.delete(`http://localhost:3001/posts/${id}`).then(() => {
      setPosts((prev) => prev.filter((post) => post.id !== id));
      addToast({
        text: "Successfully deleted",
        type: "success"
      });
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

  const onClickPageButton = (page) => {
    history.push(`${location.pathname}?page=${page}`);
    setCurrentPage(page);
    getPosts(page);
  };

  // 엔터를 눌렀을 때 검색
  const onSearch = (e) => {
    if (e.key === "Enter") {
      history.push(`${location.pathname}?page=1`);
      setCurrentPage(1);
      // 1페이지부터 가져오기
      getPosts(1);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <Toast toasts={toasts} deleteToast={deleteToast} />
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        className="form-control"
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        onKeyUp={onSearch}
      />
      <hr />
      {posts.length === 0 ? (
        <div>No Blog posts found!</div>
      ) : (
        <>
          {renderBlogList()}
          {numberOfPages > 1 && (
            <Pagination
              currentPage={currentPage}
              numberOfPages={numberOfPages}
              onClick={onClickPageButton}
            />
          )}
        </>
      )}
    </div>
  );
};

BlogList.propTypes = {
  isAdmin: propsTypes.bool,
};

BlogList.defaultProps = {
  isAdmin: false,
};

export default BlogList;
