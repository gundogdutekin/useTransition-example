import { useState,useTransition } from 'react'
import './App.css'

function App() {
  const [inputtext, setInputtext] = useState('')
  const [txtarray, setTxtarray] = useState([])  
  const [isPending,startTransition] = useTransition()

  const inputAdd = (e) => {
    setInputtext(e.target.value)
    startTransition(() => {
        const myArray=[]
        for(let i = 0; i <2000; i++) {
          myArray.push(e.target.value)
        }
        setTxtarray(myArray)
    })
  }
  return (
    <div className="App">
      {isPending && <div>loading...</div>}
      <input type="text" value={inputtext} onChange={inputAdd} />
      {txtarray.map((item, index) => {
        return <div key={index}>{item}</div>
      })}
    </div>
  )
}

export default App
