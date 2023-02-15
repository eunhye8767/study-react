import { useState } from "react";
import axios from "axios";

function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onSubmit = () => {
    axios.post("http://localhost:3001/posts", {
      // 보낼 데이터 영역
      title,
      body
    })
  }

  return (
    <div className="container">
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

      <button className="btn btn-primary" onClick={onSubmit}>Post</button>
    </div>
  );
}

export default App;
