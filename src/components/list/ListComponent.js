import React, { Component } from 'react';

import { Card, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton'
import TaskComponent from '../task';
import ListTitleComponent from './ListTitleComponent'

class ListComponent extends Component {

  constructor(props) {
    super(props);

    this.updateListTitle = this.updateListTitle.bind(this);

  }

  updateListTitle(event) {
    let updateObj = {
      id: this.props.tasklist.id,
      updatedTitle: event.target.value,
    }
    this.props.updateListTitle(updateObj)
  }
  
  render() {
    console.log('this.props.list', this.props.tasklist);
    return (
      <div>
        <Card>
            {/*actAsExpander={true}*/}
          <CardHeader
            showExpandableButton={true}
          >
            <ListTitleComponent defaultValue={ this.props.tasklist.title }/>
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