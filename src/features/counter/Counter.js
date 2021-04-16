import React, { useState } from "react";
import {
  increment,
  decrement,
  incrementByAmount,
  incrementByAmountAsync,
  selectCount,
} from "./counterSlice";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Counter.module.css";

function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementValue, setIncrementValue] = useState("2");

  return (
    <div>
      <div className={styles.row}>
        <input
          value={incrementValue}
          className={styles.textbox}
          onChange={(e) => setIncrementValue(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementValue) || 0))
          }
          className={styles.button}
        >
          Add Amount
        </button>
        <button onClick={() => dispatch(increment())} className={styles.button}>
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button onClick={() => dispatch(decrement())} className={styles.button}>
          -
        </button>
        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmountAsync(Number(incrementValue) || 0))
          }
        >
          Add Async
        </button>
      </div>
    </div>
  );
}

export default Counter;
