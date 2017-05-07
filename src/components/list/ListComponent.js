import React, { Component } from 'react';

import { Card, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import TaskComponent from '../../containers/TaskComponentContainer';
import ListTitleComponent from './ListTitleComponent'
import AddTaskModal from '../../containers/AddTaskModalContainer'

class ListComponent extends Component {

  constructor(props) {
    super(props);

    this.updateListTitle = this.updateListTitle.bind(this);
    this.handleListName = this.handleListName.bind(this);
    this.handleDeleteList = this.handleDeleteList.bind(this);

    this.handleAddTaskModal = this.handleAddTaskModal.bind(this);

    this.state = {
      listname: this.props.tasklist.title,
      listNameError: '',
      modalOpen: false 
    }
  }

  handleListName(event) {
    this.setState({
      listname: event.target.value
    })
  }

  updateListTitle() {
    let updateObj = {
      id: this.props.tasklist.id,
      updatedTitle: this.state.listname,
    }
    this.props.updateListTitle(updateObj)
  }

  handleDeleteList() {
    this.props.deleteList(this.props.tasklist.id)
  }

  handleAddTaskModal() {
    this.setState({
      modalOpen: !this.state.modalOpen
    })
  }
  
  render() {
    console.log('this.props.tasklist', this.props.tasklist);
    return (
      <div>
        <Card>
            {/*actAsExpander={true}*/}
          <CardHeader
            showExpandableButton={true}
          >
            {/*<ListTitleComponent defaultValue={ this.props.tasklist.title } onChange={() => this.handleListName()}/>*/}
            <TextField
              id="def"
              style={{marginLeft: '-75px'}}
              defaultValue={this.props.tasklist.title}
              onChange={this.handleListName}
            />
            <RaisedButton label="Update Title" onTouchTap={this.updateListTitle} /> 
            <RaisedButton label="Add task" onTouchTap={this.handleAddTaskModal} />
            <RaisedButton label="Delete List" onTouchTap={this.handleDeleteList} />
          </CardHeader>
          <CardText expandable={true}>
            {
              this.props.tasklist.tasks.map(task =>
                <TaskComponent task={task} key={task.id} />
              )
            }
          </CardText>
        </Card>
        <AddTaskModal open={this.state.modalOpen}
          handleClose={this.handleAddTaskModal}
          listid={this.props.tasklist.id}
        />
      </div>
    )
  }
}

export default ListComponent;

//onTouchTap={this.updateListTitle}