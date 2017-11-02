var React = require('react');
var ReactDOM = require('react-dom');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import EditText from './components/EditText';
import {Route, HashRouter} from "react-router-dom";
import Register from './components/Register';
import EditText from './components/EditText';
import Login from './components/Login';
import DocPage from './components/DocPage';

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
        <Route path='/editText/:id' exact component={EditText} />
        <Route path='/docPage' exact component={DocPage} />
      </div>
    );
  }
}

ReactDOM.render(
  <HashRouter>
    <MuiThemeProvider>
      <App/>
    </MuiThemeProvider>
  </HashRouter>,
   document.getElementById('root'));
