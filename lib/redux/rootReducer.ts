/* Instruments */
import { counterSlice } from './slices'
import calculatorReducer from '../../app/features/calculator/calculatorSlice'

import { apiDogsSlice } from '../../app/features/dogs/dogsApiSlice'

export const reducer = {
  counter: counterSlice.reducer,
  calculator: calculatorReducer,
  [apiDogsSlice.reducerPath]: apiDogsSlice.reducer
}
