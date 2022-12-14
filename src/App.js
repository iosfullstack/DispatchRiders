import React from 'react'
import './index.css'
import Main from './components/Main/Main'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
        <div>
        <Main/>
    </div>
    </BrowserRouter>
  )
}

export default App