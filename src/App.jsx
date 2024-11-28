import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [data,setData]  = useState([]);
  const [page,setPage] = useState(1)

  useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}`)
      .then(response => response.json())
      .then(newData => setData((prevData) => [...prevData,...newData]))
      .catch(error => console.error(error)) 
  },[page])
  
  return (
   <>
      {
        data.map(d => (
           <>
            <p>{d.body}</p>
            <hr />
          </>
        ))
      }
   </>
  )
}

export default App
