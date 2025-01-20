// import './App.css';  
// import Login from './Components/Login';
// import Profile from './Components/Profile';
// import UserContextProvider from './context/UserContextProvider';

// function App() {
//     return (
//         <UserContextProvider>
//             <div style={{ textAlign: 'center', padding: '20px' }}>
//                 <h3 style={{ color: '#2c3e50' }}>Context API</h3>
//                 <Login />
//                 <Profile />
//             </div>
//         </UserContextProvider>
//     );
// }

// export default App;





import  { useState, useEffect } from "react";
import { Data } from "./Employee";
import "bootstrap/dist/css/bootstrap.min.css"; 
import './App.css'; 

function App() {
 
  const [data, setData] = useState([]);
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [age, setAge] = useState(0);
  const [id, setId] = useState(0);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    setData(Data);
  }, []);

 
  const handleEdit = (id) => {
    const dt = data.filter(item => item.id === id);
    if (dt) {
      setUpdate(true);
      setId(id);
      setFirstname(dt[0].firstName);
      setLastname(dt[0].lastName);
      setAge(dt[0].age);
    }
  };

  
  const handleDelete = (id) => {
    if (id > 0 && window.confirm("Are you sure to delete this record?")) {
      const dt = data.filter(item => item.id !== id);
      setData(dt);
    }
  };

 
  const handleSave = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || age <= 0) {
      alert("Please fill all fields.");
      return;
    }

    const newData = [...data];
    const newObject = {
      id: data.length + 1,
      firstName,
      lastName,
      age
    };
    newData.push(newObject);
    setData(newData);
    handleClear();
    alert("Record saved!");
  };

 
  const handleClear = () => {
    setFirstname('');
    setLastname('');
    setAge(0);
    setUpdate(false);
  };


  const handleUpdate = () => {
    const index = data.map((item) => item.id).indexOf(id);
    const updatedData = [...data];
    updatedData[index] = { id, firstName, lastName, age };
    setData(updatedData);
    handleClear();
    alert("Record updated!");
  };

  return (
    <div className="App container">
      <h1 className="text-center mb-4">Employee Management</h1>

      <div className="card-container">
        <div className="row">
          <div className="col-md-4">
            <label>First Name</label>
            <input
              type="text"
              placeholder="Enter first name"
              value={firstName}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Enter last name"
              value={lastName}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <label>Age</label>
            <input
              type="text"
              placeholder="Enter age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-4 text-center">
          {!update ? (
            <button className="btn btn-primary" onClick={handleSave}>
              Save
            </button>
          ) : (
            <button className="btn btn-primary" onClick={handleUpdate}>
              Update
            </button>
          )}
          <button className="btn btn-danger ml-2" onClick={handleClear}>
            Clear
          </button>
        </div>
      </div>

      <table className="table table-striped table-hover mt-4">
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.age}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => handleEdit(item.id)}
                >
                  Edit
                </button>{" "}
                &nbsp;
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
