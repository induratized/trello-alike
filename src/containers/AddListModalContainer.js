import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddListModal from '../components/list/AddListModal';


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

export default connect( null, mapDispatchToProps )(AddListModal);