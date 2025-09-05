import React from 'react'

let counter = 4;
const App = () => {
  const [todos, setTodos] = React.useState([{
    id: 1,
    title: "Learn React",
    description: "Learn React from scratch",
  },{
    id: 2,
    title: "Learn JS",
    description: "Learn JS from scratch",
  }, {
    id: 3,
    title: "Learn Python",
    description: "Learn Python from scratch",
  }]);
  const addTodo = ()=> {
    setTodos([...todos,{
      id: counter++,
      title: Math.random(),
      description: Math.random()
    }])
  }
  return (
    <>
      <h1>Todo List</h1>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map(function(todo){
        return <div>
          <Todo key={todo.id} title ={todo.title} description={todo.description}/>
        </div>
      })}
    </>
  )
}
const Todo = ({title, description})=>{
  return <div>
    <h1>
      {title}
    </h1>
    <h5>
      {description}
    </h5>
  </div>
}
export default App