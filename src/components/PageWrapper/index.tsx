import React, { ReactNode, useMemo } from "react";
import appIcon from "../../assets/icons/iconmonstr-coin-7.svg";
import styles from "./index.module.sass";
import words from "assets/translate/words";
import HeaderCurrencyItem from "components/HeaderCurrencyItem";
import { IExchangeRateData } from "hooks/useNbuData/nbuApi.types";

const PageWrapper = ({
  children,
  data,
}: {
  children: ReactNode;
  data: IExchangeRateData[] | undefined;
}) => {
  const usdAndEuValues = useMemo(() => {
    const newArray = [] as IExchangeRateData[];
    data?.forEach((item: IExchangeRateData) => {
      if (item.cc === "USD" || item.cc === "EUR") {
        newArray.push(item);
      }
    });

    return newArray;
  }, [data]);
  return (
    <div className={styles.wrapper}>
      <header>
        <div className="app-wrapper">
          <div className={styles.logoBlock}>
            <img className={styles.icon} src={appIcon} alt="appLogo" />
            {words.header.appName}
          </div>
          <div className={styles.currencies}>
            {usdAndEuValues.map((item) => (
              <HeaderCurrencyItem
                key={item.r030}
                currency={item.cc}
                value={item.rate.toFixed(2)}
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
