import styled from "styled-components";

export default function Tech({ name }) {
  return <Container>{name}</Container>;
}

const Container = styled.div`
  width: fit-content;
  white-space: nowrap;
  padding: 0.3rem;
  border-radius: 0.2rem;
  background-color: aquamarine;
  
`;
