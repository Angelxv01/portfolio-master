import React from "react";
import { css } from "styled-components";
import Button from "./styled/unstyled/Button";
import Card, { Header, Body, Cover } from "./styled/unstyled/Card";
import { variantCss } from "./styled/variants/Button";
import { cssCover, someCard } from "./styled/variants/Card";

function App() {
  return (
    <div>
      <Card variation={someCard}>
        <Cover
          src="https://images.unsplash.com/photo-1513977055326-8ae6272d90a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODcwNzV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDA4OTU2NjM&ixlib=rb-1.2.1&q=80&w=1080"
          variation={cssCover}
        />
        <Header
          variation={css`
            display: flex;
            justify-content: space-between;
          `}
        >
          <div>
            <p>Billy Pearson</p>
            <p>Front-end developer</p>
          </div>
          <div>
            <p>billy@example.com</p>
            <p>(+603) 546 624 342</p>
          </div>
        </Header>
        <Body>
          <p>
            Self-motivated developer, who is willing to learn and create
            outstanding UI applications.
          </p>
          <p>
            Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque
            feugiat malesuada molestie.
          </p>
        </Body>
      </Card>
      <Button variation={variantCss}>Hi</Button>
    </div>
  );
}

export default App;
