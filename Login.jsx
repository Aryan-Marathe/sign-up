import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './login.css';
import Signup from './Signup';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Login() {
  const [smShow, setSmShow] = useState(false);
  const [Show, setShow] = useState(false);
  return (
    <div style={{height:"350px",width:"300px",marginLeft:"420px",marginTop:"100px",padding:"15px"}}>
    
    <Form>
    <center>
        <h1 style={{marginBottom:"30px",fontFamily:"calibrie"}}>
          Login
        </h1>
      </center>
      <Form.Group className="mb-3" controlId="formGroupEmail" >
        <Form.Label>User Name</Form.Label>
        <Form.Control type="email" placeholder="Enter user name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Container style={{display:"flex",padding:"5px"}}>
      <Button variant="success" onClick={()=>setSmShow(true)} lassName="me-2">Login</Button>{ ""}
       <Link to={'/signup'}><Button variant='secondary'style={{marginLeft:"9px"}}>Sign up</Button>{" "}</Link>
      </Container>
    </Form>

    <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
          Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{color:"green"}}>Login successful</Modal.Body>
      </Modal>
    </div>
  );
}

export default Login;
