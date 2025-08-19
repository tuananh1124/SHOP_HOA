import React from "react";
import "./footer.css"
function Footer() {
  return (
    <footer
      className="footer mt-5 pt-5"
      style={{ boxShadow: "0 0 4px 1px gray" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>KẾT NỐI QUA NỀN TẢNG</h5>
            <div className="social-icons">
              <a href="https://zalo.me/0336420793" style={{ textDecoration: "none" }}>
                <img style={{width: "35px"}}
                  src={`https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg`}
                  alt="X"
                />
<b style={{ color: "red", fontSize: "20px", textDecoration: "none" }}>   0336.420.793</b>

              </a>
              <br/>
              <a href="https://www.facebook.com/nguyntuananh1124"style={{ textDecoration: "none" }}>
                <img style={{width: "35px"}}
                  src={`https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg`}
                  alt="Facebook"
                />
                <b style={{ color: "red", fontSize: "20px", textDecoration: "none" }}>   Lan Anh</b>

              </a>
             
            </div>
           
          </div>
          <div className="col-md-4">
            <h5>Liên hệ</h5>
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-map-marker-alt"></i>  Phường Đức Nhuận, Thành phố Hồ Chí Minh

              </li>
              <li>
                <i className="fas fa-phone-alt"></i> Điện thoại:{" "}
                <b style={{ color: "red" }}>0336.420.793</b>
              </li>
              <li>
                <i className="fas fa-envelope"></i> Email:{" "}
                <b style={{ color: "red" }}>lananh@gmail.com</b>
              </li>
              <li>
                <i className="fas fa-clock"></i> Giờ mở cửa: 08:00 - 17:00
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Chính sách & Điều khoản</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.facebook.com/">Chính sách bảo mật</a>
              </li>
              <li>
                <a href="https://www.facebook.com/">Điều khoản dịch vụ</a>
              </li>
              <li>
                <a href="https://www.facebook.com/">Chính sách đổi trả</a>
              </li>
              <li>
                <a href="https://www.facebook.com/">Hỗ trợ khách hàng</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center mt-4">
            <p className="text-light">
              &copy; 2024 MovieCinema. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
