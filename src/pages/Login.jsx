import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: ""
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(loginFormData);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="login-container">
      <h1>Sign to your account</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          name="email"
          type="email"
          onChange={handleChange}
          placeholder="Email adress"
          value={loginFormData.email}
        />
        <input
          name="password"
          type="password"
          onChange={handleChange}
          placeholder="Password"
          value={loginFormData.password}
        />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default Login;
