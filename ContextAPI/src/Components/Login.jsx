

import { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

function Login() {
    const [username, setUsername] = useState("");  
    const [password, setPassword] = useState("");  
    const { setUser } = useContext(UserContext);  

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password });
    };

    const formStyle = {
        maxWidth: '250px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    };

    const inputStyle = {
        width: '90%',
        padding: '12px',
        margin: '10px 0',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '16px',
    };

    const buttonStyle = {
        width: '100%',
        padding: '12px',
        backgroundColor: '#2980b9',
        border: 'none',
        color: 'white',
        fontSize: '16px',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f5f5f5' }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit} style={formStyle}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                    style={inputStyle}
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    style={inputStyle}
                />
                <button type="submit" style={buttonStyle}>Submit</button>
            </form>
        </div>
    );
}

export default Login;
