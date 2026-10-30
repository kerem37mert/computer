import { useState } from "react";
import { Close } from "../../icons";
import type { TProgram } from "../../types";
import "./style.scss";

interface TProgramProps {
  program: TProgram,
  setOpenProgram: (id: string | null) => void,
};

const Program = (props: TProgramProps) => {
  const { program, setOpenProgram } = props;
  
  return (
    <div className="program">
      <div className="program__header">
        <div className="program__header__title">
          { program.name }
        </div>
       <div className="program__header__right">
        <Close 
          className="program__header__right__close"
          onClick={() => setOpenProgram(null)}  
        />
       </div>
      </div>
      <program.component />
    </div>
  );
};

export default Program;