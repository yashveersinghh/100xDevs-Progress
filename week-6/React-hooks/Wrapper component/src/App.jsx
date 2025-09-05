import React from 'react'

const App = () => {
  return (
    <div>
      <CardWrapper>
        <TextComponent/>
        <TextComponent/>

      </CardWrapper>
    </div>
  )
}
function TextComponent(){
  return <div>
    hello
  </div>
}
function CardWrapper({children}){
  return <div style={{border: "2px solid black", padding: "20px"}}>
    {children}
  </div>
}
export default App