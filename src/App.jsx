import React, { useState } from 'react'
import './App.css'

function App() {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    age: 25,
  });

  function updateName() {
    setProfile(prevState => ({...prevState, name: 'Jane Doe Update', bio: "Love coding"}));
  } 

  return (
    <div className="App">
      <h2>{JSON.stringify(profile)}</h2>
      <button onClick={updateName}>Update Name</button>
    </div>
  )
}

export default App
