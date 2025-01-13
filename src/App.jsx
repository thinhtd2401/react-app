import { useState } from 'react'
import './App.css'

function App() {

  const [job, setJob] = useState('');
  const [jobs, setJobs] = useState(() => {
    const savedJobs = localStorage.getItem('jobs');
    if (savedJobs) 
      return JSON.parse(savedJobs);
    return [];
    
  });

  const handleChangeJob = (e) => {
    setJob(e.target.value);
  }

  const handleAddJob = () => { 
    setJobs(prevState => {
      const newJobs = [...prevState, job];
      localStorage.setItem('jobs', JSON.stringify(newJobs));
      return newJobs;
    });
    setJob(''); 
  }

  return (
    <div className="App">
      <h2>TO DO LIST</h2>
      <input value={job} onChange={handleChangeJob}></input>
      <button onClick={handleAddJob}>Add Job</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
