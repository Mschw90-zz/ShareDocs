import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  register() {
    axios.post("http://localhost:3000/register", {
      username: this.refs.username,
      password: this.refs.password,
    }, {
      withCredentials: true
    })
    .then((resp) => {
      if (resp.data.success) {
        this.props.history.push('/login');
        console.log("success!");
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

    return (
      <div className="imgback">
        <div className="registerPage">
          <h1>HORIZON DOCS</h1>
          <TextField
            // hintText="User Name"
            floatingLabelText="User Name"
            ref="username"
          /><br />
          <TextField
            // hintText="Password"
            floatingLabelText="Password"
            type="password"
            ref="password"
          /><br />
          <div>
            <RaisedButton label="Sign Up" primary={true} style={style} onClick={() => this.register()}/>
            <RaisedButton label="Login" secondary={true} style={style} onClick={() => this.props.history.push('/')}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
