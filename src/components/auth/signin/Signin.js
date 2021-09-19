import SigninForm from "./SigninForm";

const Signin=({show,handleClose})=>{
    return(<>
        <SigninForm show={show} handleClose={handleClose} />
         </>);
}
export default Signin;