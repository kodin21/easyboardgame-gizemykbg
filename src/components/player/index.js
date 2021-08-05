import React from "react";
import Actor from "../actor";
import useKeyPress from "../../hooks/use-keypress";
import useWalk from "../../hooks/use-walk";
import char from "../../c1.png";

export default function Player(
  {
    /* karakter değişimi için içine bir şey verebilirim ${} kullanmak için */
  }
) {
  const { dir, step, walk, position } = useWalk(3);
  const data = {
    h: 32,
    w: 32,
  };

  useKeyPress((e) => {
    walk(e.key.replace("Arrow", "").toLowerCase());
  });
  return (
    <Actor
      sprite={char}
      data={data}
      step={step}
      dir={dir}
      position={position}
    />
  );
}
