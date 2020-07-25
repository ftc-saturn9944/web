import React, { Component } from 'react';
import { withRouter } from 'react-router';

import Home from './pages/Home';
import Page404 from './pages/404';
import Sponsors from './pages/Sponsors';
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
          <Route exact path='/sponsors' component={Sponsors} />
          <Route exact path='/sponsorpacks' component={SponsorPackages} />
          <Route exact path='/gallery' component={Gallery} />
          <Route path="*" component={Page404}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(Routes);



