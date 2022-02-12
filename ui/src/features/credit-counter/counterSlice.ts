import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export const ERROR_INDICATOR = "with-error";

export interface CounterState {
  sessionId: string;
  status: "idle" | "loading" | "failed";
  bankCount: number;
  playerCount: number;
  playerCountErrorMessage: string;
  slotValues: SlotValue[];
}

type AccountChangeArgs = {
  playerCount: number;
};

// cherry, lemon, orange, watermelon
export type SlotValue = "?" | "c" | "l" | "o" | "w";

const initialState: CounterState = {
  sessionId: "",
  status: "idle",
  bankCount: 0,
  playerCount: 0,
  playerCountErrorMessage: "",
  slotValues: ["w", "w", "w"],
};

// TODO: use PROD env variable
export const getNewSession = createAsyncThunk(
  "counter/getNewSession",
  async () => {
    try {
      const response = await fetch("http://localhost:8080/session").then(
        (result) => result.json()
      );

      return response;
    } catch (error) {
      return { sessionId: ERROR_INDICATOR };
    }
  }
);

export const patchRollRequest = createAsyncThunk(
  "counter/patchRollRequest",
  async (args: AccountChangeArgs, thunkApi) => {
    try {
      const { playerCount } = args;
      const rawResponse = await fetch("http://localhost:8080/rolls", {
        body: JSON.stringify({ playerCount }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "PATCH",
      });
      const parsedResponse = await rawResponse.json();
      const slotValues = parsedResponse?.slotValues;

      if (
        slotValues &&
        slotValues !== ERROR_INDICATOR &&
        Array.isArray(slotValues) &&
        slotValues.length === 3
      ) {
        setTimeout(
          () =>
            thunkApi.dispatch(
              updateSingleSlotValue({
                slotValueIndex: 0,
                updatedSlotValue: slotValues[0],
              })
            ),
          1000
        );
        setTimeout(
          () =>
            thunkApi.dispatch(
              updateSingleSlotValue({
                slotValueIndex: 1,
                updatedSlotValue: slotValues[1],
              })
            ),
          2000
        );
        setTimeout(
          () =>
            thunkApi.dispatch(
              updateSingleSlotValue({
                slotValueIndex: 2,
                updatedSlotValue: slotValues[2],
              })
            ),
          3000
        );
      } else {
        if (parsedResponse.error) {
          return parsedResponse;
        } else {
          throw new Error("Unknown error in patchRollRequest");
        }
      }

      return parsedResponse;
    } catch (error) {
      return { error, slotValues: ERROR_INDICATOR };
    }
  }
);

export const putBankBalance = createAsyncThunk(
  "counter/putBankBalance",
  async (args: AccountChangeArgs) => {
    try {
      const { playerCount } = args;
      const response = await fetch("http://localhost:8080/bank", {
        body: JSON.stringify({ playerCount }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
      }).then((result) => result.json());

      return response;
    } catch (error) {
      return { sessionId: ERROR_INDICATOR };
    }
  }
);

export const updateSingleSlotValue = createAsyncThunk(
  "counter/updateSingleSlotValue",
  async (args: any) => args
);

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // ref: https://soyoung210.github.io/redux-toolkit/api/createAsyncThunk
    builder
      .addCase(getNewSession.fulfilled, (state, action: PayloadAction<any>) => {
        if (
          action?.payload?.sessionId &&
          action?.payload?.sessionId !== ERROR_INDICATOR
        ) {
          state.bankCount = action.payload.bankCount;
          state.playerCount = action.payload.playerCount;
          state.sessionId = action.payload.sessionId;
        }
      })
      .addCase(patchRollRequest.pending, (state) => {
        state.slotValues = ["?", "?", "?"];
      })
      .addCase(
        patchRollRequest.fulfilled,
        (state, action: PayloadAction<any>) => {
          if (action.payload?.error?.description) {
            state.playerCountErrorMessage = action.payload.error.description;
          } else if (action.payload?.slotValues === ERROR_INDICATOR) {
            alert("Unknown error when attempting to play a game of slots.");
          } else {
            state.playerCount = action.payload.playerCount;
          }
        }
      )
      .addCase(
        putBankBalance.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.bankCount = action.payload.bankCount;
          state.playerCount = action.payload.playerCount;
        }
      )
      .addCase(
        updateSingleSlotValue.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.slotValues[action.payload.slotValueIndex] =
            action.payload.updatedSlotValue;
        }
      );
  },
});

export const {} = counterSlice.actions;

export const selectBankCount = (state: RootState) => state.counter.bankCount;
export const selectPlayerCount = (state: RootState) =>
  state.counter.playerCount;
export const selectPlayerCountErrorMessage = (state: RootState) =>
  state.counter.playerCountErrorMessage;
export const selectRolls = (state: RootState) => state.counter.slotValues;
export const selectSessionId = (state: RootState) => state.counter.sessionId;

export default counterSlice.reducer;
