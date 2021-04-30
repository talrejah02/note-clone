import React from 'react';
import ReactMarkdown from 'react-markdown';


export const Result =(props) =>{
    const{editorNoteBody}=props
 
    return(
        
           
                 <ReactMarkdown className="markdown" children={editorNoteBody} ></ReactMarkdown>
            
       
    )
  

}
