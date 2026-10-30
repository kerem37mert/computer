import { HomeProvider, useHome } from "../../contexts/HomeContext";
import type { TProgram } from "../../types";
import "./style.scss";

interface THomeProps {
  programList: TProgram[],
  setOpenProgram: (id: string | null) => void,
};

const Home = (props: THomeProps) => {
  const { programList, setOpenProgram } = props;

  const { background } = useHome();

  return (
    <HomeProvider>
      <div className="home" style={{ background: background }}>
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
    </HomeProvider>
  );
};

export default Home;
