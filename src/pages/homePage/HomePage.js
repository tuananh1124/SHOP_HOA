import React from 'react';
import { Link } from 'react-router-dom';
import './homeScreen.css';

function LandingPage() {
  return (
    <div>

      {/* Main Content */}
      <main>

        {/* Carousel */}
        <div className="row">
          <div className="col-12 text-center mb-5 py-5 back-ground-img ">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/movieticket-77cf5.appspot.com/o/CRS.jpg?alt=media&token=6b8c4daf-b5d4-49df-9613-e3ef8542336a"
                    alt="Movie Poster"
                    className="d-block mx-auto"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/movieticket-77cf5.appspot.com/o/CRS2.jpg?alt=media&token=f5a8994d-fd20-497e-89bd-080557a7fd31"
                    alt="Movie Poster"
                    className="d-block mx-auto"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/movieticket-77cf5.appspot.com/o/CRS3.jpg?alt=media&token=15f18a81-f008-4805-b5a6-0709421ce9cf"
                    alt="Movie Poster"
                    className="d-block mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          {/* Categories */}
          <div className="row">
            {/* Category 1 */}
            <div className="col-md-4">
              <div className="card mb-4">
                <img src="https://firebasestorage.googleapis.com/v0/b/movieticket-77cf5.appspot.com/o/Romantic.jpg?alt=media&token=b555d85b-088f-4447-94dd-f2ffa6b74427" className="card-img-top" alt="Lãng mạn" />
                <div className="card-body text-center">
                  <h5 className="card-title">Lãng mạn</h5>
                  <Link to="/products?genre=Romantic" className="btn btn-dark mt-3">More</Link>
                </div>
              </div>
            </div>
            {/* Category 2 */}
            <div className="col-md-4">
              <div className="card mb-4">
                <img src="https://firebasestorage.googleapis.com/v0/b/movieticket-77cf5.appspot.com/o/Action.jpg?alt=media&token=f56d57ea-46ee-4f10-b883-08e8b4d3760d" className="card-img-top" alt="Hành động" />
                <div className="card-body text-center">
                  <h5 className="card-title">Hành động</h5>
                  <Link to="/products?genre=Action" className="btn btn-dark mt-3">More</Link>
                </div>
              </div>
            </div>
            {/* Category 3 */}
            <div className="col-md-4">
              <div className="card mb-4">
                <img src="https://firebasestorage.googleapis.com/v0/b/movieticket-77cf5.appspot.com/o/Horrified.jpg?alt=media&token=145ca538-28cc-42c9-9b9d-f90d99f97627" className="card-img-top" alt="Kinh dị" />
                <div className="card-body text-center">
                  <h5 className="card-title">Kinh dị</h5>
                  <Link to="/products?genre=Horror" className="btn btn-dark mt-3">More</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="divider">
            <h2>Danh sách phim</h2>
          </div>

          {/* Movies List - Empty or Sample Movies */}
          <div className="row">
            {/* You can display a few sample movie cards here */}
            <div className="col-md-3">
              <div className="card mb-3 item-film" style={{ minHeight: '611px' }}>
                <Link to="/chi-tiet-phim/sampleMovie">
                  <img src="https://via.placeholder.com/150" className="card-img-top" alt="Sample Movie" />
                </Link>
                <div className="card-body text-center">
                  <h5 className="card-title">Sample Movie</h5>
                  <p className="card-text">
                    <i style={{ color: "yellow", textShadow: "0px 0px 2px rgba(0, 0, 0, 0.5)" }} className="bi bi-star-fill"></i> No rating
                  </p>
                  <p className="card-text">
                    Genres: Action, Drama
                  </p>
                </div>
              </div>
            </div>
            {/* More sample cards can be added here */}
          </div>
        </div>
      </main>

    </div>
  );
}

export default LandingPage;
