import React from "react";
import styles from "./index.module.sass";

const HeaderCurrencyItem = ({
  currency,
  value,
}: {
  currency: string;
  value: number | string;
}) => {
  return (
    <div>
      <span className={styles.currency}>{currency}:&nbsp;</span>
      <span className={styles.value}>{value}</span>
    </div>
  );
};

export default HeaderCurrencyItem;
