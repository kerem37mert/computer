import type { ReactNode } from "react"; 
import "./style.scss";

interface TComputerProps {
  children: ReactNode,
};

const Computer = (props: TComputerProps) => {
  const { children } = props;

  return (
    <div className="computer">{ children }</div>
  );
};

export default Computer;