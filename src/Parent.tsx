import React from "react";
import { Child, MyState } from "./Child";

export function Parent() {
  const myRef = React.useRef<MyState>(null);
  console.log(`state in parent via myRef`, myRef);

  return (
    <div>
      <Child ref={myRef} />
    </div>
  );
}
