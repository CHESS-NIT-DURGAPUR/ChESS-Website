import React from 'react'
import YouTube from 'react-youtube-embed'
import ReadMore from './ReadMore';
const AChatWithChESS = () => {
    return (
        <>
            <div className="extraSpace" />
            <section className='container'>
                <div className='members__box__wrap'>
                    <div className="row">
                        <h3 className='card__outerHeading'>A Chat With ChESS: Placement Talk Sessions</h3>
                        <hr />
                        <p className="lead card__lead">
                            A new series launched by ChESS on its official YouTube channel based
                            on Campus Placements experience of the Alumni of Chemical Engineering
                            Depatment.
                        </p>
                        <div className='members__box__wrap outer'>
                            <div className='row' style={{ alignItems: "center", justifyContent: "space-around" }}>
                                <div className="col-12 col-sm-12 col-lg-12">
                                    <div className="card members__box">
                                        {/* <img className="card-img-top background__img" src={""} alt="Event poster" /> */}
                                        <YouTube id='lnBL55afl7g' />
                                        <div className="card-body">
                                            <h4 className="card-title">Mr Akhil Boyina, currently placed at Linde India  (May 14, 2022)</h4>
                                            <hr />
                                            <p className="card-text">
                                                <ReadMore>
                                                    ChESS goes into a one-on-one interaction with the distinguished Alumni of NIT Durgapur.
                                                    The major objective is to ask the concerned Alumnus pertinent questions related to Placement
                                                    Preparation Tips and overall experience during the Placement Procedure.
                                                    In the first episode, we have ChESS hosting Mr. Akhil Boyina, Batch of 2021,
                                                    Department of Chemical Engineering, NIT Durgapur who was placed at Linde in the Campus
                                                    Placement Session of 2020-21.
                                                </ReadMore>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className='row' style={{ alignItems: "center", justifyContent: "space-around" }}>

                                <div className="col-12 col-sm-12 col-lg-12">
                                    <div className="card members__box">
                                        {/* <img className="card-img-top background__img" src={""} alt="Event poster" /> */}
                                        <YouTube id='xZSTUSNa5Rg' />
                                        <div className="card-body">
                                            <h4 className="card-title">Mr. Debjit Goswami, currently placed at Deloitte USI  (Jun 21, 2022) </h4>
                                            <hr />
                                            <p className="card-text">
                                                <ReadMore>
                                                    Chemical Engineering Students' Society (ChESS), NIT Durgapur is back
                                                    with its second episode of "A Chat with ChESS: Placement Talk
                                                    Sessions"
                                                    This month, we host Mr. Debjit Goswami, Alumnus of Chemical
                                                    Engineering Department, NIT Durgapur (2021 Batch), currently working
                                                    as a Technology Analyst at Deloitte USI.
                                                </ReadMore>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='row' style={{ alignItems: "center", justifyContent: "space-around" }}>
                                <div className="col-12 col-sm-12 col-lg-12">
                                    <div className="card members__box">
                                        {/* <img className="card-img-top background__img" src={""} alt="Event poster" /> */}
                                        <YouTube id='6ruiD65jhcI' />
                                        <div className="card-body">
                                            <h4 className="card-title">Miss Piyanjana Ghosh, currently placed at Hindustan Unilever Limited  (Jul 13, 2022)</h4>
                                            <hr />
                                            <p className="card-text">
                                                <ReadMore>
                                                    Chemical Engineering Students' Society (ChESS),
                                                    NIT Durgapur is back with its third episode of
                                                    "A Chat with ChESS: Placement Talk Sessions"
                                                    This month, we host Miss Piyanjana Ghosh, Alumnus of Chemical
                                                    Engineering Department, NIT Durgapur (2022 Batch), who has secured
                                                    placement opportunities at both Hindustan Unilever Limited (as a Supply Chain Trainee)
                                                    and at Quantiphi (as a Business Analyst).
                                                </ReadMore>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AChatWithChESS