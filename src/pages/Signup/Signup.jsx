import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from 'react-bootstrap/FloatingLabel';


 function SignupPage() {
    function handleSubmit(event) {
        event.preventDefault();
        console.log("Submitted!");
      }
      return (
        <div className="d-flex justify-content-center align-items-center p-3">
          <Form className="rounded p-3 p-lg-4 border" onSubmit={handleSubmit}>
            <h2 className="py-1">Welcome! Sign up.</h2>
           
            <FloatingLabel 
                label="Username" 
                controlId="formUsername"
                className="mb-2">
                <Form.Control type="text" placeholder="Enter username" />
            </FloatingLabel>

            <FloatingLabel 
                label="Full name" 
                controlId="formFullName"
                className="mb-2">
                <Form.Control type="text" placeholder="Enter full name" />
            </FloatingLabel>

            <FloatingLabel 
                label="Email address" 
                controlId="formEmail"
                className="mb-2">
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                 We'll never share your email with anyone else.
                </Form.Text>
            </FloatingLabel>

            <FloatingLabel 
                label="Password" 
                controlId="formPassword"
                className="mb-2">
                <Form.Control type="text" placeholder="Enter password" />
            </FloatingLabel>

            <FloatingLabel 
                label="Confirm password" 
                controlId="formCofirmPassword"
                className="mb-3">
                <Form.Control type="text" placeholder="Enter password" />
            </FloatingLabel>
            
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