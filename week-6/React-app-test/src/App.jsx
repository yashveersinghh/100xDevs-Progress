import React, { useEffect, useRef } from 'react'

const App = () => {
  const divRef = useRef()
  useEffect(()=>{
    setTimeout(()=>{
      divRef.current.innerHTML = '10'
    }, 5000)
  }, []);

  const incomeTax = 20000;
  return (
    <>
      hi there , your income tax returns are <div ref={divRef}>{incomeTax}</div>
    </>
  )
}

export default App