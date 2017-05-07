import React from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

export default class MoveTaskModal extends React.Component {
  constructor(props) {
    super(props);

    this.handleMoveTask = this.handleMoveTask.bind(this);
    this.handleSelection = this.handleSelection.bind(this);

    this.state = {
      moveToList: ''
    }
  }

  handleSelection(event, value) {
    console.log('radio value - ', value)
    this.setState({
      moveToList: value
    });
  }

  handleMoveTask() {
    this.props.moveTask({
      taskid: this.props.task.id,
      fromlistid: this.props.listid,
      tolistid: this.state.moveToList
    });
    this.props.handleClose();
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.handleClose}
      />,
      <FlatButton
        label="Move"
        primary={true}
        onTouchTap={this.handleMoveTask}
      />,
    ];

    const radios = [];
    for (let i = 0; i < this.props.tasklists.length; i++) {
      radios.push(
        <RadioButton
          key={this.props.tasklists[i].id}
          value={this.props.tasklists[i].id}
          label={`List -> ${this.props.tasklists[i].title}`}
        />
      );
    }

    return (
      <div>
        <Dialog
          title="Move Task to other List"
          actions={actions}
          modal={true}
          open={this.props.open}
        >
          <RadioButtonGroup 
            ref='ListNames' 
            name="ListNames" 
            value={this.state.moveToList}
            onChange={this.handleSelection}
          >
            {radios}
          </RadioButtonGroup>
        </Dialog>
      </div>
    )
  }
}