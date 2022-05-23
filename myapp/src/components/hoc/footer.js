import React from 'react';
import { Link } from 'react-router-dom';
import hexa from "../images/hexa.png"
import "../main/bootstrap.css"
import "./footer.css"
const Footer = () => {
  return (
    <footer className="section footer-classic section-sm footer__outer">
      <div className="container">
        <div className="row row-30">
          <div className="col-lg-3 wow fadeInLeft" style={{ textAlign: "center" }}>
            <a className="brand" href="./"><img className="brand-logo-dark" src={hexa} alt="CHESS Logo" />
              <img className="brand-logo-light chess__logo" src={hexa} alt="CHESS" />
            </a>
            <p className="footer-classic-description offset-top-0 footer__para">CHESS is a student's society at NIT Durgapur.</p>
          </div>
          <div className="col-lg-3 col-sm-8 wow fadeInUp">
            <p className="footer-classic-title footer__heading">Contact Info</p>
            <div className="d-block offset-top-0">
              Durgapur, West Bengal
              <span className="d-lg-block">Durgapur, India</span>
            </div>
            <a href="mailto:chessnitd2020@gmail.com" className="d-inline-block footer__mail">chessnitd2020@gmail.com</a>
          </div>
          <div className="col-lg-2 col-sm-4 wow fadeInUp" data-wow-delay=".3s">
            <p className="footer-classic-title footer__heading" >Quick Links</p>
            <ul className="footer-classic-nav-list">
              <li><Link to="./">Home</Link></li>
              <li><Link to="/facad">Faculty</Link></li>
              <li><Link to="/member">Members</Link></li>
              <li><Link to="/register">Blog</Link></li>

            </ul>
          </div>
          <div className="col-lg-4 wow fadeInLeft" data-wow-delay=".2s">
            <p className="footer-classic-title footer__heading">Newsletter</p>
            <form className="rd-mailform text-left footer-classic-subscribe-form" data-form-output="form-output-global" data-form-type="contact" method="post" action="bat/rd-mailform.php">
              <div className="form-wrap">
                <label className="form-label" htmlFor="subscribe-email">Your Email Address</label>
                <input className="form-input footer__subscribe" id="subscribe-email" type="email" name="email" data-constraints="@Email" required />
              </div>
              <div className="form-button group-sm text-center text-lg-left">
                <button className="button btn-outline-primary button-circle footer__signUp" type="submit"><i className="fa fa-sign-in" aria-hidden="true"></i></button>
              </div>
            </form>
            <p className="footer__under__para">Be the first to find out about our latest news, updates, and special offers.</p>
          </div>
        </div>
      </div>
      <div className="container wow fadeInUp" data-wow-delay=".4s">
        <div className="footer-classic-aside">
          <p className="rights footer__heading"><span>&copy; {new Date().getFullYear()}</span> All Rights Reserved</p>
          <ul className="social-links">
            <li><a className="fa fa-linkedin socialLink__a" target='_blank' href="https://in.linkedin.com/company/chemical-engineering-students-society-nit-durgapur"></a></li>
            <li><a className="fa-brands fa-github socialLink__a" target='_blank' href="https://github.com/CHESS-NIT-DURGAPUR"></a></li>
            <li><a className="fa fa-facebook socialLink__a" target='_blank' href="https://www.facebook.com/Chessnitd"></a></li>
            <li><a className="fa fa-instagram socialLink__a" target='_blank' href="https://www.instagram.com/chess_nit_dgp/"></a></li>
          </ul>
        </div>
      </div>
    </footer>

  );
};

export default Footer;