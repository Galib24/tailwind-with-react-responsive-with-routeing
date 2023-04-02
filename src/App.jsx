import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceList from './components/price List/PriceList'
import DashBoard from './components/Dash Borad/DashBoard'
import PhoneBar from './components/PhoneBar/PhoneBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className='text-7xl mb-5 text-center text-purple-500'>hello pal</h1>
      <PriceList></PriceList>
      <DashBoard></DashBoard>
      <PhoneBar></PhoneBar>
    </div>
  )
}

export default App
