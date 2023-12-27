import React from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
function CreateArea(props) {
    const [isExpanded, setExpanded] = React.useState(false);
    const [note, setNote] = React.useState({
        title:"",
        content:""
    });
    function handleChange(event){
        const {name, value} = event.target;

        setNote((previousValue)=>{
            return {
                ...previousValue,
                [name]:value
            }
        })
    }
    function submitNote(event){
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
          });
        event.preventDefault();
    }
    function expand() {
        setExpanded(true);
      }

  return (
    <div> 
      <form className="create-note">
        {isExpanded && <input name="title" placeholder="Title" onChange={handleChange} value = {note.title}/>}
        <textarea onClick={expand} name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} onChange={handleChange} value = {note.content}/>
        <Zoom in={isExpanded}><Fab onClick={submitNote}><AddIcon /></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
