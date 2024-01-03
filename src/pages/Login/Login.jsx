import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function LoginPage() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted!");
  }
  return (
    <div className="d-flex justify-content-center align-items-center p-5">
      <Form className="rounded p-3 p-lg-4 border" onSubmit={handleSubmit}>
        <h2 className="py-3">Welcome back!</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
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
