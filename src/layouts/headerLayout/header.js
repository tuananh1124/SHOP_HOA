import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import { Helmet } from "react-helmet"; // Import react-helmet
import Shop from "../../assets/shop.png";

window.addEventListener("scroll", function () {
  const header = document.getElementById("mainHeader");

  if (window.scrollY > 100) {
    // đổi 150px thành mốc bạn muốn
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

function Header() {
  return (
    <header id="mainHeader">
      <Helmet>
        <title>SHOP FLOWER</title>
        <link rel="icon" href={Shop} type="image/png" />{" "}
        {/* Đặt logo làm favicon */}
      </Helmet>
      <div className="container">
        <div className="row align-items-center">
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
                <div
                  className="collapse navbar-collapse justify-content-center"
                  id="navbarNav"
                >
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
                      <button
                        className="nav-link dropdown-toggle"
                        type="button"
                        id="navbarDropdown"
                        data-bs-toggle="dropdown"
                        aria-label="Toggle Dropdown"
                      >
                        <i className="bi bi-ui-checks-grid"></i> Tất Cả Sản Phẩm
                      </button>
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
                      <Link className="nav-link" to="/">
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
    </header>
  );
}

export default Header;
