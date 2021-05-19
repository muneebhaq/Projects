import React from 'react'
function passingProps(props){
    return <h1 className="info"> Hello, {props.fname} {props.lname} {props.initial}</h1>;
}

export default passingProps;