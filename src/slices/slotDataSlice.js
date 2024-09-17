import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import getInitData from "../api/getInitData";
import getRollData from "../api/getRollData";

export const fetchInitData = createAsyncThunk(
    'slotData/fetchInitData',
    async (_, {rejectWithValue}) => {
        try {
            return await getInitData();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

export const fetchRollData = createAsyncThunk(
    'slotData/fetchRollData',
    async (params, {rejectWithValue}) => {
        try {
            return await getRollData(params);
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

const slotDataSlice = createSlice({
    name: 'slotData',
    initialState: {
        slotMachine: {
            drumSymbols: [],
            initSymbolsIdxs: [],
            drumWheelingStatuses: [],
        },
        user: {
            uid: 0,
            balance: 0,
            last_bet: 0,
            win: 0,
            rolls: [],
        }
    },
    reducers: {
        changeDrumWheelingStatusByIdx: (state, action) => {
            const { drumIdx, status = false } = action.payload;
            const newState = [...state.slotMachine.drumWheelingStatuses];
            newState[drumIdx] = status;
            state.slotMachine.drumWheelingStatuses = newState;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchInitData.fulfilled, (state, action) => {
                const { slotMachine, user } = action.payload;
                state.slotMachine = { ...state.slotMachine, ...slotMachine};
                state.user = user;
            })
            .addCase(fetchRollData.fulfilled, (state, action) => {
                const { slotMachine, user } = action.payload;
                state.slotMachine = {
                    ...state.slotMachine,
                    ...slotMachine,
                    drumWheelingStatuses: slotMachine.initSymbolsIdxs.map(() => true),
                };
                state.user = { ...state.user, ...user};
            })
    },
});

export const {
    changeDrumWheelingStatusByIdx,
} = slotDataSlice.actions;

export default slotDataSlice.reducer;
