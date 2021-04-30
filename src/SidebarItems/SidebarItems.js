import React from 'react'

function SidebarItems (props){
    
     function removeHTMLTags(str) {
        return str.replace(/<[^>]*>?/gm, "");
      }
        
    const{_index,_note,selectNote,selectedNoteindex,deleteNote,keyvalue} = props
    
   
    return(
        <div className="SidebarItems" key={keyvalue}>
             <li className="listitems" selected={selectedNoteindex === _index } onClick={()=> selectNote(_note,_index)}  > 
             <h3>{  removeHTMLTags(_note.title)}</h3>
             <h4>{_note.body.substring(0,15) + '...'}</h4> 
             </li>
             <button onClick={()=> deleteNote(_note,_index)}>delete</button>
               
                
        </div>
    )

}

export default SidebarItems;