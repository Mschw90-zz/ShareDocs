var ReactDOM = require('react-dom')
import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Register from './components/Register';
import EditText from './components/EditText';
import Login from './components/Login';


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
        <Route path='/' exact component={Login} />
        <Route path='/register' exact component={Register} />
        <Route path='/editText' exact component={EditText} />
      </div>
    );
  }
};

ReactDOM.render(
  <HashRouter>
    <MuiThemeProvider>
      <App/>
    </MuiThemeProvider>
  </HashRouter>,
   document.getElementById('root'));
