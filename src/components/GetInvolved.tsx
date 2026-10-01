import { Users, Handshake, Globe, Share2, Droplets } from "lucide-react";

const cards = [
  {
    icon: Users,
    title: "Become an Ambassador",
    description: "Join a network of young people.",
  },
  {
    icon: Handshake,
    title: "Collaborate",
    description: "Bring initiatives to your organization or community.",
  },
  {
    icon: Globe,
    title: "Community Initiatives",
    description: "Explore water and sustainability solutions.",
  },
  {
    icon: Share2,
    title: "Spread the Message",
    description: "Follow, share and help create awareness.",
  },
];

export default function GetInvolved() {
  return (
    <section
      id="get-involved"
      className="relative py-16 md:py-20 bg-gradient-to-br from-primary via-primary-light to-primary-bright overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-40 h-40 water-drop" />
        <div className="absolute bottom-10 left-20 w-28 h-28 water-drop" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-200 mb-4">
            Get Involved
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white max-w-xl">
            There&apos;s More Than One Way to Create Change.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 items-start">
          {/* Cards */}
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className="p-5 md:p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all group cursor-pointer"
              >
                <div className="w-10 h-10 mb-3 rounded-lg bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1">
                  {card.title}
                </h3>
                <p className="text-xs text-blue-100 leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}

          {/* Logo Card */}
          <div className="p-5 md:p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-2 rounded-full bg-white flex items-center justify-center">
                <Droplets className="w-7 h-7 text-primary" />
              </div>
              <p className="text-lg font-extrabold text-white tracking-tight">
                JALSEVA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
