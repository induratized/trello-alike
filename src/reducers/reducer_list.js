const ListReducer = (state=[], action) => {
  switch(action.type) {
    case 'CREATE_LIST':
      let newState = JSON.parse(JSON.stringify(state));
      newState.push(action.payload)
      return newState;
      break;
    
    // case 'UPDATE_LIST_TITLE':
    //   let updatedList = state.filter(obj => {
    //     return obj.id == action.id;
    //   })
    //   newState = state.filter(obj => {
    //     return obj.id != action.id;
    //   }) 
    //   updatedList.title = action.updatedTitle;
    //   return newState.push(updatedList)
    //   break;
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
