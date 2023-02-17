import "./App.css";
import AddNotes from "./components/AddNotes";
import NotesList from "./components/NotesList";

const App = () => {
  return (
    <div className="App">
      <AddNotes />
      <NotesList />
    </div>
  );
};

export default App;
