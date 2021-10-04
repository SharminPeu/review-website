import React from 'react';
import "./Header.css"
// for header use bootstrap carousel
const Header = () => {
  return (
    <div>

      <div className="banner-container  container mb-5">
        <div className="col-md-12 col-lg-12">
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner ">
              <div className="carousel-item active">
                <img src="https://www.studentworldonline.com/userfiles/images/courses%20-%20online%20coding%20for%20free.jpg" className="d-block w-100 header-img img-fluid" alt="..." />
                <div className="carousel-caption d-none text-dark fw-bold d-md-block">
                  <h5 className="fs-4">Enjoy Learning From Anywhere</h5>
                  <p>We are delighted to give you options to enjoy learning from anywhere in the world.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://st3.depositphotos.com/3382541/13326/v/600/depositphotos_133260890-stock-illustration-programmer-sitting-on-big-laptop.jpg" className="d-block w-100 img-fluid header-img" alt="..." />
                <div className="carousel-caption d-none text-dark fw-bold d-md-block mb-5">

                  <h5 className="fs-4">Enjoy Learning From Anywhere</h5>
                  <p>We are delighted to give you options to enjoy learning from anywhere in the world.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="
      https://img.lovepik.com/photo/40016/3365.jpg_wh300.jpg" className="d-block w-100 img-fluid header-img" alt="..." />
                <div className="carousel-caption d-none text-dark fw-bold d-md-block">

                  <h5 className="fs-4">Enjoy Learning From Anywhere</h5>
                  <p>We are delighted to give you options to enjoy learning from anywhere in the world.</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Header;