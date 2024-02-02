import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import { createNotes, getNotes } from "../Redux/notes/note.actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { deleteNotes } from "../Redux/notes/note.actions";
import { useNavigate } from "react-router-dom";
function NotePage(){
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.noteReducer);
  console.log(data);

    const [notes, setNotes] = React.useState([]);

    const initialRef = useRef(null)
    const finalRef = useRef(null)

    useEffect(() => {
      dispatch(getNotes());
    }, []);
  
    useEffect(() => {
      setNotes(data);
    }, [data]);

    function createNNote(note){
    const title = note.title;
    const body = note.content;
    const createNote =()=>{
      dispatch(createNotes({title,body}))
    }
    createNote();
  }


    function deleteNote(id,id2) {
      dispatch(deleteNotes(id2));
        setNotes(prevNotes => {
          return prevNotes.filter((noteItem, index) => {
            return index !== id;
          });
        });
      }

    
      

    return (<div><Header logOut="Log Out" /> <CreateArea onAdd = {createNNote}/>
    {notes.map((note,index) => <Note key = {index} id = {index} _id= {note._id} title = {note.title} content = {note.body} onDelete={deleteNote} />)}
    <Footer /></div>);
}


export default NotePage;
