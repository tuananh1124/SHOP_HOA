import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Detail = () => {
  const images = [
    "./img/spbc6.webp",
    "./img/spbc2.webp",
    "./img/spbc4.webp",
    "./img/spbc5.webp",
    "./img/spbc7.webp",
    "./img/spbc8.webp",
    "./img/spbc3.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="container mt-5">
      <div className="row">
        {/* col-1: Gallery */}
        <div className="col-md-4">
          {/* Ảnh lớn */}
          <div className="w-full h-96 mb-3 d-flex justify-content-center">
            <img
              src={selectedImage}
              alt="Selected"
              className="w-100 h-100 object-cover rounded shadow-sm"
              style={{ maxHeight: "380px", objectFit: "cover" }}
            />
          </div>

          {/* Ảnh nhỏ: Swiper */}
          <Swiper
            spaceBetween={10}
            slidesPerView={"auto"}
            grabCursor={true} // cho phép kéo bằng chuột
          >
            {images.map((img, index) => (
              <SwiperSlide
                key={index}
                style={{ width: "70px", height: "70px" }}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index}`}
                  className={`rounded cursor-pointer border ${
                    selectedImage === img
                      ? "border-2 border-success"
                      : "border-1 border-light"
                  }`}
                  style={{
                    width: "70px",
                    height: "70px",
                    objectFit: "cover",
                  }}
                  onClick={() => setSelectedImage(img)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* col-2 */}
        <div className="col-md-4"></div>

        {/* col-3 */}
        <div className="col-md-4">
          <ul className="list-group">
            <li className="list-group-item list-group-item-success fw-bold">
              <i className="bi bi-check2-circle fs-4 me-3"></i>
              Chính sách hỗ trợ
            </li>
            <li className="list-group-item d-flex">
              <i className="bi bi-patch-check fs-4 me-3"></i>
              <div>
                <div className="fw-bold">Duyệt ảnh sản phẩm</div>
                <small className="text-muted">
                  Gửi hình ảnh sản phẩm ưng ý mới giao hàng
                </small>
              </div>
            </li>
            <li className="list-group-item d-flex">
              <i className="bi bi-card-text fs-4 me-3"></i>
              <div>
                <div className="fw-bold">Thẻ chúc mừng miễn phí</div>
                <small className="text-muted">Tặng kèm thẻ in nội dung</small>
              </div>
            </li>
            <li className="list-group-item d-flex">
              <i className="bi bi-image fs-4 me-3"></i>
              <div>
                <div className="fw-bold">Banner sản phẩm</div>
                <small className="text-muted">
                  Thiết kế banner theo yêu cầu
                </small>
              </div>
            </li>
            <li className="list-group-item d-flex">
              <i className="bi bi-truck fs-4 me-3"></i>
              <div>
                <div className="fw-bold">Giao hàng trong 2H</div>
                <small className="text-muted">Nhanh chóng và tiện lợi</small>
              </div>
            </li>
          </ul>
          <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button type="button" className="btn btn-outline-success">
              <i className="bi bi-heart p-2"></i>
              Thêm vào yêu thích
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
