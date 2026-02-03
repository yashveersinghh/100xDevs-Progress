import { useEffect, useState } from 'react'

function useDebounce(value ,timeout) {
  const [debouncedValue, setdebouncedValue] = useState(value);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setdebouncedValue(value);
    }, timeout);
    return () => clearTimeout(timeoutId);
  }, [value, timeout])
  return debouncedValue;
}
function App(){
  const [value, setValue] = useState("");
  const DebouncedValue = useDebounce(value, 1000);
  
  return <div>
    Debounced value is {DebouncedValue}
    <input type="text" onChange={e=> setValue(e.target.value)} />
  </div>
}
// import axios from 'axios'

// function useInterval(fn, timeout){
//   useEffect(()=>{
//     setInterval(() => {
//       fn();
//     }, timeout);
//   })
// }
// function App() {
//   const [count, setCount] = useState(0);

//   useInterval(() => {
//     setCount(c => c + 1);
//   }, 1000)

//   return (
//     <>
//       Timer is at {count}
//     </>
//   )
// }

// const useMousePointer = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e) => {
//     setPosition({ x: e.clientX, y: e.clientY });
//   };

//   useEffect(() => {
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return position;
// };

// function App() {
//   const mousePointer = useMousePointer();

//   return (
//     <>
//       Your mouse position is {mousePointer.x} {mousePointer.y}
//     </>
//   )
// }

// function useIsOnline(){
//   const [isOnline, setIsOnline] = useState(window.navigator.isOnLine);

//   useEffect(() => {
//     window.addEventListener('online', () => {
//       setIsOnline(true);
//     })

//     window.addEventListener('offline', ()=>{
//       setIsOnline(false);
//     })
//   }, [])
//   return isOnline
// }

// function App() {
//   const isOnLine = useIsOnline();
//   if(isOnLine){
//     return <div> You are online </div>
//   }
//   return <div> You are offline </div>
// }

// function useTodos(n) {
//   const [todos, setTodos] = useState([])
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const value = setInterval(() => {
//       axios.get("https://sum-server.100xdevs.com/todos")
//         .then(res => {
//           setTodos(res.data.todos);
//           setLoading(false);
//         })
//     }, n * 1000)
  
//     axios.get("https://sum-server.100xdevs.com/todos")
//       .then(res => {
//         setTodos(res.data.todos);
//         setLoading(false);
//       })

//     return () => {
//       clearInterval(value)
//     }
//   }, [n])

//   return {todos, loading};
// }

// function App() {
//   const {todos, loading} = useTodos(10);

//   if (loading) {
//     return <div> loading... </div>
//   }

//   return (
//     <>
//       {todos.map(todo => <Track todo={todo} />)}
//     </>
//   )
// }

// function Track({ todo }) {
//   return <div>
//     {todo.title}
//     <br />
//     {todo.description}
//   </div>
// }

export default App