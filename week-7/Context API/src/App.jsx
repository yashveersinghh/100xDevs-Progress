import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Count count={count} setCount={setCount} />
    </div>
  )
  function Count(){
    return <div>
      <CountRenderer count={count} />
      <Button count={count} setCount={setCount} />
    </div>

  }
  function CountRenderer({count}) {
    {count}
  }
  function Button({count, setCount}){
    return <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  }
}

export default App