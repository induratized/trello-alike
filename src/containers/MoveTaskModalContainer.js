import React from 'react';
import { connect } from 'react-redux'
import MoveTaskModal from '../components/task/MoveTaskModal';

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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoveTaskModal);