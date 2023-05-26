import { useEffect, useState } from "react";
import axios from "axios";
import propsTypes from "prop-types";
import { useHistory, useParams } from "react-router-dom";

import useToast from "../hooks/toast";

const BlogForm = ({ editing }) => {
  const history = useHistory();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [originalTitle, setOriginalTitle] = useState("");
  const [body, setBody] = useState("");
  const [originalBody, setOriginalBody] = useState("");
  const [publish, setPublish] = useState(false);
  const [originalPublish, setOriginalPublish] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [bodyError, setBodyError] = useState(false);
  
  const { addToast } = useToast();

  useEffect(() => {
    if (editing) {
      axios.get(`http://localhost:3001/posts/${id}`).then((res) => {
        setTitle(res.data.title);
        setOriginalTitle(res.data.title);
        setBody(res.data.body);
        setOriginalBody(res.data.body);
        setPublish(res.data.publish);
        setOriginalPublish(res.data.publish);
      });
    }
  }, [id, editing]);

  // editin에서 title, body 부분이 바뀌지 않았을 때  비활성화모드
  const isEdited = () => {
    return (
      title !== originalTitle ||
      body !== originalBody ||
      publish !== originalPublish
    );
  };

  const validateForm = () => {
    let validated = true;

    if (title === "") {
      setTitleError(true);
      validated = false;
    }

    if (body === "") {
      setBodyError(true);
      validated = false;
    }

    return validated;
  };

  const onSubmit = () => {
    // error를 리셋 먼저 해준다.
    setTitleError(false);
    setBodyError(false);

    if (validateForm()) {
      /**
       *  editing 일 떄? 아닐 때?
       *
       *    ㄴ PATCH  /posts/1      (아이디가 1인 posts를 부분 업데이트 시)
       *    ㄴ PATCH를 이용하여 수정 데이터를 보낸다.
       */

      if (editing) {
        axios
          .patch(`http://localhost:3001/posts/${id}`, {
            // 보낼 데이터 영역
            title,
            body,
            publish,
          })
          .then(() => {
            history.push(`/blogs/${id}`);
          });
      } else {
        axios
          .post("http://localhost:3001/posts", {
            // 보낼 데이터 영역
            title,
            body,
            publish,
            createdAt: Date.now(),
          })
          .then(() => {
            addToast({
              type: "success",
              text: "Successfully created",
            });
            history.push("/admin");
          });
      }
    }
  };

  const goBack = () => {
    if (editing) {
      history.push(`/blogs/${id}`);
    } else {
      history.push("/blogs");
    }
  };

  const onChangePublish = (e) => {
    // console.log(e.target.checked);
    setPublish(e.target.checked);
  };

  return (
    <div>
      <h1 className="mb-3">{editing ? "Edit" : "Create"} a blog post</h1>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          className={`form-control ${titleError ? "border-danger" : ""}`}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {titleError && <div className="text-danger">TItle is reauired.</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Body</label>
        <textarea
          className={`form-control ${bodyError ? "border-danger" : ""}`}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows="10"
        />
        {bodyError && <div className="text-danger">Body is reauired.</div>}
      </div>

      <div className="form-check mb-3">
        <input
          type="checkbox"
          className="form-check-input"
          checked={publish}
          onChange={onChangePublish}
        />
        <label htmlFor="" className="form-check-label">
          publish
        </label>
      </div>

      <button
        className="btn btn-primary"
        onClick={onSubmit}
        disabled={editing && !isEdited()}
      >
        {editing ? "Edit" : "Post"}
      </button>
      <button className="btn btn-danger ms-2" onClick={goBack}>
        Cancel
      </button>
    </div>
  );
};

BlogForm.propTypes = {
  editing: propsTypes.bool,
};

BlogForm.defaultProps = {
  editing: false,
};

export default BlogForm;
