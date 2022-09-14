import { configureStore } from '@reduxjs/toolkit';
import journalEntriesReducer from '../features/journalEntriesSlice';

export const store = configureStore({
  reducer: {
    journalEntries: journalEntriesReducer,
  },
});
