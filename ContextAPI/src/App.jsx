import './App.css';  
import Login from './Components/Login';
import Profile from './Components/Profile';
import UserContextProvider from './context/UserContextProvider';

function App() {
    return (
        <UserContextProvider>
            <div style={{ textAlign: 'center', padding: '20px' }}>
                <h3 style={{ color: '#2c3e50' }}>Context API</h3>
                <Login />
                <Profile />
            </div>
        </UserContextProvider>
    );
}

export default App;
