import React from './react'
class AddList extends React.Component{

    handleClick=(index, event)=> {
        console.log(this.props.groceries[index].isPurchased = !this.props.groceries[index].isPurchased)

    }

    render() {
        return (
            <div className="show list">  
            {this.props.groceries.map((grocery, index) => grocery.isPurchased ? 
            <li key={index}>Added to the list:  {grocery.item} , {grocery.quantity} {grocery.units}
            <button className="removeButton" onClick= { (event) => this.handleClick(index, event)}> SAVE FOR LATER</button> 
            </li>: null)}
        
        </div>
        )
    }
}




export default AddList