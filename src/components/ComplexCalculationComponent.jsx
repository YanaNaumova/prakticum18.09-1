import React, { useState, useMemo, useCallback } from "react";

const ComplexCalculationComponent = React.memo(({ number }) => {
  console.log("render");

  const performComplexCalculation = (num) => {
    console.log("Performing complex calculation...");
    let result = 0;
    for (let i = 0; i < 1000; i++) {
      result += num;
    }
    return result;
  };

  const memoizedResult = useMemo(() => {
    return performComplexCalculation(number);
  }, [number]);

  return <div>Result: {memoizedResult}</div>;
});

const ParentComplexCalculationComponent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <ComplexCalculationComponent number={count} />
      <button onClick={handleIncrement}>Increment count</button>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <p>{text}</p>
    </div>
  );
};

export default ParentComplexCalculationComponent;
