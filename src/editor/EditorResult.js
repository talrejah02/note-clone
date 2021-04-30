import React from 'react';
import ReactMarkdown from 'react-markdown';


export const Result =(props) =>{
    
 
    return(
        <div className="result">
             <div className="result-div">
                 <ReactMarkdown children="hello" ></ReactMarkdown>
             </div>
        </div>
    )
  

}
