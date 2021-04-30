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
            <div className="sidebar-head">
            <span><svg className="sidebar-svg" viewBox="0 0 24 24"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75s-.75-.34-.75-.75s.34-.75.75-.75zM8.9 17H7.5c-.28 0-.5-.22-.5-.5v-1.43c0-.13.05-.26.15-.35l5.81-5.81l2.12 2.12l-5.83 5.83a.5.5 0 0 1-.35.14zm7.95-7.73l-1.06 1.06l-2.12-2.12l1.06-1.06c.2-.2.51-.2.71 0l1.41 1.41c.2.2.2.51 0 .71z" ></path></svg></span>
              <span className="head-text">MarkNote</span>
            </div>
             
            <div className="profile">
                <span><svg className="profile-svg" width="3rem" height="3rem" viewBox="0 0 24 24"><g fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0zm-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1zM3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0 1 12.065 14a8.984 8.984 0 0 1 7.092 3.458A9 9 0 1 0 3 12zm9 9a8.963 8.963 0 0 1-5.672-2.012A6.992 6.992 0 0 1 12.065 16a6.991 6.991 0 0 1 5.689 2.92A8.964 8.964 0 0 1 12 21z" fill="currentColor"></path></g></svg></span>
                <span className="profile-text">Bud Wiser</span>

            </div>
          
        <button className="newbtn" onClick = { CreateNewNote } > { addingnote ? "cancel" : "New note" } </button> 
        {
            addingnote && ( 
                <div className="newnote">
                <form onSubmit = { addNewNote } >
                <input className="new-input" type = 'text'
                placeholder = "Enter Title"
                onChange = { updateTitle }
                /> 
                <button disabled={!title} className="newbtn" type = "submit" > submit </button> 
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