import React, { FC } from "react";
import styles from "./index.module.sass";

interface IInput {
  value?: string | number;
  onChange?: () => void;
  placeholder?: string;
}

const Input: FC<IInput> = ({ value, placeholder, onChange }) => {
  return (
    <input
      className={styles.input}
      value={value}
      type="text"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
