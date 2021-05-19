import { useDispatch, useSelector } from 'react-redux'

// useState

function GroceryListTwo() {

    const dispatch = useDispatch()
    const groceries = useSelector(state => state.groceries)

    console.log(groceries)

    return (
        
        <div>
            <h3>Grocery List 2</h3>
        </div>
    )
}

export default GroceryListTwo