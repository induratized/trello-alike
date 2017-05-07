const ListReducer = (state=[], action) => {
  switch(action.type) {
    case 'CREATE_LIST':
      let newState = JSON.parse(JSON.stringify(state));
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
      let listToAddTask = state.find( obj => {
        return obj.id == action.payload.listid
      })

      listToAddTask.tasks.push(action.payload.task)
      newState = state.filter(obj => {
        return obj.id != action.payload.listid;
      }) 
      newState.push(listToAddTask)
      return newState;
      break;
  }
  return state;
}

export default ListReducer;

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
