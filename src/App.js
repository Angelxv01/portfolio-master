import { Icon } from "./components/Common";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  gap: ${({ space }) => space || "1em"};
  color: ${({ color, theme }) =>
    color && theme.color[color] ? `hsl(${theme.color[color]})` : "inherit"};
`;

const Container = styled.div`
  width: 66.67%;
  margin: 1em auto;
`;

const Text = styled.div`
  font-size: ${({ fontSize, theme }) =>
    fontSize && theme.font.size[fontSize]
      ? theme.font.size[fontSize]
      : "unset"};
  font-weight: ${({ fontWeight, theme }) =>
    fontWeight && theme.font.weight[fontWeight]
      ? theme.font.weight[fontWeight]
      : "unset"};
  line-height: ${({ lineHeight, theme }) =>
    lineHeight && theme.lineHeight[lineHeight]
      ? theme.lineHeight[lineHeight]
      : "unset"};
  color: ${({ color, theme }) =>
    color && theme.color[color] ? `hsl(${theme.color[color]})` : "inherit"};
`;

const Title = {
  fontSize: "TITLE",
  fontWeight: "SEMI_BOLD",
  color: "GRAY2",
  lineHeight: "TITLE",
};
const Subtitle = {
  fontSize: "SUBTITLE",
  fontWeight: "MEDIUM",
  lineHeight: "SUBTITLE",
};

const Flow = styled.div`
  color: ${({ color, theme }) =>
    color && theme.color[color] ? `hsl(${theme.color[color]})` : "inherit"};
  & > *:where(:not(:first-child)) {
    margin-top: ${({ space }) => space || "1em"};
  }
`;

function App() {
  return (
    <Container>
      <User />
    </Container>
  );
}
const StyledUser1 = styled(Flex)`
  background-color: hsl(${({ theme }) => theme.color.WHITE});
  padding: 1.25em;
  flex: 1;

  border-radius: 12px;
  & img {
    border-radius: 8px;
    width: 25%;
  }

  &,
  & * {
    align-items: center;
  }
`;

const StyledUser2 = styled(Flex)`
  background-color: hsl(${({ theme }) => theme.color.WHITE});
  padding: 1.25em;
  max-width: 395px;
  border-radius: 12px;

  & img {
    border-radius: 8px;
    width: 100%;
  }

  &,
  & * {
    align-items: flex-start;
    flex-direction: column;
  }
`;

function User() {
  return (
    <StyledUser1>
      <img
        src="https://source.unsplash.com/G-YWM2tnA9Q/300x300"
        alt="Profile"
      />
      <Flow>
        <Flex>
          {/* Presentation */}
          <div>
            <Text {...Title}>Billie Pearson</Text>
            <Text {...Subtitle} color="GRAY3">
              Front-end developer
            </Text>
          </div>
          {/* Information */}
          <Flow space="0.5em">
            <Flex color="GRAY2" style={{ flexDirection: "row" }}>
              <Icon.Email />
              <Text {...Subtitle}>billie@example.com</Text>
            </Flex>
            <Flex color="GRAY2" style={{ flexDirection: "row" }}>
              <Icon.Phone />
              <Text {...Subtitle}>(+603) 546 624 342</Text>
            </Flex>
          </Flow>
        </Flex>
        {/* Description */}
        <Flow space="0.5em" color="GRAY3">
          <Text {...Subtitle}>
            Self-motivated developer, who is willing to learn and create
            outstanding UI applications.{" "}
          </Text>
          <Text {...Subtitle}>
            Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque
            feugiat malesuada molestie.
          </Text>
        </Flow>
      </Flow>
    </StyledUser1>
  );
}

export default App;
