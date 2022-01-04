import styled from "styled-components";

export const Header = styled.header`
  ${({ variation }) => variation}
`;
export const Cover = styled.img`
  // background-image: url(${({ url }) => url});
  ${({ variation }) => variation}
`;
export const Body = styled.section`
  ${({ variation }) => variation}
`;
export const Footer = styled.footer`
  ${({ variation }) => variation}
`;

const UnstyledCard = styled.article`
  background-color: #e0e0e0;
  padding: 1em;

  ${Cover} {
    display: none;
  }

  ${Header} {
    background-color: red;
  }

  ${Body} {
    background-color: blue;
  }

  ${Footer} {
    background-color: green;
  }

  ${({ variation }) => variation}
`;

export default function Card({ children, ...props }) {
  return <UnstyledCard {...props}>{children}</UnstyledCard>;
}
