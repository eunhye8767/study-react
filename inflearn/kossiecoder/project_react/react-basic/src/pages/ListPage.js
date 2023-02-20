import axios from "axios";
import { useEffect, useState } from "react";

const ListPage = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    axios.get("http://localhost:3001/posts").then((res) => setPosts(res.data));
  };

  useEffect(() => {
    getPosts();
  }, [])
  
  return <div>ListPage</div>;
};

export default ListPage;
