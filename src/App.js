import './assets/css/style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
import HomePage from './pages/homePage/HomePage';
import Header from './layouts/headerLayout/header';
import Footer from './layouts/footerLayout/footer';

// import LienHe from './pages/contact_page/contact_page';

function App() {

  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* <Route path="/lien-he" element={<LienHe />} /> Trang liên hệ */}
      
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;