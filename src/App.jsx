import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {

  const [isQuestion,setQuestion]=useState(data)
  console.log(isQuestion);
  return <main>
    <div className="container">
        <h4>accordion</h4>
        <div className="info">
            {
              isQuestion.map((qus)=>{
                return <SingleQuestion key={qus.is} {...qus}/>
              })
            }
        </div>
    </div>
  </main>
}

export default App;
