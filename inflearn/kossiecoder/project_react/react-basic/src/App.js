import {
  BrowserRouter as Router, // BrowserRouter => Router로 사용
  Switch,
  Route,
} from "react-router-dom";

import BlogForm from "./components/BlogForm";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />

      <div className="container">
        <Switch>
          <Route path="/" exact>Home page</Route>
          <Route path="/blogs">
            <BlogForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
