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

export default function Ambassadors() {
  return (
    <section id="ambassadors" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary-light mb-8">
          JalSeva Ambassadors
        </p>

        <div className="grid lg:grid-cols-[3fr_1fr] gap-10 items-start">
          {/* Ambassador Grid */}
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

          {/* Right CTA */}
          <div className="lg:text-right space-y-4">
            <h3 className="text-xl md:text-2xl font-extrabold text-primary leading-tight">
              Young
              <br />
              Changemakers
              <br />
              for a Greener
              <br />
              Tomorrow.
            </h3>
            <a
              href="#get-involved"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-primary rounded-full hover:bg-primary-light transition-colors"
            >
              Become an Ambassador
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}