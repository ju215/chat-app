import React, {useState} from 'react';
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom";


const RegPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username || !password) {
            return;
        }

    try {
        await axios.post('http://localhost:5000/regPage', {username, password});
        setUsername('');
        setPassword('');
        navigate('/');
    } catch(error) {
        console.error('Error registering:', error);
    }
}

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500">
        
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-bold mb-6">Register</h2>
            <div className="mb-4">
            <label htmlFor="info" className="block text-gray-700 font-bold mb-2">Username</label>
            <input
              type="username"
              placeholder="Enter username"
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
          <div className="flex items-center justify-between">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign Up</button>
          </div>
        </form>
        <button onClick={() => navigate('/')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Already have an account? Login here</button>
        </div>
  );
};

export default RegPage