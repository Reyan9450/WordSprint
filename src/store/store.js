import { configureStore } from "@reduxjs/toolkit";
import { typingSlice } from "./slice";

export const store = configureStore({

    reducer: {
        typing: typingSlice.reducer,
    },

});
console.log("Initial state:", store.getState());

// Subscribe to changes (optional)
store.subscribe(() => {
    console.log("Updated state:", store.getState());
});

