import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: ["Dosa", "Pav-Bhaji"],
    },

        reducers: {
            addItems: (state, action) => {
                state.items.push(action.payload);
            },
            removeItems: (state, action) => {
                state.items.pop();
            },
            clearCart: (state) => {
                state.items = [];
            },
        },
});

export default cartSlice.reducer;