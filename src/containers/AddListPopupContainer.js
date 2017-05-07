import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddListPopup from '../components/list/AddListPopup';


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

export default connect( null, mapDispatchToProps )(AddListPopup);