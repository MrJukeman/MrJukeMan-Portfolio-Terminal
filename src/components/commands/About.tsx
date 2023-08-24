import {
  AboutWrapper,
  HighlightAKA,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <br></br>
      <p>🙏 Jay Shree Ram.</p>
      <br></br>
      <p>
        👋 Hi, This Is <HighlightSpan>Raju Choudhary</HighlightSpan> !
      </p>
      <br></br>
      <p>
        💜 AKA, <HighlightAKA>MrJukeman</HighlightAKA>
      </p>
      <br></br>
    </AboutWrapper>
  );
};

export default About;
