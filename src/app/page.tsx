type ServiceCard = {
  title: string;
  description: string;
};

export default function Home() {
  const services: ServiceCard[] = [
    {
      title: "Dock Design & Planning",
      description:
        "Collaborative planning for private, municipal, and commercial waterfront projects.",
    },
    {
      title: "Product Specification",
      description:
        "Guidance on dock sections, PWC ports, gangways, anchoring, and accessories.",
    },
    {
      title: "Project Coordination",
      description:
        "Support from early concept through ordering, delivery, and installation planning.",
    },
    {
      title: "Master Layout Planning",
      description:
        "Efficient dock layouts designed to fit shoreline constraints and long-term use.",
    },
    {
      title: "Rental & Event Docks",
      description:
        "Temporary floating systems for races, festivals, tournaments, and special events.",
    },
    {
      title: "Commercial Program Support",
      description:
        "Assistance for camps, marinas, HOAs, parks, and public procurement opportunities.",
    },
  ];

  const industries = [
    "Hospitality",
    "Healthcare / EMS",
    "Corporate",
    "Industrial",
    "Retail & Entertainment",
    "Government",
    "Education",
    "Camp & HOA",
  ];

  return (
    <div className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-16 md:grid-cols-2 md:items-center">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
              Your Vision, Our Vision
            </p>
            <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              Bring Your Waterfront Project to Life
            </h1>
            <p className="max-w-xl text-slate-600">
              EZ Dock of Texas delivers complete floating dock solutions for
              residential and commercial properties. Our team helps you move
              from concept to completion with practical layouts and dependable
              products built for long-term performance.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/quote-request"
                className="rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-800"
              >
                Start My Project
              </a>
              <a
                href="/products"
                className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Explore Products
              </a>
            </div>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-sky-900 via-sky-800 to-slate-900 p-8 text-white shadow-xl">
            <p className="text-sm font-medium text-sky-100">
              Trusted by waterfront property owners, marinas, and municipalities
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              <div>
                <p className="text-3xl font-bold">25+</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-sky-200">
                  Years in Texas
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold">2,500+</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-sky-200">
                  Projects
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold">100%</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-sky-200">
                  Modular Systems
                </p>
              </div>
            </div>
            <div className="mt-8 rounded-2xl bg-white/10 p-4 ring-1 ring-white/20">
              <p className="text-sm text-sky-100">
                Built with weather-resistant materials, low-maintenance decking,
                and layout flexibility that adapts as your needs grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-14">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            Our Services
          </p>
          <h2 className="text-3xl font-bold text-slate-900">
            Comprehensive Dock Planning and Product Support
          </h2>
          <p className="mt-3 text-slate-600">
            We provide a full menu of services to make your waterfront project
            straightforward, efficient, and aligned to your goals.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-6 py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            Experience the Difference
          </p>
          <h2 className="text-3xl font-bold text-slate-900">
            Core Values Behind Every Project
          </h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            We prioritize responsive communication, practical recommendations,
            and long-term client relationships on every job.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {[
              "Community",
              "Integrity",
              "Collaboration",
              "Leadership",
              "Relationships",
              "Creativity",
            ].map((value) => (
              <div
                key={value}
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700"
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-14">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            Featured Applications
          </p>
          <h2 className="text-3xl font-bold text-slate-900">
            See What We Build
          </h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            "Residential Lakefront Docks",
            "Marina Access Expansions",
            "Public Recreation Launches",
          ].map((item) => (
            <article
              key={item}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <div className="h-40 bg-gradient-to-br from-sky-100 via-slate-100 to-sky-200" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">{item}</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Durable modular dock solutions designed for heavy use, easier
                  maintenance, and flexible future expansion.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            Industries We Serve
          </p>
          <h2 className="text-3xl font-bold text-slate-900">
            Built for Many Operational Needs
          </h2>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry}
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-14">
        <div className="rounded-3xl bg-slate-900 p-8 text-white md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
            Nationwide Support
          </p>
          <h2 className="mt-3 text-3xl font-bold">
            Expert Floating Dock Guidance Across the Region
          </h2>
          <p className="mt-3 max-w-3xl text-slate-200">
            Whether you are planning a private dock upgrade, a camp waterfront,
            or a municipal launch project, our team can help you scope the
            right solution and keep your timeline moving.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/quote-request"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Start Your Project
            </a>
            <a
              href="/contact"
              className="rounded-full border border-slate-400 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Contact the Team
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-6 py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            Testimonials
          </p>
          <h2 className="text-3xl font-bold text-slate-900">
            What Clients Say About Our Work
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <blockquote className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-700 shadow-sm">
              "The team listened closely to our requirements and gave us a
              practical dock plan that matched our budget and timeline.
              Communication stayed clear from start to finish."
              <footer className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Operations Director, Private Marina
              </footer>
            </blockquote>
            <blockquote className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-700 shadow-sm">
              "EZ Dock of Texas made the process simple. Their recommendations
              improved our launch access and reduced maintenance concerns for
              our long-term waterfront plan."
              <footer className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Facilities Manager, Camp Program
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
}
