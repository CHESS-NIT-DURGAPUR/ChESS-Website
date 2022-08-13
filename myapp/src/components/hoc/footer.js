import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/nitdgp.webp"
import "../main/bootstrap.css"
import "./footer.css"
const Footer = () => {
  return (
    <footer className="section footer-classic section-sm footer__outer">
      <div className="container">
        <div className="row row-30">
          <div className="col-lg-3 wow fadeInLeft centerAlign" >
            <a className="brand" href="./"><img className="brand-logo-dark" src={logo} alt="CHESS Logo" />
              <img className="brand-logo-light chess__logo" src={logo} alt="CHESS" />
            </a>
            <p className="footer-classic-description offset-top-0 footer__para">CHESS is a student's society at NIT Durgapur.</p>
          </div>


          <div className="col-lg-3 col-sm-8 wow fadeInUp" style={{ textAlign: "center" }} >
            <p className="footer-classic-title footer__heading">Contact Info</p>
            <div className="d-block offset-top-0">
              Durgapur, West Bengal
              <span className="d-lg-block">Durgapur, India</span>
            </div>
            <a href="mailto:chessnitd2020@gmail.com" className="d-inline-block footer__mail"><i class="fa-solid fa-envelope"></i></a>
          </div>



          <div className="col-lg-2 col-sm-4 wow fadeInUp" data-wow-delay=".3s" style={{ textAlign: "center" }} >
            <p className="footer-classic-title footer__heading" >Quick Links</p>
            <ul className="footer-classic-nav-list">
              <li title='Home'><Link className='socialLink__a_quickLinks' to="./"><i className="fa-solid fa-house"></i></Link></li>
              <li title='Faculty'><Link className='socialLink__a_quickLinks' to="/facad"><i className="fa-solid fa-user-plus"></i></Link></li>
              <li title='Member'><Link className='socialLink__a_quickLinks' to="/member"><i className="fa-solid fa-users"></i></Link></li>
              <li title='Blog'><Link className='socialLink__a_quickLinks' to="/register"><i className="fa-solid fa-blog"></i></Link></li>
            </ul>
          </div>


          <div className="col-lg-4 wow fadeInLeft" data-wow-delay=".2s" style={{ textAlign: "center" }} >
            <p className="footer-classic-title footer__heading">Newsletter</p>
            <form
              className="rd-mailform text-left footer-classic-subscribe-form"
              data-form-output="form-output-global"
              data-form-type="contact"
              method="post"
              action="bat/rd-mailform.php"
            >
              <div className="form-wrap">
                <label className="form-label" htmlFor="subscribe-email">Your Email Address</label>
                <input
                  className="form-input footer__subscribe"
                  id="subscribe-email"
                  type="email"
                  name="email"
                  data-constraints="@Email"
                  required
                />
              </div>
              <div className="form-button group-sm text-center text-lg-left">
                <button className="button btn-outline-primary button-circle footer__signUp" type="submit">
                  <i className="fa fa-sign-in" aria-hidden="true"></i>
                </button>
              </div>
            </form>
            <p className="footer__under__para">Be the first to find out about our latest news, updates, and special offers.</p>
          </div>
        </div>

      </div>
      <div className="container-fluid wow fadeInUp" data-wow-delay=".4s">
        <div className="footer-classic-aside footer__heading_upper">
          <p className="rights footer__heading_rights">
            <span>&copy; {new Date().getFullYear()}</span> All Rights Reserved.
          </p>
          <ul className="social-links">
            <li>
              <Link
                className="fa fa-linkedin socialLink__a"
                rel="noopener noreferrer"
                target='_blank'
                to="https://in.linkedin.com/company/chemical-engineering-students-society-nit-durgapur"
              >
              </Link>
            </li>
            <li>
              <Link
                className="fa-brands fa-github socialLink__a"
                rel="noopener noreferrer"
                target='_blank'
                to="https://github.com/CHESS-NIT-DURGAPUR"
              >
              </Link>
            </li>
            <li>
              <Link
                className="fa fa-facebook socialLink__a"
                rel="noopener noreferrer"
                target='_blank'
                to="https://www.facebook.com/Chessnitd"
              >
              </Link>
            </li>
            <li>
              <Link
                className="fa fa-instagram socialLink__a"
                rel="noopener noreferrer"
                target='_blank'
                to="https://www.instagram.com/chess_nit_dgp/"
              >
              </Link>
            </li>
            <li>
              <Link
                className="fa fa-youtube-play socialLink__a"
                rel="noopener noreferrer"
                target='_blank'
                to="https://www.youtube.com/channel/UCZ-mhpK4AzJzpa3yZTR_P9w"
              >
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>

  );
};

export default Footer;