import React from "react";
import Wrapper from "./components/Wrapper"
import Card from "./components/Card"
import NoHeadCard from "./components/NoHeadCard"
import SearchForm from "./components/SearchForm"

function App() {
  return (
    <Wrapper>
      <SearchForm />
      <Card heading="top walkthroughs">
        <NoHeadCard />
      </Card>
    </Wrapper>
  );
}

export default App;
