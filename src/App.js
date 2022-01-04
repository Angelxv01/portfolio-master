import React from "react";
import Button from "./styled/unstyled/Button";
import Card, { Header, Body, Footer, Cover } from "./styled/unstyled/Card";
import { variantCss } from "./styled/values/button";
import { cssCover, someCard } from "./styled/values/card";

function App() {
  return (
    <>
      <Card variation={someCard}>
        <Cover
          src="https://images.unsplash.com/photo-1513977055326-8ae6272d90a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODcwNzV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDA4OTU2NjM&ixlib=rb-1.2.1&q=80&w=1080"
          variation={cssCover}
        />
        <Header>Header</Header>
        <Body>Body</Body>
        <Footer>Footer</Footer>
      </Card>
      <Button variation={variantCss}>Hi</Button>
    </>
  );
}

export default App;
