import React from 'react'
import { useSelector } from 'react-redux'
import { deleteCustomer } from './Slices/CustomerSlice'
import { useDispatch } from 'react-redux'

const CustomerView = () => {

    const customers = useSelector((state) => state.customers)
    const dispatch = useDispatch();

    function deleteHandle(index) {
        dispatch(deleteCustomer(index))
    }

    return (
      <div className="show">
        <div className='customer-view'>

            <h3> Customers List :</h3>
            <ul className='view'>
                {customers.map((customer, index) => <li>{customer} <button onClick={() => deleteHandle(index)}>Delete</button></li>)}
            </ul>
        </div>

        </div>
    )


}
export default CustomerView
