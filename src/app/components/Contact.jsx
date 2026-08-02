import { contactRows } from "@/app/data/site";
import { Reveal, SectionHead } from "./ui";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-14 pb-24 pt-[42px]">
      <SectionHead
        mark="petal"
        title="Contact"
        note="Always happy to talk about AI, clean interfaces, or something you’re building."
      />

      <Reveal delay={0.08} className="grid gap-px">
        {contactRows.map(({ key, value, href }) => {
          const external = !href.startsWith("mailto:");
          return (
            <a
              key={key}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex items-center gap-3 rounded-[5px] px-2.5 py-[11px] text-ink no-underline transition-[background-color,padding-left] duration-200 hover:bg-[var(--hover)] hover:pl-4"
            >
              <span className="w-[92px] shrink-0 text-[0.8125rem] text-muted">{key}</span>
              <span className="text-[0.8125rem]">{value}</span>
              <span className="ml-auto text-[0.6875rem] text-sage-ink" aria-hidden="true">
                &rarr;
              </span>
            </a>
          );
        })}
      </Reveal>

      <div className="mt-11 flex flex-wrap justify-between gap-3.5 border-t border-line pt-[18px] text-[0.6875rem] text-faint">
        <span className="font-hand text-[0.8125rem] italic">
          Thanks for reading to the end
        </span>
        <span>Built with Next.js &amp; Tailwind</span>
      </div>
    </section>
  );
}
