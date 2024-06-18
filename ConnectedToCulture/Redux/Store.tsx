// import { configureStore } from "@reduxjs/toolkit";
// import { plansReducer } from "./Reducers";
//
// export const store = configureStore({
//   reducer: {
//     plans: plansReducer
//   },middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// });
//
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import { plansReducer } from "./Reducers";
import chatReducer from "./chatSlice";  // Assuming this is the path to your chatReducer

export const store = configureStore({
  reducer: {
    plans: plansReducer,
    chat: chatReducer  // Add the chat reducer here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

