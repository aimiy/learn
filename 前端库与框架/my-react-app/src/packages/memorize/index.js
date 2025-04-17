import React, { useState, useMemo, useEffect } from 'react';

// 创建一个昂贵的计算函数
const expensiveCalculation = (num) => {
  const startTime = performance.now();
  for (let i = 0; i < 1000000000; i++) {
    num += i;
  }
  const endTime = performance.now();
  return { result: num, time: endTime - startTime };
};

function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(42);

  // 使用 useMemo 缓存计算结果
  const { result: memoizedResult, time: memoizedTime } = useMemo(() => expensiveCalculation(num), [num]);

  // 不使用缓存的计算
  const { result: nonMemoizedResult, time: nonMemoizedTime } = expensiveCalculation(num);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Memoization Example</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
        <p>Num: {num}</p>
        <button onClick={() => setNum(num + 1)}>Increment Num</button>

        <h2>With Memoization</h2>
        <div>
          <p>Result: {memoizedResult}</p>
          <p>Time with Memoization: {memoizedTime.toFixed(2)} ms</p>
        </div>

        <h2>Without Memoization</h2>
        <div>
          <p>Result: {nonMemoizedResult}</p>
          <p>Time without Memoization: {nonMemoizedTime.toFixed(2)} ms</p>
        </div>
      </header>
    </div>
  );
}

export default App;