import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import RandomGreetingApi from './greetingAPI';

const initialState = {
  value: '',
  status: 'idle',
};

export const fetchGreeting = createAsyncThunk(
  'greeting/fetchGreeting',
  async () => {
    return await RandomGreetingApi.fetchGreeting();
  }
);

export const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => {
        state.value = 'Loading Greeting';
      })
      .addCase(fetchGreeting.fulfilled, (state, action) => {
        state.value = action.payload;
      });
  },
});

export const selectGreeting = (state) => state.greeting.value;

export default greetingSlice.reducer;
