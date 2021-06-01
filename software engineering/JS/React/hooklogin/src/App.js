import React, {useState} from 'react';
import './index.css';
import Form from './Form';


const App = () => {
  const adminUser = {
    email: "muneebhaq@aol.com",
    password: "muneeb123@"
  }
  
  const [user, setUser] = useState({name: "", email: "" });
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
    if(details.email === adminUser.email && details.password === adminUser.password){
    console.log("Logged in");
    setUser({
      name:details.name,
      email: details.email
    });
  } else {
    console.log("Wrong Credentials");
    setError("Wrong Credentials")
  }
}

  const Logout = () => {
    setUser({name: "", email: ""});
  }
  return (
    <div classNAme="App">
      {(user.email !== "") ? (
        <div className = "Welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <Form Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;
