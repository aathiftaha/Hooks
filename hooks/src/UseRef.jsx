import { useRef } from "react";

const UseRefHook = () => {
  const ref = useRef(0);
  const inputRef = useRef();
  const handleRefClick = () => {
    console.log("Button clicked");
    ref.current++;
    console.log("ref", ref.current);
  };
  const focusInput = () => {
    inputRef.current.focus();
  };

  //     What is useRef?
  // useRef is a React Hook used to:
  // Store a value without causing re-renders.
  // Access DOM elements directly.
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleRefClick}>Click useRef</button>
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default UseRefHook;
