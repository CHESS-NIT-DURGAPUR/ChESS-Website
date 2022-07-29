import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import TypeAnimation from 'react-type-animation';
// import Particles from 'react-particles-js';
// import HeaderTitle from '../hoc/HeaderTitle';
// import Button from '@material-ui/core/Button';
// import five from '../../images/gre1.jpg'
// import six from '../../images/gate1.jpg'
// import cfd from '../../images/CFD.jpeg'
// import ChemInsider1 from '../../images/ChemInsider 1.jpg'
// import ChemInsider2 from '../../images/ChemInsider 2.jpg'
import main from '../../images/main.jpg'
import main2 from '../../images/main2.jpg'
import main3 from '../../images/main3.jpg'
import main4 from '../../images/main4.jpg'
import pic from "../images/wp5330256.png"
import wall from "../images/Why Join Us.jpg"
import { allnews } from '../actions/recordactions'
import "./bootstrap.css"
import "./js/script"
import "./fonts.css"
import "./style.css"
import "./n.css"
import "./main.css"
class Main extends Component {

  state = {
    news: '',
  }

  newslist = () => (
    this.state.news ?

      this.state.news.reverse().map((item, i) => (

        <li key={i} className="row">


          <div className="col-lg-4 col-sm-4 col-md-4 col-xs-4">
            <div className="date">
              <h3><span id="er" className="lis">{item.month}</span><br /><span className="row" id="lis">{item.date}</span></h3>
            </div>
          </div>
          <div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
            <Link to={item.link} >
              <p className="lis">{item.subject}</p>
            </Link>
          </div>

        </li>
      ))
      : null
  )


