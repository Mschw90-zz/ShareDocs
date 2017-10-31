var React = require('react');
var ReactDOM = require('react-dom');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import EditText from './components/EditText';

// import MyInput from './Components/MyInput';

/* This can check if your electron app can communicate with your backend */
// fetch('http://localhost:3000')
// .then(resp => resp.text())
// .then(text => console.log(text))
// .catch(err => {throw err})

ReactDOM.render(
  <MuiThemeProvider>

    <EditText />
  </MuiThemeProvider>,
   document.getElementById('root'));
