import React, {useState} from 'react';


function Form ({Login, error}){
    const [details, setDetails] = useState({name: "", email:"", password: ""});

    const submitHandler = event =>{
      event.preventDefault();
  
      Login(details);
    }
    return (
        <form onSubmit = {submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {(error !== "") ? (<div className="error">{error}</div>) : ""}

                {/*name fiels*/}
                <div classsName="form-group">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" onChange={event => setDetails({...details, name: event.target.value})} value={details.name}/>

                {/*email field*/}
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" id="email" onChange={event => setDetails({...details, email: event.target.value})} value={details.email}/>
                </div>

                {/*password field*/}
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="text" name="password" id="password" onChange={event => setDetails({...details, password: event.target.value})} value={details.password}/>
                </div>

                {/*Login button*/}
                <input type="submit" value="LOGIN"/>

                </div>
            </div>
        </form>
    )
}

export default Form;