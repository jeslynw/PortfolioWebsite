"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { useReducedMotion } from "framer-motion";
import { profile } from "@/app/data/site";
import InlineNav from "./InlineNav";
import { Callout, Chip, Enter, Figure, Mark } from "./ui";

function TypedLine() {
  const reduced = useReducedMotion();

  if (reduced) {
    return <span>{profile.typedPhrases[1]}</span>;
  }

  // Interleave each phrase with a pause, the shape react-type-animation wants.
  const sequence = profile.typedPhrases.flatMap((phrase) => [phrase, 1800]);

  return (
    <>
      <TypeAnimation
        sequence={[600, ...sequence]}
        wrapper="span"
        speed={55}
        deletionSpeed={72}
        repeat={Infinity}
        cursor={false}
      />
      <span className="caret animate-blink" aria-hidden="true" />
    </>
  );
}

export default function Cover() {
  return (
    <section id="cover" className="scroll-mt-14 pt-0">
      <Enter>
        <div className="relative -mt-[34px] mb-3 h-[66px] w-[66px] overflow-hidden rounded-[10px] border-[3px] border-page shadow-soft">
          <Image
            src="/images/bitmoji.png"
            alt="Jeslyn Wangsa"
            fill
            sizes="66px"
            className="object-cover"
            priority
          />
        </div>
      </Enter>

      <Enter delay={0.05} as="h1">
        <span className="block text-[clamp(1.9rem,5.4vw,2.5rem)] font-bold leading-[1.15] tracking-[-0.02em] text-ink">
          {profile.name}
        </span>
      </Enter>

      <Enter delay={0.1}>
        <p className="mb-4 min-h-[1.75em] text-[1.0625rem] text-sage-ink">
          <TypedLine />
        </p>
      </Enter>

      <Enter delay={0.15} className="mb-[22px]">
        <Callout>{profile.intro}</Callout>
      </Enter>

      <Enter delay={0.2}>
        <InlineNav />
      </Enter>

      <Enter delay={0.25}>
        <div className="grid grid-cols-[minmax(0,1fr)_210px] items-start gap-[30px] max-[900px]:grid-cols-1">
          <div className="grid gap-px">
            {profile.properties.map(({ key, value, mark }) => (
              <div
                key={key}
                className="grid grid-cols-[132px_minmax(0,1fr)] items-start gap-2.5 py-[5px] max-[900px]:grid-cols-[108px_minmax(0,1fr)]"
              >
                <span className="flex items-center gap-2 text-[0.8125rem] text-muted">
                  <Mark kind={mark} />
                  {key}
                </span>
                <span className="text-[0.8125rem]">{value}</span>
              </div>
            ))}

            <div className="grid grid-cols-[132px_minmax(0,1fr)] items-start gap-2.5 py-[5px] max-[900px]:grid-cols-[108px_minmax(0,1fr)]">
              <span className="flex items-center gap-2 text-[0.8125rem] text-muted">
                <Mark kind="target" />
                Focus
              </span>
              <span className="flex flex-wrap gap-1.5">
                {profile.focus.map((f) => (
                  <Chip key={f}>{f}</Chip>
                ))}
              </span>
            </div>
          </div>

          <Figure
            src="/images/jw.jpg"
            alt="Jeslyn Wangsa"
            caption="that’s me, roughly"
            className="max-[900px]:max-w-[208px]"
          />
        </div>
      </Enter>
    </section>
  );
}
