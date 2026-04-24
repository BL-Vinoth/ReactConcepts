import Note from "./Components/Note";
import "./App.css";
function App({notes}){
  const addNote = (event) => {
    event.preventDefault() ;
    console.log("button Clicked" , event.target);
  }
  return(
    <div className="content">
      <h3>Notes</h3>
      <ul>
        {
          notes.map(note => 
            <Note key={note.id} note = {note}/>
          )
        }
      </ul>
      <form onSubmit={addNote}>
        <input/>
        <button type="submit"> Save Note</button>
      </form>

    </div>
  )
}

export default App ;