import React, { useState }from 'react';
import notes from './assets/notes.js';
import './App.scss';

const NoteButton =(props) =>{
  return(
    <button 
    className="note-button"
    style={{ height: (200 -(15 * props.index)) + 'px' }}
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
        {notes.map((note,index) =>(
        <NoteButton 
        playedNotes={playedNotes}
        setPlayedNotes={setPlayedNotes}
        key={note.name}
        note={note} 
        />
        ))}
      </div>
      {JSON.stringify(playedNotes)}
      <button onClick={()=> playedNotes.map(note => new Audio(note.file).play())}>Replay</button>
      <button onClick={() => setPlayedNotes([])}>Clear</button>
  
      {/* <button>Clear</button> */}
    </div>
  );
}

export default App;
