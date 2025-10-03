import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from './store';
import { increment, decrement } from './counterSlice';

export default function App() {
  const value = useSelector((s: RootState) => (s as any).counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: 30 }}>
      <h1>Counter: {value}</h1>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
    </div>
  );
}
