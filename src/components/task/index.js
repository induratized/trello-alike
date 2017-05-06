import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText> 
          <RaisedButton label="Edit" />
          <RaisedButton label="Delete" />
          <RaisedButton label="Move" />
        </Card>
      </div>
    )
  }
}

export default TaskComponent;