import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Home() {
  const auth = useAuth();
  return (
    <>
      <h2>Home Page</h2>
      <nav>
        {auth ? (
          <Link to="/dashboard">Dashboard</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}{" "}
        | <Link to="/posts">Post List</Link>
      </nav>
      <p style={{ color: "tomato", fontWeight: "bold" }}>This is Home Page.</p>
    </>
  );
}

export default Home;
