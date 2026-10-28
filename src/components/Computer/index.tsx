import { useState, type ReactNode } from "react"; 
import { Monitor } from "../../components";
import "./style.scss";

interface TComputerProps {
  
};

const Computer = (props: TComputerProps) => {

  //const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="computer">
      <Monitor bottomText="keremmert.app"/>
    </div>
  );
};

export default Computer;