import { generateTabs } from "../../utils/funcs";
import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>My Education Background !</EduIntro>
      {eduBg.map(({ title, desc, tab, year }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">
            {desc} {generateTabs(tab)}
            {year}
          </div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "B.Sc (Hons) in Computing",
    desc: "London Metropolitan University",
    year: "2019 ~ 2022",
    tab: 4,
  },
  {
    title: "+2 Science and Technology",
    desc: "Arniko College",
    year: "2015 - 2017",
    tab: 20,
  },
];

export default Education;
