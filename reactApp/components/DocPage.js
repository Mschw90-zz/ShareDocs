import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {blue500} from 'material-ui/styles/colors';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios';


class DocPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      firstName: '',
      DocumentName: '',
      Password: '',
      DocumentID: '',
      Documents: []
    };
  }
  createDoc(title) {
    fetch('http://localhost:3000/newdocument', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title})
    })
    .then(resp => resp.json())
    .then(resp => {
      if (resp.success) {
        this.setState({ userDocs: this.state.userDocs.concat(resp.newDoc), error: null });
      } else {
        this.setState({ error: resp.error.errmsg})
      }
    })
    .catch(err => { throw err });
  }

  userVerif(resp) {
    if(resp.data.success){
      this.setState({
        firstName: resp.data.firstName
      });
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/docPage', {})
    .then((resp) => {
      if(resp.data.success){
        this.setState({
          firstName: resp.data.firstName,
          Documents: resp.data.docs
        });
      }
    })
    .catch((err) => console.log('BAD', err));
  }

  handleOpen(){
    this.setState({open: true});
  }

  handleClose(){
    this.setState({open: false});
  }

  makeDoc() {
    axios.post('http://localhost:3000/makeDoc', {DocumentName: this.state.DocumentName, Password: this.state.Password})
    .then((resp) => {
      if (resp.data.success) {
        this.props.history.push(`/editText/:${resp.data.doc._id}`);
        console.log("success!");
      } else {
        console.log(resp.data.error);
      }
    })
    .catch((err) => console.log(err));
  }


  render() {
    const button = {
      margin: 12,
    };

    const style = {

      minHeight: '94%',
      flex: 1,
      maxWidth: 600,

      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
    };


    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onClick={this.handleClose.bind(this)}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={this.makeDoc.bind(this)}
      />,
    ];

    return (
      <div className="docPage">
        <Paper style={style} zDepth={2} className="page">
          <h1>{this.state.firstName}'s Docs</h1>
          <RaisedButton label="Create Document" primary={true} onClick={this.handleOpen.bind(this)} />
        <Dialog
          title="Make a New Document"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          <TextField
            floatingLabelText="Document Name"
            value={this.state.DocumentName}
            onChange={(e) => this.setState({
              DocumentName: e.target.value
            })}
          /><br />
          <TextField
            floatingLabelText="Password"
            value={this.state.Password}
            type="password"
            onChange={(e) => this.setState({
              Password: e.target.value
            })}
          />

        </Dialog><br />

          <TextField
            floatingLabelText="Document ID"
            value={this.state.DocumentID}
            onChange={(e) => this.setState({
              DocumentID: e.target.value
            })}
          />
          <RaisedButton label="Doc ID" primary={true} style={button}  /><br />
          <div>
            <List>
              <Subheader inset={true}>Documents</Subheader>
              {this.state.Documents.map((doc) => {
                return (
                  <div>
                    <Divider />
                    <ListItem
                      leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
                      primaryText={doc.title}
                      onClick={() => this.props.history.push(`/editText/:${doc._id}`)}
                    />
                    <Divider />
                  </div>
                );
              })}
            </List>
          </div>
        </Paper>
        <div className="logout">
          <RaisedButton label="Sign Out" primary={true} style={button} onClick={() => this.props.history.push('/')}/>
        </div>
      </div>
    );
  }
}

export default DocPage;
