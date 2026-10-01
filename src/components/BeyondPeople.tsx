import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function BeyondPeople() {
  return (
    <section className="relative w-full overflow-hidden bg-sky-light/40">
      {/* Text: stacked above the image on mobile/tablet, overlaid on the left on xl+ */}
      <div className="relative z-10 px-4 pb-8 pt-12 sm:px-8 md:pt-16 xl:absolute xl:inset-y-0 xl:left-0 xl:flex xl:w-[42%] xl:items-center xl:p-0 xl:pl-[6.5%]">
        <div className="space-y-5 xl:space-y-[1.4vw]">
          <div className="flex items-center gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500 xl:text-[0.8vw]">
              Beyond People
            </p>
            <span className="h-px w-16 bg-blue-400/60 xl:w-[8vw]" />
          </div>

          <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-text-dark sm:text-5xl xl:text-[3.7vw]">
            Water is for
            <br />
            <span className="text-blue-600">Every Living Being.</span>
          </h2>

          <p className="max-w-md text-base leading-relaxed text-text-muted xl:max-w-[31vw] xl:text-[1.3vw] xl:leading-[1.5]">
            Through water pots for stray animals, JalSeva supports simple
            community initiatives that provide access to drinking water beyond
            human needs.
          </p>

          <a
            href="#get-involved"
            className="inline-flex w-fit items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-primary-light xl:gap-[0.8vw] xl:px-[2.2vw] xl:py-[1vw] xl:text-[1.05vw]"
          >
            Our Community Initiatives
            <ArrowRight className="h-4 w-4 xl:h-[1.2vw] xl:w-[1.2vw]" />
          </a>
        </div>
      </div>

      {/* Background image */}
      <div className="relative h-64 w-full sm:h-80 xl:h-auto xl:min-h-[440px] xl:aspect-[3/1]">
        <Image
          src="/beyond-people-bg.png"
          alt="A dog drinking water from a blue bowl, with the message: Small actions, big difference"
          fill
          sizes="100vw"
          className="object-cover object-right"
          priority
        />
      </div>
    </section>
  );
}