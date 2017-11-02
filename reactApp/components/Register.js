import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import Paper from 'material-ui/Paper';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
    };
  }

  register() {
    axios.post("http://localhost:3000/register", {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      password: this.state.password,
    }, {
      withCredentials: true
    })
    .then((resp) => {
      if (resp.data.success) {
        this.props.history.push('/');
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

    const paper = {
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
    };

    return (

      <div className="imgback">
        <Paper style={paper} zDepth={2} className="registerPage">
          <h1>HORIZON DOCS</h1>
          <TextField
            // hintText="User Name"
            floatingLabelText="First Name"
            ref="firstName"
            value={this.state.firstName}
            onChange={(e) => this.setState({
              firstName: e.target.value
            })}
          /><br />
          <TextField
            // hintText="User Name"
            floatingLabelText="Last Name"
            ref="lastName"
            value={this.state.lastName}
            onChange={(e) => this.setState({
              lastName: e.target.value
            })}
          /><br />
          <TextField
            // hintText="User Name"
            floatingLabelText="User Name"
            ref="username"
            value={this.state.username}
            onChange={(e) => this.setState({
              username: e.target.value
            })}
          /><br />
          <TextField
            // hintText="Password"
            floatingLabelText="Password"
            type="password"
            ref="password"
            value={this.state.password}
            onChange={(e) => this.setState({
              password: e.target.value
            })}
          /><br />
          <div>
            <RaisedButton label="Sign Up" primary={true} style={style} onClick={() => this.register()}/>
            <RaisedButton label="Login" secondary={true} style={style} onClick={() => this.props.history.push('/')}/>
          </div>
        </Paper>
      </div>
    );
  }
}



export default Register;
