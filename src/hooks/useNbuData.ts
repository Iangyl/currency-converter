import { IExchangeRateData } from "lib/nbuApi.types";
import { useState, useCallback, useEffect } from "react";
import { NbuAPI } from "utils/constants";

const useNbuData = () => {
  const [data, setData] = useState<IExchangeRateData[]>();

  const getData = useCallback(async () => {
    const response = await fetch(NbuAPI);
    const result = await response;

    setData(result as unknown as IExchangeRateData[]);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return data;
};

export default useNbuData;
