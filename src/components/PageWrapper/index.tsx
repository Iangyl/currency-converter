import React, { ReactNode } from "react";
import { mockHeaderRate } from "./mockData";
import appIcon from "../../assets/icons/iconmonstr-coin-7.svg";
import styles from "./index.module.sass";
import words from "assets/translate/words";
import HeaderCurrencyItem from "components/HeaderCurrencyItem";

const PageWrapper = ({
  children,
  data,
}: {
  children: ReactNode;
  data: unknown;
}) => {
  console.log("pageWrapper", data);
  return (
    <div className={styles.wrapper}>
      <header>
        <div className="app-wrapper">
          <div className={styles.logoBlock}>
            <img className={styles.icon} src={appIcon} alt="appLogo" />
            {words.header.appName}
          </div>
          <div className={styles.currencies}>
            {mockHeaderRate.map((item) => (
              <HeaderCurrencyItem
                key={item.id}
                currency={item.name}
                value={item.value}
              />
            ))}
          </div>
        </div>
      </header>
      <section>{children}</section>
    </div>
  );
};

export default PageWrapper;
