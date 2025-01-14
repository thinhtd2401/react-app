import { useState } from 'react';
import Content from './components/Content/Content';
import './App.css'

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <Content/>}
    </>
    
  )
}

export default App
