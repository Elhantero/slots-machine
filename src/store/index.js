import {configureStore} from "@reduxjs/toolkit";
import slotDataReducer from "../slices/slotDataSlice";

export const store = configureStore({
    reducer: {
        slotData: slotDataReducer,
    },
});

