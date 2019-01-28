import React, { Component } from 'react';
import { withRouter } from 'react-router';

import TeamInfo from './pages/TeamInfo';
import MediaKit from './pages/MediaKit';
import Sponsors from './pages/Sponsors';
import PointCounter from './pages/PointCounter';
import Login from './pages/Login';
import Stats from './pages/Stats';
import Registration from './pages/Registration';
import Scouting from './pages/Scouting';

import {
  Route, Switch
} from 'react-router-dom';

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={TeamInfo} />
          <Route exact path='/media' component={MediaKit} />
          <Route exact path='/sponsors' component={Sponsors} />
          <Route exact path='/pointcounter' component={PointCounter} />
          <Route exact path='/secure/stats' component={Stats} />
          <Route exact path='/secure/scouting' component={Scouting} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/registration' component={Registration} />
          <Route path="*" component={TeamInfo} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Routes);