import React, { useState } from 'react'
import './App.css'

function Header() {
  return (
    <h2>Header</h2>
  )
}

class Content extends React.Component {
  render() {
    return (
      <h3>Content</h3>
    )
  }
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Content/>
    </>
  )
}

export default App
