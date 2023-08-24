import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url, repo }) => {
        id === parseInt(arg[1]) &&
          window.open(url !== "" ? url : repo, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "KyutePDO",
    desc: "A PDO-based PHP library for easy and efficient database management",
    url: "",
    repo: "https://github.com/kyutefox/kyutePDO",
  },
  {
    id: 2,
    title: "R-Drive",
    desc: "A Cloud Based Storage Solution, Developed using React and Laravel.",
    url: "https://projects.rajuchoudhary.com.np/drive",
    repo: "",
  },
  {
    id: 3,
    title: "Ry-Store",
    desc: "A Multi-Vendor E-commerce Platform, Developed using Core PHP, and NodeJS with AI based recommended system and Socket based Chat System.",
    url: "https://projects.rajuchoudhary.com.np/ecommerce/",
    repo: "",
  },
  {
    id: 4,
    title: "Iconify",
    desc: "A browser based extension to download premium SVG icons and stickers from Flaticon, Icons8, and Iconscout without any subscriptions.",
    url: "",
    repo: "https://github.com/kyutefox/Iconify",
  },
];

export default Projects;
