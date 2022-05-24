import { useRef, useEffect } from "react";

const InputWithLabel = ({
  id,
  type = "text",
  value,
  handleTitleChange,
  children,
  isFocused,
}) => {
  const inputRef = useRef();

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  });

  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input
        ref={inputRef}
        type={type}
        value={value}
        onChange={handleTitleChange}
        id={id}
      />
    </>
  );
};

export default InputWithLabel;
