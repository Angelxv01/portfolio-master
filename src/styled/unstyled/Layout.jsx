import styled from "styled-components";

const LayoutUnstyled = styled.div`
  ${({ variation }) => variation}
`;

export default function Layout({ children, ...props }) {
  return <LayoutUnstyled {...props}>{children}</LayoutUnstyled>;
}
