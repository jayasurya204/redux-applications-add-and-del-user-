import { useState } from "react"
import CustomerView from "./CustomerView";
import { addcustomer as addCustomerAction } from "./Slices/CustomerSlice";
import { useDispatch } from "react-redux";

const Addcustomer = () => {

    const [input, SetInput] = useState("");
    // const [customers, SetCustomers] = useState([]);
    const dispatch = useDispatch()

    
    function AdddingCustomer() {
        if (input) {
            // SetCustomers((previousState) => [...previousState, input])
            dispatch(addCustomerAction(input))
            SetInput("")

        }
    }
    return (
        <>
            <div className="main">
                <div className="con">
                <h1> React Redux Customer Example </h1>
                <h3>Add New Customer</h3>
                <input type="text" value={input} onChange={(e) => SetInput(e.target.value)} />
                <button onClick={AdddingCustomer}>add</button>
                </div>
            </div>
        </>
    )
}

export default Addcustomer