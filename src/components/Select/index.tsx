import React, { FC, useEffect, useState } from "react";
import { ISelect } from "./index.types";
import { ChosenValue } from "components/Converter/index.types";
import arrow from "assets/icons/right-filled.svg";

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
  const [name, setName] = useState<string>(selectValue);
  const [value, setValue] = useState<ChosenValue>();

  const handleOptionClick = (val: ChosenValue) => {
    setIsOpen(false);
    setName(val.name);
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
          value={name}
          type="text"
          placeholder="Choose currency"
        />
        <img
          className={styles.arrow}
          src={arrow}
          style={
            isOpen
              ? { transform: "rotate(90deg)" }
              : { transform: "rotate(0deg)" }
          }
        />
      </label>
      {isOpen && (
        <div className={styles.selectItems}>
          {items?.map((item) => (
            <div
              key={item.name}
              className={`${styles.selectItem} ${item.className ?? ""}`}
              onClick={() => handleOptionClick(item)}
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
