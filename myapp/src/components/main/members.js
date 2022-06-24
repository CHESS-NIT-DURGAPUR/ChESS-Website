import React, { Component } from 'react';
import "./styleMembers.css"
import "./important.css"

import AC from '../../images/AC.jpeg'
import swagata from '../../images/swagata.jpg'
import rao from '../../images/rao.JPG'
import SMitra from '../../images/SMitra.jpg'
import SSah from '../../images/SSah.jpg'
import Prashanth from '../../images/Prashanth.jpg'
import ANagar from '../../images/ANagar.jpg'
import RYadav from '../../images/RYadav.jpg'
import YSinha from '../../images/YSinha.jpeg'
import AJaiswal from '../../images/AJaiswal.jpg'
import AChaudhary from '../../images/AChaudhary.png'
import AKrishna from '../../images/AKrishna.jpg'
import ZHossain from '../../images/ZHossain.png'
import RChowdhury from '../../images/RChowdhury.jpg'
import SMookherjee from '../../images/SMookherjee.jpg'
import SRajwar from '../../images/SRajwar.jpg'
import ADey from '../../images/ADey.png'
import DBardhan from '../../images/DBardhan.jpg'
import SGhosh from '../../images/SGhosh.png'
import DKher from '../../images/Dkher.jpg'
import SAcharya from '../../images/SAcharya.jpg'
import ANagarajan from '../../images/ANagarajan.jpeg'

class Team extends Component {
    render() {
        return (
            <div className="container team__member">
                {/* <div className="extraSpace" /> */}
                <div className="section-title">
                    <h1>Our Team</h1>
                </div>
                <div className='outer members__box__wrap'>
                    <div className="section-title">
                        <h3>PhD Representative</h3>
                    </div>
                    <div className="row" style={{ justifyContent: "center" }}>
                        <div className="column members__box">
                            <div className="team-5">
                                <div className="team-img">
                                    <img src={AC} alt="Team Img" />
                                </div>
                                <div className="team-content">
                                    <h2 className='membersName'>Arunava Chatterjee</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='outer members__box__wrap'>
                    <div className="section-title">
                        <h3>M.Tech Representative</h3>
                    </div>
                    <div className="row" style={{ alignItems: "center", justifyContent: "space-between" }}>
                        <div className="column members__box">
                            <div className="team-5">
                                <div className="team-img">
                                    <img src={swagata} alt="Team Img" />
                                </div>
                                <div className="team-content">
                                    <h2 className='membersName'>Swagata Laxmi Sengupta</h2>
                                </div>
                            </div>
                        </div>
                        <div className="column members__box">
                            <div className="team-5">
                                <div className="team-img">
                                    <img src={rao} alt="Team Img" />
                                </div>
                                <div className="team-content">
                                    <h2 className='membersName'>BHV Prasad</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-title">
                    <h1>B.Tech Students</h1>
                </div>
                <div className='outer members__box__wrap'>
                    <div className="section-title">
                        <h3>Batch of 2023</h3>
                    </div>
                    <div className="row">
                        <div className="column members__box">
                            <div className="team-5">
                                <div className="team-img">
                                    <img src={SMitra} alt="Team Img" />
                                </div>
                                <div className="team-content">
                                    <h2 className='membersName'>Soumyajeet Mitra</h2>
                                    <h4 className='role'>President</h4>
                                </div>
                            </div>
                        </div>

                        <div className="column members__box">
                            <div className="team-5">
                                <div className="team-img">
                                    <img src={SSah} alt="Team Img" />
                                </div>
                                <div className="team-content">
                                    <h2 className='membersName'>Sonali Sah</h2>
                                    <h4 className='role'>Vice President</h4>
                                </div>
                            </div>
                        </div>

                        <div className="column members__box">
                            <div className="team-5">
                                <div className="team-img">
                                    <img src={Prashanth} alt="Team Img" />
                                </div>
                                <div className="team-content">
                                    <h2 className='membersName' >Prashanth Kumar</h2>
                                    <h4 className='role'>General Secretary</h4>
                                </div>
                            </div>
                        </div>

                        <div className="column members__box">
                            <div className="team-5">
                                <div className="team-img">
                                    <img src={ANagar} alt="Team Img" />
                                </div>
                                <div className="team-content">
                                    <h2 className='membersName' >Anand Nagar</h2>
                                    <h4 className='role'>Convenor</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column members__box">
                            <div className="team-5">
                                <div className="team-img">
                                    <img src={RYadav} alt="Team Img" />
                                </div>
                                <div className="team-content">
                                    <h2 className='membersName'>Rishabh Yadav</h2>
                                    <h4 className='role'>Treasurer</h4>
                                </div>
                            </div>
                        </div>

                        <div className="column members__box">
                            <div className="team-5">
                                <div className="team-img">
                                    <img src={YSinha} alt="Team Img" />
                                </div>
                                <div className="team-content">
                                    <h2 className='membersName'>Yash Sinha</h2>
                                    <h4 className='role'>Creative Head</h4>
                                </div>
                            </div>
                        </div>

                        <div className="column members__box">
                            <div className="team-5">
                                <div className="team-img">
                                    <img src={AJaiswal} alt="Team Img" />
                                </div>
                                <div className="team-content">
                                    <h2 className='membersName'>Ankit Jaiswal</h2>
                                    <h4 className='role'>Event Management Head</h4>
                                </div>
                            </div>
                        </div>

                        <div className="column members__box">
                            <div className="team-5">
                                <div className="team-img">
                                    <img src={AChaudhary} alt="Team Img" />
                                </div>
                                <div className="team-content">
                                    <h2 className='membersName'>Ayush Chaudhary</h2>
                                    <h4 className='role'>Sponsorship and Publicity Head</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ justifyContent: "center" }}>
                        <div className="column members__box">
                            <div className="team-5">
                                <div className="team-img">
                                    <img src={AKrishna} alt="Team Img" />
                                </div>
                                <div className="team-content">
                                    <h2 className='membersName'>Abhinav Krishna</h2>
                                    <h4 className='role'>Web Development Head</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='outer members__box__wrap'>
                    <div className="section-title">
                        <h3>Batch of 2024</h3>
                    </div>
                    <div className="row">
                        <div className="column members__box">
                            <div className="team-5">
                                <div className="team-img">
                                    <img src={ZHossain} alt="Team Img" />
                                </div>
                                <div className="team-content">
                                    <h2 className='membersName'>Zeshan Hossain Sardar</h2>
                                    <h4 className='role'>Executive Member</h4>
                                </div>
                            </div>
                        </div>

