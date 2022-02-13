import counterReducer, { CreditCounterState } from "./creditCounterSlice";

describe("counter reducer", () => {
  const initialState: CreditCounterState = {
    bingBongMode: false,
    leverPullAudioUrl: "",
    sessionId: "",
    status: "idle",
    bankCount: 0,
    playerCount: 3,
    playerCountErrorMessage: "",
    slotValues: [],
  };
  it("should handle initial state", () => {
    expect(counterReducer(undefined, { type: "unknown" })).toEqual({
      value: 0,
      status: "idle",
    });
  });
});
