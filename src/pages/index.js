import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import  MissionList from './MissionList';
import CompanyInfo from './CompanyInfo';
import LaunchPadPage from './LaunchPadPage';
import LaunchPadList from './LaunchPadList'
import RocketList from './RocketList';
import RocketPage from './RocketPage';
import MissionPage from './MissionPage';

import Layout from '../components/Layout'


const Pages = () => {
    return(
    
        <Router>
            <Layout>
                <Route exact path="/" component={Home} />
                <Route path="/company" component={CompanyInfo} />
                <Route path="/missions" component={MissionList} />
                <Route path="/mission/:id" component={MissionPage} />
                <Route path="/rockets" component={RocketList} />
                <Route path="/rocket/:id" component={RocketPage} />
                <Route path="/launchpads" component={LaunchPadList} />
                <Route path="/launchpad/:id" component={LaunchPadPage} />
            </Layout>

        </Router>
        

 
    )
};

export default Pages;
