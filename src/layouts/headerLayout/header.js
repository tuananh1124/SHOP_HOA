import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './header.css';
import Logo from '../../assets/logo.png';
import { Helmet } from 'react-helmet'; // Import react-helmet
import Logononetext from '../../assets/logononetext.png';

function Header() {
 

  return (
    <header>
       <Helmet>
        <title>Vinh Mi</title>
        <link rel="icon" href={Logononetext} type="image/png" /> {/* Đặt logo làm favicon */}
      </Helmet>
      <div className="container">
        <div className="row align-items-center">
        <div className="col-2">
  <Link className="nav-link" to="/">
    <img
      src={Logo}
      alt="Logo"
      className="img-fluid"
      style={{ maxWidth: '100%', maxHeight: '70px' }}
    />
  </Link>
</div>

          <div className="col-10">
            <div className="d-flex flex-column">
              {/* Search Bar */}
           
              {/* Navigation */}
              <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
  <button
    className="navbar-toggler ms-auto"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          <i className="bi bi-house"></i> Trang Chủ
        </Link>
      </li>
      <li className="nav-item dropdown">
        <button
          className="nav-link dropdown-toggle"
          type="button"
          id="navbarDropdown"
          data-bs-toggle="dropdown"
          aria-label="Toggle Dropdown"
        >
          <i className="bi bi-ui-checks-grid"></i> Danh Mục Sản Phẩm
        </button>
        <ul className="dropdown-menu menu-danhmuc" aria-labelledby="navbarDropdown">
          <li>
            <Link className="dropdown-item" to="/phim-theo-the-loai/Tình cảm">
              Lưới lan
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/phim-theo-the-loai/Kinh dị">
              ống nước
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/phim-theo-the-loai/Hành động">
              Bạt chống thám
            </Link>
          </li>
        </ul>
      </li>
    
      <li className="nav-item">
        <Link className="nav-link" to="/lien-he">
          <i className="bi bi-telephone-inbound"></i> Liên Hệ đặt hàng: <i style={{ color: "red", textDecoration: "none" }}>   0908.416.475</i>

        </Link>
      </li>
    </ul>
  </div>
</nav>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;