import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: { contactList: [] },
  reducers: {
    addContact(state, action) {
      state.contactList.push(action.payload);
    },
    deleteContact(state, action) {
      state.contactList = state.contactList.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;

export const contactReducer = contactSlice.reducer; //Цей рядок export const userReducer = userSlice.reducer; використовується для експорту редуктора, який був створений за допомогою функції createSlice з бібліотеки @reduxjs/toolkit
