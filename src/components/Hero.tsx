import { ArrowRight, Droplets } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-20 md:pt-24 pb-12 md:pb-0 overflow-hidden min-h-[calc(100vh-5rem)]"
    >
      {/* Next.js Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://z-cdn-media.chatglm.cn/files/fe1530a2-873d-463c-9f75-2e239b869622.png?auth_key=1890843729-796fb432a690435ebe55aa1af9857def-0-7a8e311809776383bdde009a6180ede5"
          alt="A girl in a blue school uniform drinking from a thermos surrounded by nature elements"
          width={1920} // Control the intrinsic width here
          height={180} // Control the intrinsic height here
          className="w-full h-full object-cover"
          priority // Good practice for Hero images to load faster
        />
      </div>

      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-white via-white/5 to-transparent pointer-events-none"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-5rem)]">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 py-8">
            {/* Tagline */}
            <div className="flex items-center gap-2 text-sm font-semibold tracking-widest text-primary uppercase">
              <Droplets className="w-4 h-4" />
              Refill · Reuse · Reduce
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.08] text-text-dark">
              Clean Water
              <br />
              <span className="text-primary">for a Brighter</span>
              <br />
              Tomorrow.
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-text-muted max-w-lg leading-relaxed">
              A youth-led initiative creating practical solutions for cleaner
              water access, responsible consumption and stronger communities.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#impact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-primary rounded-full hover:bg-primary-light transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Explore Our Impact
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#get-involved"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-primary border-2 border-primary rounded-full hover:bg-primary hover:text-white transition-all"
              >
                Get Involved
              </a>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-text-muted pt-2">
              {["Youth-led", "Water", "Sustainability", "Community"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/70 backdrop-blur-sm rounded-full border border-gray-200"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right side intentionally left empty so the background image shows through */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}