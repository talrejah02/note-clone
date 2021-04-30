import React from 'react'

function SidebarItems (props){
    
     function removeHTMLTags(str) {
        return str.replace(/<[^>]*>?/gm, "");
      }
      function removemarkdown(str){
        return str.replace(/[!@#$%^&*]/g,"");
      }
        
    const{_index,_note,selectNote,selectedNoteindex,deleteNote,keyvalue} = props
    
   
    return(
        <div className="SidebarItems" key={keyvalue}>
             <li className="listitems" selected={selectedNoteindex === _index } onClick={()=> selectNote(_note,_index)}  > 
             <h3>{  removeHTMLTags(_note.title)}</h3>
             <h4>{removemarkdown(_note.body.substring(0,15)) + '...'}</h4> 
             </li>
             <button className="del-btn" onClick={()=> deleteNote(_note,_index)}><svg className="svg"  viewBox="0 0 48 48"><g fill="none"><path d="M24 7.25a5.75 5.75 0 0 1 5.746 5.53l.004.22H37a1.25 1.25 0 0 1 .128 2.493L37 15.5h-1.091l-1.703 22.57A4.25 4.25 0 0 1 29.968 42H18.032a4.25 4.25 0 0 1-4.238-3.93L12.09 15.5H11a1.25 1.25 0 0 1-1.244-1.122l-.006-.128c0-.647.492-1.18 1.122-1.243L11 13h7.25A5.75 5.75 0 0 1 24 7.25zm9.402 8.25H14.598l1.69 22.382a1.75 1.75 0 0 0 1.744 1.618h11.936a1.75 1.75 0 0 0 1.745-1.618l1.69-22.382zm-6.152 5.25c.647 0 1.18.492 1.244 1.122L28.5 22v11a1.25 1.25 0 0 1-2.494.128L26 33V22c0-.69.56-1.25 1.25-1.25zm-6.5 0c.647 0 1.18.492 1.244 1.122L22 22v11a1.25 1.25 0 0 1-2.494.128L19.5 33V22c0-.69.56-1.25 1.25-1.25zm3.25-11a3.25 3.25 0 0 0-3.245 3.066L20.75 13h6.5A3.25 3.25 0 0 0 24 9.75z" ></path></g></svg></button>
               
                
        </div>
    )

}

export default SidebarItems;