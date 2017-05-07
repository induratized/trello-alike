import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListsComponent from '../components/list';
import ListComponent from '../components/list/ListComponent';

const mapStateToProps = (state) => {
  return {
    tasklists: state.tasklists
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateListTitle: (payload) => {
      console.log('container updateListTitle- ', payload)
      dispatch(
        {
          type: 'UPDATE_LIST_TITLE',
          payload
        }
      )
    },
    addTask: (payload) => {
      dispatch(
        {
          type: 'ADD_TASK_TO_LIST',
          payload
        }
      )
    },
    deleteList: (listid) => {
      dispatch(
        {
          type: 'DELETE_LIST',
          id: listid
        }
      )
    }
  }
}

export default connect(mapStateToProps, null)(ListsComponent);

export const ListComponentContainer = connect(mapStateToProps, mapDispatchToProps)(ListComponent)