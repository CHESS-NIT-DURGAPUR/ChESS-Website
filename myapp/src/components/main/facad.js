import React from "react";
import TypeAnimation from "react-type-animation";
import "./teamss.css";
import "./styleMembers.css";
import "./important.css";
import "./facad.css";
import AH from "../../images/AH.jpg";
import AS from "../../images/AS.jpg";
import AKS from "../../images/AKS.jpg";
import GH from "../../images/GH.webp";
import SD from "../../images/SD.jpg";
import JS from "../../images/JS.jpg";
import BKM from "../../images/BKM.jpg";
import SP from "../../images/SP.jpg";
import SKL from "../../images/SKL.jpg";
import BD from "../../images/BD.jpg";
import MKM from "../../images/MKM.jpg";
import PP from "../../images/PP.jpg";
import PPG from "../../images/PPG.jpg";
import TM from "../../images/TM.jpg";
import RGC from "../../images/RGC.jpg";
import KCG from "../../images/KCG.jpg";
import SK from "../../images/SK.jpg";

const Facad = () => {
  return (
    <React.Fragment>
      <div
        className="extraSpace"
        style={{ backgroundColor: "rgba(0,0,0,.7)" }}
      />
      <div className="faculty__containar">
        <div className="section-title">
          <h1>Faculty Members</h1>
        </div>
        <div className="outer members__box__wrap">
          <div className="row">
            <div className="column">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={PPG} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2>Parthapratim Gupta</h2>
                  <TypeAnimation
                    cursor={true}
                    sequence={[
                      " PROFESSOR",
                      2050,
                      " PROFESSOR",
                      2000,
                    ]}
                    wrapper="h3"
                    repeat={Infinity}
                  />
                  <i className="fa-light fa-envelope"></i>
                  <h6>parthapratim.gupta@che.nitdgp.ac.in</h6>
                  <h4>9434788028</h4>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={PP} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2>PARIMAL PAL</h2>
                  <TypeAnimation
                    cursor={true}
                    sequence={["PROFESSOR(HAG)", 2000, "PROFESSOR(HAG)", 2050]}
                    wrapper="h3"
                    repeat={Infinity}
                  />
                  <i className="fa-light fa-envelope"></i>
                  <h6>parimal.pal@che.nitdgp.ac.in</h6>
                  <h4>9434788105</h4>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={KCG} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2>Kartik Chandra Ghanta</h2>
                  <TypeAnimation
                    cursor={true}
                    sequence={["PROFESSOR", 2000, "PROFESSOR", 2050]}
                    wrapper="h3"
                    repeat={Infinity}
                  />
                  <i className="fa-light fa-envelope"></i>
                  <h6>kartik.ghanta@che.nitdgp.ac.in</h6>
                  <h4>9434788020</h4>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={TM} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2>Tamal Mandal</h2>
                  <TypeAnimation
                    cursor={true}
                    sequence={["PROFESSOR", 2000, "PROFESSOR", 2050]}
                    wrapper="h3"
                    repeat={Infinity}
                  />
                  <i className="fa-light fa-envelope"></i>
                  <h6>tamal.mandal@che.nitdgp.ac.in</h6>
                  <h4>9434788078</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={AKS} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2>Anup Kumar Sadhukhan</h2>
                  <TypeAnimation
                    cursor={true}
                    sequence={["PROFESSOR", 2000, "PROFESSOR", 2050]}
                    wrapper="h3"
                    repeat={Infinity}
                  />
                  <i className="fa-light fa-envelope"></i>
                  <h6>anupkumar.sadhukhan@che.nitdgp.ac.in</h6>
                  <h4>9434788048</h4>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={SD} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2>Susmita Dutta</h2>
                  <TypeAnimation
                    cursor={true}
                    sequence={["PROFESSOR", 2000, "PROFESSOR", 2050]}
                    wrapper="h3"
                    repeat={Infinity}
                  />
                  <i className="fa-light fa-envelope"></i>
                  <h6>susmita.dutta@che.nitdgp.ac.in</h6>
                  <h4>9434788120</h4>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={GH} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2>Gopinath Halder</h2>
                  <TypeAnimation
                    cursor={true}
                    sequence={["FACULTY ADVISOR", 2050, "PROFESSOR", 2000]}
                    wrapper="h3"
                    repeat={Infinity}
                  />
                  <i className="fa-light fa-envelope"></i>
                  <h6>gopinath.halder@che.nitdgp.ac.in</h6>
                  <h4>9434788189</h4>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={MKM} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2>Mrinal Kanti Mondal</h2>
                  <TypeAnimation
                    cursor={true}
                    sequence={[
                      "ASSOCIATE PROFESSOR",
                      2050,
                      "ASSISTANT PROFESSOR",
                      2000,
                    ]}
                    wrapper="h3"
                    repeat={Infinity}
                  />
                  <i className="fa-light fa-envelope"></i>
                  <h6>mrinalkanti.mandal@che.nitdgp.ac.in</h6>
                  <h4>9434788188</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={JS} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2>Jaya Sikder</h2>
                  <TypeAnimation
                    cursor={true}
                    sequence={[
                      "HEAD OF THE DEPARTMENT(HOD)",
                      2000,
                      "ASSOCIATE PROFESSOR",
                      2000,
                    ]}
                    wrapper="h3"
                    repeat={Infinity}
                  />
                  <i className="fa-light fa-envelope"></i>
                  <h6>jaya.sikder@che.nitdgp.ac.in</h6>
                  <h4>9434788186</h4>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={SKL} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2>Sandip Kumar Lahiri</h2>
                  <TypeAnimation
                    cursor={true}
                    sequence={[
                      "ASSOCIATE PROFESSOR",
                      2050,
                      "ASSISTANT PROFESSOR",
                      2000,
                    ]}
                    wrapper="h3"
                    repeat={Infinity}
                  />
                  <i className="fa-light fa-envelope"></i>
                  <h6>sandipkumar.lahiri@che.nitdgp.ac.in</h6>
                  <h4>9007659000</h4>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={SP} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2>Swapan Paruya</h2>
                  <TypeAnimation
                    cursor={true}
                    sequence={[
                      "ASSOCIATE PROFESSOR",
                      2050,
                      "ASSISTANT PROFESSOR",
                      2000,
                    ]}
                    wrapper="h3"
                    repeat={Infinity}
                  />
                  <i className="fa-light fa-envelope"></i>
                  <h6>swapan.paruya@che.nitdgp.ac.in</h6>
                  <h4>9474404033</h4>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={BD} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2>Bimal Das</h2>
                  <TypeAnimation
                    cursor={true}
                    sequence={[
                      "ASSOCIATE PROFESSOR",
                      2050,
                      "ASSISTANT PROFESSOR",
                      2000,
                    ]}
                    wrapper="h3"
                    repeat={Infinity}
                  />
                  <i className="fa-light fa-envelope"></i>
                  <h6>bimal.das@che.nitdgp.ac.in</h6>
                  <h4>9434789023</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={BKM} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2>Bimal Kumar Mandal</h2>
                  <TypeAnimation
                    cursor={true}
                    sequence={[
                      "ASSOCIATE PROFESSOR",
                      2050,
                      "ASSISTANT PROFESSOR",
                      2000,
                    ]}
                    wrapper="h3"
                    repeat={Infinity}
                  />
                  <i className="fa-light fa-envelope"></i>
                  <h6>bk.mondal@che.nitdgp.ac.in</h6>
                  <h4>7699782330</h4>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={RGC} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2>Rajib Ghosh Chaudhuri</h2>
                  <TypeAnimation
                    cursor={true}
                    sequence={[
                      "ASSOCIATE PROFESSOR",
                      2050,
                      "ASSISTANT PROFESSOR",
                      2000,
                    ]}
                    wrapper="h3"
                    repeat={Infinity}
                  />
                  <i className="fa-light fa-envelope"></i>
                  <h6>rajib.ghoshchaudhuri@che.nitdgp.ac.in</h6>
                  <h4>7596854649</h4>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={AH} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2>ABHIRAM HENS</h2>
                  <TypeAnimation
                    cursor={true}
                    sequence={[
                      "FACULTY ADVISOR",
                      2050,
                      "ASSISTANT PROFESSOR",
                      2000,
                    ]}
                    wrapper="h3"
                    repeat={Infinity}
                  />
                  <i className="fa-light fa-envelope"></i>
                  <h6>abhiram.hens@che.nitdgp.ac.in</h6>
                  <h4>9434789040</h4>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={SK} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2>SANKHA KARMAKAR</h2>
                  <TypeAnimation
                    cursor={true}
                    sequence={[
                      "ASSOCIATE PROFESSOR",
                      2050,
                      "ASSISTANT PROFESSOR",
                      2000,
                    ]}
                    wrapper="h3"
                    repeat={Infinity}
                  />
                  <i className="fa-light fa-envelope"></i>
                  <h6>sankha.karmakar@che.nitdgp.ac.in</h6>
                  <h4>8902499547</h4>
                </div>
              </div>
            </div>

              <div className="column">
                <div className="team-5 members__box">
                  <div className="team-img">
                    <img src={AS} alt="Team Img" />
                  </div>
                  <div className="team-content">
                    <h2>Ananta Sarkar</h2>
                    <TypeAnimation
                      cursor={true}
                      sequence={["INSPIRE FACULTY", 2000, "INSPIRE FACULTY", 2000]}
                      wrapper="h3"
                      repeat={Infinity}
                    />
                    <i className="fa-light fa-envelope"></i>
                    <h6>ananta.sarkar@che.nitdgp.ac.in</h6>
                    <h4>99206 41802</h4>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Facad;
