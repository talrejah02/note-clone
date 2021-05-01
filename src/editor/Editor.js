import React, {
    useEffect,
    useState
} from 'react';
import {
    Result
} from './EditorResult';
import { projectFirestore } from "../firebase/config";



export const Markdown = (props) => {
    const{note,setnote} = props
    const [editorNoteTitle, setEditorNoteTitle] = useState(note.selectedNote.title);
    const [editorNoteBody, setEditorNoteBody] = useState(note.selectedNote.body);
    const [handler,sethandler] = useState();
        
     
      const updateBody = (e) => {
        setEditorNoteBody(e.target.value);
      };
      const updateTitle = (e) => {
        setEditorNoteTitle(e.target.value);
      };

     useEffect(() => {
        setEditorNoteTitle(note.selectedNote.title);
      }, [note.selectedNote]);
    
      useEffect(() => {
        setEditorNoteBody(note.selectedNote.body);
      }, [note.selectedNote]);
        


     useEffect(()=>{
    clearTimeout(handler) 
       sethandler( 
           
           setTimeout(()=>{
            projectFirestore
              .collection(`notes`)
              .doc(note.selectedNote.id)
               .update({
                 body: editorNoteBody, })
            },3000)
           ) 

    },[editorNoteBody])

    useEffect(()=>{
        clearTimeout(handler) 
       sethandler( 
           
           setTimeout(()=>{
                projectFirestore
                .collection(`notes`)
                  .doc(note.selectedNote.id)
                    .update({
                         title: editorNoteTitle,
                      });
            },1500)
           ) 

    },[editorNoteTitle])
   

   

    return (
    <div className="markdown-div" >
      <div >
            <div className="title">
            <input value={editorNoteTitle} onChange={updateTitle} />
              
            </div> 
            <textarea onChange={updateBody} value={editorNoteBody}/> 
            <Result editorNoteBody={editorNoteBody} />

            </div> 
            
        </div>
    )

}