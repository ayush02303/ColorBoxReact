import { useState } from "react";

export default function Sample() {
  const [num, setNum] = useState(0);
  const changeval = () => setNum(num + 5);

  return (
    <div>
      <h1>Hii There!</h1>
      <p>The counter value is : {num}</p>
      <button onClick={changeval}>Click Here! to change</button>
    </div>
  );
}
