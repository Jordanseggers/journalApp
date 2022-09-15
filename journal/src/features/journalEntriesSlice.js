import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: []
}

export const journalEntriesSlice = createSlice({
  name: "journalEntries",
  initialState,
  reducers: {
    addJournalEntry: (state, action) => {
      state.value.push(action.payload);
    },
  }
});

export const { addJournalEntry } = journalEntriesSlice.actions

export default journalEntriesSlice.reducer;