import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import AddJournalEntry from './components/AddJournalEntry';
import JournalEntry from './components/JournalEntry';

function App() {

  const journalEntries = useSelector((state) => state.journalEntries.value)

  return (
    <>
    <p>Hey Jordan</p>
    <AddJournalEntry></AddJournalEntry>
    <div className="journalEntriesContainer">
      {journalEntries.map((entry, idx) => {
        return <JournalEntry entry={entry} key={idx} />
      })}
    </div>
    </>
  );
}

export default App;
