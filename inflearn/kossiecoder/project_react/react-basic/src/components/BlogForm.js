import { useEffect, useState } from "react";
import axios from "axios";
import { bool } from "prop-types";
import { useHistory, useParams } from "react-router-dom";

const BlogForm = ({ editing }) => {
  const history = useHistory();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [originalTitle, setOriginalTitle] = useState("");
  const [body, setBody] = useState("");
  const [originalBody, setOriginalBody] = useState("");

  useEffect(() => {
    if (editing) {
      axios.get(`http://localhost:3001/posts/${id}`).then((res) => {
        setTitle(res.data.title);
        setOriginalTitle(res.data.title);
        setBody(res.data.body);
        setOriginalBody(res.data.body);
      });
    }
  }, [id, editing]);

  // editin에서 title, body 부분이 바뀌지 않았을 때  비활성화모드
  const isEdited = () => {
    return title !== originalTitle || body !== originalBody;
  };

  const onSubmit = () => {
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
          createdAt: Date.now(),
        })
        .then(() => {
          history.push("/blogs");
        });
    }
  };

  const goBack = () => {
    if (editing) {
      history.push(`/blogs/${id}`);
    } else {
      history.push("/blogs");
    }
  };

  return (
    <div>
      <h1 className="mb-3">{editing ? "Edit" : "Create"} a blog post</h1>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Body</label>
        <textarea
          className="form-control"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows="10"
        />
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
  editing: bool,
};

BlogForm.defaultProps = {
  editing: false,
};

export default BlogForm;
