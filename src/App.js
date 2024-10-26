import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopMenu from './components/navbar';
import Home from './pages/home/home';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './components/logo';
import { Container } from 'react-bootstrap';
function App() {
  return (
    <row>
    <BrowserRouter>
      <TopMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Outras rotas */}
      </Routes>
    </BrowserRouter>
    <Footer/>
    </row>
  );
}

export default App;
