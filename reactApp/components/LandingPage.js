import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    const style = {
      margin: 12,
    };


    console.log("anything");
    return (
      <div className="videoBackground">
        <video autoPlay loop id="video-background" height="100%" width="auto">
          <source src="http://localhost:8080/peopleWalking.mp4" type="video/mp4"></source>
        </video>
          <div className="loginPage">
            <div className="header"><h1>HORIZON DOCS</h1></div>
            <div className="loginBox">
              <TextField
                hintText="User Name"
                floatingLabelText="User Name"
              /><br />
              <TextField
                hintText="Password"
                floatingLabelText="Password"
                type="password"
              /><br />
              <RaisedButton label="Sign In" primary={true} style={style} />
              <RaisedButton label="Register" secondary={true} style={style} />
            </div>
        </div>
     </div>
    );
  }
}

export default LandingPage;
