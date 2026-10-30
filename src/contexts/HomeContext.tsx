import { createContext, use, useState, type ReactNode } from "react";

interface HomeContextType {
  background: string,
  handleChangeBackground: (bg: string) => void,
};

const HomeContext = createContext<HomeContextType | null>(null);

export const HomeProvider = ({ children }: {children: ReactNode}) => {
  const [background, setBackground] = useState("#fff");

  const handleChangeBackground = (bg: string) => {
    setBackground(bg);
  };

  return (
    <HomeContext value={{ background, handleChangeBackground}}>
      {children}
    </HomeContext>
  );
};

export const useHome = () => {
  const ctx = use(HomeContext);
  if (!ctx) {
    throw new Error("provide error");
  }
  return ctx;
}
