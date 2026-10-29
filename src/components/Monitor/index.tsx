import { ProgramLauncher } from "../../components";
import "./style.scss";

interface TMonitorProps {
  bottomText: string,
};

const Monitor = (props: TMonitorProps) => {
  const { bottomText } = props;

  return (
    <div className="monitor">
      <div className="monitor__screen">
        <ProgramLauncher />
      </div>
      <div className="monitor__bottom">{ bottomText }</div>
    </div>
  );
};

export default Monitor;