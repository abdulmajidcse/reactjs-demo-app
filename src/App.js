import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import "./App.css";
import PrivateRoute from "./components/guards/PrivateRoute";
import Dashboard from "./components/pages/Dashboard";
import PublicRoute from "./components/guards/PublicRoute";

function App() {
  return (
    <div className="App">
      <h2>Welcome to React JS!</h2>
      <hr />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        ></Route>
        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
