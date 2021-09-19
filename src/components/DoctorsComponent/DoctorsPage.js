import { Card, Col, Container, Form, Row } from "react-bootstrap";
import DoctorCard from "./DoctorCard";
const DoctorsPage=()=>{
    return(<>
            <Container  className="doctor-search-container">
                <Row>
                    <Col md={12}>
                    <Card>
                        <Form>
                        <Row>
                           <Col md={4}>
                            <Form.Group>
                            <Form.Select size="lg">
                                <option> Select Speciality</option>
                            </Form.Select>
                            </Form.Group>
                          </Col>
                        
                        <Col md={8}>
                            <Form.Group>
                            <Form.Control size="lg" type="text" placeholder="Large text" />
                            </Form.Group>
                        </Col>
                       </Row>
                    </Form>
                    </Card>
                </Col>
                </Row>
            </Container>
            

            <Container className="filter-container">
               <Card>
               <Row>
                 <Col sm={4}>
                 </Col> 
                 
                 <Col sm={3}>
                 </Col>

                 <Col sm={3}>
                 </Col>
                  
                 <Col sm={2}>
                 </Col>  
                </Row>
               </Card>
            </Container>


            <Container className="doctors-container">
                <Row></Row>
                <Row>
                   
                   <DoctorCard />

                   <DoctorCard />

                   <DoctorCard />

                </Row>
            </Container>
          </>
          )
}
export default DoctorsPage;