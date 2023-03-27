import React, { useState, useEffect } from 'react';


const App = () => {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('1');
  }, [name, count])

  console.log('3')

  return(
    <>
      <button onClick={() => {setCount(count + 1)}}>숫자 증가</button>
      <input onChange={(e) => setName(e.target.value)}/>
    </>
  )
}

export default App;