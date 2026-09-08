import { useEffect, useState } from "react";
const UseEffect = () => {
  const [add, setAdd] = useState(2);
  useEffect(() => {
    console.log(
      "I have Empty dependency array i will be called only once onMount \n Runs when API Call once,Initilize Libraries,Load user Prodile ",
    );
  }, []);
  useEffect(() => {
    console.log(
      "I will be called on Every Render \n Runs when state change,props change,initial Render",
    );
  });
  useEffect(() => {
    console.log("I will be called when the dependency array changes");
  }, [add]);

  //   we should make useEffect async answer is No we cannot make async 
//   useEffect(async () => {}, []);

  //we use like this below is the code
  //   useEffect(() => {
  //     async function fetchData() {
  //       const data = await fetch(url);
  //     }

  //     fetchData();
  //   }, []);
  return (
    <div>
      <h2>UseEffect : {add}</h2>
      <button onClick={() => setAdd(add + 2)}>Add Two</button>
    </div>
  );
};

export default UseEffect;
