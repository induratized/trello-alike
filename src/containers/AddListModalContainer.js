import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddListModal from '../components/list/AddListModal';


const mapStateToProps = (state) => {
  return {
    tasklists: state.tasklists
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createList: (payload) => {
      dispatch({
        type: 'CREATE_LIST',
        payload
      })
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(AddListModal);