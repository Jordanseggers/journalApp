import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function AddJournalEntry() {
  const [value, setValue] = React.useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    console.log('the entry has been added');
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
            value={value}
            onChange={handleChange}
          />
        </div>
      </Box>
      <Button variant="contained" type="submit" onClick={handleSubmit}>Add Entry</Button>
    </form>
  );
}