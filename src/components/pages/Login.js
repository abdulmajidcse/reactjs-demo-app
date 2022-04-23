import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

function Login() {
  const [state, setState] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const [name, value] = [event.target.name, event.target.value];
    setState({
      ...state,
      [name]: value,
    });
  };

  const tryToLogin = (event) => {
    event.preventDefault();

    localStorage.removeItem('reactAppEmail');
    localStorage.removeItem('reactAppPassword');

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const auth = useAuth(state.email, state.password);
    if (auth) {
      localStorage.setItem("reactAppEmail", state.email);
      localStorage.setItem("reactAppPassword", state.password);
      navigate("/dashboard");
    } else {
      alert("Email or Password are wrong!");
    }
  };

  return (
    <>
      <h2>Login Page</h2>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <p style={{ color: "tomato", fontWeight: "bold" }}>This is Login Page.</p>
      <p>Email: user@gmail.com</p>
      <p>Password: 12345678</p>

      <form onSubmit={tryToLogin}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
