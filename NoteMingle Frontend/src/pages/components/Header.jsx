import React from "react";
import { useNavigate } from "react-router-dom";
import HighlightIcon from "@material-ui/icons/Highlight";
function Header(props) {
    const nav = useNavigate()
  return (
    <header>
      <h1>
        <HighlightIcon />
        NoteMingle{" "}
        <div>
          <button onClick={()=>{
            nav("/register")
          }}>{props.signUp}</button>
          <button onClick={()=>{
            nav("/login")
          }}>{props.login}</button>
          <button onClick={()=>{
            nav("/login")
          }} >{props.logOut}</button>
        </div>
      </h1>
    </header>
  );
}

export default Header;
