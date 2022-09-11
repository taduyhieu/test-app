import { useEffect, useRef, useState } from "react";
const Input = ({ ...props }) => {
  const text = useRef(props.text);
  useEffect(() => {
    text.current.value = props.text;
  }, []);

  return (
    <div>
      <input ref={text} />
    </div>
  );
};
export default Input;
