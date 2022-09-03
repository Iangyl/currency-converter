import React from "react";
import PageWrapper from "components/PageWrapper";
import useNbuData from "hooks/useNbuData";
import Converter from "components/Converter";
import "./App.sass";

function App() {
  const data = useNbuData();
  return (
    <PageWrapper data={data}>
      <Converter />
    </PageWrapper>
  );
}

export default App;
