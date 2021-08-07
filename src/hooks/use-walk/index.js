import { useState } from "react";
import Sprite from "../../components/sprite";

export default function useWalk(maxSteps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dir, setDir] = useState(0);
  const [step, setStep] = useState(0);
  const directions = {
    down: 0,
    right: 2,
    left: 1,
    up: 3,
  };

  const sSize = 16;

  const modifier = {
    down: { x: 0, y: sSize },
    right: { x: sSize, y: 0 },
    left: { x: -sSize, y: 0 },
    up: { x: 0, y: -sSize },
  };

  function walk(dir) {
    setDir((prev) => {
      if (directions[dir] === prev) move(dir);
      return directions[dir];
    });
    setStep((prev) => (prev < maxSteps - 1 ? prev + 1 : 0));
  }

  function move(dir) {
    setPosition((prev) => ({
      x: prev.x + modifier[dir].x,
      y: prev.y + modifier[dir].y,
    }));
  }
  return { walk, dir, step, position };
}
