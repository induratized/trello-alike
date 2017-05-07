import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


class TaskComponent extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardHeader
            title={this.props.task.title}
            subtitle={"Assigned To - " + this.props.task.assignee}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardActions>
          </CardActions>
          <CardText expandable={true}>
            {this.props.task.description}
          </CardText> 
          <FlatButton label="Edit" onTouchTap={this.handleEdit}/>
          <FlatButton label="Delete" />
          <FlatButton label="Move" />
        </Card>
      </div>
    )
  }
}

export default TaskComponent;