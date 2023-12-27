import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import HomeBody from "./components/HomeBody";
import { useNavigate } from "react-router-dom";

export default function Homepage(){
    const [notes, setNotes] = React.useState([]);
    function addNote(note){
        setNotes(prevNotes => {
            return [...prevNotes, note];
          });
    }
    function deleteNote(id) {
        setNotes(prevNotes => {
          return prevNotes.filter((noteItem, index) => {
            return index !== id;
          });
        });
      }
    return (<div ><Header login="Login" signUp = "Sign Up"/> <HomeBody />
    <Footer /></div>);
}
