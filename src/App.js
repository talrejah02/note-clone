import './App.css';
import { useState , useEffect } from 'react';
import useFirestore from './hooks/useFirestore';
import Sidebar from './Sidebar/Sidebar';
import { Markdown } from './editor/Editor';
import { Result } from './editor/EditorResult';


function App() {
   const [note,setnote] =useState({
     selectedNote: null,
     selectedNoteindex:null,
     notes:null,
   })

   const {everyNotes} = useFirestore('notes');
   const {selectedNote} = note;

   useEffect(() => {
     setnote({...note, notes:everyNotes})
   }, [everyNotes])
   console.log(everyNotes)

   
  return (
    

    <div className="App">
      <Sidebar everyNotes={everyNotes} note={note} setnote={setnote}/>
     { selectedNote&& <Markdown note={note} setnote={setnote} />}
    </div>
    
     
     );

}

export default App;
