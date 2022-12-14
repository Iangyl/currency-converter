import React, { FC, useMemo, useState } from "react";
import Input from "components/Input";
import styles from "./index.module.sass";
import Select from "components/Select";
import words from "assets/translate/words";
import { IExchangeRateData } from "hooks/useNbuData/nbuApi.types";
import { ChosenValue, InputsValue } from "./index.types";
import { isNaN } from "utils/helpers";

const Converter: FC<Record<string, IExchangeRateData[] | undefined>> = ({
  data,
}) => {
  const [chosenValue, setChosenValue] = useState<ChosenValue>();
  const [inputsValue, setInputsValue] = useState<InputsValue>({
    inputFirst: 0,
    inputSecond: 0,
  });
  const [error, setError] = useState<boolean>(false);

  const handleSelectChange = (value: ChosenValue | undefined) => {
    setError(false);
    setInputsValue({
      inputFirst: "",
      inputSecond: "",
    });
    setChosenValue(value);
  };

  const handleInputsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (!chosenValue) {
      setError(true);
    } else {
      if (!value)
        setInputsValue({
          inputFirst: "",
          inputSecond: "",
        });
      else if (value && Number(value) && value !== "e" && isNaN(value)) {
        const keys = Object.keys(inputsValue);
        if (keys[0] !== name) {
          const anotherValue = Number(value) / Number(chosenValue.value);
          setInputsValue({
            ...inputsValue,
            [name]: value,
            [keys[0]]: anotherValue,
          });
        } else {
          const anotherValue = Number(value) * Number(chosenValue.value);
          setInputsValue({
            ...inputsValue,
            [name]: value,
            [keys[1]]: anotherValue,
          });
        }
      }
    }
  };

  const items = useMemo(() => {
    return data?.map((item: IExchangeRateData) => {
      return {
        name: item.cc,
        value: item.rate.toFixed(2),
      };
    });
  }, [data]);

  return (
    <div className={styles.converter}>
      <div className={styles.left}>
        <div>{chosenValue?.name ?? "Choose currency"}</div>
        <Input
          name="inputFirst"
          value={inputsValue.inputFirst}
          onChange={handleInputsChange}
          placeholder="0"
          style={error ? { borderColor: "var(--error-col)" } : {}}
        />
        <Select
          items={items}
          onChange={handleSelectChange}
          label={words.converter.selectLabel}
          style={{ marginTop: 16, display: "block" }}
        />
        <div className={styles.error}>{error && words.converter.error}</div>
      </div>
      <div className={styles.center}>=</div>
      <div className={styles.right}>
        <div>{words.converter.uahLabel}</div>
        <Input
          name="inputSecond"
          value={inputsValue.inputSecond}
          onChange={handleInputsChange}
          placeholder="0"
          style={error ? { borderColor: "var(--error-col)" } : {}}
        />
      </div>
    </div>
  );
};

export default Converter;
