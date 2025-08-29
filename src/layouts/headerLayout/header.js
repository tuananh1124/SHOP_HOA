import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { Helmet } from "react-helmet";
import Shop from "../../assets/shop.png";

window.addEventListener("scroll", function () {
  const header = document.getElementById("mainHeader");

  if (window.scrollY > 100) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header id="mainHeader">
      <Helmet>
        <title>SHOP FLOWER</title>
        <link rel="icon" href={Shop} type="image/png" />
      </Helmet>

      <div className="container">
        <div className="row align-items-center">
          {/* Logo */}
          <div className="col-2">
            <Link className="nav-link" to="/">
              <img
                src={Shop}
                alt="Logo"
                className="img-fluid"
                style={{ maxWidth: "100%", maxHeight: "70px" }}
              />
            </Link>
          </div>

          {/* Menu */}
          <div className="col-10">
            <div className="d-flex flex-column">
              <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
                {/* Mobile: Search + Toggle */}
                <div className="d-flex justify-content-between align-items-center w-100 d-lg-none">
                  {/* Search bar bên trái */}
                  <form className="d-flex flex-grow-1 me-2">
                    <input
                      className="form-control flex-grow-1"
                      type="search"
                      placeholder="Tìm kiếm..."
                      aria-label="Search"
                    />
                    <button
                      className="btn btn-outline-success ms-2"
                      type="submit"
                    >
                      <i className="bi bi-search"></i>
                    </button>
                  </form>

                  {/* Toggle bên phải */}
                  <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setIsOpen(true)}
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                </div>

                {/* Desktop Menu */}
                <div className="d-none d-lg-flex justify-content-center w-100">
                  <ul className="navbar-nav align-items-center">
                    {/* Search Bar */}
                    <li className="nav-item me-3">
                      <form className="d-flex">
                        <input
                          className="form-control"
                          type="search"
                          placeholder="Tìm kiếm sản phẩm..."
                          aria-label="Search"
                          style={{ width: "300px" }}
                        />
                        <button
                          className="btn btn-outline-success ms-2"
                          type="submit"
                        >
                          <i className="bi bi-search"></i>
                        </button>
                      </form>
                    </li>

                    {/* Trang Chủ */}
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        <i className="bi bi-house"></i> Trang Chủ
                      </Link>
                    </li>

                    {/* Dropdown */}
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle"
                        to="/san-pham"
                        id="navbarDropdown"
                        role="button"
                      >
                        <i className="bi bi-ui-checks-grid"></i> Tất Cả Sản Phẩm
                      </Link>
                      <ul
                        className="dropdown-menu menu-danhmuc"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <Link className="dropdown-item" to="/hoa-sap">
                            Hoa sáp
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/hoa-cuoi">
                            Hoa cưới
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/hoa-tuoi">
                            Bó hoa tươi
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/hoa-chuc-mung">
                            Hoa chúc mừng
                          </Link>
                        </li>
                      </ul>
                    </li>

                    {/* Liên hệ */}
                    <li className="nav-item">
                      <Link className="nav-link" to="/lien-he">
                        <i className="bi bi-telephone-inbound"></i> Liên hệ đặt
                        hàng:{" "}
                        <span style={{ color: "red", textDecoration: "none" }}>
                          0336.420.793
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar cho mobile */}
      {/* Sidebar cho mobile */}
      <div
        className={`offcanvas-mobile ${isOpen ? "show" : ""}`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "80%",
          height: "100vh",
          background: "#fff",
          zIndex: 1050, // đảm bảo nằm trên content
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Menu</h5>
          <button
            type="button"
            className="btn-close"
            onClick={() => setIsOpen(false)}
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item mb-2">
              <Link
                className="nav-link"
                to="/"
                onClick={() => setIsOpen(false)}
              >
                <i className="bi bi-house"></i> Trang Chủ
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link
                className="nav-link"
                to="/san-pham"
                onClick={() => setIsOpen(false)}
              >
                <i className="bi bi-ui-checks-grid"></i> Tất Cả Sản Phẩm
              </Link>
            </li>

            <li className="nav-item mt-3">
              <Link
                className="nav-link"
                to="/lien-he"
                onClick={() => setIsOpen(false)}
              >
                <i className="bi bi-telephone-inbound"></i> Liên hệ đặt hàng:{" "}
                <span style={{ color: "red" }}> 0336.420.793</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
