import React, { Component } from 'react';
import ListComponent from './ListComponent' ;

class ListsComponent extends Component {

  render() {
    console.log('this.props.tasklists', this.props.tasklists)
    return (
      <div>
        {
          this.props.tasklists.map( tasklist => (
            <ListComponent tasklist={tasklist} />
          ))
        }
      </div>
    )
  }
}

export default ListsComponent;