import { createSlice } from '@reduxjs/toolkit';
import {
  getContactsThunk,
  deleteContactThunk,
  addContactThunk,
} from './asyncThunk';

const contactsInitialState = { items: [], error: null, isLoading: false };

const contactSlice = createSlice({
  name: 'phone',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(getContactsThunk.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.error = null;
        state.items = actions.payload;
      })
      .addCase(getContactsThunk.rejected, (state, actions) => {
        state.isLoading = false;
        state.error = actions.payload;
      })
      .addCase(deleteContactThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContactThunk.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(item => item.id !== actions.payload);
      })
      .addCase(deleteContactThunk.rejected, (state, actions) => {
        state.isLoading = false;
        state.error = actions.payload;
      })
      .addCase(addContactThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContactThunk.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.error = null;
        state.items = [actions.payload, ...state.items];
      })
      .addCase(addContactThunk.rejected, (state, actions) => {
        state.isLoading = false;
        state.error = actions.payload;
      });
  },
});

export const contactReducer = contactSlice.reducer;
export const { addContact, deleteContact } = contactSlice.actions;
