import{React,useState} from 'react';
import Signin from "../../auth/signin";
import Navigation from "./Navigation";

const Header=(req,res)=>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(<>
          <Navigation handleShow={handleShow} />   
          <Signin show={show} handleClose={handleClose} />
          </>)
}
export default Header;