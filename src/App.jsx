import { useState } from 'react';
import Content from './components/Content/Content';
import './App.css'


function emmitComment(groupId){
  const event = new CustomEvent(`emmitComment-${groupId}`, {
    detail: `Comment of group ${groupId} - ${Math.random()}`
  });
  window.dispatchEvent(event);
}

setInterval(() => {
  emmitComment(2);
  emmitComment(3);
  emmitComment(1);
}, 2000);


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
