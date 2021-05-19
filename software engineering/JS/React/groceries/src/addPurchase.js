import React from 'react'


class AddPurchase extends React.Component{
    state = {list : []}

    handleUpdate=()=>{
        console.log("handleUpdate")
        let finalList = this.props.groceries.filter((grocery, index) => grocery.isPurchased ? true : false)
         this.setState({
            list: finalList
        })
    }

    render() {
        return (
        <div className="updatedCart">
        <button className="updateButton" onClick = {this.handleUpdate}>UPDATE MY CART</button>
        {this.state.list.map((grocery,index) => <li key={index}> Purchased Item: {grocery.item} , {grocery.quantity}, {grocery.units} </li>)}
        </div>
        )
    }
}

export default AddPurchase;