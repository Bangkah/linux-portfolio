import { EduIntro, EduList } from "../../../../styles/Education.styled";
import { Wrapper } from "../../../../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Education:</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "Mahasiswa Teknik Informatika",
    desc: "Indonesia",
  },
];

export default Education;
