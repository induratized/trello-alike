import React, { Component } from 'react';

import AddListPopup from '../../containers/AddListPopupContainer'; 

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton'

class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.handleCreateListOpen = this.handleCreateListOpen.bind(this);
    this.handleCreateListClose = this.handleCreateListClose.bind(this);

    this.state = {
      modalOpen: false
    }
  }

  handleCreateListOpen() {
    this.setState({
      modalOpen: !this.state.modalOpen
    })
  }

  handleCreateListClose() {
    this.setState({
      modalOpen: false
    })
  }

  render() {
    return (
      <div>
      <Toolbar style={{ backgroundColor: '#673ab7'}}>
        <ToolbarGroup>
          <ToolbarTitle text="ixigo" style={{color: 'white', fontWeight: 'bold'}} />
          <ToolbarSeparator />
          <RaisedButton 
            label="Create List"
            backgroundColor='#009688'
            labelColor='#FFFFFF'
            onTouchTap={this.handleCreateListOpen}
          />
        </ToolbarGroup>
        
      </Toolbar>
      <AddListPopup open={ this.state.modalOpen } 
        handleClose={() => this.handleCreateListClose()}
      />
      </div>
    )
  }
}

export default HeaderComponent;