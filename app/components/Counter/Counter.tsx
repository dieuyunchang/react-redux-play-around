'use client'

/* Core */
import { useState } from 'react'
import { useFetchBreadsQuery } from '../../features/dogs/dogsApiSlice'
/* Instruments */
import {
  counterSlice,
  useSelector,
  useDispatch,
  selectCount,
  incrementAsync,
  incrementIfOddAsync,
  calculatorSlice,
  selectTime
} from '@/lib/redux'
import styles from './counter.module.css'

export const Counter = () => {
  const dispatch = useDispatch()
  const count = useSelector(selectCount)
  const time = useSelector(selectTime)
  const [incrementAmount, setIncrementAmount] = useState(2)

  const [numDogs, setNumDogs] = useState(10)
  const {data = [], isFetching} = useFetchBreadsQuery(numDogs);
  console.log("data", data)
  return (
    <div>
      <div className={styles.row}>
        <div>Numer of dogs: {data.length}</div>
        <div>
          <select value={numDogs} onChange={(e) => setNumDogs(Number(e.target.value))}>
            <option>10</option>
            <option>20</option>
          </select>
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>bred_for</th>
            </tr>
          </thead>
          <tbody>
            {
              data && data.map ((breed) => (
                <tr key={breed.id}>
                  <td>{breed.name}</td>
                  {/* <td><img src={breed.image.url} height={150} /></td> */}
                  <td>{breed.bred_for}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

      <div className={styles.row}>
        <span> {time} </span>
        <button
          className={styles.button}
          aria-label="Multiply the value by 10"
          onClick={() => dispatch(calculatorSlice.actions.time10())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(counterSlice.actions.decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(counterSlice.actions.increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value ?? 0))}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(counterSlice.actions.incrementByAmount(incrementAmount))
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementAmount))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOddAsync(incrementAmount))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  )
}
