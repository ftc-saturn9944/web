import React, { Component } from 'react';
import { withRouter } from 'react-router';

import Home from './pages/Home';
import Page404 from './pages/404';
import MediaKit from './pages/MediaKit';
import Sponsors from './pages/Sponsors';
import PointCounter from './pages/PointCounter';
import Login from './pages/Login';
import Stats from './pages/Stats';
import Registration from './pages/Registration';
import Scouting from './pages/Scouting';
import SponsorPackages from './pages/SponsorPackages';
import Gallery from './pages/Gallery';

import {
  Route, Switch
} from 'react-router-dom';

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/media' component={MediaKit} />
          <Route exact path='/sponsors' component={Sponsors} />
          <Route exact path='/pointcounter' component={PointCounter} />
          <Route exact path='/secure/stats' component={Stats} />
          <Route exact path='/secure/scouting' component={Scouting} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/registration' component={Registration} />
          <Route exact path='/sponsorpacks' component={SponsorPackages} />
          <Route exact path='/gallery' component={Gallery} />
          <Route path="*" component={Page404}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(Routes);



