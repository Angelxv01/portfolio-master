import React from "react";
import Card, { Header, Body, Cover } from "./styled/unstyled/Card";
import { Flow } from "./styled/variants/Layout";
import { cssCover, otherCard } from "./styled/variants/Card";
import Layout from "./styled/unstyled/Layout";

function App() {
  return (
    <Card variation={otherCard}>
      <Cover
        src="https://images.unsplash.com/photo-1513977055326-8ae6272d90a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODcwNzV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDA4OTU2NjM&ixlib=rb-1.2.1&q=80&w=1080"
        variation={cssCover}
      />
      <Header variation={Flow} space="1em">
        <Layout variation={Flow} space="0.25em">
          <p>Billy Pearson</p>
          <p>Front-end developer</p>
        </Layout>
        <Layout variation={Flow} space="0.25em">
          <p>billy@example.com</p>
          <p>(+603) 546 624 342</p>
        </Layout>
      </Header>
      <Body variation={Flow} space="0.5em">
        <p>
          Self-motivated developer, who is willing to learn and create
          outstanding UI applications.
        </p>
      </Body>
    </Card>
  );
}

export default App;
