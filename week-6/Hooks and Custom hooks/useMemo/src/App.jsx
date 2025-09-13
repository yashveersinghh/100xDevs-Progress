import React, { useMemo } from 'react'

const App = () => {
  const [counter, setcounter] = React.useState(0);
  const [inputValue, setinputValue] = React.useState(1);
  let count = useMemo(()=>{
    let count = 0;
    for(let i=1; i<=inputValue; i++){
      count += i;
    }
    return count;
  }, [inputValue]);
  function increment(){
    setcounter(counter + 1);
  }

  return (
    <>
      <input onChange={function(e){
        setinputValue(e.target.value);
      }} type="text" placeholder='Give the sum' />
      <br />
      Sum from 1 to {inputValue} is {count}
      <br />
      <button onClick={increment}>counter ({counter})</button>
    </>
  )
}

export default App