import React from 'react';

function Footer() {
  return (
    <footer className="relative py-3 mt-5 overflow-hidden bg-blue-200 footer">
      <div className="absolute top-0 left-0 w-full h-full opacity-25 bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 animate-pulse"></div>
      <div className="container relative z-10">
        <div className="mb-3 d-flex align-items-center">
          <h3 className="p-0 m-0 ms-3">Amighty Travel</h3>
        </div>
        <div className="mb-3 border opacity-25 border-1 border-dark"></div>
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p className="text-muted">
              Amighty Travel: Your go-to app for discovering, planning, and enjoying limitless adventures.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <address className="text-muted">
              <p className="mb-0">Jl. Jend. Sudirman No.13</p>
              <p className="mb-0">Yogyakarta, Indonesia</p>
              <p className="mb-0">Email: info@example.com</p>
              <p className="mb-0">Phone: +01234567890</p>
            </address>
          </div>
          <div className="col-md-4">
            <h5>Social Media</h5>
            <ul className="list-unstyled">
              <li className="pb-1">
                <a href="#" className="text-decoration-none text-muted">
                  <i className="bi bi-facebook me-1"></i> Facebook
                </a>
              </li>
              <li className="pb-1">
                <a href="#" className="text-decoration-none text-muted">
                  <i className="bi bi-twitter me-2"></i>Twitter
                </a>
              </li>
              <li className="pb-1">
                <a href="#" className="text-decoration-none text-muted">
                  <i className="bi bi-instagram me-2"></i>Instagram
                </a>
              </li>
              <li className="pb-1">
                <a href="#" className="text-decoration-none text-muted">
                  <i className="bi bi-whatsapp me-2"></i>Whatsapp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="text-center col-md-12">
            <p>&copy; 2024 Amighty Travel. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
