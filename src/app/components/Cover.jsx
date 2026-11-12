"use client";

import { TypeAnimation } from "react-type-animation";
import { useReducedMotion } from "framer-motion";
import { contactRows, profile } from "@/app/data/site";
import Image from "next/image";
import { Callout, Chip, Enter, Mark } from "./ui";

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

const contactIcons = {
  Email: (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M2 7.5V18.5C2 19.33 2.67 20 3.5 20H7V11.2L2 7.5Z" />
      <path fill="#34A853" d="M17 20H20.5C21.33 20 22 19.33 22 18.5V7.5L17 11.2V20Z" />
      <path fill="#FBBC04" d="M17 5.5V11.2L22 7.5V6C22 4.4 20.2 3.5 18.9 4.4L17 5.5Z" />
      <path fill="#EA4335" d="M7 11.2V5.5L12 9.2L17 5.5V11.2L12 15L7 11.2Z" />
      <path fill="#C5221F" d="M2 6V7.5L7 11.2V5.5L5.1 4.4C3.8 3.5 2 4.4 2 6Z" />
    </svg>
  ),
  GitHub: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#181717" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>
  ),
  LinkedIn: (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="3.5" fill="#0A66C2" />
      <path fill="#fff" d="M18.6 18.6h-2.9v-4.5c0-1.1 0-2.5-1.5-2.5s-1.7 1.2-1.7 2.4v4.6H9.6V9.3h2.8v1.3c.4-.7 1.3-1.5 2.7-1.5 2.9 0 3.5 1.9 3.5 4.4v5.1zM6.9 8.1a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4zM8.4 18.6H5.4V9.3h3v9.3z" />
    </svg>
  ),
};

export default function Cover() {
  return (
    <section id="cover" className="scroll-mt-14 pt-0">
      <Enter>
        <div className="relative -mt-[34px] mb-3 grid h-[66px] w-[66px] place-items-center overflow-hidden rounded-[10px] border-[3px] border-page bg-sage-50 shadow-soft">
          <span className="text-[2.5rem] leading-none" role="img" aria-label="Jeslyn Wangsa">🦒</span>
        </div>
      </Enter>

      <div className="cover-grid">
        <div className="cover-head">
        <Enter delay={0.05} as="h1">
          <span className="block font-hand text-[clamp(28px,5.6vw,44px)] font-semibold leading-[1.15] tracking-[-0.02em] text-ink">
            {profile.name}
          </span>
        </Enter>

        <Enter delay={0.1}>
          <p className="mb-4 min-h-[1.75em] text-[1.0625rem] text-sage-ink max-[900px]:text-[0.9375rem]">
            <TypedLine />
          </p>
        </Enter>

        </div>

        <Enter delay={0.15} className="cover-intro">
          <Callout>{profile.intro}</Callout>
        </Enter>

        <Enter delay={0.2} className="cover-details">
          <div className="grid gap-px">
            {profile.properties.map(({ key, value, mark }) => (
              <div
                key={key}
                className="grid grid-cols-[132px_minmax(0,1fr)] items-start gap-2.5 py-[5px] max-[900px]:grid-cols-[104px_minmax(0,1fr)] max-[900px]:gap-2 max-[600px]:grid-cols-[68px_minmax(0,1fr)] max-[600px]:gap-1.5"
              >
                <span className="flex items-center gap-2 text-[0.875rem] text-muted">
                  <Mark kind={mark} className="max-[600px]:!hidden" />
                  {key}
                </span>
                <span className="text-[0.875rem] max-[600px]:text-[0.8125rem]">{value}</span>
              </div>
            ))}

            <div className="grid grid-cols-[132px_minmax(0,1fr)] items-start gap-2.5 py-[5px] max-[900px]:grid-cols-[104px_minmax(0,1fr)] max-[900px]:gap-2 max-[600px]:grid-cols-[68px_minmax(0,1fr)] max-[600px]:gap-1.5">
              <span className="flex items-center gap-2 text-[0.875rem] text-muted">
                <Mark kind="target" className="max-[600px]:!hidden" />
                Focus
              </span>
              <span className="flex flex-wrap gap-1.5">
                {profile.focus.map((f) => (
                  <Chip key={f}>{f}</Chip>
                ))}
              </span>
            </div>

            <div className="grid grid-cols-[132px_minmax(0,1fr)] items-start gap-2.5 py-[5px] max-[900px]:grid-cols-[104px_minmax(0,1fr)] max-[900px]:gap-2 max-[600px]:grid-cols-[68px_minmax(0,1fr)] max-[600px]:gap-1.5">
              <span className="flex items-center gap-2 text-[0.875rem] text-muted">
                <Mark kind="pin" className="max-[600px]:!hidden" />
                Contact
              </span>
              <span className="flex flex-wrap gap-2.5 max-[600px]:gap-2">
                {contactRows.map(({ key, href }) => (
                  <a
                    key={key}
                    href={href}
                    {...(href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                    aria-label={key}
                    className="inline-flex items-center gap-1.5 rounded-[6px] bg-sage-ink px-3.5 py-[7px] text-[0.8125rem] font-semibold max-[600px]:p-[5px] text-card no-underline shadow-soft transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-lift motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                  >
                    <span className="grid h-[22px] w-[22px] place-items-center rounded-full bg-white">{contactIcons[key]}</span>
                    <span className="max-[600px]:sr-only">{key}</span>
                    <span aria-hidden="true" className="max-[600px]:hidden">&rarr;</span>
                  </a>
                ))}
              </span>
            </div>
          </div>
        </Enter>

        <Enter delay={0.25} className="cover-photo-wrap">
          <figure className="polaroid cover-photo m-0">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image src="/images/jw.jpg" alt="Jeslyn Wangsa" fill sizes="(max-width: 900px) 120px, 190px" priority className="object-cover" />
            </div>
          </figure>
        </Enter>
      </div>
    </section>
  );
}
