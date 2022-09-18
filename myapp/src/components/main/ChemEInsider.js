import React from "react";
import insider1 from "../images/insider1.jpg";
import insider2 from "../images/insider2.jpg";
import insider3 from "../images/insider3.jpg";
import insider4 from "../images/insider4.jpg";
import insider5 from "../images/insider5.jpg";
import insider6 from "../images/insider6.jpg";
import insider7 from "../images/insider7.jpg";
import insider8 from "../images/insider8.jpg";
import insider9 from "../images/insider9.jpg";
import insider10 from "../images/insider10.jpg";
import "./insider.css";
const ChemEInsider = () => {
  return (
    <>
      <div className="extraSpace" />
      <section className="container">
        <div className="members__box__wrap">
          <div className="row">
            <h3 className="card__outerHeading">Chem-E-Insider</h3>
            <hr />
            <p className="lead card__lead">
              A series of technical infographic posts We present bite-sized
              information on various chemical engineering topics, among which,
              mostly equipments have been covered.
            </p>
            <div className="members__box__wrap outer">
              <h3 className="card__outerHeading">2021</h3>
              <hr />

              <div className="row" style={{ alignItems: "center", justifyContent: "space-around" }}>

              <div className="col-12 col-sm-12 col-lg-6 gap">
                  <div className="card members__box background">
                    <img
                      className="card-img-top background__img"
                      src={insider7}
                      alt="Event poster"
                    />
                    <div className="card-body">
                      <h4 className="card-title background__heading">
                        Working of a Screw Chiller
                      </h4>
                      <i className="card-text background__text">
                        26th December, 2021
                      </i>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-12 col-lg-6 gap">
                  <div className="card members__box background">
                    <img
                      className="card-img-top background__img"
                      src={insider6}
                      alt="Event poster"
                    />
                    <div className="card-body">
                      <h4 className="card-title background__heading">
                        Air Separation Unit (ASU).
                      </h4>
                      <i className="card-text background__text">
                        19th October, 2021
                      </i>
                    </div>
                  </div>
                </div>

              </div>

              <div
                className="row"
                style={{ alignItems: "center", justifyContent: "space-around" }}
              >
                <div className="col-12 col-sm-12 col-lg-6">
                  <div className="card members__box background">
                    <img
                      className="card-img-top background__img"
                      src={insider1}
                      alt="Event poster"
                    />
                    <div className="card-body">
                      <h4 className="card-title background__heading">
                        Functioning of Valves
                      </h4>
                      <i className="card-text background__text">
                        15th September, 2021
                      </i>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-12 col-lg-6 gap">
                  <div className="card members__box background">
                    <img
                      className="card-img-top background__img"
                      src={insider2}
                      alt="Event poster"
                    />
                    <div className="card-body">
                      <h4 className="card-title background__heading">
                        Working of a Boiler
                      </h4>
                      <i className="card-text background__text">
                        15th August, 2021
                      </i>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="row">
            <div className="members__box__wrap outer">
              <h3 className="card__outerHeading">2022</h3>
              <hr />
              <div className="row" style={{ alignItems: "center", justifyContent: "space-around" }}>
                <div className="col-12 col-sm-12 col-lg-6">
                  <div className="card members__box background">
                    <img
                      className="card-img-top background__img"
                      src={insider10}
                      alt="Event poster"
                    />
                    <div className="card-body">
                      <h4 className="card-title background__heading">
                      Fluidized Bed Dryer
                      </h4>
                      <i className="card-text background__text">
                        10th September, 2022
                      </i>
                    </div>
                  </div>
                </div>

              </div>

              <div className="row" style={{ alignItems: "center", justifyContent: "space-around" }}>
                <div className="col-12 col-sm-12 col-lg-6">
                  <div className="card members__box background">
                    <img
                      className="card-img-top background__img"
                      src={insider9}
                      alt="Event poster"
                    />
                    <div className="card-body">
                      <h4 className="card-title background__heading">
                        Rotary drum filter
                      </h4>
                      <i className="card-text background__text">
                        10th August, 2022
                      </i>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-12 col-lg-6">
                  <div className="card members__box background">
                    <img
                      className="card-img-top background__img"
                      src={insider8}
                      alt="Event poster"
                    />
                    <div className="card-body">
                      <h4 className="card-title background__heading">
                        Pulse jet bag filter
                      </h4>
                      <i className="card-text background__text">
                        10th July, 2022
                      </i>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="row"
                style={{ alignItems: "center", justifyContent: "space-around" }}
              >
                <div className="col-12 col-sm-12 col-lg-6">
                  <div className="card members__box background">
                    <img
                      className="card-img-top background__img"
                      src={insider5}
                      alt="Event poster"
                    />
                    <div className="card-body">
                      <h4 className="card-title background__heading">
                        Autoclave
                      </h4>
                      <i className="card-text background__text">
                        10th June, 2022
                      </i>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-12 col-lg-6 gap">
                  <div className="card members__box background">
                    <img
                      className="card-img-top background__img"
                      src={insider4}
                      alt="Event poster"
                    />
                    <div className="card-body">
                      <h4 className="card-title background__heading">
                        Distillation column
                      </h4>
                      <i className="card-text background__text">
                        9th May, 2022
                      </i>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="row"
                style={{ alignItems: "center", justifyContent: "space-around" }}
              >
                <div className="col-12 col-sm-12 col-lg-6">
                  <div className="card members__box background">
                    <img
                      className="card-img-top background__img"
                      src={insider3}
                      alt="Event poster"
                    />
                    <div className="card-body">
                      <h4 className="card-title background__heading">
                        Cooling Tower
                      </h4>
                      <i className="card-text background__text">
                        4th March, 2022
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChemEInsider;
