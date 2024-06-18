import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ChatState {
  messages: string[];
  loading: boolean;
  error: string | null;
}

const initialState: ChatState = {
  messages: [],
  loading: false,
  error: null,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    // Action to handle sending a message (you might use it to update UI optimistically)
    sendMessage: (state, action: PayloadAction<string>) => {
      state.messages.push(action.payload);
    },
    // Action to handle a successful message fetch response
    fetchMessageSuccess: (state, action: PayloadAction<string>) => {
      state.messages.push(action.payload);
      state.error = null; // Reset error state on success
    },
    // Action to handle errors in message fetching
    fetchMessageFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

// Export actions for use in components
export const { sendMessage, fetchMessageSuccess, fetchMessageFailure } = chatSlice.actions;

// Default export the reducer
export default chatSlice.reducer;
