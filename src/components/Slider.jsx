import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';


function Slider() {
  return (
    <Container>
      <Row>
        <Col><div className="upper">
          <img width={1363} src="https://f.nooncdn.com/mpcms/EN0001/assets/35ed38ac-b1f1-4d24-a7c3-a21aafc803c0.png" alt="" />
        </div>

        </Col>
      </Row>
      <Row>
        <Col sm={8}>
          <div className="slide">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://f.nooncdn.com/mpcms/EN0001/assets/a9335a26-e1f1-4bbc-98ec-f4cc65839bba.png"
                  alt="First slide"
                />
                
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://f.nooncdn.com/mpcms/EN0001/assets/48c051cc-142e-48f6-aae0-5a380b7179c8.png"
                  alt="Second slide"
                />

               
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://f.nooncdn.com/mpcms/EN0001/assets/85a502de-ea59-4a9e-9ac4-11cc7285677a.png"
                  alt="Third slide"
                />

                
              </Carousel.Item>
            </Carousel>
          </div>
        </Col>
        <Col sm={4}>
          <div className="other">
            <img className='img' src="https://f.nooncdn.com/mpcms/EN0001/assets/c6f2bd47-5eca-4908-b3a5-d377e231622a.png" alt="" />
            <img className='img' src="https://f.nooncdn.com/mpcms/EN0001/assets/4b795127-3b55-499d-831b-a361e0eae5b0.png" alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Slider;
