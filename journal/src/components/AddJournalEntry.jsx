import * as React from 'react';
import { useDispatch } from "react-redux";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { addJournalEntry } from "./../features/journalEntriesSlice";

export default function AddJournalEntry() {
  const [journalEntryInput, setJournalEntryInput] = React.useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setJournalEntryInput(e.target.value);
  }

  const handleAddEntry = (e) => {
    if (!journalEntryInput) return;
    dispatch(addJournalEntry(journalEntryInput));
    setJournalEntryInput("");
  }

  return (
    <form>
      <Box
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-multiline-flexible"
            label="Multiline"
            fullWidth
            multiline
            maxRows={1000}
            value={journalEntryInput}
            onChange={handleChange}
          />
        </div>
      </Box>
      <Button variant="contained" type="submit" onClick={handleAddEntry}>Add Entry</Button>
    </form>
  );
}