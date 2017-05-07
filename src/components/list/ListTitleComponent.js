import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

const ListTitleComponent = (props) => {
  return (
    <TextField
      style={{ marginLeft: '-75px' }}
      id="listtile"
      defaultValue={props.defaultValue}
      onChange={props.onChange}
    />
  )
}

export default ListTitleComponent;