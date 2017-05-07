const TaskListReducer = (state = [], action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'CREATE_LIST':
      newState.push(action.payload)
      return newState;
      break;

    // Update list title
    case 'UPDATE_LIST_TITLE':
      let updatedList = state.find(obj => {
        return obj.id == action.payload.id;
      })
      newState = state.filter(obj => {
        return obj.id != action.payload.id;
      })
      updatedList.title = action.payload.updatedTitle;
      newState.push(updatedList);
      return newState
      break;


    // Delete list
    case 'DELETE_LIST':
      newState = state.filter(obj => {
        return obj.id != action.id;
      })
      return newState;
      break;


    // Create New Task
    case 'CREATE_TASK':
      let listToAddTask = state.find(obj => {
        return obj.id == action.payload.listid
      })

      listToAddTask.tasks.push(action.payload.task)
      newState = state.filter(obj => {
        return obj.id != action.payload.listid;
      })
      newState.push(listToAddTask)
      return newState;
      break;


    // Edit task
    case 'EDIT_TASK':
      let listToEditTaskTo = state.find(obj => {
        return obj.id == action.payload.listid
      })
      newState = newState.filter(obj => {
        return obj.id != action.payload.listid
      })

      let newTaskArray = listToEditTaskTo.tasks.filter(task => {
        return task.id != action.payload.task.id
      })
      listToEditTaskTo.tasks = newTaskArray;
      listToEditTaskTo.tasks.push(action.payload.task)
      newState.push(listToEditTaskTo)
      return newState;
      break;


    // Delete task from list
    case 'DELETE_TASK_FROM_LIST':
      let listToDeleteTaskFrom = state.find(obj => {
        return obj.id == action.payload.listid
      })
      newState = newState.filter(obj => {
        return obj.id != action.payload.listid
      })

      newTaskArray = listToDeleteTaskFrom.tasks.filter(task => {
        return task.id != action.payload.taskid
      })
      listToDeleteTaskFrom.tasks = newTaskArray;
      newState.push(listToDeleteTaskFrom)
      return newState;
      break;


    // Move Task to other List
    case 'MOVE_TASK_TO_OTHER_LIST':
      let listToMoveTaskFrom = state.find(obj => {
        return obj.id == action.payload.fromlistid
      })
      let listToMoveTaskTo = state.find(obj => {
        return obj.id == action.payload.tolistid
      })
      newState = newState.filter(obj => {
        return (obj.id != action.payload.fromlistid) && (obj.id != action.payload.tolistid)
      })
      let taskToMove = listToMoveTaskFrom.tasks.find(task => {
        return task.id == action.payload.taskid
      })
      newTaskArray = listToMoveTaskFrom.tasks.filter(task => {
        return task.id != action.payload.taskid
      })

      listToMoveTaskTo.tasks.push(taskToMove);
      listToMoveTaskFrom.tasks = newTaskArray;

      newState.push(listToMoveTaskFrom)
      newState.push(listToMoveTaskTo)

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
