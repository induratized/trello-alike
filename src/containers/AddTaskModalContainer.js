import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddTaskModal from '../components/task/AddTaskModal';


const mapDispatchToProps = (dispatch) => {
  return {
    createTask: (payload) => {
      dispatch({
        type: 'CREATE_TASK',
        payload
      })
    }
  }
}

export default connect( null, mapDispatchToProps )(AddTaskModal);
