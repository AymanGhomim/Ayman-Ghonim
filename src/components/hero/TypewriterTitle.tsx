import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const firstLine = "Frontend Developer";
const secondLine = "& UI/UX Designer.";
const fullText = `${firstLine}\n${secondLine}`;

export function TypewriterTitle() {
  const reducedMotion = useReducedMotion();
  const [typedLength, setTypedLength] = useState(0);
  const visibleLength = reducedMotion ? fullText.length : typedLength;
  const typedText = fullText.slice(0, visibleLength);
  const [typedFirst = "", typedSecond = ""] = typedText.split("\n");
  const writingSecondLine = typedText.includes("\n");

  useEffect(() => {
    if (reducedMotion) return;

    let cancelled = false;
    let nextLength = 0;
    let timerId: number;

    const typeNextCharacter = () => {
      if (cancelled) return;

      if (nextLength <= fullText.length) {
        setTypedLength(nextLength);
        nextLength += 1;
        timerId = window.setTimeout(typeNextCharacter, 82);
        return;
      }

      timerId = window.setTimeout(() => {
        nextLength = 0;
        typeNextCharacter();
      }, 3200);
    };

    timerId = window.setTimeout(typeNextCharacter, 450);

    return () => {
      cancelled = true;
      window.clearTimeout(timerId);
    };
  }, [reducedMotion]);

  const cursor = !reducedMotion ? <span className="hero-type-cursor" aria-hidden /> : null;

  return (
    <h1 className="hero-title mt-3" aria-label={`${firstLine} ${secondLine}`}>
      <span className="hero-type-line block">
        <span className="invisible" aria-hidden>{firstLine}</span>
        <span className="hero-type-text" aria-hidden>
          {typedFirst}
          {!writingSecondLine && cursor}
        </span>
      </span>
      <span className="hero-type-line block">
        <span className="invisible" aria-hidden>{secondLine}</span>
        <span className="hero-title-accent hero-type-text" aria-hidden>
          {typedSecond}
          {writingSecondLine && cursor}
        </span>
      </span>
    </h1>
  );
}
