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
    this.handleTaskStatus = this.handleTaskStatus.bind(this);

    this.state = {
      tasknameError: '',
      assigneeError: '',
      statusError: '',
      description: this.props.task ? this.props.task.description : '',
      assignee: this.props.task ? this.props.task.assignee : '',
      taskTitle: this.props.task ? this.props.task.title : '',
      status: this.props.task ? this.props.task.status : '',
    }
  }

  handleCreateTask() {
    let taskid = '';
    let title = this.state.taskTitle;
    let assignee = this.state.assignee;
    let description = this.state.description;
    let status = this.state.status;

    if (title == '') {
      this.setState({ tasknameError: 'Please enter the task name' });
      return false;
    } else {
      this.setState({ tasknameError: '' });
    }

    if (assignee == '') {
      this.setState({ assigneeError: 'Please enter as assignee name' });
      return false
    } else {
      this.setState({ assigneeError: '' });
    }

    if (this.props.taskedit) {
      taskid = this.props.task.id
    } else {
      taskid = `task-${Math.floor(Math.random() * 100000)}`
    }

    let taskObj = {
      listid: this.props.listid,
      task: {
        id: taskid,
        title,
        assignee,
        description,
        status
      }
    };
    if (this.props.taskedit) {
      this.props.editTask(taskObj);
    } else {
      this.props.createTask(taskObj);
    }
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

  handleTaskStatus(event) {
    this.setState({
      status: event.target.value
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

    console.log('addtaskmodal taskedit- ', this.props.taskedit)

    return (
      <div>
        <Dialog
          title="Create Task"
          actions={actions}
          modal={true}
          open={this.props.open}
        >
          <TextField
            errorText={this.state.tasknameError}
            hintText="Enter Task name here"
            defaultValue={this.props.taskedit ? this.state.taskTitle : ''}
            onChange={this.handleTaskTitleChange}
            floatingLabelText="Enter task name"
          /><br />
          <TextField
            errorText={this.state.assigneeError}
            hintText="Enter Assignee"
            defaultValue={this.props.taskedit ? this.state.assignee : ''}
            onChange={this.handleAssigneeChange}
            floatingLabelText="Enter Assignee name"
          /><br />
          <TextField
            errorText={this.state.statusError}
            hintText="Enter Task Status"
            defaultValue={this.props.taskedit ? this.state.status : ''}
            floatingLabelText="Enter Task Status"
            onChange={this.handleTaskStatus}
          /><br />
          <TextField
            hintText="Enter Task Description"
            defaultValue={this.props.taskedit ? this.state.description : ''}
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