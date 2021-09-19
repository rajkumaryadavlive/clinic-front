import { Modal,Button, Form, } from "react-bootstrap";
const SigninForm=({show,handleClose})=>{
  
    return(<>
       <Modal show={show} onHide={handleClose} className="login-container"  backdrop="static"
        keyboard={false} centered>
        <Modal.Header closeButton className="login-form-header">
          <Modal.Title>Hi,</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form>
             <Form.Group>
               <Form.Text className="text-muted">
                We'll never share your email with anyone else.
               </Form.Text>

               <Form.Control type="text" placeholder="Please Enter Mobile" />
             </Form.Group>
         </Form>        
        </Modal.Body>
        <Modal.Footer className="login-form-footer">
         
        </Modal.Footer>
      </Modal>
      </>);
}
export default SigninForm;