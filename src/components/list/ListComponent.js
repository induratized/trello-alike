import React, { Component } from 'react';

import { Card, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton'
import TaskComponent from '../task';
import ListTitleComponent from './ListTitle'

class ListComponent extends Component {
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
            <RaisedButton label="Update Title" />
            <RaisedButton label="Delete List" style={{float: 'right', marginRight: '40px'}} />
            <RaisedButton label="Add task" style={{float: 'right', marginRight: '20px'}} />
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