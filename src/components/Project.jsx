import { css } from "styled-components";
import Card, { Header, Body, Footer, Cover } from "../styled/unstyled/Card";
import { otherCard, thumbnail } from "../styled/variants/Card";
import { Flow } from "../styled/variants/Layout";
import Button from "../styled/unstyled/Button";

export default function Project({ project }) {
  return (
    <Card variation={otherCard}>
      <Cover
        variation={thumbnail}
        src={`${process.env.PUBLIC_URL}/thumbnails/${project.cover}`}
      />
      <Header
        variation={css`
          display: flex;
          gap: 0.5em;
        `}
      >
        {project.tags.map((tag) => (
          <p>{tag}</p>
        ))}
      </Header>
      <Body variation={Flow}>
        <header>{project.title}</header>
        <p>{project.description}</p>
      </Body>
      <Footer>
        <Button>Demo</Button>
        <Button>Code</Button>
      </Footer>
    </Card>
  );
}
