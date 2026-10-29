import type { TProgram } from "../../types";
import "./style.scss";

interface THomeProps {
  programList: TProgram[],
  setOpenProgram: (id: string | null) => void,
};

const Home = (props: THomeProps) => {
  const { programList, setOpenProgram } = props;

  return (
    <div className="home">
      {programList.map(program => (
        <div
          className="home__shortcut"
          key={program.id}
          onClick={() => setOpenProgram(program.id)}
        >
         <program.icon className="home__shortcut__icon" />
        </div>
      ))}
    </div>
  );
};

export default Home;
