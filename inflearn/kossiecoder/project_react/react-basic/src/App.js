import {
  BrowserRouter as Router, // BrowserRouter => Router로 사용
  Switch,
  Route,
} from "react-router-dom";

import routes from "./routes";
import NavBar from "./components/NavBar";
import Toast from "./components/Toast";
import useToast from "./hooks/toast";

function App() {
  const [toasts, addToast, deleteToast] = useToast();

  return (
    <Router>
      <NavBar />
      <Toast toasts={toasts} deleteToast={deleteToast} />
      <div className="container mt-3">
        <Switch>
          {routes.map((route) => {
            const Component = route.component;
            return (
              <Route
                path={route.path}
                exact
                // component={route.component}
                key={route.path}
              >
                <Component addToast={addToast} />
              </Route>
            );
          })}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
