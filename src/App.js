import React, { useState }from 'react';
import notes from './assets/notes.js';
import './App.scss';

const NoteButton =(props) =>{
  return(
    <button 
    className="note-button"
    onClick={()=> {
      props.setPlayedNotes([...props.playedNotes, props.note]);
      console.log(props.playedNotes);
      new Audio(props.note.file).play()
    }}>
      {props.note.name}
    </button>
  );
};

function App() {
  const [playedNotes, setPlayedNotes] = useState([]);
  return (
    <div className="page">
      <h1>Create your react xylophone</h1>
      <div className="xylophone">
        {/* I am placeholder buttons, please create me using a map, and with your own component */}
        
        {notes.map(note => (
        <NoteButton 
        playedNotes={playedNotes}
        setPlayedNotes={setPlayedNotes}
        key={note.name}
        note={note} 
        />
        ))}
      </div>
      {/* <button>Replay</button> */}
      {/* <button>Clear</button> */}
    </div>
  );
}

export default App;
