import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import AddTaskModal from '../../containers/AddTaskModalContainer';
import MoveTaskModal from '../../containers/MoveTaskModalContainer'

class TaskComponent extends Component {
  constructor(props) {
    super(props);

    this.handleAddTaskModal = this.handleAddTaskModal.bind(this);
    this.handleTaskDelete = this.handleTaskDelete.bind(this);
    this.handleMoveTaskModal = this.handleMoveTaskModal.bind(this);

    this.state={
      modalOpen: false,
      moveTaskModalOpen: false
    }
  }

  handleTaskDelete() {
    this.props.deleteTask({
      taskid: this.props.task.id,
      listid: this.props.listid
    })
  }

  handleAddTaskModal() {
    this.setState({
      modalOpen: !this.state.modalOpen
    })
  }

  handleMoveTaskModal() {
    this.setState({
      moveTaskModalOpen: !this.state.moveTaskModalOpen
    });
  }

  render() {
    return (
      <div>
        <Card>
          <CardHeader
            title={this.props.task.title}
            subtitle={`Assigned To - ${this.props.task.assignee} | Status - ${this.props.task.status}`}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardActions>
          </CardActions>
          <CardText expandable={true}>
            {this.props.task.description}
          </CardText> 
          <FlatButton label="Edit" onTouchTap={this.handleAddTaskModal}/>
          <FlatButton label="Delete" onTouchTap={this.handleTaskDelete}/>
          <FlatButton label="Move" onTouchTap={this.handleMoveTaskModal} />
        </Card>
        <AddTaskModal open={this.state.modalOpen}
          handleClose={this.handleAddTaskModal}
          listid={this.props.listid}
          task={this.props.task}
          taskedit={true}
        />
        <MoveTaskModal open={this.state.moveTaskModalOpen}
          handleClose={this.handleMoveTaskModal}
          listid={this.props.listid}
          task={this.props.task}
        />
      </div>
    )
  }
}

export default TaskComponent;