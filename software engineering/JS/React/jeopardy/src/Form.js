import React, {useState} from 'react';
function Form(props){
    const[Username, setUsername] = useState(" ")
    const[Password, setPassword] = useState(" ")

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submitting Username ${Username} ${Password}`);
        resetUsername();
        resetPassword();
    }
    return(
        <form onSubmit= {handleSubmit}>
        <label>
            Username:
            <input type="text" />
            Password:
            <input type="text" />
        </label>
        <input type="submit" value="Submit"/>
        </form>
    );
}
export default Function;