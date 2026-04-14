const products = [
  {
    title: "Dock Sections",
    description:
      "Create custom dock configurations with sturdy modular dock platform options.",
  },
  {
    title: "Dock Packages",
    description:
      "From simple waterfront systems to multi-watercraft layouts, start with a package and customize as needed.",
  },
  {
    title: "PWC Ports",
    description:
      "Innovative drive-on PWC lifts that make launch, docking, and storage quick and repeatable.",
  },
  {
    title: "EZ BoatPort",
    description:
      "Drive-on, drive-off floating boat docks designed for both beginner and experienced boaters.",
  },
  {
    title: "Kayak Launch",
    description:
      "Stable entry and docking systems for kayaks and canoes with reliable access at water level.",
  },
  {
    title: "Dock Anchoring Systems",
    description:
      "Secure, weather-ready anchoring solutions to protect docks in changing shoreline conditions.",
  },
  {
    title: "Dock Accessories",
    description:
      "Dock boxes, lighting, ladders, and more to make your waterfront area practical and safe.",
  },
  {
    title: "Gangways",
    description:
      "Access your dock sections with greater stability and safer shoreline transitions.",
  },
];

export default function ProductsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-14">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
          EZ Dock Texas
        </p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900">Products</h1>
        <p className="mt-4 text-slate-600">
          EZ Dock systems are built for waterfront homes, vacation properties,
          marinas, camps, parks, and commercial facilities. Durable modular
          components allow nearly unlimited dock configurations including
          rectangular, L-shaped, I-shaped, and T-shaped layouts.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {products.map((product) => (
          <article
            key={product.title}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-slate-900">
              {product.title}
            </h2>
            <p className="mt-2 text-sm text-slate-600">{product.description}</p>
          </article>
        ))}
      </div>

      <section className="mt-12 rounded-2xl bg-sky-950 p-8 text-white">
        <h2 className="text-2xl font-bold">Need help with configuration?</h2>
        <p className="mt-3 max-w-3xl text-sky-100">
          Not sure which layout is right for your shoreline? Our team can help
          evaluate your location, usage goals, and watercraft needs to build a
          practical design and quote.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/quote-request"
            className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-sky-900 transition hover:bg-sky-100"
          >
            Start Quote Request
          </a>
          <a
            href="/contact"
            className="rounded-full border border-sky-300 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-900"
          >
            Contact Sales
          </a>
        </div>
      </section>
    </div>
  );
}
