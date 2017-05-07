import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class AddListPopup extends Component {
  constructor(props) {
    super(props);

    this.handleCreateList = this.handleCreateList.bind(this);
    this.handleListnameChange = this.handleListnameChange.bind(this);

    this.state = {
      listObj: {},
      listnameError: ''
    }
  }

  handleCreateList() {
    this.props.createList(this.state.listObj);
    this.props.handleClose();
  }

  handleListnameChange(event) {
    let listname = event.target.value;
    let listObj = { id: '123', title: listname, tasks: []};
    this.setState({ listObj });
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.handleClose}
      />,
      <FlatButton
        label="Create"
        primary={true}
        onTouchTap={this.handleCreateList}
      />,
    ];

    return (
      <div>
        <Dialog
          title="Create Task List"
          actions={actions}
          modal={true}
          open={this.props.open}
        >
          <TextField
            errorText = {this.state.listnameError}
            hintText="Enter list name here" onChange={this.handleListnameChange}
            floatingLabelText="Enter list name"
          />
        </Dialog>
      </div>
    );
  }
}