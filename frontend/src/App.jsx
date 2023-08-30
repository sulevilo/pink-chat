import io from 'socket.io-client'
import { useState, useEffect } from 'react'
const socket  = io("/")
function App() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const newMessage = {
      body: message,
      from: 'Me'
    }
    setMessages([...messages, newMessage])
    socket.emit('message', message)
    const input = document.getElementById('input')
    input.value = ""

    const list = document.getElementById('list')
    list.scrollTop = 10000
  }
  
  useEffect( () => {
    socket.on('message', receiveMessage)
    return () => {
      socket.off('message', receiveMessage) 
    }
  },[])

  const receiveMessage = (message) =>{
    setMessages((state)=> [...state, message])
    const list = document.getElementById('list')
    list.scrollTop = 10000
  };

  return(
    <div className='h-screen bg-red-100	 text-white flex items-center justify-center'>
      <form onSubmit={handleSubmit} className='bg-red-300 p-10'>
        <h1 className='text-2xl font-bold text-stone-950 my-2'>Chat React</h1>
        <input type='text' id='input' placeholder='Write your message ...' 
        className='border-2 border-zinc-500 p-2 w-full text-black'
        onChange={(e) => {setMessage(e.target.value)}}/>
       
        <ul id='list' style={{ height: "200px" , overflowY: "auto"}}>
          {
            messages.map((message, i) => (
              <li key={i} className= {`my-2 p-2 table  rounded-md ${message.from === 'Me' ?
              'bg-red-500 ml-auto': 'bg-red-950'}`
              }>
                <span className='text-xs text-red-100 block'>{message.from} </span> 
                <span className='text-md'>{message.body}</span></li>
            ))
          }
        </ul>
      </form>

      
    </div>
  )
}

export default App