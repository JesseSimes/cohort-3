import React, {useState} from 'react'

const App = () => {
  let [count,setCount]=useState(0);

  return (
    <div className="bg-red-500 text-white p-4">
      <p className="text-3xl">Counter - {count}</p>
      <button 
      onClick={() => {
        setCount(count + 1)
      }} className="bg-white text-red-500 px-4 py-2 rounded">
        Increment
      </button>
    </div>
  )
}

export default App