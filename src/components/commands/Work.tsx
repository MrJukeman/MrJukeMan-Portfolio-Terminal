import {generateTabs} from "../../utils/funcs";
import {EduIntro, EduList} from "../styles/Work.styled";
import {Wrapper} from "../styles/Output.styled";

const Work: React.FC = () => {
    return (
        <Wrapper data-testid="work">
            <EduIntro>My Working Experience !</EduIntro>
            {workBg.map(({title, desc, tab, year}) => (
                <EduList key={title}>
                    <div className="title">{title}</div>
                    <div className="desc">
                        {desc} {generateTabs(tab)}
                        {year === "Actively Working" ? <span className="activeYear">{year}</span> : year}
                    </div>
                </EduList>
            ))}
        </Wrapper>
    );
};

const workBg = [
    {
        "title": "Senior Full Stack Web Developer",
        "desc": "Sajilo Software Solutions",
        "year": "Actively Working",
        "tab": 15
    },
    {
        "title": "Mid Full Stack Web Developer",
        "desc": "Best Nepal Pvt Ltd",
        "year": "2022 ~ 2023",
        "tab": 22
    },
    {
        "title": "Mid Full Stack PHP Developer",
        "desc": "Tech Community Nepal",
        "year": "2021 ~ 2022",
        "tab": 20
    },
    {
        "title": "Internship in Web Application Development",
        "desc": "Tech Community Nepal",
        "year": "2021 ~ 2021",
        "tab": 20
    }
];

export default Work;
