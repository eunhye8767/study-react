import {
  BrowserRouter as Router, // BrowserRouter => Router로 사용
  Routes,
  Route,
} from "react-router-dom";

import routes from "./routes";
import NavBar from "./components/NavBar";
import Toast from "./components/Toast";
import useToast from "./hooks/toast";
import { useDispatch, useSelector } from "react-redux";

import ProtectedRoute from "./ProtectedRoute";
import { useEffect, useState } from "react";
import { login } from "./store/authSlice";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const toasts = useSelector((state) => state.toast.toasts);
  const { deleteToast } = useToast();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn")) {
      dispatch(login());
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Router>
      <NavBar />
      <Toast toasts={toasts} deleteToast={deleteToast} />
      <div className="container mt-3">
        <Routes>
          {routes.map((route) => {
            return (
              <Route
                path={route.path}
                element={
                  route.auth ? (
                    <ProtectedRoute element={route.element} />
                  ) : (
                    route.element
                  )
                }
                key={route.path}
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
