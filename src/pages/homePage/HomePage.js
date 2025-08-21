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
            {[
              { image: "./img/hoasap.jpg", title: "Hoa sáp" },
              { image: "./img/hoacuoi.jpg", title: "Hoa cưới" },
              { image: "./img/bohoatuoi.jpg", title: "Bó hoa tươi" },
              { image: "./img/hoachucmung.jpg", title: "Hoa chúc mừng" },
            ].map((item, index) => (
              <div key={index} className="col-md-3" style={{ width: "200px" }}>
                <div className="card">
                  <img src={item.image} className="card-img" alt={item.title} />
                  <div>
                    <h5
                      className="card-title text-center"
                      style={{ fontSize: "16px" }}
                    >
                      {item.title}
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <hr></hr>
          {/* Divider */}
          <div className="divider">
            <h2>SẢN PHẨM BÁN CHẠY</h2>
          </div>

          <br></br>
          <div className="row">
            {[
              {
                image: "./img/spbc1.webp",
                title:
                  "Bó Hoa Hồng Pastel & Pingpong Thỏ Bông – Dễ Thương & Ngọt Ngào",
                price: "500.000₫",
              },
              {
                image: "./img/spbc2.webp",
                title: "Bó Hoa Hướng Dương – Rực Rỡ & Lạc Quan ngày tốt nghiệp",
                price: "400.000₫",
              },
              {
                image: "./img/spbc3.jpg",
                title: "Bó Hoa Hồng Đỏ – Sang Trọng & Nồng Nàn",
                price: "600.000₫",
              },
              {
                image: "./img/spbc4.webp",
                title:
                  "Cúc Tana – Dịu Dàng Như Ánh Sáng Ban Mai, Gói Trọn Một Ngày Bình Yên",
                price: "700.000₫",
              },
              {
                image: "./img/spbc5.webp",
                title: "Bó Hoa Hồng Đỏ – Đen Sang Trọng, Thay Lời Yêu Mạnh Mẽ",
                price: "500.000₫",
              },
              {
                image: "./img/spbc6.webp",
                title:
                  "Yêu Từ Ánh Nhìn Đầu Tiên – Bó Hoa Hồng Đỏ & Kem Tinh Tế",
                price: "500.000₫",
              },
              {
                image: "./img/spbc7.webp",
                title:
                  "Mộng Mơ Pastel – Bó Hoa Hồng & Đồng Tiền, Cát Tường Siêu To",
                price: "500.000₫",
              },
              {
                image: "./img/spbc8.webp",
                title: "Bó Hồng Kem Mix – Giấy Xé Tông Màu Pastel Ngọt Ngào",
                price: "500.000₫",
              },
            ].map((item, index) => (
              <div key={index} className="col-md-3 mb-3">
                <div className="card product-card">
                  <img
                    src={item.image}
                    className="card-img-top product-img"
                    alt={item.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>

                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-danger fw-bold">{item.price}</span>
                      <a href="#" className="btn btn-success">
                        <i className="bi bi-cart-plus-fill"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <button type="button" className="btn btn-outline-success">
              Xem tất cả <i className="bi bi-arrow-right ms-2"></i>
            </button>
          </div>

          <hr></hr>
          {/* Divider */}
          <div className="divider">
            <h2>BÓ HOA TƯƠI TỪ 89K</h2>
          </div>
          <br></br>
          <div className="row">
            {[
              {
                image: "./img/boahoatuoi1.webp",
                title: "Bó Hoa Hồng Pastel – Tông Hồng Ngọt Ngào",
                price: "500.000₫",
              },
              {
                image: "./img/boahoatuoi2.webp",
                title: "Hoa Hồng Đỏ & Hồng Kem Pastel Sang Trọng",
                price: "400.000₫",
              },
              {
                image: "./img/boahoatuoi3.webp",
                title: "Bó Hoa Hồng Đỏ 50 Bông – Tình Yêu Nồng Nàn",
                price: "600.000₫",
              },
              {
                image: "./img/boahoatuoi4.webp",
                title: "Bó Hoa Hồng & Tulip Trắng – Sự Nhẹ Nhàng Tinh Khiết",
                price: "700.000₫",
              },
              {
                image: "./img/boahoatuoi5.webp",
                title: "Bó Hoa Hồng Xịt Sơn Xanh – Sắc Trầm Thanh Nhã",
                price: "500.000₫",
              },
              {
                image: "./img/boahoatuoi6.webp",
                title: "Bó Hoa Tulip Trắng – Thanh Khiết Tinh Khôi",
                price: "500.000₫",
              },
              {
                image: "./img/boahoatuoi7.jpg",
                title: "Bó Hoa Hồng Đỏ – Lãng Mạn & Đầy Cảm Xúc",
                price: "500.000₫",
              },
              {
                image: "./img/boahoatuoi8.webp",
                title: "Bó Hoa Hồng Nhiều Màu – Tinh Tế & Truyền Cảm Hứng",
                price: "500.000₫",
              },
            ].map((item, index) => (
              <div key={index} className="col-md-3 mb-3">
                <div className="card product-card">
                  <img
                    src={item.image}
                    className="card-img-top product-img"
                    alt={item.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>

                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-danger fw-bold">{item.price}</span>
                      <a href="#" className="btn btn-success">
                        <i className="bi bi-cart-plus-fill"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button type="button" className="btn btn-outline-success">
              Xem tất cả <i className="bi bi-arrow-right ms-2"></i>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;
