import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BigCalendar from './components/common/BigCalendar'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='  '>
    <BigCalendar />
   </div>
  )
}

export default App
