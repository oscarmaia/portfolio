import styled from "styled-components";
import ContentArea from "../components/ContentArea";
import Header from "../components/Header";
import ProjectList from "../components/projects/ProjectList";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";

export default function Site() {
  return (
    <>
      <Header />
      <ContentArea id={"home"}>
        <HomePage />
      </ContentArea>
      <ContentArea id={"projects"}>
        <ProjectList />
      </ContentArea>
      <ContentArea id={"contacts"}>
        <ContactPage />
      </ContentArea>
    </>
  );
}

const ButtonsContainer = styled.div``;
