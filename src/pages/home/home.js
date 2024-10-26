import Style from './Home.module.css';
import FundoHome from '../../img/fundoHome.jpg';
import { Row, Col, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

const Home = () => {
  return (
    <Container className={Style.containerHome}>
      <div className={Style.textHome}>
        <p>Este é um texto de exemplo. Aqui você pode adicionar qualquer conteúdo que deseje mostrar ao lado esquerdo da imagem. Ele será exibido com o tamanho de fonte médio, ajustado para leitura.</p>
      </div>
      <Col className={Style.imgHome}>
        <Image src={FundoHome} rounded />
      </Col>
    </Container>
  );
};

export default Home;
