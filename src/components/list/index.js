import React, { Component } from 'react';
import {ListComponentContainer} from '../../containers/ListsComponentContainer' ;

class ListsComponent extends Component {

  render() {
    console.log('this.props.tasklists-', this.props.tasklists)
    return (
      <div>
        {
          this.props.tasklists.map( tasklist => (
            <ListComponentContainer tasklist={tasklist} key={tasklist.id} />
          ))
        }
      </div>
    )
  }
}

export default ListsComponent;