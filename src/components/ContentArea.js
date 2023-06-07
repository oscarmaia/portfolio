import styled from "styled-components";

export default function ContentArea({ children, id }) {
  return (
    <ContainerCentral id={id}>
      {<Container id={`${id} children`}>{children}</Container>}
    </ContainerCentral>
  );
}

const ContainerCentral = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 767px) {
    /* Styles for small mobile devices (up to 767px) */
    /* Add your small mobile-specific styles here */
    width: 100%;
    justify-content: center;
  }

  @media screen and (min-width: 768px) and (max-width: 991px) {
    /* Styles for medium-sized mobile devices (between 768px and 991px) */
    /* Add your medium mobile-specific styles here */
  }

  @media screen and (min-width: 992px) {
    /* Styles for larger mobile devices (992px and above) */
    /* Add your large mobile-specific styles here */
  }
`;

const Container = styled.div`
  width: 80%;
`;
