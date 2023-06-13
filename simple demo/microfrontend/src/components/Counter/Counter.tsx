import React from "react";
import type { RootState } from "../../store";
import { useSelector, useDispatch } from "container/react-redux";
import {
  decrement,
  increment,
} from "../../store/features/counter/counterSlice";
import Button from "container/@mui/material";
import { useStore } from "../../hooks";

export default function Counter() {
const {counter,increment,decrement}=useStore()
  return (
    <div>
      <div>
        <div>
          <button
          className="bg-indigo-800 text-white font-bold py-2 px-4 rounded"

            aria-label="Increment value"
            onClick={increment}
          >
            Increment
          </button>
        </div>
        <span>{counter}</span>
        <div>
          <button
          className="bg-indigo-800 text-white font-bold py-2 px-4 rounded"

            aria-label="Decrement value"
            onClick={decrement}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}
