import React from "react";
import { Link } from "react-router-dom";
import "./homePage.css";
import Shop from '../../assets/shop.png';

import { Carousel } from "react-bootstrap"; // Import Carousel từ react-bootstrap
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";

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
        </Carousel>

        <div className="container">
          {/* Categories */}
          <br></br>
          <div className="row">
            <div className="col-md-4" >              
              <div className="card mb-4 p-3" style={{background: "#e3e3e3"}}>    
                <h5 className="card-title">
                  <i className="fas fa-truck me-2"></i> 
                  Giao hàng đúng giờ
                </h5>
                <p className="card-text">
                  Cam kết đúng giờ, đảm bảo sản phẩm
                </p>
              </div>
            </div>
            <div className="col-md-4">              
              <div className="card mb-4 p-3" style={{background: "#75b798ad"}}>    
                <h5 className="card-title" >
                  <i class="bi bi-stars me-2"></i> 
                   Cam kết chất lượng
                </h5>
                <p className="card-text">
                   Hoa tươi mới mỗi ngày không héo úa
                </p>
              </div>
            </div>
            <div className="col-md-4">              
              <div className="card mb-4 p-3" style={{background: "#dc35458c"}}>    
                <h5 className="card-title">
                  <i class="bi bi-telephone-inbound-fill me-2"></i> 
                     Hotline: 0336.420.793
                </h5>
                <p className="card-text">
                  Tư vấn theo phù hợp giá tiền
                </p>
              </div>
            </div>        
          </div>

          <br></br>

          <div className="divider">
            <h3>DANH MỤC NỔI BẬT</h3>
            <hr></hr>
          </div>
          <div className="row">
            {/* Category 1 */}

            <div className="col-md-4">
              <div className="card mb-4">
                <img
                  src="https://bizweb.dktcdn.net/thumb/1024x1024/100/407/635/products/luoi-lan.jpg?v=1638755562233"
                  className="card-img-top"
                  alt="Lãng mạn"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Lưới lan</h5>
                  <p className="card-text">
                    Đây là một sản phẩm lưới lan chất lượng, giúp bảo vệ và chăm
                    sóc cây lan của bạn một cách hiệu quả. Đây là một sản phẩm
                    lưới lan chất lượng, giúp bảo vệ và chăm sóc cây lan của bạn
                    một cách hiệu quả.
                  </p>
                  <div className="d-flex justify-content-end mt-auto">
                    <Link
                      to="/products?genre=Romantic"
                      className="btn btn-dark mx-2"
                    >
                      Xem chi tiết
                    </Link>
                    <Link to="/contact" className="btn btn-danger mx">
                      Liên hệ đặt hàng
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Category 2 */}
            <div className="col-md-4">
              <div className="card mb-4">
                <img
                  src="https://diennuocthinhthanh.com/wp-content/uploads/2022/04/ong-nhua-pvc-binh-minh-co-may-loai.jpg"
                  className="card-img-top"
                  alt="Lãng mạn"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Ống nước</h5>
                  <p className="card-text">
                    Đây là một sản phẩm lưới lan chất lượng, giúp bảo vệ và chăm
                    sóc cây lan của bạn một cách hiệu quả. Đây là một sản phẩm
                    lưới lan chất lượng, giúp bảo vệ và chăm sóc cây lan của bạn
                    một cách hiệu quả.
                  </p>
                  <div className="d-flex justify-content-end mt-auto">
                    <Link
                      to="/products?genre=Romantic"
                      className="btn btn-dark mx-2"
                    >
                      Xem chi tiết
                    </Link>
                    <Link to="/contact" className="btn btn-danger mx">
                      Liên hệ đặt hàng
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Category 3 */}
            <div className="col-md-4">
              <div className="card mb-4">
                <img
                  src="data:image/jpeg;base64,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"
                  className="card-img-top"
                  alt="Lãng mạn"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Bạc chống thấm</h5>
                  <p className="card-text">
                    Đây là một sản phẩm lưới lan chất lượng, giúp bảo vệ và chăm
                    sóc cây lan của bạn một cách hiệu quả. Đây là một sản phẩm
                    lưới lan chất lượng, giúp bảo vệ và chăm sóc cây lan của bạn
                    một cách hiệu quả.
                  </p>
                  <div className="d-flex justify-content-end mt-auto">
                    <Link
                      to="/products?genre=Romantic"
                      className="btn btn-dark mx-2"
                    >
                      Xem chi tiết
                    </Link>
                    <Link to="/contact" className="btn btn-danger mx">
                      Liên hệ đặt hàng
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="divider">
            <h2>Sản phẩm bán chạy</h2>
          </div>

          <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
              <div
                className="item-card mb-3 item-film"
                style={{ minHeight: "200px" }}
              >
                <Link
                  to="/chi-tiet-phim/sampleMovie"
                  className="item-card-link"
                >
                  <img
                      src="https://bizweb.dktcdn.net/thumb/1024x1024/100/407/635/products/luoi-lan.jpg?v=1638755562233"
                    className="item-card-img-top"
                    alt="Sample Movie"
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="discount-tag">-17%</div>
                </Link>
                <div className="item-card-body">
                  <h5 className="item-card-title">
                    <b>Sản phẩm Lưới lan</b>
                  </h5>
                  <p className="item-card-text">
                    <span
                      style={{
                        textDecoration: "line-through",
                        marginRight: "5px",
                      }}
                    >
                      289.000
                    </span>
                    <span style={{ fontWeight: "bold", color: "red" }}>
                      150.000
                    </span>
                  </p>

                  <p className="item-card-text">Nhà phân phối Vĩnh Mi</p>
                </div>
                <button className="item-card-button">Đặt hàng</button>{" "}
                {/* Nút Mua ngay */}
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
              <div
                className="item-card mb-3 item-film"
                style={{ minHeight: "200px" }}
              >
                <Link
                  to="/chi-tiet-phim/sampleMovie"
                  className="item-card-link"
                >
                  <img
                    src="data:image/jpeg;base64,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"
                    className="item-card-img-top"
                    alt="Sample Movie"
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="discount-tag">-88%</div>
                </Link>
                <div className="item-card-body">
                  <h5 className="item-card-title">
                    <b>Bạt chống thấm cao cấp</b>
                  </h5>
                  <p className="item-card-text">
                    <span
                      style={{
                        textDecoration: "line-through",
                        marginRight: "5px",
                      }}
                    >
                      1.000.000
                    </span>
                    <span style={{ fontWeight: "bold", color: "red" }}>
                      220.000
                    </span>
                  </p>

                  <p className="item-card-text">Nhà phân phối Vĩnh Mi</p>
                </div>
                <button className="item-card-button">Đặt hàng</button>{" "}
                {/* Nút Mua ngay */}
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
              <div
                className="item-card mb-3 item-film"
                style={{ minHeight: "200px" }}
              >
                <Link
                  to="/chi-tiet-phim/sampleMovie"
                  className="item-card-link"
                >
                  <img
                      src="https://bizweb.dktcdn.net/thumb/1024x1024/100/407/635/products/luoi-lan.jpg?v=1638755562233"
                    className="item-card-img-top"
                    alt="Sample Movie"
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="discount-tag">-17%</div>
                </Link>
                <div className="item-card-body">
                  <h5 className="item-card-title">
                    <b>Sản phẩm Lưới lan</b>
                  </h5>
                  <p className="item-card-text">
                    <span
                      style={{
                        textDecoration: "line-through",
                        marginRight: "5px",
                      }}
                    >
                      289.000
                    </span>
                    <span style={{ fontWeight: "bold", color: "red" }}>
                      150.000
                    </span>
                  </p>

                  <p className="item-card-text">Nhà phân phối Vĩnh Mi</p>
                </div>
                <button className="item-card-button">Đặt hàng</button>{" "}
                {/* Nút Mua ngay */}
              </div>
            </div> <div className="col-12 col-sm-6 col-md-6 col-lg-6">
              <div
                className="item-card mb-3 item-film"
                style={{ minHeight: "200px" }}
              >
                <Link
                  to="/chi-tiet-phim/sampleMovie"
                  className="item-card-link"
                >
                  <img
                                           src={Shop}

                    className="item-card-img-top"
                    alt="Sample Movie"
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="discount-tag">-26%</div>
                </Link>
                <div className="item-card-body">
                  <h5 className="item-card-title">
                    <b>Ống nhựa cao cấp</b>
                  </h5>
                  <p className="item-card-text">
                    <span
                      style={{
                        textDecoration: "line-through",
                        marginRight: "5px",
                      }}
                    >
                      200.000
                    </span>
                    <span style={{ fontWeight: "bold", color: "red" }}>
                      110.000
                    </span>
                  </p>

                  <p className="item-card-text">Nhà phân phối Vĩnh Mi</p>
                </div>
                <button className="item-card-button">Đặt hàng</button>{" "}
                {/* Nút Mua ngay */}
              </div>
            </div> <div className="col-12 col-sm-6 col-md-6 col-lg-6">
              <div
                className="item-card mb-3 item-film"
                style={{ minHeight: "200px" }}
              >
                <Link
                  to="/chi-tiet-phim/sampleMovie"
                  className="item-card-link"
                >
                  <img
                      src={Shop}
                    className="item-card-img-top"
                    alt="Sample Movie"
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="discount-tag">-17%</div>
                </Link>
                <div className="item-card-body">
                  <h5 className="item-card-title">
                    <b>Sản phẩm Lưới lan</b>
                  </h5>
                  <p className="item-card-text">
                    <span
                      style={{
                        textDecoration: "line-through",
                        marginRight: "5px",
                      }}
                    >
                      289.000
                    </span>
                    <span style={{ fontWeight: "bold", color: "red" }}>
                      150.000
                    </span>
                  </p>

                  <p className="item-card-text">Nhà phân phối Vĩnh Mi</p>
                </div>
                <button className="item-card-button">Đặt hàng</button>{" "}
                {/* Nút Mua ngay */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;
