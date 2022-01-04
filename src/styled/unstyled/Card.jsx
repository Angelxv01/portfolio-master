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
  display: grid;

  & > ${Cover} {
    grid-area: cover;
    display: none;
  }

  & > ${Header} {
    grid-area: header;
  }

  & > ${Body} {
    grid-area: body;
  }

  & > ${Footer} {
    grid-area: footer;
  }

  ${({ variation }) => variation}
`;

export default function Card({ children, ...props }) {
  return <UnstyledCard {...props}>{children}</UnstyledCard>;
}
