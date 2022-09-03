import React, { FC, useState } from "react";
import Input from "components/Input";
import styles from "./index.module.sass";
import Select from "components/Select";
import { data } from "./mockData";
import words from "assets/translate/words";

const Converter: FC = () => {
  const [value, setValue] = useState<string>();
  const handleChange = (value: string) => {
    console.log("onChange: ", value);
    setValue(value);
  };
  return (
    <div className={styles.converter}>
      <div className={styles.left}>
        <div>{value ?? ""}</div>
        <Input placeholder="0" />
        <Select
          items={data}
          onChange={handleChange}
          label={value ? value : words.converter.selectLabel}
          style={{ marginTop: 16, display: "block" }}
        />
      </div>
      <div className={styles.center}>=</div>
      <div className={styles.right}>
        <div>{value ?? ""}</div>
        <Input placeholder="0" />
        <Select
          items={data}
          onChange={handleChange}
          label={value ? value : words.converter.selectLabel}
          style={{ marginTop: 16, display: "block" }}
        />
      </div>
    </div>
  );
};

export default Converter;
