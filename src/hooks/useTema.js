import { useState } from "react";

export const useTema = () => {
  const [tema, setTema] = useState(false);

  const changeTema = () => {
    setTema((prev) => !prev);
  };

  return {
    tema,
    changeTema,
  };
};
