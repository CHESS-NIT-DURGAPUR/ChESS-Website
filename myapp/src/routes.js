import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Main from './components/main/main';
import Register from './components/register/register';
import Login from './components/register/login';
import Details from './components/main/details';
import Layout from './components/hoc';
import Award from './components/main/awardrec';
import Show from './components/main/show';
import Error from './components/main/404'
import Disp from './components/main/display';
import Education from './components/main/qualification';
import Forgot from './components/main/forgotpass';
import Forget from './components/main/forget'
import Allalum from './components/main/allcards'
import Addnews from './components/main/addnews'
import Subject from './components/main/subject';
import Blog from './components/main/blog'
import Live from './components/main/live';
import Notific from './components/main/notification';
import Member from './components/main/members';
import Alumni from './components/main/Alumni';
import Facad from './components/main/facad';
import Auth from './components/hoc/auth'
import Desc from './components/main/description';
import ChemKriti2022 from './components/main/ChemKriti2022';
import ChemKriti2021 from './components/main/ChemKriti2021';
import MoreEvents from './components/main/MoreEvents';

const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route exact component={Auth(Main, null)} path="/" />
                <Route exact component={Auth(Live, null)} path="/live" />
                <Route exact component={Auth(Subject, null)} path="/subject" />
                <Route exact component={Auth(Facad, null)} path="/facad" />
                <Route exact component={Auth(Register, null)} path="/register" />
                <Route exact component={Auth(Login, null)} path="/login" />
                <Route exact component={Auth(Show, true)} path="/show" />
                <Route exact component={Auth(Award, true)} path="/award" />
                <Route exact component={Auth(Education, true)} path="/qualify" />
                <Route exact component={Auth(Blog, null)} path="/blogs" />
                <Route exact component={Auth(Desc, null)} path="/des" />
                <Route exact component={Auth(Forgot, null)} path="/resetpass" />
                <Route exact component={Auth(Details, true)} path="/details" />
                <Route exact component={Auth(Disp, true)} path="/display" />
                <Route exact component={Auth(Forget, null)} path="/forget" />
                <Route exact component={Auth(Allalum, true)} path="/allalum" />
                <Route exact component={Auth(Addnews, true)} path="/addnews" />
                <Route exact component={Auth(Notific, true)} path="/notific" />
                <Route exact component={Auth(Member, false)} path="/member" />
                <Route exact component={Auth(Alumni, false)} path="/alumni" />
                <Route exact component={Auth(ChemKriti2021, false)} path="/chemkriti2021" />
                <Route exact component={Auth(ChemKriti2022, false)} path="/chemkriti2022" />
                <Route exact component={Auth(MoreEvents, false)} path="/moreevents" />
                <Route component={Error} />
            </Switch>
        </Layout>
    );
};

export default Routes;