import React, { Component } from 'react';
import { withRouter } from 'react-router';

import TeamInfo from './pages/TeamInfo';
import MediaKit from './pages/MediaKit';

import {
  Route, Switch
} from 'react-router-dom';

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={TeamInfo} />
          <Route exact path='/media' component={MediaKit}/>
          <Route path="*" component={TeamInfo} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Routes);