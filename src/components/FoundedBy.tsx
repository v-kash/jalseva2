import Image from "next/image";
import { Quote } from "lucide-react";

export default function FoundedBy() {
  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[320px_1fr_340px] gap-8 lg:gap-10 items-center ">
          {/* Left - Photo with blue blob backdrop */}
          <div className="relative mx-auto w-64 h-64 lg:w-full lg:h-72">
            {/* Blobs */}
            <div className="absolute -top-2 left-6 w-24 h-20 rounded-[60%_40%_55%_45%] bg-sky-200/70" />
            <div className="absolute top-10 -left-4 w-20 h-20 rounded-full bg-sky-100" />
            <div className="absolute inset-x-4 bottom-0 top-6 rounded-[45%_55%_40%_60%/55%_45%_55%_45%] bg-gradient-to-br from-sky-200 to-sky-100" />

            {/* Photo */}
            <Image
              src="/ved.png"
              alt="Ved Kedia, Founder of JalSeva"
              width={380}
              height={320}
              priority
              className="relative z-10 mx-auto h-full w-auto object-contain object-bottom scale-[1.2] "
            />
          </div>

          {/* Middle - Bio */}
          <div className="text-center lg:text-left">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-2">
              Founded By
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-blue leading-tight">
              Ved Kedia
            </h2>
            <p className="mt-1 text-base font-medium text-text-muted">
              Founder, JalSeva
            </p>
            <p className="mt-4 text-sm md:text-[15px] text-text-muted leading-relaxed max-w-md mx-auto lg:mx-0">
              JalSeva was founded by Ved Kedia with a vision to encourage
              cleaner water access, reduce dependence on single-use plastic and
              inspire young people to participate in creating sustainable
              communities.
            </p>
          </div>

          {/* Right - Quote card */}
          <div className="relative p-6 md:p-7 rounded-2xl bg-sky-50 border border-sky-100">
            <Quote className="w-6 h-6 text-primary fill-primary mb-2" />
            <blockquote className="text-base md:text-lg font-medium text-primary leading-snug mb-4">
              Sustainability becomes powerful when it becomes part of everyday
              life.
            </blockquote>
            <p className="script-text text-xl text-primary/80">Ved Kedia</p>
          </div>
        </div>
      </div>
    </section>
  );
}