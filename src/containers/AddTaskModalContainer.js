import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddTaskModal from '../components/task/AddTaskModal';

const mapStateToProps = (state) => {
  return {
    tasklists: state.tasklists
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editTask: (payload) => {
      dispatch({
        type: 'EDIT_TASK',
        payload
      })
    },
    createTask: (payload) => {
      dispatch({
        type: 'CREATE_TASK',
        payload
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskModal);
