import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useState, useContext } from "react";
import UserContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = {
      email: enteredEmail,
      password: enteredPassword,
    };

    try {
      const apiUrl = "https://localhost:7231/api/Auth/login";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      let token = await response.text();
      localStorage.setItem("jwt", token);
      login();
      navigate('/');

      console.log("API response: ", token);
    } catch (error) {
      console.error("API Error: ", error.message);
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center p-5">
      <Form className="rounded p-3 p-lg-4 border" onSubmit={handleSubmit}>
        <h2 className="py-3">Welcome back!</h2>
        <FloatingLabel
          label="Email address"
          controlId="formEmail"
          className="mb-2"
        >
          <Form.Control
            type="text"
            placeholder="Enter email"
            value={enteredEmail}
            onChange={(e) => setEnteredEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </FloatingLabel>

        <FloatingLabel
          label="Password"
          controlId="formPassword"
          className="mb-2"
        >
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={enteredPassword}
            onChange={(e) => setEnteredPassword(e.target.value)}
          />
        </FloatingLabel>
        <div className="d-grid my-4">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}
export default LoginPage;
