import { useState } from "react";
import "./style.scss";

interface TLine {
  input: string,
  output: string,
};

const Terminal = () => {
  const [commandTerm, setCommandTerm] = useState("");
  const [history, setHistroy] = useState<TLine[]>([]);
  
  const executeCommand = () => {
    const input = commandTerm.trim();
    let output = "";
    
    switch (input) {
      case "":
        output = "";
        break;
      case "help":
        output = "I'll help you";
        break;
      case "clear":
        setHistroy([]);
        break;
      default:
        output = `Command not found: ${input}`;
    }

    setHistroy(prev => [...prev, {input, output}]);
    setCommandTerm("");
  };

  return (
    <div className="terminal">
      <div className="terminal__history">
        {history.map((line, index) => (
          <div key={index}>
            <div style={{display: "flex", gap: "4px"}}>
              <span>user@keremmert.app{">"}</span>
              <div className="terminal__history__command">{line.input}</div>
            </div>
            <div className="terminal__history__output">{line.output}</div>
          </div>
        ))}
      </div>
      <div className="terminal__input">
        <span>user@keremmert.app{" >"}</span>
        <input
          autoFocus
          value={commandTerm}
          onChange={(e) => setCommandTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter")
              executeCommand();
          }}
          autoComplete="false"
          spellCheck={false}
        />
      </div>
    </div>
  );
};

export default Terminal;
