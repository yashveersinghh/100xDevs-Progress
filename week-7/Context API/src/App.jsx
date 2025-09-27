import React from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";
//npm install react@18.3.1 react-dom@18.3.1
const App = () => {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}
function Count(){
  return <div>
    <CountRenderer />
    <Button />
  </div>
}
function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
    <EvenOdd />
  </div>
}
function EvenOdd(){
  const isEven = useRecoilValue(evenSelector);
  return <div>{(isEven % 2 == 0)? "it is even":"it is odd"}</div>
}
function Button(){
  const setCount = useSetRecoilState(countAtom);
  return <div>
    <button onClick={() => setCount(count => count + 1)}>Increase</button>
    <button onClick={() => setCount(count => count - 1)}>Decrease</button>
  </div>
}

export default App