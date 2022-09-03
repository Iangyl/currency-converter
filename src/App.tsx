import React from "react";
import PageWrapper from "components/PageWrapper";
import useNbuData from "hooks/useNbuData/useNbuData";
import Converter from "components/Converter";
import "./App.sass";

function App() {
  const data = useNbuData();
  return (
    <PageWrapper data={data}>
      <Converter data={data} />
    </PageWrapper>
  );
}

export default App;
