import React, { Component } from 'react';
import { withRouter } from 'react-router';

import Main from './pages/Main';

import {
  Route, Switch
} from 'react-router-dom';

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Main} />

          <Route path="*" component={Main} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Routes);