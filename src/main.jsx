import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


const App = ()=>{
  const [count, setCount] = useState(0)

  const addOne = ()=>{
    setCount(count + 1)
  }

  const minusOne = () =>{
    setCount(count - 1)
  }

  return(
    <div>
      <h1>{count}</h1>
      <button onClick={addOne}>Add One</button>
      <button onClick={minusOne}>Minus One</button>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

