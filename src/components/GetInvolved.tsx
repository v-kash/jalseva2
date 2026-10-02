import { Users, Handshake, Globe, Share2, Droplets, ArrowUpRight } from "lucide-react";

const ways = [
  {
    icon: Users,
    title: "Become an Ambassador",
    description: "Join a network of young people.",
    href: "#ambassador",
  },
  {
    icon: Handshake,
    title: "Collaborate",
    description: "Bring initiatives to your organization or community.",
    href: "#collaborate",
  },
  {
    icon: Globe,
    title: "Community Initiatives",
    description: "Explore water and sustainability solutions.",
    href: "#initiatives",
  },
  {
    icon: Share2,
    title: "Spread the Message",
    description: "Follow, share and help create awareness.",
    href: "#spread",
  },
];

export default function GetInvolved() {
  return (
    <section
      id="get-involved"
      className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-primary via-primary-light to-primary-bright"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left: statement + brand mark */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-white">
            There&apos;s more than one way to create change.
          </h2>

          {/* <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <Droplets className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xl font-extrabold text-white tracking-tight">
              JALSEVA
            </span>
          </div> */}
        </div>

        {/* Right: open list, divided by lines, no boxes */}
        <ul className="lg:col-span-7 border-t border-white/30">
          {ways.map(({ icon: Icon, title, description, href }) => (
            <li key={title} className="border-b border-white/30">
              <a
                href={href}
                className="group relative flex items-center gap-5 md:gap-8 py-6 md:py-8 overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              >
                {/* Water level rises on hover */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-full translate-y-full bg-white/10 transition-transform duration-500 ease-out group-hover:translate-y-0 motion-reduce:transition-none"
                />

                <Icon className="relative w-7 h-7 md:w-8 md:h-8 shrink-0 text-blue-100 transition-transform duration-300 group-hover:scale-110" />

                <div className="relative flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm md:text-base text-blue-100 max-w-md">
                    {description}
                  </p>
                </div>

                <ArrowUpRight className="relative w-6 h-6 md:w-7 md:h-7 text-white opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}