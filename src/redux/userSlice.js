import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    removeUser: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      state.splice(index, 1);
    },
  },
});

export const { reducer, actions } = user;
export const { addUser, removeUser } = actions;
export default reducer;
