import React from 'react'
import Tardis from './tardis'

class DivThree extends Tardis{
    render(){
        return(
            <div onClick={this.changeIt}>
                <h3>
                    {this.state.tardis.name}
                </h3>
            </div>
        )
    }
}

export default DivThree;