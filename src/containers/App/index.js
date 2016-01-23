/* eslint-disable no-unused-vars*/
import React, { Component } from 'react';
/* eslint-enable no-unused-vars*/

import Home from 'components/Home/';

class App extends Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App;
