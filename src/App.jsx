import { useState } from 'react'
import './App.css'

function App() {
 
  const [job, setJob ] = useState("");
  const [jobs, setJobs] = useState(() => {
    const jobsStorage = localStorage.getItem('jobs');
    console.log(JSON.parse(jobsStorage));
    
    return JSON.parse(jobsStorage) ?? [];
  });

  function handleJob(event) {
    setJob(event.target.value);
  }

  function handleSubmit(){
    setJobs(prevState => {
      let newJobs = [...prevState, job];
      localStorage.setItem('jobs', JSON.stringify(newJobs));
      return newJobs;
    });
  }

  return (
    <>
      <input value={job} onChange={handleJob}></input> <button onClick={handleSubmit}>Add</button>
      <ul>
        { jobs.map((job, index) => <li key={index}>{job}</li>)}
      </ul>
    </>
  )
}

export default App
