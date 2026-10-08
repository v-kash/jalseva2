import { ArrowRight, User } from "lucide-react";

const ambassadors = [
  { name: "Dhruv Saraf", city: "Indore", img: "/D.png" },
  { name: "Dhvani Shah", city: "Dubai", img: "/Dg.png" },
  { name: "Saakshi Murarke", city: "Delhi", img: "/Sm.png" },
  { name: "Gurbani Walia", city: "Dubai", img: "/Gw.png" },
  { name: "Rishita Saraf", city: "Calcutta", img: "/Rs.png" },
  { name: "Averaj Agrawal", city: "Chhattisgarh", img: "/Aa.png" },
  { name: "Kanav Sanghai", city: "Mumbai", img: "/ks.png" },
];

const stats = [
  { value: "150+", label: "Volunteers" },
  { value: "7", label: "Youth Ambassadors" },
  { value: "3", label: "Partner Organizations" },
];

export default function Ambassadors() {
  return (
    <section id="ambassadors" className="scroll-mt-16 py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">
              Who&apos;s Carrying It Forward
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-dark-blue">
              Not one founder.
              <br />A network.
            </h2>
          </div>
          <div className="lg:pt-6 lg:pl-8">
            <p className="text-text-muted leading-relaxed text-base max-w-md">
              Jal Seva is no longer one founder&apos;s initiative. It&apos;s
              driven by a network of volunteers and youth ambassadors leading
              efforts in their own communities, alongside NGO and corporate
              partners who help the model scale.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-3 divide-x divide-sky-100 border-y border-sky-100 py-6">
          {stats.map((stat) => (
            <div key={stat.label} className="px-3 text-center">
              <p className="text-2xl md:text-4xl font-extrabold text-primary">
                {stat.value}
              </p>
              <p className="mt-1 text-xs md:text-sm leading-snug text-text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Youth Ambassadors */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 mb-8">
          <h3 className="text-lg font-extrabold text-dark-blue">
            Youth Ambassadors
          </h3>
          <a
            href="#get-involved"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-primary rounded-full hover:bg-primary-light transition-colors"
          >
            Become an Ambassador
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4 md:gap-6">
          {ambassadors.map((ambassador, i) => (
            <div key={i} className="text-center group">
              <div className="ambassador-photo w-16 h-16 md:w-27 md:h-27 mx-auto mb-2 rounded-full bg-gradient-to-br from-blue-100 to-sky-200 border-2 border-white shadow-md flex items-center justify-center overflow-hidden">
                {ambassador.img ? (
                  <img
                    src={ambassador.img}
                    alt={ambassador.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <User className="w-8 h-8 md:w-10 md:h-10 text-primary/40" />
                )}
              </div>
              <p className="text-xs font-semibold text-text-dark leading-tight">
                {ambassador.name}
              </p>
              <p className="text-[10px] text-text-muted">{ambassador.city}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
