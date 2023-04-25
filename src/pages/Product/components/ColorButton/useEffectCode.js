import {useState, useEffect} from "react"

const App = () => {
  const [ count, setCount ] = useState(0)
  const [ name, setName ] = useState('')

  useEffect(() => {
    console.log('1')
  }, [ name, count ])
  
  return (
    <>
      <button></button>
      <input></input>
    </>
  )
}
