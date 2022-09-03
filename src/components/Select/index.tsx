import React, { FC, useEffect, useState } from "react";
import { ISelect } from "./index.types";
import styles from "./index.module.sass";

const Select: FC<ISelect> = ({
  value: inputValue,
  defaultValue,
  label = "",
  onChange,
  items,
  style,
}) => {
  const selectValue = inputValue
    ? inputValue
    : defaultValue
    ? defaultValue
    : "";
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>(selectValue);

  const handleOptionClick = (val: string) => {
    setIsOpen(false);
    setValue(val);
  };

  useEffect(() => {
    onChange(value);
  }, [value]);

  return (
    <>
      <label
        className={styles.select}
        htmlFor="select"
        onClick={() => setIsOpen(!isOpen)}
        style={style}
      >
        {label}
        <input
          className={styles.selectField}
          name="select"
          value={value}
          type="text"
        />
      </label>
      {isOpen && (
        <div className={styles.selectItems}>
          {items?.map((item) => (
            <div
              key={item.name}
              className={`${styles.selectItem} ${item.className ?? ""}`}
              onClick={() => handleOptionClick(item.name)}
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Select;
