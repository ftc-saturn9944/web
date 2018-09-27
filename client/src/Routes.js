import React, { Component } from 'react';
import { withRouter } from 'react-router';

import TeamInfo from './pages/TeamInfo';
import MediaKit from './pages/MediaKit';
import Sponsors from './pages/Sponsors';
import PointCounter from './pages/PointCounter';
import Login from './pages/Login';

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
          <Route exact path='/login' component={Login} />
          <Route path="*" component={TeamInfo} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Routes);