import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  login () {
    axios.post("http://localhost:3000/register", {
      username: this.refs.username,
      password: this.refs.password,
    }, {
      withCredentials: true
    })
    .then((resp) => {
      if (resp.data.success) {
        console.log("success!", resp.data.user);
      } else {
        console.log(resp.data.error);
      }
    })
    .catch((err) => console.log(err));
  }

  render() {
    const style = {
      margin: 12,
    };


    console.log("anything");
    return (
      <div className="videoBackground">
        <video autoPlay loop id="video-background" height="100%" width="auto">
          <source src="http://localhost:8080/waterfall.mp4" type="video/mp4"></source>
        </video>
          <div className="loginPage">
            <div className="loginBox">
              <div><h1>HORIZON DOCS</h1></div>
              <TextField
                // hintText="User Name"
                floatingLabelText="User Name"
              /><br />
              <TextField
                // hintText="Password"
                floatingLabelText="Password"
                type="password"
              /><br />
                <RaisedButton label="Sign In" primary={true} style={style} onClick={() => this.login()}/>
                <RaisedButton label="Register" secondary={true} style={style} onClick={() => this.props.history.push('/register')} />
            </div>
        </div>
     </div>
    );
  }
}

export default Login;