                        <div className="column members__box">
                            <div className="team-5">
                                <div className="team-img">
                                    <img src={RChowdhury} alt="Team Img" />
                                </div>
                                <div className="team-content">
                                    <h2 className='membersName'>Riddhi Chowdhury</h2>
                                    <h4 className='role'>Executive Member</h4>
                                </div>
                            </div>
                        </div>

                        <div className="column members__box">
                            <div className="team-5">
                                <div className="team-img">
                                    <img src={SMookherjee} alt="Team Img" />
                                </div>
                                <div className="team-content">
                                    <h2 className='membersName'>Sujaan Mookherjee</h2>
                                    <h4 className='role'>Executive Member</h4>
                                </div>
                            </div>
                        </div>
                        <div className="column members__box">
                            <div className="team-5">
                                <div className="team-img">
                                    <img src={SRajwar} alt="Team Img" />
                                </div>
                                <div className="team-content">
                                    <h2 className='membersName'>Sushanta Rajwar</h2>
                                    <h4 className='role'>Executive Member</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="column members__box">
                            <div className="team-5">
                                <div className="team-img">
                                    <img src={ADey} alt="Team Img" />
                                </div>
                                <div className="team-content">
                                    <h2 className='membersName'>Anupam Dey</h2>
                                    <h4 className='role'>Executive Member</h4>
                                </div>
                            </div>
                        </div>

                        <div className="column members__box">
                            <div className="team-5">
                                <div className="team-img">
                                    <img src={DBardhan} alt="Team Img" />
                                </div>
                                <div className="team-content">
                                    <h2 className='membersName'>Dev Bardhan Singh</h2>
                                    <h4 className='role'>Executive Member</h4>
                                </div>
                            </div>
                        </div>

                        <div className="column members__box">
                            <div className="team-5">
                                <div className="team-img">
                                    <img src={SGhosh} alt="Team Img" />
                                </div>
                                <div className="team-content">
                                    <h2 className='membersName'>Sanghita Ghosh</h2>
                                    <h4 className='role'>Executive Member</h4>
                                </div>
                            </div>
                        </div>
                        <div className="column members__box">
                            <div className="team-5">
                                <div className="team-img">
                                    <img src={DKher} alt="Team Img" />
                                </div>
                                <div className="team-content">
                                    <h2 className='membersName'>Devesh kher</h2>
                                    <h4 className='role'>Executive Member</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row" style={{ justifyContent: "center" }}>
                        <div className="column members__box">
                            <div className="team-5">
                                <div className="team-img">
                                    <img src={SAcharya} alt="Team Img" />
                                </div>
                                <div className="team-content">
                                    <h2 className='membersName'>Sayak Acharya</h2>
                                    <h4 className='role'>Executive Member</h4>
                                </div>
                            </div>
                        </div>

                        <div className="column members__box">
                            <div className="team-5">
                                <div className="team-img">
                                    <img src={ANagarajan} alt="Team Img" />
                                </div>
                                <div className="team-content">
                                    <h2 className='membersName'>Anagha Nagarajan</h2>
                                    <h4 className='role'>Executive Member</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Team;