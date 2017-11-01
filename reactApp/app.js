var React = require('react');
var ReactDOM = require('react-dom');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import EditText from './components/EditText';

import Register from './components/Register';
// import EditText from './components/EditText';
// import LandingPage from './components/LandingPage';

/* This can check if your electron app can communicate with your backend */
// fetch('http://localhost:3000')
// .then(resp => resp.text())
// .then(text => console.log(text))
// .catch(err => {throw err})
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
        {/* <EditText /> */}
        {/* <LandingPage /> */}
      </div>
    );
  }
}

ReactDOM.render(
  <MuiThemeProvider>
    <App/>
  </MuiThemeProvider>,
   document.getElementById('root'));
