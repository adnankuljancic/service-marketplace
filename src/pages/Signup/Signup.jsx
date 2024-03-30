import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const navigate = useNavigate();

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredFullName, setEnteredFullName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = {
      username: enteredUsername,
      fullName: enteredFullName,
      email: enteredEmail,
      password: enteredPassword,
    };

    try {
      const apiUrl = "https://localhost:7231/api/Auth/register";
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

      let responseText = await response.text();
      localStorage.setItem("API response: ", responseText);
      navigate("/login");
    } catch (error) {
      console.error("API Error: ", error.message);
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center p-3">
      <Form className="rounded p-3 p-lg-4 border" onSubmit={handleSubmit}>
        <h2 className="py-1">Welcome! Sign up.</h2>

        <FloatingLabel
          label="Username"
          controlId="formUsername"
          className="mb-2"
        >
          <Form.Control
            type="text"
            value={enteredUsername}
            placeholder="Enter username"
            onChange={(e) => setEnteredUsername(e.target.value)}
          />
        </FloatingLabel>

        <FloatingLabel
          label="Full name"
          controlId="formFullName"
          className="mb-2"
        >
          <Form.Control
            type="text"
            value={enteredFullName}
            placeholder="Enter full name"
            onChange={(e) => setEnteredFullName(e.target.value)}
          />
        </FloatingLabel>

        <FloatingLabel
          label="Email address"
          controlId="formEmail"
          className="mb-2"
        >
          <Form.Control
            type="email"
            value={enteredEmail}
            placeholder="Enter email"
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
            value={enteredPassword}
            placeholder="Enter password"
            onChange={(e) => setEnteredPassword(e.target.value)}
          />
        </FloatingLabel>

        {/* <FloatingLabel
          label="Confirm password"
          controlId="formCofirmPassword"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Enter password" />
        </FloatingLabel> */}

        <div className="d-grid">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}
export default SignupPage;
