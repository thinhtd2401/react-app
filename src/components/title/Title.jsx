import { useState, useEffect } from "react";
import './Title.css';

function Title() {

  const [title, setTitle] = useState('Learn React Hooks in 2025');

  useEffect(() => {
    document.title = title;
  }, [title]);

  function handleChangeTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <>
    <label htmlFor="title">Title:</label>
    <input className="input-title" type="text" id="title" placeholder="Title" value={title} onChange={handleChangeTitle}/>
    </>
  );
}

export default Title;