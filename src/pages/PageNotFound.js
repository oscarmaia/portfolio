import styled from "styled-components";
import ContentArea from "../components/ContentArea";

export default function PageNotFound() {
  return (
    <ContentArea>
      <StyledH1>404 | PAGE NOT FOUND</StyledH1>
    </ContentArea>
  );
}

const StyledH1 = styled.h1`
  font-size: 4rem;
  text-align: center;
`;

