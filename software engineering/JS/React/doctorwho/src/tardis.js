import React, { Component } from 'react'

    class Tardis extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tardis: {
                name: 'Time and Relative Dimension in Space',
                caps: false,

            }
        }
    }
    


    changeIt = (text) => {
        if (this.state.tardis.caps) {
            this.setState({
                tardis: {
                    name: this.state.tardis.name.toLowerCase(),
                    caps: false
                }
            })
        } else {
            this.setState({
                tardis: {
                    name: this.state.tardis.name.toUpperCase(),
                    caps: true
                }
            })
        }
    }
    render() {
        return (
            <div>
                <h3>
                    {this.state.tardis.name}
                </h3>
            </div>
        )
    }
}
export default Tardis