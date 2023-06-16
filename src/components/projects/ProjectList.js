import styled from "styled-components";
import Project from "./Project";
import drivent from "../../resources/images/projects/drivent.png";
import mywallet from "../../resources/images/projects/mywallet.png";
import cineflex from "../../resources/images/projects/cineflex.png";
import trackit from "../../resources/images/projects/trackit.png";
import zaprecall from "../../resources/images/projects/zaprecall.png";
import forca from "../../resources/images/projects/forca.png";
import instagram from "../../resources/images/projects/instagram.png";

export default function ProjectList() {
  const projects = [
    {
      title: "Driven.t",
      description:
        "Um app whitelabel desenvolvido para gerenciamento de eventos.",
      image: drivent,
      techs: [
        "TypeScript",
        "JavaScript",
        "ReactJS",
        "NodeJS",
        "PostgreSQL",
        "Redis",
        "Prisma",
        "Jest",
        "SuperTest",
      ],
      github: "https://github.com/teamdrivent/drivent-frontend",
      deploy: "https://drivent-frontend-oscarfgmaia.vercel.app/",
    },
    {
      title: "MyWallet",
      description:
        "Um app desenvolvido para gerenciar lançamentos diários para controle de finanças.",
      image: mywallet,
      techs: ["JavaScript", "ReactJS", "NodeJS", "MongoDB"],
      github: "https://github.com/oscarmaia/projeto14-mywallet-front",
      deploy: "https://projeto14-mywallet-front-five.vercel.app/",
    },
    {
      title: "CineFlex",
      description:
        "Um app desenvolvido para gerenciar agendamentos de ingressos em salas de cinema.",
      image: cineflex,
      techs: ["JavaScript", "ReactJS", "NodeJS", "MongoDB"],
      github: "https://github.com/oscarmaia/projeto10-cineflex",
      deploy: "http://projeto10-cineflex-pi-ten.vercel.app/",
    },
    {
      title: "TrackIt",
      description: "Um app para cadastro de hábitos e acompanhamento deles.",
      image: trackit,
      techs: ["JavaScript", "ReactJS", "NodeJS"],
      github: "https://github.com/oscarmaia/projeto11-trackit",
      deploy: "http://projeto11-trackit-chi.vercel.app/",
    },
    {
      title: "ZapRecall",
      description:
        "Um app de Flashcards, Flashcards são cartões de contém uma pergunta/afirmação na sua frente e uma resposta atrás. É possível utilizá-los para treinar sua memória com as metodologias Active Recall e Spaced Repetition ",
      image: zaprecall,
      techs: ["JavaScript", "ReactJS", "NodeJS"],
      github: "https://github.com/oscarmaia/projeto9-zaprecall",
      deploy: "http://projeto9-zaprecall-rho.vercel.app/",
    },
    {
      title: "Jogo da Forca",
      description:
        "A pessoa jogadora tem que adivinhar uma palavra chutando letra por letra e, se cometer 6 erros, ela perde o jogo. Caso adivinhe a palavra antes disso, ela ganha.",
      image: forca,
      techs: ["JavaScript", "ReactJS", "NodeJS"],
      github: "https://github.com/oscarmaia/projeto8-jogoforca",
      deploy: "http://projeto8-jogoforca-c187.vercel.app/",
    },
    {
      title: "Clone Instagram",
      description:
        "Pequeno clone do layout do instagram para testar a componetização do ReactJS, esse projeto foi apenas uma prova de conceito para entender como funcionava o mundo do ReactJS",
      image: instagram,
      techs: ["JavaScript", "ReactJS", "NodeJS"],
      github: "https://github.com/oscarmaia/projeto7-instagramreact",
      deploy: "http://projeto7-instagramreact-five.vercel.app/",
    },
  ];
  return (
    <ProjectsContainer>
      {projects.map((p, index) => (
        <Project
          title={p.title}
          description={p.description}
          image={p.image}
          techs={p.techs}
          key={index}
          github={p.github}
          deploy={p.deploy}
        />
      ))}
    </ProjectsContainer>
  );
}

const ProjectsContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  justify-items: center;
  align-items: center;
`;
