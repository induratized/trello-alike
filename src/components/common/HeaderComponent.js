import React, { Component } from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton'

const HeaderComponent = (props) => {
  return (
    <Toolbar style={{ backgroundColor: '#673ab7'}}>
      <ToolbarGroup>
        <ToolbarTitle text="ixigo" />
        <ToolbarSeparator />
        <RaisedButton 
          label="Create List"
          backgroundColor='#009688'
          labelColor='white'
        />
      </ToolbarGroup>
    </Toolbar>
  )
}

export default HeaderComponent;