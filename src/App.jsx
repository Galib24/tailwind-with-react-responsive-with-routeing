import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceList from './components/price List/PriceList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className='text-7xl mb-5 text-center text-purple-500'>hello pal</h1>
      <PriceList></PriceList>


    </div>
  )
}

export default App
