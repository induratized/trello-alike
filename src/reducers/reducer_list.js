const ListReducer = () => {
  return [
    {
      id: 'list-1',
      title: 'List One',
      tasks: [
        {
          id: 'task-1-1',
          title: 'Task 1 1',
          description: 'Complete by EOD',
          assignee: 'AK Sharma'
        }
      ]
    },
    {
      id: 'list-2',
      title: 'List Two',
      tasks: [
        {
          id: 'task-1-1',
          title: 'Task 1 1',
          description: 'Complete by EOD',
          assignee: 'AK Sharma'
        }
      ]
    },
    {
      id: 'list-3',
      title: 'List Three',
      tasks: [
        {
          id: 'task-1-1',
          title: 'Task 1 1',
          description: 'Complete by EOD',
          assignee: 'AK Sharma'
        }
      ]
    }
  ];
}
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

export default ListReducer;