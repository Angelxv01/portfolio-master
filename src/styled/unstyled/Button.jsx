import styled from "styled-components";

const UnstyledButton = styled.button`
  font-size: 1rem;
  border: 0;
  outline: 0;
  cursor: pointer;

  ${({ variation }) => variation}
`;

export default function Button({ children, ...props }) {
  return <UnstyledButton {...props}>{children}</UnstyledButton>;
}
