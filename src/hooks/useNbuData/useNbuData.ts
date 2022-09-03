import { IExchangeRateData } from "hooks/useNbuData/nbuApi.types";
import { useState, useCallback, useEffect } from "react";
import { NbuAPI } from "utils/constants";

const useNbuData = () => {
  const [data, setData] = useState<IExchangeRateData[]>();

  const getData = useCallback(async () => {
    const response = await fetch(NbuAPI);
    const result = await response.json();

    setData(result);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return data;
};

export default useNbuData;
