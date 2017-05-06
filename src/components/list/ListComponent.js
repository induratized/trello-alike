import React, { Component } from 'react';

import { Card, CardHeader, CardText } from 'material-ui/Card';

import TaskComponent from '../task'

class ListComponent extends Component {
  render() {
    console.log('this.props.list', this.props.tasklist);
    return (
      <div>
        <Card>
          <CardHeader
            title="Without Avatar"
            subtitle="Subtitle"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}>
          {
            this.props.tasklist.tasks.map( task => 
              <TaskComponent task={task}/>
            )
          }
          </CardText>
        </Card>
      </div>
    )
  }
}

export default ListComponent;