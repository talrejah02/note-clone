import React, { useState } from 'react'
import { projectFirestore  } from '../firebase/config';
// import useFirestore from '../hooks/useFirestore';
import firebase from 'firebase/app'
import SidebarItems from '../SidebarItems/SidebarItems'

function Sidebar(props) {
    const [newNote, setnewNote] = useState({
        addingnote: false,
        title: null,
    })
    const { addingnote, title } = newNote;
    
    const {everyNotes,note,setnote} = props
    
    
    // const {everyNotes} = useFirestore('notes');
    
    function CreateNewNote() {
        setnewNote({...newNote, addingnote: !addingnote })
        
    }

    function addNewNote(e) {
        e.preventDefault()
        projectFirestore
        .collection(`/notes`)
        .add({
          title: title,
          body: "",
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setnewNote({...newNote, addingnote: false, title: null })
        setnote({
            ...note,
            selectedNoteIndex: 0,
            selectedNote: null,
        })
    }

    function updateTitle(e) {
        setnewNote({...newNote, title: e.target.value })
    }

    function selectNote(Snote,Sindex) {
        setnote({...note , selectedNote: Snote, selectedNoteindex: Sindex})
        
    }

    function deleteNote(dnote,dindex) {
        projectFirestore
        .collection(`notes`)
        .doc(dnote.id)
        .delete();

    }
    return ( 
        <div className = "Sidebar" >
        <button onClick = { CreateNewNote } > { addingnote ? "cancel" : "New note" } </button> 
        {
            addingnote && ( 
                <div>
                <form onSubmit = { addNewNote } >
                <input type = 'text'
                placeholder = "Enter Title"
                onChange = { updateTitle }
                /> 
                <button type = "submit" > submit </button> 
                </form> 
                </div>
            )
        } 
        <div className = "list_parent" >
        <ul className="list">

             {everyNotes.map((_note, _index) => {
                 return (
                     
                    //  <li className = "list"
                    //  key = { _index } >
                    <SidebarItems _note = { _note }
                    _index = { _index }
                    selectedNoteindex = { note.selectedNoteindex }
                    selectNote = { selectNote }
                    deleteNote = { deleteNote }
                    key = { _index }
                    keyvalue={_index}
                    /> 
                // </li>
                );
                
               })
              }

        </ul>
        </div> 
    </div>
    )

}

export default Sidebar;