import React from "react";

function Footer() {
  return (
    <div className="background-color-secondary py-4 ">
      <footer className="container py-2 d-flex justify-content-between display-flex-service ">
        <p className="text-white">2023 - Asha bikawat. All rights reserved</p>
        <div className="d-flex justify-content-end me-4 mt-4">
          <span className="fs-5 me-3 social-media-icons">
            <ion-icon name="logo-facebook"></ion-icon>
          </span>
          <span className="fs-5 me-3 social-media-icons">
            <ion-icon name="logo-twitter"></ion-icon>
          </span>
          <span className="fs-5 me-3 social-media-icons">
            <ion-icon name="logo-linkedin"></ion-icon>
          </span>
          <span className="fs-5 me-3 social-media-icons">
            <ion-icon name="logo-github"></ion-icon>
          </span>
          <span className="fs-5 me-3 social-media-icons">
            <ion-icon name="logo-instagram"></ion-icon>
          </span>
          <span className="fs-5 me-3 social-media-icons">
            <ion-icon name="logo-medium"></ion-icon>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
