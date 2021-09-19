import { Col ,Card} from "react-bootstrap";
import banner from '../../../assets/images/Feature/img1.png'

const FeatureSlide=()=>{
    return(<>
               
                  <Card>
                  <Card.Img src={banner} alt="Card image" className="feature-image" />
                  <Card.ImgOverlay>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                  </Card.ImgOverlay>
                 </Card>
           
         
           </>);
}
export default FeatureSlide;