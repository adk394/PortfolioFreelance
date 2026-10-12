import { motion, useReducedMotion } from "motion/react";
import { useLanguage } from "../context/LanguageContext.jsx";

const AboutMe = () => {
  const { t } = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const islandStyles = [
    {
      color: "bg-[#E8CC95] text-black",
      shape: "rounded-[2.5rem_2.5rem_2.5rem_0.75rem]",
      float: -10,
    },
    {
      color: "bg-[#867BD2] text-white",
      shape: "rounded-[2.5rem_0.75rem_2.5rem_2.5rem]",
      float: 9,
    },
    {
      color: "bg-[#F18744] text-black",
      shape: "rounded-[0.75rem_2.5rem_2.5rem_2.5rem]",
      float: -7,
    },
  ];

  return (
    <article
      aria-labelledby="freelance-title"
      className="laptop-about-card relative w-11/12 min-w-0 overflow-hidden rounded-[4rem] border border-white/25 bg-black/20 p-12 text-white shadow-2xl backdrop-blur-md max-md:w-full max-md:rounded-[2.5rem] max-md:p-5"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-[#867BD2]/20 blur-3xl"
      />
      <div className="relative z-10 grid grid-cols-5 items-center gap-x-10 gap-y-8 max-md:grid-cols-1 max-md:gap-6">
        <header className="col-span-2 max-md:col-span-1">
          <p className="mb-4 font-stack-sans text-sm uppercase tracking-[0.25em] text-white">
            {t.about.section}
          </p>
          <h2
            id="freelance-title"
            className="mb-5 text-5xl font-stack-sans leading-[1.05] tracking-tight max-md:text-4xl"
          >
            {t.about.title}
          </h2>
          <p className="max-w-xl text-base font-medium leading-relaxed text-white md:text-lg">
            {t.about.intro}
          </p>
          <a
            href="#footer"
            className="mt-7 inline-flex items-center gap-3 rounded-full border border-white px-6 py-3 font-semibold text-white transition duration-200 hover:-translate-y-1 hover:bg-white hover:text-black"
          >
            {t.about.cta}
            <svg
              aria-hidden="true"
              focusable="false"
              className="h-4 w-4"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M4 12 12 4M5 4h7v7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </header>

        <ul className="col-span-3 grid grid-cols-2 items-center gap-4 max-md:col-span-1 max-md:grid-cols-1 md:[&>li:first-child]:col-span-2 md:[&>li:nth-child(2)]:translate-x-5 md:[&>li:nth-child(3)]:-translate-y-3">
          {t.about.reasons.map((reason, index) => {
            const island = islandStyles[index % islandStyles.length];

            return (
              <motion.li
                key={reason.title}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
                className="min-w-0"
              >
                <motion.div
                  animate={
                    prefersReducedMotion ? undefined : { y: [0, island.float, 0] }
                  }
                  transition={{
                    duration: 5 + index,
                    delay: index * 0.35,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
                  className={`relative min-h-52 p-6 shadow-[0_20px_45px_rgba(0,0,0,0.2)] transition-shadow hover:shadow-[0_25px_55px_rgba(0,0,0,0.3)] max-md:min-h-0 ${island.color} ${island.shape}`}
                >
                  <span className="mb-8 flex h-10 w-10 items-center justify-center rounded-full border border-current/30 font-mono text-sm">
                    0{index + 1}
                  </span>
                  <h3 className="mb-2 text-xl font-bold leading-tight">
                    {reason.title}
                  </h3>
                  <p className="text-sm leading-relaxed opacity-80">
                    {reason.description}
                  </p>
                </motion.div>
              </motion.li>
            );
          })}
        </ul>

        <p className="col-span-5 border-t border-white/15 pt-5 text-sm font-medium text-white max-md:col-span-1 max-md:pt-4">
          {t.about.invitation}
        </p>
      </div>
    </article>
  );
};

export default AboutMe;
