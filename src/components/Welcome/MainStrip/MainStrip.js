import { Col ,Card} from "react-bootstrap";

const MainStrip=({bg})=>{
    return(<>
          <Col md={6}>
                  <Card>
                  <Card.Img variant="top" src={bg}/>

                 </Card>
           </Col>
         </>)
}
export default MainStrip;