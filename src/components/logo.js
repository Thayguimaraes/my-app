import Style from './logo.module.css';
import ImgLogo from '../img/logo.png';
import { Row, Col, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
const Logo = () => {
  return (
    <Container className={Style.logo}>
    
          <Col xs={6} md={4}>
            <Image src={ImgLogo} rounded />
          </Col>
  
    </Container>
  )
}

export default Logo
