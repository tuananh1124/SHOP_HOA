import './assets/css/style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
import HomePage from './pages/homePage/HomePage';
import Header from './layouts/headerLayout/header';
import Footer from './layouts/footerLayout/footer';

import LienHe from  './pages/contactPage/ContactForm';
import Detail  from './pages/DetailPage/DetailForm';
function App() {

  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lien-he" element={<LienHe />} /> 
        <Route path="/san-pham" element={<Detail />} /> 
        
      
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;