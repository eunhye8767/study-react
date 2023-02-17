import {
  BrowserRouter as Router, // BrowserRouter => Router로 사용
  Switch,
  Route,
} from "react-router-dom";

import routes from "./routes";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />

      <div className="container">
        <Switch>
          {
            routes.map((route) => <Route path={route.path} exact component={route.component} key={route.path} />)
          }
        </Switch>
      </div>
    </Router>
  );
}

export default App;
 