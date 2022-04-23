/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('reactAppEmail');
    localStorage.removeItem('reactAppPassword');
    navigate('/login');
  }

  return (
    <>
      <h2>Dashboard Page</h2>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <a href="#" onClick={logout}>
          Logout
        </a>
      </nav>
      <p style={{ color: "tomato", fontWeight: "bold" }}>
        Your are Logged in. This is Dashboard Page.
      </p>
    </>
  );
}

export default Dashboard;
