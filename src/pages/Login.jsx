import {
  useLoaderData,
  useNavigation,
  useActionData,
  Form,
  redirect
} from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../api";

export function loader({ request }) {
  const url = new URL(request.url).searchParams.get("message");
  return url;
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const pathname =
    new URL(request.url).searchParams.get("redirectTo") || "/host";

  try {
    const data = await loginUser({ email, password });
    localStorage.setItem("loggedin", true);
    console.log(data);
    return redirect(pathname);
  } catch (err) {
    return err.message;
  }
}

function Login() {
  // const [loginFormData, setLoginFormData] = useState({
  //   email: "",
  //   password: ""
  // });
  const navigation = useNavigation();
  const message = useLoaderData();
  const errorMessage = useActionData();

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   setStatus("submitting");
  //   loginUser(loginFormData)
  //     .then((data) => console.log(data))
  //     .catch()
  //     .finally(setStatus("idle"));
  // }

  // function handleChange(e) {
  //   const { name, value } = e.target;
  //   setLoginFormData((prev) => ({ ...prev, [name]: value }));
  // }

  return (
    <div className="login-container">
      {message && <h3 style={{ color: "red" }}>{message}</h3>}
      {errorMessage && <h3 style={{ color: "red" }}>{errorMessage}</h3>}

      <h1>Sign in to your account</h1>
      <Form method="post" className="login-form" replace>
        <input name="email" type="email" placeholder="Email adress" />
        <input name="password" type="password" placeholder="Password" />
        <button disabled={navigation.state === "submitting"}>
          {navigation.state === "submitting" ? "Logging in.." : "Log in"}
        </button>
      </Form>
    </div>
  );
}

export default Login;
