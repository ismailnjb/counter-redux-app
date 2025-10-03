import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from './store';
import { increment, decrement } from './counterSlice';
import { toggleTheme } from './themeSlice';

export default function App() {
  const value = useSelector((s: RootState) => s.counter.value);
  const theme = useSelector((s: RootState) => s.theme.mode);
  const dispatch = useDispatch();

  return (
    <div style={{
      padding: 30,
      background: theme === 'light' ? '#f9f9f9' : '#222',
      color: theme === 'light' ? '#000' : '#fff',
      minHeight: '100vh'
    }}>
      <h1>Counter: {value}</h1>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>

      <h2>Theme: {theme}</h2>
      <button onClick={() => dispatch(toggleTheme())}>
        Toggle Theme
      </button>
    </div>
  );
}
