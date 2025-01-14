
import { useState, useEffect } from 'react';

function Tab() {

  const types = ['posts', 'comments', 'albums'];
  const [type, setType] = useState('posts');
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setDatas(json));
  }, [type]);

  return(
    <>
        <div className="navigate">
            {
                types.map((item) => (
                    <button 
                        key={item} 
                        style= {{fontWeight: item === type ? "bold": "unset"}} 
                        onClick={() => setType(item)}>{item}
                    </button>
                ))
            }
        </div>
        <div className="content">
            {
                datas.map((data, index) =>{
                    return <p key={index}>{data.title || data.name}</p>
                })
            }
        </div>
    </>
  );
}
export default Tab;