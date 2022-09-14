import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: []
}

export const journalEntriesSlice = createSlice({
  name: "journalEntries",
  initialState,
  reducers: {
    addJournalEntries: (state, action) => {
      state.value.push(action.payload);
    }
  }
});

export const { addJournalEntries } = journalEntriesSlice.actions

export default journalEntriesSlice.reducer;