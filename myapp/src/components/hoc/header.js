import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { log } from "../actions/memberactions"
import chess from '../../images/chess.webp'
import "./header.css";
class Header extends Component {

  logoutuser = () => {
    this.props.dispatch(log()).then((res) => {
      console.log('logout')
    }).catch(err =>
      console.log(err)
    )
  }

  render() {
    console.log(this.props.user.userData)
    return (
      <React.Fragment>
        <div className='header'>
          <div className="container__header">
            <div className="heading__header1">CHEMICAL ENGINEERING STUDENTS SOCIETY</div>
            <div className="heading__header2">NATIONAL INSTITUTE OF TECHNOLOGY DURGAPUR</div>
          </div>
          <hr />
          <nav className="navbar navbar-expand-md navbar-dark bg-primary fixed-top">
            <div className="container-fluid">
              <Link to="/" className="navbar-brand">
                <img src={chess} alt="chess" />
                <span className='user__group'>USERS' GROUP</span>
              </Link>

              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="navbar-collapse collapse flex-grow-0" id="collapsibleNavbar" style={{ paddingLeft: "8rem" }}>
                <ul className="navbar-nav abs-center-x">
                  <li className="nav-item ">
                    <Link className="nav-link  nav__link" to="/">
                      <i className="fa fa-home" aria-hidden="true"></i> HOME
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link nav__link" to="/facad">
                      <i className="fa fa-user-plus" aria-hidden="true"></i> FACULTY
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link nav__link" to="/member">
                      <i className="fa fa-users" aria-hidden="true"></i> MEMBER
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="navbar-collapse collapse flex-grow-0" id="collapsibleNavbar">
                <ul className="navbar-nav  justify-content-center mx-auto">
                  <li className="nav-item">
                    <Link className="nav-link nav__link" to="/register">
                      REGISTER <i className="fa fa-user" aria-hidden="true"></i>

                    </Link>
                  </li>
                  {this.props.user.userData ?
                    !this.props.user.userData.isAuth ?
                      <li className="nav-item ">
                        <Link className="nav-link nav__link" to="/login">
                          LOGIN <i className="fa fa-sign-in" aria-hidden="true"></i>

                        </Link>
                      </li>
                      :
                      <li className="nav-item active">
                        <Link className="nav-link nav__link" to="/logout" onClick={() => this.logoutuser()}>
                          LOGOUT <i className="fa-solid fa-right-from-bracket"></i>
                        </Link>
                      </li> : null
                  }
                  {this.props.user.userData ?

                    this.props.user.userData.isAuth ?
                      <li className="nav-item active">
                        <Link className="nav-link nav__link" to="/blogs">BLOGS</Link>
                      </li>
                      :
                      null
                    : null
                  }
                  {
                    this.props.user.userData ?
                      this.props.user.userData.isAuth ?
                        this.props.user.userData.role === 1 ?
                          <li className="nav-item">
                            <Link className="nav-link nav__link" to="/details" >ADD ALUMNI DETAILS</Link>
                          </li>
                          :
                          <li className="nav-item">
                            <Link className="nav-link nav__link" to="/allalum" >VIEW ALL ALUMNI</Link>
                          </li>
                        : null
                      : null
                  }


                  {
                    this.props.user.userData ?
                      this.props.user.userData.isAuth ?
                        this.props.user.userData.role === 1 ?

                          <li className="nav-item active">
                            <Link className="nav-link nav__link" to="/allalum" >VIEW ALL ALUMNI</Link>
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
                  }
                </ul>
              </div>
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
  }

}

export default connect(mapStateToProps)(Header);