import { useRef, useEffect } from "react";

export const useRenderCount = () => {
  const counter = useRef(0);
  useEffect(() => {
    counter.current++;

    console.log(`render ${counter} times`);
  }, [counter]);
};
