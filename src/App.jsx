import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Addcustomer from './Addcustomer'
import CustomerView from './CustomerView'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {

  return (
    <>
    <Provider store={store}>

      <div>
  
    <Addcustomer/>
    <CustomerView/>

      </div>
    </Provider>
     
    </>
  )
}

export default App
