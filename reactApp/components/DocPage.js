import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
// import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
// import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {blue500} from 'material-ui/styles/colors';
// import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';


class DocPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    const button = {
      margin: 12,
    };

    const style = {
      height: 700,
      width: 600,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
    };
    return (
      <div className="docPage">
        <Paper style={style} zDepth={2}>
          <h1>.... Docs</h1>
          <TextField
            floatingLabelText="Document Name"
            value={this.state.Document}
            onChange={(e) => this.setState({
              Document: e.target.value
            })}
          />
          <RaisedButton label="New Doc" primary={true} style={button} /><br />
          <TextField
            floatingLabelText="Document ID"
            value={this.state.DocumentID}
            onChange={(e) => this.setState({
              DocumentID: e.target.value
            })}
          />
          <RaisedButton label="Doc ID" primary={true} style={button} /><br />
          <div>
            <List>
              <Subheader inset={true}>Documents</Subheader>
              <Divider />
              <ListItem
                leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
                primaryText="Vacation itinerary"
              />
              <Divider />
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
