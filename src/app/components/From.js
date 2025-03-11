"use client";
import React from "react";

const From = () => {
  const [value, setValue] = useState(100);
  const [state, setState] = useState(false);

  return (
    <>
      <input type="text" onChange={(e) => setValue(Number(e.target.value))} />
      <button onClick={() => setState(!state)}>text</button>
    </>
  );
};

export default From;