  componentWillMount() {
    this.props.dispatch(allnews()).then((response) => {
      console.log(response.payload)
      this.setState({
        news: response.payload
      })
    }).catch(err => console.log(err))
  }
  render() {
    return (
      <React.Fragment>
        <div className="extraSpace"></div>
        <div className="container-fluid main__body">
          <div className="row carouselImg__outer" id='poster'>
            <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 myContainer" id="win">
              <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                  <li data-target="#myCarousel" data-slide-to="2"></li>
                  <li data-target="#myCarousel" data-slide-to="3"></li>
                  {/* <li data-target="#myCarousel" data-slide-to="4"></li> */}
                  {/* <li data-target="#myCarousel" data-slide-to="5"></li>
                  <li data-target="#myCarousel" data-slide-to="6"></li> */}
                  {/* <li data-target="#myCarousel" data-slide-to="7"></li> */}
                  {/* <li data-target="#myCarousel" data-slide-to="8"></li> */}
                </ol>
                <div className="carousel-inner">
                  <div className="item active" >
                    <img className='carouselImg' src={main} alt="chess" id="win" loading="lazy" />
                    <div className="carousel-caption">
                      <TypeAnimation
                        cursor={false}
                        sequence={['Faculty', 3000, '']}
                        wrapper="h2"
                        repeat={Infinity}
                        className="glitch"
                      />
                    </div>
                  </div>
                  <div className="item" >
                    <img className='carouselImg' src={main2} alt="chess" id="win" loading="lazy" />
                    <div className="carousel-caption">
                      <TypeAnimation
                        cursor={false}
                        sequence={['Members', 3000, '']}
                        wrapper="h2"
                        repeat={Infinity}
                        className="glitch"
                      />
                    </div>
                  </div>
                  <div className="item" >
                    <img className='carouselImg' src={main3} alt="chess" id="win" loading="lazy" />
                    <div className="carousel-caption">
                      <TypeAnimation
                        cursor={false}
                        sequence={['Office Bearers', 3000, '']}
                        wrapper="h2"
                        repeat={Infinity}
                        className="glitch"
                      />
                    </div>
                  </div>
                  <div className="item" >
                    <img className='carouselImg' src={main4} alt="chess" id="win" loading="lazy" />
                    <div className="carousel-caption">
                      <TypeAnimation
                        cursor={false}
                        sequence={['Alumni', 3000, '']}
                        wrapper="h2"
                        repeat={Infinity}
                        className="glitch"
                      />
                    </div>
                  </div>
                  {/* <div className="item" >
                    <img className='carouselImg' src={cfd} alt="chess" id="win" loading="lazy" />
                    <div className="carousel-caption">
                      <h2 className="glitch" data-text="Computational Fluid Dynamics(CFD)">Computational Fluid Dynamics(CFD)</h2>
                    </div>
                  </div> */}

                  {/* <div className="item"  >
                    <img className='carouselImg' src={five} alt="chess" id="win" loading="lazy" />
                    <div className="carousel-caption">
                      <h2 className="glitch" data-text="Interactive Session">Interactive Session</h2>
                    </div>
                  </div> */}

                  {/* <div className="item" >
                    <img className='carouselImg' src={six} alt="chess" id="win" loading="lazy" />
                    <div className="carousel-caption">
                      <h2 className="glitch" data-text="Interactive Session">Interactive Session</h2>
                    </div>
                  </div> */}
                  {/* <div className="item" >
                    <img className='carouselImg' src={ChemInsider1} alt="chess" id="win" loading="lazy" />
                    <div className="carousel-caption">
                      <h2 className="glitch" data-text="Distillation Column">Distillation Column</h2>
                    </div>
                  </div>
                  <div className="item" >
                    <img className='carouselImg' src={ChemInsider2} alt="chess" id="win" loading="lazy" />
                    <div className="carousel-caption">
                      <h2 className="glitch" data-text="Placement Talk Sessions">Placement Talk Sessions</h2>
                    </div>
                  </div> */}
                </div>

                <a className="left carousel-control carouselImg__outer" href="#myCarousel" data-slide="prev">
                  <span className="	glyphicon glyphicon-chevron-left"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control carouselImg__outer" href="#myCarousel" data-slide="next">
                  <span className="glyphicon glyphicon-chevron-right"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>

            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 col-md-12">
              <ul className="sam" >
                {this.newslist()}
              </ul>
            </div>
          </div>


          <section className="section custom-section position-relative section-md highlight">
            <div className="container">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-12" style={{ textAlign: "center" }}>
                  {/* <div className="section-name wow fadeInRight about__heading">Highlights</div> */}
                  <h4 data-text="Highlights" className="glitch wow fadeInLeft" data-wow-delay=".2s">
                    High<span className="text-primary">lights</span>
                  </h4>
                  <hr />
                </div>
              </div>
              <div className="row" >
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" style={{ textAlign: "center" }}>
                  <Link className="button-width-150 button-primary button-circle button-lg button offset-top-20 main__teamButton" to="./ChemEInsider">
                    Chem-E-Insider <i className="fa fa-info" aria-hidden="true"></i>
                  </Link>
                </div>
                <br />
                <br />
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" style={{ textAlign: "center" }}>
                  <Link className="button-width-150 button-primary button-circle button-lg button offset-top-20 main__teamButton" to="./AChatWithChESS">
                    A Chat With ChESS <i className="fa fa-youtube-play" aria-hidden="true"></i>
                  </Link>
                </div>
              </div>
            </div>
          </section>


          <section className="section section-sm position-relative" id="about">
            <div className="container">
              <div className="row row-30">
                <div className="col-lg-6 about__image_outer">
                  <div className="block-decorate-img wow fadeInLeft" data-wow-delay=".2s">
                    <img src={pic} alt="about img" width="570" height="351" className='about__image'
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="block-sm offset-top-45">
                    <div className="section-name wow fadeInRight about__heading" data-wow-delay=".2s">About us</div>
                    <h3 className="wow fadeInLeft text-capitalize" data-wow-delay=".3s">What We<span className="text-primary"> Do</span></h3>
                    <hr />
                    <p className="offset-xl-40 wow fadeInUp" data-wow-delay=".2s" style={{ color: "#000", fontWeight: "bold" }}>The Chemical Engineering Student's Society (CHESS) is an independent student run society of Chemical Engineering Department of NIT Durgapur.It is solely dedicated to form a network among all the students,faculty members and alumni of the department. It promotes interaction within the department and implements academic , social and other programs of interest to its members.</p>
                    <p className="default-letter-spacing font-weight-bold text-gray-dark wow fadeInUp" data-wow-delay=".4s">
                      We are conducting several events every year for the betterment of students.
                    </p>
                    <Link className="button-width-150 button-primary button-circle button-lg button offset-top-20 main__teamButton" to="./member">
                      VIEW OUR TEAM  <i className="fa fa-users" aria-hidden="true"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section className="section custom-section position-relative section-md">
            <div className="container">
              <div className="row">
                <div className="col-xl-7 col-lg-7 col-12" >
                  <div className="section-name wow fadeInRight about__heading">Our Events</div>
                  <h3 className="text-capitalize wow fadeInLeft" data-wow-delay=".2s">Why ChESS<span className="text-primary"> Join us</span></h3>
                  <hr />
                  <p style={{ fontWeight: "bold" }}>In few years we have expanded the range of events that we conduct for the students to extend their capabilities.</p>
                  <div className="row row-15">
                    <div className="col-xl-6 wow fadeInUp" data-wow-delay=".2s">
                      <div className="box-default">
                        <div className="box-default-title">Innovative Webinars</div>
                        <p className="box-default-description">We conduct seminars on a variety of topics.</p><span className="box-default-icon novi-icon icon-lg mercury-icon-lightbulb-gears"></span>
                      </div>
                    </div>
                    <div className="col-xl-6 wow fadeInUp" data-wow-delay=".3s">
                      <div className="box-default">
                        <div className="box-default-title">Strategic Thinking</div>
                        <p className="box-default-description">We conduct hackathons so students can work upon practical problems.</p><span className="box-default-icon novi-icon icon-lg mercury-icon-target-2"></span>
                      </div>
                    </div>
                    <div className="col-xl-6 wow fadeInUp" data-wow-delay=".4s">
                      <div className="box-default">
                        <div className="box-default-title">Experienced Team</div>
                        <p className="box-default-description">We have a talented group of members who work to make CHESS better everyday.</p><span className="box-default-icon novi-icon icon-lg mercury-icon-user"></span>
                      </div>
                    </div>
                    <div className="col-xl-6 wow fadeInUp" data-wow-delay=".5s">
                      <div className="box-default">
                        <div className="box-default-title">Creative Courses</div>
                        <p className="box-default-description">We conduct courses for additional skill development.</p><span className="box-default-icon novi-icon icon-lg mercury-icon-partners"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="image-left-side wow slideInRight">
              <img src={wall} alt="" width="400" height="200" className='about__image' />
            </div>
          </section>


          <section className="section bg-image-2 after__blendMode">
            <div className="container section-md">
              <div className="row row-30 text-center">
                <div className="col-xl-3 col-sm-6 col-12">
                  <div className="counter-classic">
                    <div className="counter-classic-number">
                      <span className="icon-lg novi-icon offset-right-10 mercury-icon-time"></span>
                      <span className="counter text-white" data-speed="2000">2020</span>
                    </div>
                    <div className="counter-classic-title" style={{ fontWeight: "bold", color: "white" }}>Year of Establishment</div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-12">
                  <div className="counter-classic">
                    <div className="counter-classic-number"><span className="icon-lg novi-icon offset-right-10 mercury-icon-folder"></span><span className="counter text-white" data-speed="2000">10+</span>
                    </div>
                    <div className="counter-classic-title" style={{ fontWeight: "bold", color: "white" }}>Successful Webinars</div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-12">
                  <div className="counter-classic">
                    <div className="counter-classic-number"><span className="icon-lg novi-icon offset-right-10 mercury-icon-users"></span><span className="counter text-white" data-speed="2000">3</span><span className="symbol text-white"></span>
                    </div>
                    <div className="counter-classic-title" style={{ fontWeight: "bold", color: "white" }}>Courses</div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-12">
                  <div className="counter-classic">
                    <div className="counter-classic-number"><span className="icon-lg novi-icon offset-right-10 mercury-icon-group"></span><span className="counter text-white" data-speed="2000">18+</span>
                    </div>
                    <div className="counter-classic-title" style={{ fontWeight: "bold", color: "white" }}>Team Members</div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section className="section section-md bg-lighten hod__opinion container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <h3 className="wow fadeInLeft text-capitalize text-center text-dark" data-wow-delay=".3s">Our HOD's Opinions<span className="text-primary"> About CHESS</span></h3>
                <hr />
                <p className="offset-xl-40 wow fadeInUp text-dark hod__text" data-wow-delay=".4s">
                  Chemical Engineering Students' society is working with a motivation of developing professional and personal skills of students,
                  which facilitate them to perform magnificently as an eminent engineer in the society.
                  This society is aimed to provide a platform to showcase and sharpen student's talents through a variety of events and activities planned
                  throughout four years, for overall development of students personalities. We continue our effort to prepare and guide the students
                  for the various competitive exams and interviews so that they perform better and make their carrier in the selected fields.
                  <TypeAnimation
                    cursor={false}
                    sequence={[`Real world problems will be blended in the curriculum and these are to be taught by experts from industry, in addition through guest lectures.
                        Our focus is to effectively train our students as chemical engineers who can serve the society competently,
                        collaboratively and ethically as planners, designers and operators of the environment.`, 2000, `Real world problems will be blended in the curriculum and these are to be taught by experts from industry, in addition through guest lectures.
                        Our focus is to effectively train our students as chemical engineers who can serve the society competently,
                        collaboratively and ethically as planners, designers and operators of the environment.`]}
                    wrapper="p"
                    repeat={2}
                    className="offset-xl-40 wow fadeInUp text-dark hod__text"
                  // data-wow-delay=".4s"
                  />
                </p>
              </div>
            </div>
          </section>

        </div>
      </React.Fragment>
    );
  }
}

const mapStateToprops = (state) => {
  return {
    news: state.news,
  }
}

export default connect(mapStateToprops)(Main);
