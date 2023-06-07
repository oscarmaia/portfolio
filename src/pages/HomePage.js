import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import pdf from "../resources/Oscar_Maia_CV.pdf";

export default function HomePage() {
  const openPdf = () => {
    window.open(pdf, "_blank");
  };
  return (
    <ApresentationContainer>
      <div>
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
          <LinkScroll
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
          >
            <button>Projetos</button>
          </LinkScroll>
          <button onClick={openPdf}>Currículo</button>
        </ButtonsContainer>
      </div>
    </ApresentationContainer>
  );
}

const ApresentationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const ButtonsContainer = styled.div``;
