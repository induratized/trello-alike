import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListsComponent from '../components/list';

const mapStateToProps = (state) => {
  return {
    tasklists: state.tasklists
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(ListsComponent);