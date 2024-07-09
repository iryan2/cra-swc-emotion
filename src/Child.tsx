import React, { forwardRef, Ref } from "react";
import { useState } from "react";

export type MyState = string;

export const Child = forwardRef<MyState>((props, ref: Ref<MyState>) => {
  const [state, setState] = useState<MyState>("initial");

  if (state === "initial") {
    setState("updated");
  }
  if (ref !== null && ref.current !== null) {
    ref.current.state = state;
  }

  return <div>Child</div>;
});
