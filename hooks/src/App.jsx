import { lazy, Suspense, useCallback, useState } from "react";
import UseStateHook from "./UseState";
import UseEffect from "./UseEffect";
import UseRefHook from "./UseRef";
import UseMemo from "./UseMemo";
import { Parent } from "./Memo";
import UseCallback from "./useCallback";
import UseReducer from "./UseReducer";
import "./App.css";
function App() {
  const AllMemo = lazy(() => import("./useMemo-useCallback-memo"));
  const [count, setCount] = useState(0);
  console.log(
    "useState is a React Hook that allows a functional component to store and update data (state).",
  );
  console.log(
    "useEffect is a React Hook used to perform side effects in a component. \n API Calls,Timers(setTimeout,setInterval, )",
  );
  console.log(
    "useRef stores mutable values across renders and allows direct DOM access without causing component re-renders.\n useRef is a React Hook that lets you reference a value that’s not needed for rendering.",
  );
  console.log(
    "useMemo is a React Hook that lets you cache the result of a calculation between re-renders.\n useMemo remembers a calculated value and recalculates it only when its dependencies change.\n useMemo supports Empty[] and dependency array[count]\n const cachedValue = useMemo(calculateValue, dependencies)",
  );
  console.log(
    "useCallback is a React Hook that lets you cache a function definition between re-renders.\nuseCallback remembers a function and recreates it only when its dependencies change.\n useCallback supports Empty[] and dependency array\nconst cachedFn = useCallback(fn, dependencies)",
  );
  console.log(
    "useContext is used to share data between components without passing props manually through every level. \n This problem is called Prop Drilling. CreateContext -> ProvideContext -> ConsumeContext",
  );
  console.log(
    "useReducer is used to manage complex state logic using actions and a reducer function.",
  );
  // callback function
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="app-container">
      <h1 className="title">⚛️ React Hooks Playground</h1>

      <div className="counter-box">
        <h2>Count: {count}</h2>
      </div>

      <div className="hook-box">
        <h2>useState Hook</h2>
        <p>
          Stores and updates state. State updates trigger component re-renders.
        </p>
        <UseStateHook increment={handleIncrement} decrement={handleDecrement} />
      </div>

      <div className="hook-box">
        <h2>useEffect Hook</h2>
        <p>
          Handles side effects like API calls, timers, subscriptions, and event
          listeners.
        </p>
        <UseEffect />
      </div>

      <div className="hook-box">
        <h2>useRef Hook</h2>
        <p>
          Stores mutable values and accesses DOM elements without causing
          re-renders.
        </p>
        <UseRefHook />
      </div>

      <div className="hook-box">
        <h2>useMemo Hook</h2>
        <p>
          Memoizes expensive calculations and recalculates only when
          dependencies change.
        </p>
        <UseMemo />
      </div>

      <div className="hook-box">
        <h2>useCallback Hook</h2>
        <p>
          Memoizes functions and prevents unnecessary child component
          re-renders.
        </p>
        <UseCallback />
      </div>

      <div className="hook-box">
        <h2>React.memo</h2>
        <p>
          Prevents unnecessary component re-renders when props remain unchanged.
        </p>
        <Parent />
      </div>
      <div className="hook-box">
        <h2>UseReducer</h2>
        <p>
          Prevents unnecessary component re-renders when props remain unchanged.
        </p>
        <UseReducer />

        <Suspense fallback={"Loading.."}>
          <AllMemo />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
