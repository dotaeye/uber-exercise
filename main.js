import Exponent from 'exponent';
import React from 'react';
import App from './app'

class Main extends React.Component {
  render() {
    return (
      <App/>
    );
  }
}


Exponent.registerRootComponent(Main);
