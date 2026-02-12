import './App.css'

function App() {


  return (
    <div>
      <Todo
        title="Learn React"
        description="Learn React with TypeScript"
        done={false}
      />
    </div>
  )
}
interface TodoProp{
  title: string,
  description: string,
  done: boolean
}
function Todo(props: TodoProp){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App
