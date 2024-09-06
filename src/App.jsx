import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         <div className='uno'></div> 
         <div className='dos'></div>
         <div className='tres'></div>
         <div className='cuatro'></div>
    </>
  )
}

export default App
