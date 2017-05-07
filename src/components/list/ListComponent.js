import React, { Component } from 'react';

import { Card, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import TaskComponent from '../task';
import ListTitleComponent from './ListTitleComponent'

class ListComponent extends Component {

  constructor(props) {
    super(props);

    this.updateListTitle = this.updateListTitle.bind(this);
    this.handleListName = this.handleListName.bind(this);

    this.state = {
      listname: ''
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
            <RaisedButton label="Add task" />
            <RaisedButton label="Delete List"  />
          </CardHeader>
          <CardText expandable={true}>
            {
              this.props.tasklist.tasks.map(task =>
                <TaskComponent task={task} />
              )
            }
          </CardText>
        </Card>
      </div>
    )
  }
}

export default ListComponent;

//onTouchTap={this.updateListTitle}