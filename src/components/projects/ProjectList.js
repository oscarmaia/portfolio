import styled from "styled-components";
import Project from "./Project";

export default function ProjectList() {
  const projects = [
    {
      title: "Driven.t",
      description:
        "Um app whitelabel desenvolvido para gerenciamento de eventos.",
      image: "https://www.giovannipadova.bio/assets/drivent.jpeg",
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
      image: "https://www.triangularx.com/content/uploads/2015/11/mywallet.jpg",
      techs: ["JavaScript", "ReactJS", "NodeJS", "MongoDB"],
      github: "https://github.com/oscarmaia/projeto14-mywallet-front",
      deploy: "https://projeto14-mywallet-front-five.vercel.app/",
    },
    {
      title: "CineFlex",
      description:
        "Um app desenvolvido para gerenciar agendamentos de ingressos em salas de cinema.",
      image:
        "https://images.adsttc.com/media/images/5f7d/fef2/63c0/170a/9100/0273/large_jpg/Jiangnan_Photography.jpg?1602092773",
      techs: ["JavaScript", "ReactJS", "NodeJS", "MongoDB"],
      github: "https://github.com/oscarmaia/projeto10-cineflex",
      deploy: "http://projeto10-cineflex-pi-ten.vercel.app/",
    },
    {
      title: "Linkr",
      description: "Uma rede social para compartilhamento de links",
      image:
        "https://yt3.googleusercontent.com/ytc/AGIKgqP5vfj6MoXWkhsquy7aaq1acG8zvJJEA5FqWhYr=s900-c-k-c0x00ffffff-no-rj",
      techs: ["JavaScript", "ReactJS", "NodeJS", "PostgreSQL", "Prisma"],
      github: "https://github.com/mat-borges/linkr-front",
      deploy: "http://linkr-front-black.vercel.app/",
    },
    {
      title: "TrackIt",
      description: "Um app para cadastro de hábitos e acompanhamento deles.",
      image:
        "https://yt3.googleusercontent.com/ytc/AGIKgqP5vfj6MoXWkhsquy7aaq1acG8zvJJEA5FqWhYr=s900-c-k-c0x00ffffff-no-rj",
      techs: ["JavaScript", "ReactJS", "NodeJS"],
      github: "https://github.com/oscarmaia/projeto11-trackit",
      deploy: "http://projeto11-trackit-chi.vercel.app/",
    },
    {
      title: "ZapRecall",
      description:
        "Um app de Flashcards, Flashcards são cartões de contém uma pergunta/afirmação na sua frente e uma resposta atrás. É possível utilizá-los para treinar sua memória com as metodologias Active Recall e Spaced Repetition ",
      image:
        "https://media.licdn.com/dms/image/C4E22AQFRmuxF_MKNdg/feedshare-shrink_800/0/1648181041450?e=2147483647&v=beta&t=YhP0cQ7EUNM9ulugxKZokixaIN8HuEBI_Bjj1Rl1GL8",
      techs: ["JavaScript", "ReactJS", "NodeJS"],
      github: "https://github.com/oscarmaia/projeto9-zaprecall",
      deploy: "http://projeto9-zaprecall-rho.vercel.app/",
    },
    {
      title: "Jogo da Forca",
      description:
        "A pessoa jogadora tem que adivinhar uma palavra chutando letra por letra e, se cometer 6 erros, ela perde o jogo. Caso adivinhe a palavra antes disso, ela ganha.",
      image:
        "https://media.licdn.com/dms/image/C4E22AQFRmuxF_MKNdg/feedshare-shrink_800/0/1648181041450?e=2147483647&v=beta&t=YhP0cQ7EUNM9ulugxKZokixaIN8HuEBI_Bjj1Rl1GL8",
      techs: ["JavaScript", "ReactJS", "NodeJS"],
      github: "https://github.com/oscarmaia/projeto8-jogoforca",
      deploy: "http://projeto8-jogoforca-c187.vercel.app/",
    },
    {
      title: "Clone Instagram",
      description:
        "Pequeno clone do layout do instagram para testar a componetização do ReactJS, (esse foi o primeiro projeto em React que eu fiz)",
      image:
        "https://media.licdn.com/dms/image/C4E22AQFRmuxF_MKNdg/feedshare-shrink_800/0/1648181041450?e=2147483647&v=beta&t=YhP0cQ7EUNM9ulugxKZokixaIN8HuEBI_Bjj1Rl1GL8",
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
