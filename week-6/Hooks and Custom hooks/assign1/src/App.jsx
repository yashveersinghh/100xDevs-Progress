import React, { useEffect } from 'react'
import axios from 'axios';

function App() {
  const [selectedId, setSelectedId] = React.useState(1);

  return (
    <>
      <button onClick={function(){
        setSelectedId(1)
      }}>1</button>
      <button onClick={function(){
        setSelectedId(2)
      }}>2</button>
      <button onClick={function(){
        setSelectedId(3)
      }}>3</button>
      <button onClick={function(){
        setSelectedId(4)
      }}>4</button>
      <Todo id={selectedId}/>
    </>
  )
}

function Todo({id}){
  const [todo, setTodo] = React.useState([]);
  useEffect(()=>{
    axios.get('https://sumserver.com/todos?id='+id)
      .then (response =>{
        setTodo(response.data.todo);
      })
  }, [id])

  return <div>
    Id: {id}
    <h1>
      {todo.title}
    </h1>
    <h5>
      {todo.description}
    </h5>
  </div>
}

export default App;