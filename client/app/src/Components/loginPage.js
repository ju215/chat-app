import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';


const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username || !password){
            return;
        }

        try {
            const output = await axios.post('http://localhost:5000/loginPage', {username, password});
            if (output.data === 'Authentication successful') {
                setUsername('');
                setPassword('');
                navigate('/chat');
            } else {
                setUsername('');
                setPassword('');
            }
        } catch(error) {
            console.error('Failed to login', error);
            setUsername('');
            setPassword('');
        }
    
    }


  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500">
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 py-6 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Welcome! Sign in to Chat</h2>
        <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
        <input 
            type="username"
            placeholder="myusername"
            id="username"
            name="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        </div>
        <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
        <input 
            type="password"
            placeholder="*******"
            id="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        </div>
            <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">SIGN IN</button>
        
    </form>
    <Link to='/reg'>
        <button onClick={() => navigate('/reg')} className="mt-4 text-white-500 hover:text-white font-bold">Don't have an account? Register here</button>
    </Link>
    </div>
  )
}


export default LoginPage