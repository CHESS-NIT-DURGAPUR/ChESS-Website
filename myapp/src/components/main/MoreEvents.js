import React from "react";
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
import TEACHERS from "../images/11.jpg";
import Career from "../images/12.jpg";
import CA from "../images/CA.jpg";
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

            <div
              className="row"
              style={{ justifyContent: "space-around", alignItems: "center" }}
            >
              <div className="col-12 col-sm-12 col-lg-4">
                <div className="card members__box background">
                  <img
                    className="card-img-top background__img"
                    src={TEACHERS}
                    alt="Event poster"
                  />
                  <div className="card-body">
                    <h4 className="card-title  background__heading">
                      Teacher's Day 2022
                    </h4>
                    <p className="card-text background__text">
                      <ReadMore>
                        Teachers play a very important role in a student’s life.
                        As a teacher, one must bring out the best in students
                        and inspire them to strive for greatness. Students are
                        considered as the future of the nation and humankind,
                        and a teacher is believed to be a credible guide for
                        their advancement. Not only do they guide students in
                        academics or extracurricular activities, but teachers
                        are also responsible for shaping a child’s future,
                        making him/her a better human being. A teacher imparts
                        knowledge, good values, tradition, modern-day challenges
                        and ways to resolve them within students. A good teacher
                        is an asset to the students. Keeping this in mind,
                        Chemical Engineering Students' Society, NIT Durgapur
                        would like to cordially invite you all to Class Room 3
                        in the Chemical Engineering Department of NIT Durgapur
                        today at 6:00 PM.
                      </ReadMore>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-12 col-lg-4 gap">
                <div className="card members__box background">
                  <img
                    className="card-img-top background__img"
                    src={Career}
                    alt="Event poster"
                  />
                  <div className="card-body">
                    <h4 className="card-title background__heading">
                      Webinar on Career Mapping
                    </h4>
                    <p className="card-text background__text">
                      <ReadMore>
                        Since the dawn of existence, we human beings have raced
                        against time to verify the concept of the survival of
                        the fittest. In this era of competition, we realise,
                        more than ever, the necessity of accelerating the growth
                        of our careers and equipping ourselves with the
                        knowledge of modern, cutting-edge technology. Hence, we,
                        the Chemical Engineering Students' Society, had invited
                        Respected Dr. Sandip Kumar Lahiri, Associate Professor
                        at NIT Durgapur, to provide a carrier guidance session
                        for the third year B.tech and second year M.tech
                        students. Dr. Lahiri enlightened us about different
                        career paths that an engineering student can opt for,
                        besides throwing some light on the different
                        opportunities in core chemical industries and their
                        drawbacks. He further extended his views on the skills
                        required to excel in the IT Sector. He also enlightened
                        us with his experiences that he has gathered over the
                        years, working at the zenith of renowned international
                        companies. He also shared his perception on higher
                        studies in India and abroad besides illuminating us on
                        the diversity of job opportunities after higher studies.
                        We, the Chemical Engineering Students' Society on behalf
                        of the entire Chemical Department convey our
                        heartwarming regards and extend our wholehearted
                        gratitude to Dr. Lahiri for lending us some of his
                        valuable time, experience and knowledge.
                      </ReadMore>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-12 col-lg-4 gap">
                <div className="card members__box background">
                  <img
                    className="card-img-top background__img"
                    src={CA}
                    alt="Event poster"
                  />
                  <div className="card-body">
                    <h4 className="card-title background__heading">
                      Campus Ambassador Program
                    </h4>
                    <p className="card-text background__text">
                      <ReadMore>
                        Want to get a glimpse of the corporate world and work in
                        a professional setting to prepare for future career
                        opportunities? Or probably get access to all the right
                        contacts and work on your management and publicity
                        skills at the same time? Then this campus ambassador is
                        just the thing you're looking for. Chemical Engineering
                        Students' Society of NIT Durgapur is offering an
                        exclusive 2 months work-from-home Campus Ambassador
                        Program where not only will you be able to develop
                        essential skills but also will be given certificates and
                        stipend(depending on your performance) which would serve
                        as a valuable addition to your cv. And requirements you
                        ask? Just good marketing and communication skills and a
                        whole lot of enthusiasm. So what are you waiting for?
                        Fill the form at the earliest so that you don't miss out
                        on this golden opportunity.
                      </ReadMore>
                      <a className="link-light" style={{display: "block", fontWeight: "bold"}} href="https://forms.gle/xgJ6pJ5VUXqhyAEC9" target="_blank">Registration Link</a>
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
