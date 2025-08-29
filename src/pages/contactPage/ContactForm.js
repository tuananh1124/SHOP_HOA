
const ContactUs = () => {
  // State to handle form inputs
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   message: "",
  // });

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission logic here
  //   console.log(formData);
  // };

  return (
    <div className="container mt-5">
      <h2>Liên hệ với chúng tôi</h2>

      <div className="row">
        {/* Left side: Contact details and map */}
        <div className="col-md-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1015928664006!2d106.6755843748053!3d10.80353058934694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d83ed3efc5%3A0x5e2aa1a1b361b862!2zxJAuIMSQ4buXIFThuqVuIFBob25nLCBQaMO6IE5odeG6rW4sIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1755831636056!5m2!1svi!2s"
            title="Contact Page Map"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>

          <div className="mt-4">
            <h5>ĐỊA CHỈ</h5>
            <p>Đỗ Tấn Phong, Phường Đức Nhuận, Thành phố Hồ Chí Minh</p>

            <h5>LIÊN HỆ</h5>
            <p>
              Hotline: <b style={{ color: "red" }}>0336.420.793</b>
              <br />
              Thời gian làm việc: 08:00 - 17:00
              <br />
              Email liên hệ:{" "}
              <b style={{ color: "red" }}>nguyntuananh1124@gmail.com</b>
            </p>
          </div>
        </div>

        {/* Right side: Contact form */}
      </div>
    </div>
  );
};

export default ContactUs;
