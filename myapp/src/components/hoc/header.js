import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { log } from "../actions/memberactions";
import "./header.css";
class Header extends Component {
  logoutuser = () => {
    this.props
      .dispatch(log())
      .then((res) => {
        console.log("logout");
      })
      .catch((err) => console.log(err));
  };

  render() {
    // console.log(this.props.user.userData);
    return (
      <React.Fragment>
        <div className="header">
          <nav className="navbar navbar-expand-md navbar-dark shadow-5-strong fixed-top nav_custom navbar-expand-custom navbar-mainbg">
            <div className="container-fluid">
              <Link to="/" className="navbar-brand user__group">
              </Link>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#collapsibleNavbar"
              >
                <span className="navbar-toggler-icon"></span>
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div
                className="navbar-collapse collapse flex-grow-0 main__navs"
                id="collapsibleNavbar"
              >
                <ul className="navbar-nav abs-center-x customBorder">
                  <li className="nav-item">
                    <Link className="nav-link  nav__link" to="/">
                      <i className="fa fa-home" aria-hidden="true"></i> HOME
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link nav__link" to="/facad">
                      <i className="fa fa-user-plus" aria-hidden="true"></i>{" "}
                      FACULTY
                    </Link>
                  </li>

                  <li className="nav-item ">
                    <Link className="nav-link nav__link" to="/alumni">
                      <i
                        className="fa fa-graduation-cap"
                        aria-hidden="true"
                      ></i>{" "}
                      ALUMNI
                    </Link>
                  </li>

                  <li className="nav-item ">
                    <Link className="nav-link nav__link" to="/member">
                      <i className="fa fa-users" aria-hidden="true"></i> MEMBER
                    </Link>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link nav__link dropdown-toggle"
                      data-toggle="dropdown"
                      to="/"
                    >
                      EVENTS
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropDown__link" to="/chemkriti2021">
                          ChemKriti 2021
                        </Link>
                      </li>
                      <li>
                        <Link className="dropDown__link" to="/chemkriti2022">
                          ChemKriti 2022
                        </Link>
                      </li>
                      <li>
                        <Link className="dropDown__link" to="/moreevents">
                          More Events
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link nav__link dropdown-toggle"
                      data-toggle="dropdown"
                      to="/"
                    >
                      PREVIEW
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropDown__link" to="./ChemEInsider">
                          Chem-E-Insider
                        </Link>
                      </li>
                      <li>
                        <Link className="dropDown__link" to="./AChatWithChESS">
                          A Chat With ChESS
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link nav__link" to="/blogs">
                      <i className="fa fa-blog"></i> BLOGS
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <div
                className="navbar-collapse collapse flex-grow-0"
                id="collapsibleNavbar"
              >
                <ul className="navbar-nav justify-content-center mx-auto"> */}
              {/* {this.props.user.userData ?
                    !this.props.user.userData.isAuth ?
                      <li className="nav-item">
                        <Link className="nav-link nav__link" to="/register">
                          REGISTER <i className="fa fa-user" aria-hidden="true"></i>
                        </Link>
                      </li>
                      :
                      null :
                    null
                  } */}
              {/* {this.props.user.userData ?
                    !this.props.user.userData.isAuth ?
                      <li className="nav-item ">
                        <Link className="nav-link nav__link" to="/login">
                          LOGIN <i className="fa fa-sign-in" aria-hidden="true"></i>

                        </Link>
                      </li>
                      :
                      <li className="nav-item active">
                        <Link className="nav-link nav__link" to="/logout" onClick={() => this.logoutuser()}>
                          LOGOUT <i className="fa fa-sign-out" aria-hidden="true"></i>
                        </Link>
                      </li> : null
                  } */}

              {/* <li className="nav-item">
                    <Link className="nav-link nav__link" to="/blogs">
                      <i className="fa fa-blog"></i> BLOGS
                    </Link>
                  </li> */}

              {/* <li className="nav-item">
                    <Link className="nav-link nav__link" to="/allalum">
                    <i className="fa fa-plus"></i> VIEW ALL ALUMNI
                    </Link>
                  </li> */}

              {/* {this.props.user.userData ? (
                    this.props.user.userData.isAuth ? (
                      this.props.user.userData.role === 1 ? (
                        <li className="nav-item">
                          <Link className="nav-link nav__link" to="/allalum">
                            VIEW ALL ALUMNI
                          </Link>
                        </li>
                      ) : null
                    ) : null
                  ) : null} */}

              {/* {
                    this.props.user.userData ?
                      this.props.user.userData.isAuth ?
                        this.props.user.userData.role === 1 ?

                          <li className="nav-item active">
                            <Link className="nav-link nav__link" to="/addnews" >ADD NEWS</Link>
                          </li>
                          : null
                        : null
                      : null
                  }

                  {
                    this.props.user.userData ?
                      this.props.user.userData.isAuth ?
                        this.props.user.userData.role === 1 ?

                          <li className="nav-item active">
                            <Link className="nav-link nav__link" to="/notific" >SENT NOTIFICATIONS</Link>
                          </li>
                          : null
                        : null
                      : null
                  }

                  {
                    !this.props.user.userData ?
                      <li className="nav-item active">
                        <Link className="nav-link nav__link" to="/login" >LOGIN</Link>
                      </li> : null
                  } */}
              {/* </ul>
              </div> */}
            </div>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.member,
  };
};

export default connect(mapStateToProps)(Header);
