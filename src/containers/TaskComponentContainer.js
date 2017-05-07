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
    deleteTask: (payload) => {
      dispatch({
        type: 'DELETE_TASK_FROM_LIST',
        payload
      })
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(TaskComponent);