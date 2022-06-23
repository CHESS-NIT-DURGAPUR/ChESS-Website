import React from 'react'
import ReadMore from './ReadMore';
import img4 from "../images/4.jpg"
import img5 from "../images/5.jpg"
import img6 from "../images/6.jpg"
import img7 from "../images/7.jpg"
import img8 from "../images/8.jpg"
import img9 from "../images/9.jpg"
import INAUGURATION_1 from "../images/INAUGURATION_1.PNG"
import INAUGURATION_2 from "../images/INAUGURATION_2.PNG"
import ChemKriti2022_1 from '../images/2022_1.PNG';
import "./main.css"
function ChemKriti2022() {
    return (
        <div>
            <div className="extraSpace" />
            <section className='container' >
                <div className='members__box__wrap'>
                    <div className="row">
                        <h3 className='card__outerHeading'>ChemKriti 2022</h3>
                        <hr />
                        <p className="lead card__lead">
                            The annual Departmental fest organized by ChESS, conducted in hybrid mode in 2022.
                            The inaugural and concluding ceremonies were held physically in the Chemical Engineering Department
                            in the Main Academic Building and the rest were conducted online on Dare2Compete platform.
                        </p>
                        <img className="rounded mx-auto d-block img-thumbnail main__img" src={ChemKriti2022_1} alt="Event poster" />



                        <div className='members__box__wrap outer'>
                            <h3 className='card__outerHeading'>INAUGURATION CEREMONY</h3>
                            <hr />
                            <p className="lead card__card">
                                With speeches given by the General Secretary of ChESS, the faculty advisors Dr. Abhiram Hens and Dr. Gopinath Haldar,
                                as well as Dr. Sandip Kumar Lahiri followed by a musical performance by Spic Macay, ChemKriti’22 was off to a good start.
                                Refreshments were provided to attendees.
                            </p>
                            <div className='row'>
                                <div className="col-12 col-sm-12 col-lg-6">
                                    <div className=" members__box">
                                        <img className="rounded mx-auto d-block img-thumbnail main__img" src={INAUGURATION_1} alt="Event poster" />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-lg-6">
                                    <div className=" members__box">
                                        <img className="rounded mx-auto d-block img-thumbnail main__img" src={INAUGURATION_2} alt="Event poster" />
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div className='members__box__wrap outer'>
                            <div className='row'>
                                <div className="col-12 col-sm-12 col-lg-4">
                                    <div className="card members__box">
                                        <img className="card-img-top" src={img4} alt="Event poster" />
                                        <div className="card-body">
                                            <h4 className="card-title">Chemstat</h4>
                                            <p className="card-text">
                                                <ReadMore>
                                                    Under the umbrella of ChemKriti, a hackathon named ChemStat was organized in which a problem statement
                                                    was provided and participants had to come up with a PowerPoint presentation demonstrating their take on
                                                    how to solve the problem.
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
                            </div>
                            <div className="row"
                            // style={{ justifyContent: "center", alignItems: "center" }}
                            >

                                <div className="col-12 col-sm-12 col-lg-4">
                                    <div className="card members__box">
                                        <img className="card-img-top" src={img8} alt="Event poster" />
                                        <div className="card-body">
                                            <h4 className="card-title">Chem-X-Challange</h4>
                                            <p className="card-text">
                                                <ReadMore>
                                                    Innovative Workshop based on the topic “Computational Aspects of Chemical Engineering”
                                                </ReadMore>
                                            </p>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-12 col-sm-12 col-lg-4">
                                    <div className="card members__box">
                                        <img className="card-img-top" src={img6} alt="Event poster" />
                                        <div className="card-body">
                                            <h4 className="card-title">Chem-O-Clave</h4>
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


                                <div className="col-12 col-sm-12 col-lg-4">
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
                </div>
            </section>
        </div>
    )
}

export default ChemKriti2022