import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskComponent from '../components/task';

const mapStateToProps = (state) => {
  return {
    tasklists: state.tasklists
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    moveTask: (payload) => {
      dispatch({
        type: 'MOVE_TASK_TO_OTHER_LIST',
        payload
      })
    },

    deleteTask: (payload) => {
      dispatch({
        type: 'DELETE_TASK_FROM_LIST',
        payload
      })
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(TaskComponent);