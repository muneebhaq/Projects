import React, {Component } from 'react'

class Guest extends Component{
    constructor(){
        super()
        this.state={
            guestSpeaker : "Ana Davidson"
        }
        
    }
    changeguestSpeaker(){
        this.setState({
            guestSpeaker: "Ana Davidson is being replaced by John Hammond "
        })
    }

    render(){
        return (
        <div>
            <h2>Hello {this.props.name}</h2>
            <h3> {this.state.guestSpeaker}</h3>
            <button onClick={() => this.changeguestSpeaker()}> Subscribe </button>
        </div>
        );
    }
        
}
export default Guest;