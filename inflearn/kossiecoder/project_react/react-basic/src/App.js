import {
  BrowserRouter as Router, // BrowserRouter => Router로 사용
  Switch,
  Route,
} from "react-router-dom";

import routes from "./routes";
import NavBar from "./components/NavBar";
import Toast from "./components/Toast";
import useToast from "./hooks/toast";
import { useSelector } from "react-redux";

import ProtectedRoute from "./ProtectedRoute";

function App() {
  const toasts = useSelector((state) => state.toast.toasts);
  const { deleteToast } = useToast();

  return (
    <Router>
      <NavBar />
      <Toast toasts={toasts} deleteToast={deleteToast} />
      <div className="container mt-3">
        <Switch>
          {routes.map((route) => {
            if (route.auth) {
              return (
                <ProtectedRoute
                  path={route.path}
                  component={route.component}
                  key={route.path}
                />
              );
            }
            return (
              <Route
                path={route.path}
                exact
                component={route.component}
                key={route.path}
              />
            );
          })}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
