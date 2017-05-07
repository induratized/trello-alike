import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField'

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class AddTaskModal extends Component {
  constructor(props) {
    super(props);

    this.handleCreateTask = this.handleCreateTask.bind(this);
    this.handleTaskTitleChange = this.handleTaskTitleChange.bind(this);
    this.handleAssigneeChange = this.handleAssigneeChange.bind(this);
    this.handleTaskDescription = this.handleTaskDescription.bind(this);

    this.state = {
      tasknameError: '',
      assigneeError: '',
      description: '',
      assignee: '',
      taskTitle: '',
    }
  }

  handleCreateTask() {
    let title = this.state.taskTitle;
    let assignee = this.state.assignee;
    let description = this.state.description;

    if(title == '') {
      this.setState({ tasknameError: 'Please enter the task name'});
      return false;
    } else {
      this.setState({ tasknameError: ''});
    } 

    if ( assignee == '') {
      this.setState({ assigneeError: 'Please enter as assignee name'});
      return false
    } else {
      this.setState({ assigneeError: ''});
    }

    let taskObj = { 
      listid: this.props.listid,
      task: {
        id: `task-${Math.floor(Math.random() * 100000)}`, 
        title,
        assignee,
        description
      }
    };
    this.props.createTask(taskObj);
    this.props.handleClose();
  }

  handleTaskTitleChange(event) {
    let tasktitle = event.target.value;
    this.setState({ 
      taskTitle: tasktitle  
    });
  }

  handleAssigneeChange(event) {
    this.setState({
      assignee: event.target.value
    })
  }

  handleTaskDescription(event) {
    this.setState({
      description: event.target.value
    });
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
        onTouchTap={this.handleCreateTask}
      />,
    ];

    return (
      <div>
        <Dialog
          title="Create Task"
          actions={actions}
          modal={true}
          open={this.props.open}
        >
          <TextField
            errorText = {this.state.tasknameError}
            hintText="Enter Task name here" 
            onChange={this.handleTaskTitleChange}
            floatingLabelText="Enter task name"
          /><br/>
          <TextField
            errorText = {this.state.assigneeError}
            hintText="Enter Assignee" 
            onChange={this.handleAssigneeChange}
            floatingLabelText="Enter Assignee name"
          /><br/>
          <TextField
            hintText="Enter Task Description"
            floatingLabelText="Enter Task Description"
            onChange={this.handleTaskDescription}
            multiLine={true}
            rows={2}
          />
        </Dialog>
      </div>
    );
  }
}