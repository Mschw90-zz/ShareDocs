import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    const style = {
      margin: 12,
    };

    return (

      <div className="imgback">
        <h1 className="header2">HORIZON DOCS</h1>
        <div className="registerPage">
          <TextField
            hintText="User Name"
            floatingLabelText="User Name"
          /><br />
          <TextField
            hintText="Password"
            floatingLabelText="Password"
            type="password"
          /><br />
          <div>
            <RaisedButton label="Register" secondary={true} style={style} />
            <RaisedButton label="Sign In" primary={true} style={style} />
          </div>
        </div>
      </div>
    );
  }
}



export default Register;
