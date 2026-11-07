import { useEffect } from "react";

const Github = () => {

  useEffect(() => {
    window.open("https://github.com/kerem37mert", "_blank");
  }, []);

  return (
    <div>Github Yeni Sekmede açıldı (Gerçek tarayıcıda :D)</div>
  );
};

export default Github;
