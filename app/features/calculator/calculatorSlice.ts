import { reducer } from "@/lib/redux/rootReducer";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CalculatorState {
  value: number;
}

const initialState: CalculatorState = {
  value: 11,
}

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    // time with 10
    time10(state) { state.value *= 10 }
  }
});


export const { time10 } = calculatorSlice.actions;
export default calculatorSlice.reducer;

