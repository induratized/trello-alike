const TaskListReducer = (state=[], action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch(action.type) {
    case 'CREATE_LIST':
      newState.push(action.payload)
      return newState;
      break;
    
    // Update list title
    case 'UPDATE_LIST_TITLE':
      // console.log('state', state)
      // console.log('pauload', action.payload.updatedTitle)
      let updatedList = state.find(obj => {
        return obj.id == action.payload.id;
      })
      // console.log('updatedList', updatedList);
      newState = state.filter(obj => {
        return obj.id != action.payload.id;
      }) 
      // console.log('newState', newState)
      updatedList.title = action.payload.updatedTitle;
      newState.push(updatedList);
      // console.log('before retunr newState', newState)
      return newState
      break;

    // Delete list
    case 'DELETE_LIST':
      newState = state.filter(obj => {
        return obj.id != action.id;
      }) 
      return newState;
      break;

    case 'CREATE_TASK':
      console.log('before add task state - ', newState)
      let listToAddTask = state.find( obj => {
        return obj.id == action.payload.listid
      })

      listToAddTask.tasks.push(action.payload.task)
      newState = state.filter(obj => {
        return obj.id != action.payload.listid;
      }) 
      newState.push(listToAddTask)
      console.log('after add task state - ', newState)
      return newState;
      break;


    case 'EDIT_TASK':
      console.log('before edit task state - ', state)
      let listToEditTaskTo = state.find( obj => {
        return obj.id == action.payload.listid
      })
      newState = newState.filter( obj => {
        return obj.id != action.payload.listid
      })

      let newTaskArray = listToEditTaskTo.tasks.filter( task => {
        return task.id != action.payload.task.id
      })
      listToEditTaskTo.tasks = newTaskArray;
      listToEditTaskTo.tasks.push(action.payload.task)
      newState.push(listToEditTaskTo)
      console.log('after edit task newState - ', newState)
      return newState;
      break;


    case 'DELETE_TASK_FROM_LIST':
      let listToDeleteTaskFrom = state.find( obj => {
        return obj.id == action.payload.listid
      })
      newState = newState.filter( obj => {
        return obj.id != action.payload.listid
      })

      newTaskArray = listToDeleteTaskFrom.tasks.filter( task => {
        return task.id != action.payload.taskid
      })
      listToDeleteTaskFrom.tasks = newTaskArray;
      newState.push(listToDeleteTaskFrom)
      return newState;
      break;


    case 'MOVE_TASK_TO_OTHER_LIST':
      console.log('before move state - ', newState)
      let listToMoveTaskFrom = state.find( obj => {
        return obj.id == action.payload.fromlistid
      })
      let listToMoveTaskTo = state.find( obj => {
        return obj.id == action.payload.tolistid
      })
      newState = newState.filter( obj => {
        return (obj.id != action.payload.fromlistid) && (obj.id != action.payload.tolistid)
      })
      console.log('after removing lists - ', newState)
      let taskToMove = listToMoveTaskFrom.tasks.find( task => {
        return task.id == action.payload.taskid
      }) 
      newTaskArray = listToMoveTaskFrom.tasks.filter( task => {
        return task.id != action.payload.taskid
      })

      listToMoveTaskTo.tasks.push(taskToMove);
      listToMoveTaskFrom.tasks = newTaskArray;

      console.log('after listToMoveTaskFrom - ', listToMoveTaskFrom)
      console.log('after listToMoveTaskTo - ', listToMoveTaskTo)
      newState.push(listToMoveTaskFrom)
      newState.push(listToMoveTaskTo)
      console.log('after move newState - ', newState)
      return newState;
      break;
  }

  return state;
}

export default TaskListReducer;

  // return [
  //   {
  //     id: 'list-1',
  //     title: 'List One',
  //     tasks: [
  //       {
  //         id: 'task-1-1',
  //         title: 'Task 1 1',
  //         description: 'Complete by EOD',
  //         assignee: 'AK Sharma'
  //       }
  //     ]
  //   },
  //   {
  //     id: 'list-2',
  //     title: 'List Two',
  //     tasks: [
  //       {
  //         id: 'task-1-1',
  //         title: 'Task 1 1',
  //         description: 'Complete by EOD',
  //         assignee: 'AK Sharma'
  //       }
  //     ]
  //   },
  //   {
  //     id: 'list-3',
  //     title: 'List Three',
  //     tasks: [
  //       {
  //         id: 'task-1-1',
  //         title: 'Task 1 1',
  //         description: 'Complete by EOD',
  //         assignee: 'AK Sharma'
  //       }
  //     ]
  //   }
  // ];





  // return [
  //   {
  //     id: 'list-1',
  //     title: 'List One'
  //   },
  //   {
  //     id: 'list-2',
  //     title: 'List Two'

  //   },
  //   {
  //     id: 'list-3',
  //     title: 'List Three'

  //   }
  // ];
