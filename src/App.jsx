import { useState, useEffect } from 'react';
import './App.css';
import AddTodoItem from './components/AddTodoItem';
import TodoList from './components/TodoList';
import Card from './UI/Card'
import { v4 as uuidv4 } from 'uuid';

function App() {
  /*const initArray = [{
      id: '123',
      detail: 'Learn React',
      date: '11/11/2022',
      status: 'canceled'
    },
    {
      id: '1234',
      detail: 'Learn Node.js',
      date: '11/11/2022',
      status: 'todo'
    },{
      id: '123456',
      detail: 'Become Full stack Developer',
      date: '11/11/2022',
      status: 'pending'
    },{
      id: '12345678',
      detail: 'Become Full stack Developer Become Full stack Developer',
      date: '11/11/2022',
      status: 'completed'
    }
  ]*/
  const [todoList, setTodoList] = useState([])
  const [option, setOption] = useState({})
  useEffect(() => {
    const json = localStorage.getItem("todoListArr")
    if (json) {
      const result = JSON.parse(json)
      const oldLists = result.lists
      console.log(oldLists)
      setTodoList(oldLists)
    }
  }, [])
  
  function addTodoListHandler(text) {
    if (text.trim().length === 0) {
      return
    }
    const newitem = {
      id: uuidv4(),
      detail: text,
      date: new Date(),
      status: 'todo'
    }
    
    const json = localStorage.getItem("todoListArr")
    if (!json) { /* array is not exists */
      localStorage.setItem('todoListArr', JSON.stringify({ lists: [newitem] }))
    } else {
      const result = JSON.parse(json)
      const oldLists = result.lists
      localStorage.setItem('todoListArr', JSON.stringify({ lists: [...oldLists, newitem]}))
    }

    setTodoList((prev) => {
      return [...prev, newitem]
    })
  }

  function removeTodoListHandler(id) {
    console.log('remove')
    const json = localStorage.getItem("todoListArr")
    if (!json) { /* array is not exists */
      localStorage.setItem('todoListArr', JSON.stringify({ lists: [] }))
    } else {
      const result = JSON.parse(json)
      const oldLists = result.lists
      localStorage.setItem('todoListArr', JSON.stringify({ lists: oldLists.filter((item) => item.id !== id) }))
    }

    setTodoList((prevArray) => {
      return prevArray.filter((item) => item.id !== id);
    })
  }
  
  function doFilter(opt) {
    setOption(opt)
  }
      
  const filterArray = todoList.filter((listitem) => {
    const { todo, pending, completed, canceled } = option
    if (!todo && !pending && !completed && !canceled) {
      return todoList
    }
    return (
      (todo && listitem.status === 'todo') ||
      (pending && listitem.status === 'pending') ||
      (completed && listitem.status === 'completed') || 
      (canceled && listitem.status === 'canceled')
    )
  })

  return (
    <div className="App">
      <Card>
        <AddTodoItem addTodoList={addTodoListHandler} />
        <TodoList list={filterArray} removeList={removeTodoListHandler} doFilter={doFilter} />
      </Card>
    </div>
  );
}

export default App;
