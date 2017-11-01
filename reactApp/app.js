var ReactDOM = require('react-dom')
import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Register from './components/Register';
// import EditText from './components/EditText';
// import LandingPage from './components/LandingPage';


// import LandingPage from './components/LandingPage';
// import MyEditor from './components/MyEditor';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return(
      <div>
         <Register />
      </div>
    );
  }
};

ReactDOM.render(
  <MuiThemeProvider>
    <App/>
  </MuiThemeProvider>,
   document.getElementById('root'));
