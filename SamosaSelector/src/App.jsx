import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import cookie from './assets/cookie.png'

const App = () => {
  const [count, setCount] = useState(0)
  const [power, setPower] = useState(1)

  return (
    <>
      <div>
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
      </div>
      <img src={cookie} className='logo'  onClick={() => setCount(count + 1 * power)} alt="Cookie Image" />
      <div className='parentContainer'>
        <Card
          name='Double Stuffed' 
          x={2}
          numMult={10}
          count={count}
          setCount={setCount}
          power ={power}

          />
        <Card 
          name='Party Pack' 
          x={5}
          numMult={100}
          count={count}
          setCount={setCount}
          power ={power}
          />
        <Card 
          name='Full Feast' 
          x={10}
          numMult={1000}
          count={count}
          setCount={setCount}
          power ={power}
          />
      </div>
    </>
  )
}

export default App
