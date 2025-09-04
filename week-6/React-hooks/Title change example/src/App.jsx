import React, { useState } from 'react'

const App = () => {
  return (
    <>
      <HeaderWithButton></HeaderWithButton>
      <Header title="num2="/>
    </>
  )
}

function HeaderWithButton(){
  const [title, setTitle] = useState("num1=");
  function changeNum(){
    setTitle("num1=" + Math.random());
  }
  return <div>
    <button onClick={changeNum}>Click me to change the title</button>
    <Header title={title}/>
  </div>
}

function Header({title}){
  return <div>
    {title}
  </div>
}

export default App