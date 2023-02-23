import { useState } from 'react'
import TestDate from './Components/TestDate'

function App() {
  
  console.log("COMPONENT APP RENDERED")

  return (
    <div className='test'>
      <h1>REACT APP</h1>
      <TestDate/>
    </div>
  )
}

export default App
