
import { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
    const { user } = useContext(UserContext);

    const profileStyle = {
        maxWidth: '200px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.1)',
        marginTop: '10px',
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f5f5f5' }}>
            {user ? (
                <div style={profileStyle}>
                    <h3>Welcome, {user.username}</h3>
                    <p>Password: {user.password}</p>
                </div>
            ) : (
                <p>Please login</p>
            )}
        </div>
    );
}

export default Profile;
