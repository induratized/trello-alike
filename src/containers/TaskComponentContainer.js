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
    editTask: () => {

    },

    moveTask: () => {

    },

    deleteTask: () => {
      
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(TaskComponent);