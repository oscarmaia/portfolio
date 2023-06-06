import { Link } from "react-router-dom";
import styled from "styled-components";
import ContentArea from "../components/ContentArea";

export default function HomePage() {
  return (
    <>
      <ContentArea id={"home"}>
        <h1>
          Olá, eu sou <strong>Oscar Maia</strong>
        </h1>
        <br />
        <h2>
          Um Desenvolvedor <strong>Full Stack!</strong>
        </h2>
        <span>
          Aqui você encontrará algunbs dos meus projetos e mais sobre mim.
        </span>
        <ButtonsContainer>
          <Link to={"/projects"}>
            <button>Projetos</button>
          </Link>
          <a
            href="https://drive.google.com/file/d/1BoMa9ya9eAD8Y1WQg9G05oHd6pfy57v3/view?usp=drive_link"
            target="_blank"
          >
            <button>Currículo</button>
          </a>
        </ButtonsContainer>
      </ContentArea>
      <ContentArea id={"projects"}>SEÇÃO DE PROJETOS LINDOS MARAVILHOS DO OSCARZINHO LINDO</ContentArea>
      <ContentArea id={"contacts"}>SEÇÃO DE CONTATOS</ContentArea>
    </>
  );
}

const ButtonsContainer = styled.div``;
