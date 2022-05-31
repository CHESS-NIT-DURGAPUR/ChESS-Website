import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import five from '../../images/gre1.jpg'
import six from '../../images/gate1.jpg'
import cfd from '../../images/CFD.jpeg'
import ChemInsider1 from '../../images/ChemInsider 1.jpg'
import ChemInsider2 from '../../images/ChemInsider 2.jpg'
import pic from "../images/wp5330256.png"
import wall from "../images/Why Join Us.jpg"
import img1 from "../images/1.jpg"
import img2 from "../images/2.jpg"
import img3 from "../images/3.jpg"
import img4 from "../images/4.jpg"
import img5 from "../images/5.jpg"
import img6 from "../images/6.jpg"
import img7 from "../images/7.jpg"
import img8 from "../images/8.jpg"
import img9 from "../images/9.jpg"
import img10 from "../images/10.jpg"
import { allnews } from '../actions/recordactions'
import "./bootstrap.css"
import "./js/script"
import "./fonts.css"
import "./style.css"
import "./n.css"
import "./main.css"
import ReadMore from './ReadMore';
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
      <div className="container-fluid">
        <div className="row" id='poster'>
          <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12" id="win">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>
                <li data-target="#myCarousel" data-slide-to="4"></li>
              </ol>
              <div className="carousel-inner">
                <div className="item active" >
                  <img src={cfd} alt="chess" id="win" loading="lazy" />
                  <div className="carousel-caption">
                    <h2 className='carousel__text-black'>Computational Fluid Dynamics(CFD)</h2>
                  </div>
                </div>

                <div className="item"  >
                  <img src={five} alt="chess" id="win" loading="lazy" />
                  <div className="carousel-caption">
                    <h2 className='carousel__text-black'>Interactive Session</h2>
                  </div>
                </div>

                <div className="item" >
                  <img src={six} alt="chess" id="win" loading="lazy" />
                  <div className="carousel-caption">
                    <h2 className='carousel__text-black'>Interactive Session</h2>
                  </div>
                </div>
                <div className="item" >
                  <img src={ChemInsider1} alt="chess" id="win" loading="lazy" />
                  <div className="carousel-caption">
                    <h2 className="carousel__text-black">Distillation Column</h2>
                  </div>
                </div>
                <div className="item" >
                  <img src={ChemInsider2} alt="chess" id="win" loading="lazy" />
                  <div className="carousel-caption">
                    <h2 className="carousel__text-black">Placement Talk Sessions</h2>
                  </div>
                </div>
              </div>

              <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="	glyphicon glyphicon-chevron-left"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="right carousel-control" href="#myCarousel" data-slide="next">
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

        <section className="section section-sm position-relative" id="about">
          <div className="container">
            <div className="row row-30">
              <div className="col-lg-6 about__image_outer">
                <div className="block-decorate-img wow fadeInLeft image__hover" data-wow-delay=".2s">
                  <img src={pic} alt="about img" width="570" height="351" className='about__image'
                  />
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="block-sm offset-top-45">
                  <div className="section-name wow fadeInRight about__heading" data-wow-delay=".2s">About us</div>
                  <h3 className="wow fadeInLeft text-capitalize" data-wow-delay=".3s">What We<span className="text-primary"> Do</span></h3>
                  <hr />
                  <p className="offset-xl-40 wow fadeInUp" data-wow-delay=".4s">The Chemical Engineering Student's Society (CHESS) is an independent student run society of Chemical Engineering Department of NIT Durgapur.It is solely dedicated to form a network among all the students,faculty members and alumni of the department. It promotes interaction within the department and implements academic , social and other programs of interest to its members.</p>
                  <p className="default-letter-spacing font-weight-bold text-gray-dark wow fadeInUp" data-wow-delay=".4s">
                    We are conducting several events every year for the betterment of students.
                  </p>
                  <Link className="button-width-160 button-primary button-circle button-lg button offset-top-20 main__teamButton" to="./member">
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
              <div className="col-xl-7 col-lg-7 col-12">
                <div className="section-name wow fadeInRight about__heading">Our Events</div>
                <h3 className="text-capitalize wow fadeInLeft" data-wow-delay=".2s">Why CHESS<span className="text-primary"> Join us</span></h3>
                <hr />
                <p>In few years we have expanded the range of events that we conduct for the students to extend their capabilities.</p>
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
          <div className="image-left-side wow slideInRight" data-wow-delay=".5s">
            <img src={wall} alt="" width="400" height="200" className='about__image' />
          </div>
        </section>






        <section className='container-fluid' >
          <h1 className='card__outerHeading'>Card section</h1>
          <hr />
          <div className='members__box__wrap'>
            <div className="row">

              <div className="outer">
                <div className="col-12 col-sm-12 col-lg-4">
                  <div className="card members__box">
                    <img className="card-img-top" src={img1} alt="Event poster" />
                    <div className="card-body">
                      <h4 className="card-title">Project: Placement</h4>
                      <p className="card-text">
                        <ReadMore>
                          This two-day workshop will be based on sessions dedicated to resume building and interview preparation respectively,
                          and we are glad to announce that Prof. Dr. Sandip Kumar Lahiri, Associate Professor, Chemical Engineering Department,
                          NIT Durgapur, and Former Vice- President, Haldia Petrochemicals Limited, will be the speaker.
                          Dr. Lahiri is a person with distinguished experience as a Process Engineer in the Industry,
                          and we hope he will be able to guide the aspiring individual in you to attain your career goals.
                        </ReadMore>
                      </p>
                    </div>
                  </div>
                </div>


                <div className="col-12 col-sm-12 col-lg-4">
                  <div className="card members__box">
                    <img className="card-img-top" src={img2} alt="Event poster" />
                    <div className="card-body">
                      <h4 className="card-title">ChemDarshan</h4>
                      <p className="card-text">
                        <ReadMore>
                          Getting into a prestigious petrochemical company has always been your dream as a student of chemical engineering, right?
                          We, at the Chemical Engineering Students' Society, invite you to ChemDarshan , an interactive session,
                          from where we hope you will get the proper guidance and work towards attaining your goals.
                        </ReadMore>
                      </p>
                    </div>
                  </div>
                </div>


                <div className="col-12 col-sm-12 col-lg-4">
                  <div className="card members__box">
                    <img className="card-img-top" src={img3} alt="Event poster" />
                    <div className="card-body">
                      <h4 className="card-title">CFD  Workshop</h4>
                      <p className="card-text">
                        <ReadMore>
                          Computational fluid dynamics (CFD) is a branch of fluid mechanics that uses numerical analysis and data structures
                          to analyze and solve problems that involve fluid flows. It is the process of mathematically modeling a physical
                          phenomenon involving fluid flow and solving it numerically using the computational prowess. The event will be
                          conducted by none other than Respected Dr. Abhiram Hens, Associate Professor at NIT Durgapur, Former Senior
                          Scientist at CSIR-CMERI, Recipient of the "CSIR Young Scientist Award" in 2018. With more than 20 publications
                          and almost 800 citations to his name, he is a scholar in himself and a teacher par excellence, and so, this is your
                          lifetime opportunity to gain whatever you can from this brilliant mind.
                        </ReadMore>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-12 col-lg-4" style={{ marginTop: "2rem" }}>
                  <div className="card members__box">
                    <img className="card-img-top" src={img10} alt="Event poster" />
                    <div className="card-body">
                      <h4 className="card-title">Chem-E-Insider</h4>
                      <p className="card-text">
                        <ReadMore>
                          A new Season and Chem-E-Insider is back in a brand new outlook to cater to your inquisitive minds with its Technical Know-How.
                          We at Chemical Engineering Students Society, NIT Durgapur (ChESS), today, present to you the 7th article of our monthly series
                          "Chem-E-insider" Today's topic is : "Distillation column"
                        </ReadMore>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className='card__outerHeading'>ChemKriti</h3>
              <hr />
              <p className="lead card__lead">
                The second edition of ChemKriti has been planned for the 8th to 10th of April, 2022.
                The theme for this year is “Engineer the process of Life.” A brief description of each of the events that we have planned
                is discussed below.
              </p>
              <div className='members__box__wrap outer'>

                <div className="col-12 col-sm-12 col-lg-4">
                  <div className="card members__box">
                    <img className="card-img-top" src={img4} alt="Event poster" />
                    <div className="card-body">
                      <h4 className="card-title">Chemstat</h4>
                      <p className="card-text">
                        <ReadMore>
                          Show your technical and analytical prowess Faced with a problem statement and a real-life scenario participants
                          would have to storm their minds to come up with a seemingly feasible solution, which, mind you, should sound
                          just as innovative and effective. A 48-hour duration would be allotted to execute and compile their ideas into a
                          PowerPoint presentation and submit the same, the quality of which would serve as their gateway to the final round.
                          The ones who'll make it would have to present their plan in front of the judges and face the questionnaire.
                        </ReadMore>
                      </p>
                    </div>
                  </div>
                </div>


                <div className="col-12 col-sm-12 col-lg-4">
                  <div className="card members__box">
                    <img className="card-img-top" src={img5} alt="Event poster" />
                    <div className="card-body">
                      <h4 className="card-title">Chem-E-Curious</h4>
                      <p className="card-text">
                        <ReadMore>
                          "Where knowledge wins and everyone learns"
                          This is a chance for all inquizzitive chemical engineers to display their prowess.
                          And then, enthusiastic quizzards are also welcome to make the best use of their storehouse of knowledge.
                          This is going to be a quiz, with questions pertaining to every possible allied subjects of chemical engineering.
                          Talk about industries, businesses, innovations, researches, to personalities, covering all general topics that might find the
                          farthest link to the subject of chemical engineering.
                          We can guarantee that no one will return empty handed, because participants will end up stacked with knowledge.
                        </ReadMore>
                      </p>
                    </div>
                  </div>
                </div>


                <div className="col-12 col-sm-12 col-lg-4">
                  <div className="card members__box">
                    <img className="card-img-top" src={img6} alt="Event poster" />
                    <div className="card-body">
                      <h4 className="card-title">Chemoclave</h4>
                      <p className="card-text">
                        <ReadMore>
                          For those curious to know about every circumstance that goes about in the process industry, for those eager to know more about the
                          present and future of the sector that they are most interested to build their career on, opportunities await you, and it is about taking
                          the right step with proper guidance. Chemkriti is here to bring to you real – life experiences that notable alumni from our institution
                          have had, as they have gone on to work in industries, valuable opinion of veterans regarding various issues which arouse interest among
                          this generation, and of course, interesting lectures on  topics which you would not like to miss. And this time, we are going to have guests
                          from various other domains as well. So, be ready to interact with them,
                          know more from them, learn from them and plan your future accordingly. Here is the chance, to hear it, from those who did it.
                        </ReadMore>
                      </p>
                    </div>
                  </div>
                </div>



                <div className="col-12 col-sm-12 col-lg-4" style={{ marginTop: "2rem" }}>
                  <div className="card members__box">
                    <img className="card-img-top" src={img7} alt="Event poster" />
                    <div className="card-body">
                      <h4 className="card-title">CH++</h4>
                      <p className="card-text">
                        <ReadMore>
                          In the words of Steve Jobs, "Everybody should learn how toprogram a computer because it teaches you how to think."
                          Coding ain't just about different computer languages, it'sabout creativity and analysis and about logic-basedapproach to problems. It's as much a mental sport as it is apart of academia.
                          ChESS of  NIT Durgapur presents before you the ultimatecoding challenge based on Chemical Engineering, CH++.The problem statement will be uploaded on HackerRank
                          and participants will be required to come up with asuitable solution and provide the answer within a coupleof hours.And of course, before we forget, there'll be amazing prizesand certificates for all as well !!
                        </ReadMore>
                      </p>
                    </div>
                  </div>
                </div>



                <div className="col-12 col-sm-12 col-lg-4" style={{ marginTop: "2rem" }}>
                  <div className="card members__box">
                    <img className="card-img-top" src={img8} alt="Event poster" />
                    <div className="card-body">
                      <h4 className="card-title">ChemX Challange</h4>
                      <p className="card-text">
                        <ReadMore>
                          "Comprehend it quick, think it quick"
                          It is not that we are unfamiliar we the game of crosswords. Now, it is time to bring back that childhood self of yours,
                          who used to leave everything aside and go ahead to solve that crossword in the newspaper supplement.
                          Now, it is the time to do so as a student of chemical engineering. Prepare yourself to solve something similar,
                          by making the best use of your skills.
                          It is after all a form of puzzle, all about fitting the right piece into the right place. Get ready for this enthralling experience.
                        </ReadMore>
                      </p>
                    </div>
                  </div>
                </div>



                <div className="col-12 col-sm-12 col-lg-4" style={{ marginTop: "2rem" }}>
                  <div className="card members__box">
                    <img className="card-img-top" src={img9} alt="Event poster" />
                    <div className="card-body">
                      <h4 className="card-title">Chem-E-Meme</h4>
                      <p className="card-text">
                        <ReadMore>
                          "Bring out the humour, everything else can wait"
                          After too many technical and academic events, we do need something different, and Chem-E-Meme
                          is the best event to make that difference. We are here to give the creative minds in you a brainstorming and fun experience.
                          Venture down the deepest thoughts to get your hands on the creative side of yours with our event,
                          Chem-E-meme which is solely based on the domain of chemical engineering.
                        </ReadMore>
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>


        <section className="section bg-image-2 after__blendMode">
          <div className="container section-md">
            <div className="row row-30 text-center">
              <div className="col-xl-3 col-sm-6 col-12">
                <div className="counter-classic">
                  <div className="counter-classic-number"><span className="icon-lg novi-icon offset-right-10 mercury-icon-time"></span><span className="counter text-white" data-speed="2000">2020</span>
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


        <section className="section section-md bg-lighten hod__opinion">
          <div className="container">
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
                  Real world problems will be blended in the curriculum and these are to be taught by experts from industry, in addition through guest lectures.
                  Our focus is to effectively train our students as chemical engineers who can serve the society competently,
                  collaboratively and ethically as planners, designers and operators of the environment.
                </p>
              </div>
            </div>
          </div>

        </section>

      </div>

    );
  }
}

const mapStateToprops = (state) => {
  return {
    news: state.news,
  }
}

export default connect(mapStateToprops)(Main);