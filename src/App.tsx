import React from 'react';
import TextField from './components/TextField'
import NoteForm from './components/NoteForm';


function f() {
  return;
}
function App() {
  return (
      <div>
        <NoteForm
          isImportant={true}
          onContentChange={f}
          onTitleChange={f}
          onImportanceChange={f}
          onSubmit={f}
        />
      </div>
  );
}

export default App;
