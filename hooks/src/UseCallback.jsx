import { useState, useCallback } from "react";

const SalaryCalculator = () => {
  const [salary, setSalary] = useState(30000);
  const [bonus, setBonus] = useState(5000);

  const calculateSalary = useCallback(() => {
    console.log("Function created/executed");
    return salary + bonus;
  }, [salary, bonus]);

  return (
    <div>
      <h2>Salary: ₹{salary}</h2>
      <h2>Bonus: ₹{bonus}</h2>

      <h2>Total: ₹{calculateSalary()}</h2>

      <button onClick={() => setSalary(salary + 1000)}>Increase Salary</button>

      <button onClick={() => setBonus(bonus + 500)}>Increase Bonus</button>
    </div>
  );
};

export default SalaryCalculator;
/*

### What is happening?
useCallback memoizes a function and keeps the same function reference between re-renders. If any value in its dependency array changes, React creates a new function reference using the latest dependency values.
Normally, you could write:

```js
const increment = () => {
  setCount((prevCount) => prevCount + 1);
};
```

When the component re-renders, `increment` is **created again with a new function reference**.

With `useCallback`:

```js
const increment = useCallback(() => {
  setCount((prevCount) => prevCount + 1);
}, []);
```

React keeps the **same function reference** between renders because the dependency array is empty.

### Interview answer

> **`useCallback` is a React hook used to memoize a function. It keeps the same function reference between re-renders and creates a new function only when its dependencies change.**

Syntax:

```js
const memoizedFunction = useCallback(() => {
  // function logic
}, [dependencies]);
```

One caveat: in this tiny counter, `useCallback` doesn't provide a meaningful performance benefit by itself. It's a clean way to understand the syntax; its practical value appears when a stable function reference is actually needed.
*/
