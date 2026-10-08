import { Quote } from "lucide-react";

export default function Origin() {
  return (
    <section id="about" className="scroll-mt-16 py-14 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[5fr_6fr] gap-10 lg:gap-16 items-start">
          {/* Left - Heading and quote */}
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">
              The Origin
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-dark-blue">
              A bin, a bottle, and a question about dignity
            </h2>

            <div className="mt-8 p-6 md:p-7 rounded-2xl bg-sky-50 border border-sky-100">
              <Quote className="w-6 h-6 text-primary fill-primary mb-2" />
              <blockquote className="text-base md:text-lg font-medium text-primary leading-snug">
                Basic access to water and by extension, human dignity was a
                daily struggle for many.
              </blockquote>
            </div>
          </div>

          {/* Right - Story */}
          <div className="space-y-5 text-base text-text-muted leading-relaxed lg:pt-8">
            <p className="text-lg font-medium text-dark-blue">
              Jal Seva was founded in 2022 by Ved Kedia, then a student in
              Dubai, after a single moment of realization.
            </p>
            <p>
              He saw a gardener searching through a garbage bin for a discarded
              plastic bottle looking for something to hold drinking water in
              the peak summer heat. Basic access to water, and the dignity that
              comes with it, was a daily struggle for many working around him.
            </p>
            <p>
              That raised a harder question: could one response address both a
              fundamental human need and the environmental crisis created by
              millions of discarded single-use plastics?
            </p>
            <p>
              Jal Seva became the answer — growing from one small response into
              a youth-led movement working across the UAE and India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
