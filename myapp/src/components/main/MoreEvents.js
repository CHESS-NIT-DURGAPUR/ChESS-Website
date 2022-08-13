import React  from "react";
import ReadMore from "./ReadMore";
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img10 from "../images/10.jpg";
import chemNiti from "../images/chemNiti.PNG";
import ASPIRE from "../images/ASPIRE.PNG";
import ASCENSION from "../images/ASCENSION.PNG";
import PLACEMENT from "../images/PLACEMENT.png";
import FRESHERS from "../images/FRESHERS.PNG";
import "./Events.css";
import "./insider.css";
function MoreEvents() {
  return (
    <div>
      <div className="extraSpace" />
      <section className="container">
        <h1 className="card__outerHeading">More Events</h1>
        <hr />
        <div className="members__box__wrap">
          <div className="outer">
            <div className="row">
              <div className="col-12 col-sm-12 col-lg-4">
                <div className="card members__box background">
                  <img
                    className="card-img-top background__img"
                    src={img1}
                    alt="Event poster"
                  />
                  <div className="card-body">
                    <h4 className="card-title background__heading">
                      Project: Placement
                    </h4>
                    <p className="card-text background__text">
                      <ReadMore>
                        This two-day workshop will be based on sessions
                        dedicated to resume building and interview preparation
                        respectively, and we are glad to announce that Prof. Dr.
                        Sandip Kumar Lahiri, Associate Professor, Chemical
                        Engineering Department, NIT Durgapur, and Former Vice-
                        President, Haldia Petrochemicals Limited, will be the
                        speaker. Dr. Lahiri is a person with distinguished
                        experience as a Process Engineer in the Industry, and we
                        hope he will be able to guide the aspiring individual in
                        you to attain your career goals.
                      </ReadMore>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-12 col-lg-4 gap">
                <div className="card members__box background">
                  <img
                    className="card-img-top background__img"
                    src={img2}
                    alt="Event poster"
                  />
                  <div className="card-body">
                    <h4 className="card-title  background__heading">
                      ChemDarshan
                    </h4>
                    <p className="card-text background__text">
                      <ReadMore>
                        Getting into a prestigious petrochemical company has
                        always been your dream as a student of chemical
                        engineering, right? We, at the Chemical Engineering
                        Students' Society, invite you to ChemDarshan , an
                        interactive session, from where we hope you will get the
                        proper guidance and work towards attaining your goals.
                      </ReadMore>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-12 col-lg-4 gap">
                <div className="card members__box background">
                  <img
                    className="card-img-top background__img"
                    src={img3}
                    alt="Event poster"
                  />
                  <div className="card-body">
                    <h4 className="card-title  background__heading">
                      CFD Workshop
                    </h4>
                    <p className="card-text background__text">
                      <ReadMore>
                        Computational fluid dynamics (CFD) is a branch of fluid
                        mechanics that uses numerical analysis and data
                        structures to analyze and solve problems that involve
                        fluid flows. It is the process of mathematically
                        modeling a physical phenomenon involving fluid flow and
                        solving it numerically using the computational prowess.
                        The event will be conducted by none other than Respected
                        Dr. Abhiram Hens, Associate Professor at NIT Durgapur,
                        Former Senior Scientist at CSIR-CMERI, Recipient of the
                        "CSIR Young Scientist Award" in 2018. With more than 20
                        publications and almost 800 citations to his name, he is
                        a scholar in himself and a teacher par excellence, and
                        so, this is your lifetime opportunity to gain whatever
                        you can from this brilliant mind.
                      </ReadMore>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-12 col-lg-4">
                <div className="card members__box background">
                  <img
                    className="card-img-top background__img"
                    src={img10}
                    alt="Event poster"
                  />
                  <div className="card-body">
                    <h4 className="card-title  background__heading">
                      Chem-E-Insider
                    </h4>
                    <p className="card-text background__text">
                      <ReadMore>
                        A new Season and Chem-E-Insider is back in a brand new
                        outlook to cater to your inquisitive minds with its
                        Technical Know-How.
                      </ReadMore>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-12 col-lg-4 gap">
                <div className="card members__box background">
                  <img
                    className="card-img-top background__img"
                    src={chemNiti}
                    alt="Event poster"
                  />
                  <div className="card-body">
                    <h4 className="card-title  background__heading">
                      CHEMNITI 2022
                    </h4>
                    <p className="card-text  background__text">
                      <h6 className="background__text">
                        <em>
                          Motion For the Debate: Artificial Intelligence is a
                          Boon for the Chemical Industry
                        </em>
                      </h6>
                      <ReadMore>
                        “Think, Ideate and Express” A Debate Competition
                        organized by ChESS with participants from both
                        Engineering and non-Engineering background.
                      </ReadMore>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-12 col-lg-4 gap">
                <div className="card members__box background">
                  <img
                    className="card-img-top background__img"
                    src={ASPIRE}
                    alt="Event poster"
                  />
                  <div className="card-body">
                    <h4 className="card-title  background__heading">ASPIRE</h4>
                    <p className="card-text  background__text">
                      <ReadMore>
                        Interactive sessions, held physically in the
                        Department’s Auditorium in the Main Academic Building
                        featuring speakers across academia and industry.Note:
                        The Institute was closed for the B.Tech students from
                        16th March, 2020 to 25th February, 2022 due to the
                        Covid-19 Pandemic, restricting ChESS from organizing
                        events like ASPIRE in Offline mode.
                      </ReadMore>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-sm-12 col-lg-4">
                <div className="card members__box background">
                  <img
                    className="card-img-top background__img"
                    src={ASCENSION}
                    alt="Event poster"
                  />
                  <div className="card-body">
                    <h4 className="card-title  background__heading">
                      ASCENSION 2022
                    </h4>
                    <p className="card-text background__text">
                      <ReadMore>
                        The Department farewell Program for the outgoing batch
                        of 2022 The event was conducted physically at
                        Classroom-1 in the Department of Chemical Engineering in
                        the Main Academic Building. The program included
                        inspiring speeches by the respected professors of the
                        department, followed by moments of fun and frolic.
                        Arrangements for food and soft drinks were made for all
                        attendees and guests. Date: 24th April, 2022
                      </ReadMore>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-12 col-lg-4 gap">
                <div className="card members__box background">
                  <img
                    className="card-img-top background__img"
                    src={FRESHERS}
                    alt="Event poster"
                  />
                  <div className="card-body">
                    <h4 className="card-title background__heading">
                      DEPARTMENT FRESHERS’ MEET
                    </h4>
                    <p className="card-text background__text">
                      <ReadMore>
                        It was organized for the second years' batch of the
                        department, as an introduction program, where we talked
                        about various aspects of Chemical Engineering, about
                        ChESS and its activities. Date: 31st October, 2021
                      </ReadMore>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-12 col-lg-4 gap">
                <div className="card members__box background">
                  <img
                    className="card-img-top background__img"
                    src={PLACEMENT}
                    alt="Event poster"
                  />
                  <div className="card-body">
                    <h4 className="card-title  background__heading">
                      PLACEMENT TALK SESSIONS
                    </h4>
                    <p className="card-text background__text">
                      <ReadMore>
                        A new series launched by ChESS on its official YouTube
                        channel based on Campus Placements experience of the
                        Alumni of Chemical Engineering Depatment, with Mr Akhil
                        Boyina, currently placed at Linde India (Batch of 2021)
                        commencing the series in the month of May. It was
                        followed by a session with Mr. Debjit Goswami, currently
                        placed at Deloitte USI (Batch of 2021) in June.
                      </ReadMore>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MoreEvents;
