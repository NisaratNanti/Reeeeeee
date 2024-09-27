//import { useState } from 'react';
import { useReducer } from 'react';

import AddTask from'./AddTask.jsx';
import TaskList from './TaskList.jsx';
import { useState } from 'react';



export default function Form() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });

  function handleFirstNameChange(e) {
    person.firstName = e.target.value;
  }

  function handleLastNameChange(e) {
    person.lastName = e.target.value;
  }

  function handleEmailChange(e) {
    person.email = e.target.value;
  }

  return (
    <>
      <label>
        First name:
        <input
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        <input
          value={person.lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <label>
        Email:
        <input
          value={person.email}
          onChange={handleEmailChange}
        />
      </label>
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
    </>
  );
}


export default function TaskApp() {
  //const [tasks, setT] = useReducer(tasksReducer, initialTasks);
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

//  function handleAddTask(text) {
//    setTasks([
//      ...tasks,
//      {
//        id: nextId++,
//        text: text,
//        done: false,
//       },
//    ]);
//  }

  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }
  

//  function handleChangeTask(task) {
//    setTasks(
//      tasks.map((t) => {
//        if (t.id === task.id) {
//    return task;
//      } else {
//    return t;
//      }
//    })
//  );
// }

 function handleChangeTask(task) {
  dispatch({
    type: 'changed',
    task: task,
  });
}

//  function handleDeleteTask(taskId) {
//    setTasks(tasks.filter((t) => t.id !== taskId));
//  }
  
  
  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  }

  
  return (
    <>
      <h1 className='text-blue-400'>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];


