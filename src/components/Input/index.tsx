import React, { FC } from "react";
import styles from "./index.module.sass";

interface IInput {
  value: string | number;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input: FC<IInput> = ({ name, value, placeholder, onChange }) => {
  return (
    <input
      name={name}
      className={styles.input}
      value={value}
      type="text"
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
    />
  );
};

export default Input;
