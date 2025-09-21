import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
    return <div style={{ backgroundColor: 'lightgray', color: 'white', padding: '10px' }}>
        <button onClick={()=>{
            navigate('/');
        }}>Landing</button>
        <button onClick={()=>{
            navigate('/dashboard');
        }}>Dashboard</button>
        </div>
}