import React from 'react'

const App = () => {
  return (
    <div>
      <Todo />
    </div>
  )
}
const Todo = () =>{
  return <div>
    <input type="text" placeholder='Enter the task' />
    <br />
    <br />
    <input type="text" placeholder='Enter the description'/>
    <br />
    <br />
    <button>Add Todo!</button>
    <br />
    <br />
    <input type="text" placeholder='Filter' />
  </div>
}

export default App