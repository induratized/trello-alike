import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

const ListTitleComponent = (props) => {
  return (
    <TextField
      style={{marginLeft: '-75px'}}
      id="def"
      defaultValue={props.defaultValue}
      onChange={this.props.onChange}
    />
  )
}

export default ListTitleComponent;