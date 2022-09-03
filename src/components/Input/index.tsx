import React, { FC } from "react";
import styles from "./index.module.sass";

interface IInput {
  value: string | number;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  style?: Record<string, string | number>;
}

const Input: FC<IInput> = ({ name, value, placeholder, onChange, style }) => {
  return (
    <input
      name={name}
      className={styles.input}
      style={style}
      value={value}
      type="text"
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
    />
  );
};

export default Input;
