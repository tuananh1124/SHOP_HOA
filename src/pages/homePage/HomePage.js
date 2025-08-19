import React from "react";
import { Link } from "react-router-dom";
import "./homePage.css";

import { Carousel } from "react-bootstrap"; // Import Carousel từ react-bootstrap
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.jpg";

function LandingPage() {
  return (
    <div>
      {/* Main Content */}
      <main>
        <Carousel interval={3000} fade>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src={banner1}
              alt="First slide"
              style={{
                objectFit: "cover", // vẫn giữ tỉ lệ và lấp kín khung
                maxHeight: "400px", // ảnh không cao quá
              }}
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src={banner2}
              alt="Second slide"
              style={{
                objectFit: "cover",
                maxHeight: "400px",
              }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src={banner3}
              alt="Second slide"
              style={{
                objectFit: "cover",
                maxHeight: "400px",
              }}
            />
          </Carousel.Item>
        </Carousel>

        <div className="container">
          {/* Categories */}
          <br></br>
          <div className="row home-page">
            <div className="col-md-4">
              <div className="card mb-4 p-3" style={{ background: "#e3e3e3" }}>
                <h5 className="card-title">
                  <i className="fas fa-truck me-2"></i>
                  Giao hàng đúng giờ
                </h5>
                <p className="card-text">Cam kết đúng giờ, đảm bảo sản phẩm</p>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card mb-4 p-3"
                style={{ background: "#75b798ad" }}
              >
                <h5 className="card-title">
                  <i class="bi bi-stars me-2"></i>
                  Cam kết chất lượng
                </h5>
                <p className="card-text">Hoa tươi mới mỗi ngày không héo úa</p>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card mb-4 p-3"
                style={{ background: "#dc35458c" }}
              >
                <h5 className="card-title">
                  <i class="bi bi-telephone-inbound-fill me-2"></i>
                  Hotline: 0336.420.793
                </h5>
                <p className="card-text">Tư vấn theo phù hợp giá tiền</p>
              </div>
            </div>
          </div>

          <hr></hr>
          <div className="divider">
            <h3>DANH MỤC NỔI BẬT</h3>
            <br></br>
          </div>
          <div className="row home-page" style={{ justifyContent: "center" }}>
            {/* Category 1 */}

            <div className="col-md-3" style={{ width: "200px" }}>
              <div className="card">
                <img
                  src="./img/hoasap.jpg"
                  className="card-img"
                  alt="Lãng mạn"
                />
                <div>
                  <h5
                    className="card-title text-center"
                    style={{ fontSize: "16px" }}
                  >
                    Hoa sáp
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-md-3" style={{ width: "200px" }}>
              <div className="card">
                <img
                  src="./img/hoacuoi.jpg"
                  className="card-imgp"
                  alt="Lãng mạn"
                />
                <div>
                  <h5
                    className="card-title text-center"
                    style={{ fontSize: "16px" }}
                  >
                    Hoa cưới
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-3" style={{ width: "200px" }}>
              <div className="card">
                <img src="./img/bohoatuoi.jpg" alt="Lãng mạn" />
                <div>
                  <h5
                    className="card-title text-center"
                    style={{ fontSize: "16px" }}
                  >
                    Bó hoa tươi
                  </h5>
                </div>
              </div>
            </div>

            {/* Category 2 */}
            <div className="col-md-3" style={{ width: "200px" }}>
              <div className="card">
                <img
                  src="./img/hoachucmung.jpg"
                  className="card-img"
                  alt="Lãng mạn"
                />
                <div>
                  <h5
                    className="card-title text-center"
                    style={{ fontSize: "16px" }}
                  >
                    Hoa chúc mừng
                  </h5>
                </div>
              </div>
            </div>
            {/* Category 3 */}
          </div>
          
          <hr></hr>
          {/* Divider */}
          <div className="divider">
            <h2>SẢN PHẨM BÁN CHẠY</h2>
          </div>

          <br></br>
          <div className="row"></div>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;
