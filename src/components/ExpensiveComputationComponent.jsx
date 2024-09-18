import { useMemo, useState } from "react";
function ExpensiveComputationComponent() {
  const [number, setNumber] = useState(0);
  const [increment, setIncrement] = useState(0);

  function expensiveComputation(num) {
    return num * 2;
  }
  const computedValue = useMemo(() => {
    return expensiveComputation(number);
  }, [number]);
  return (
    <>
      <h1>{computedValue}</h1>
      <div>
        <button
          onClick={() => {
            setNumber(number + 1);
          }}
        >
          Increase Number {number}
        </button>
        <button
          onClick={() => {
            setIncrement(increment + 1);
          }}
        >
          Increase Increment {increment}
        </button>
      </div>
    </>
  );
}

export default ExpensiveComputationComponent;
