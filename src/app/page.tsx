import Image from "next/image";

type ProductCard = {
  title: string;
  description: string;
  image?: string;
};

export default function Home() {
  const applications = [
    "PWC Docks",
    "Residential Docks",
    "Commercial Docks",
    "Stock Pond Docks",
    "Camp Docks",
    "HOA Docks",
    "DIY Docks",
    "Floating Dock Rentals",
  ];

  const products: ProductCard[] = [
    {
      title: "Dock Sections",
      description:
        "Create custom dock configurations with sturdy modular platform options.",
      image: "/images/ezdock/dock-sections.jpg",
    },
    {
      title: "Dock Packages",
      description:
        "Start from simple waterfront access or build to multi-watercraft marina layouts.",
    },
    {
      title: "PWC Ports",
      description:
        "Drive-on PWC lifts designed for quick launch and dry storage between rides.",
      image: "/images/ezdock/pwc-ports.jpg",
    },
    {
      title: "EZ BoatPort",
      description:
        "Drive-on, drive-off floating boat docks built for convenience and protection.",
      image: "/images/ezdock/boatport.jpg",
    },
    {
      title: "Kayak Launch",
      description:
        "Stable launch systems with easy entry and exit for kayaks and canoes.",
      image: "/images/ezdock/kayak-launch.jpg",
    },
    {
      title: "Dock Anchoring Systems",
      description:
        "Weather-ready anchoring options to help secure your dock in changing conditions.",
      image: "/images/ezdock/anchoring.jpg",
    },
    {
      title: "Dock Accessories",
      description:
        "Lighting, ladders, boxes, and add-ons to make your dock safer and more practical.",
      image: "/images/ezdock/accessories.jpg",
    },
    {
      title: "Gangways",
      description:
        "Secure shoreline access with added stability while moving to your floating dock.",
      image: "/images/ezdock/gangways.jpg",
    },
  ];

  return (
    <div>
      <section className="bg-sky-950 text-white">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-16 md:grid-cols-2">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
              Commitment to service
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Floating Docks Built to Last
            </h1>
            <p className="text-sky-100">
              Family-owned in Texas since 2000, designing and installing
              modular floating dock systems across Texas and surrounding states.
              Built with American-made materials and designed for long-term
              durability with minimal maintenance.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/quote-request"
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-sky-900 transition hover:bg-sky-100"
              >
                Get a Custom Quote
              </a>
              <a
                href="/products"
                className="rounded-full border border-sky-300 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-900"
              >
                Explore Products
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <Image
              src="/images/ezdock/hero-residential.jpg"
              alt="Residential floating dock installation"
              width={1000}
              height={667}
              className="h-64 w-full rounded-2xl object-cover ring-1 ring-sky-400/30 md:h-full"
              priority
            />
            <div className="rounded-2xl bg-sky-900/70 p-6 ring-1 ring-sky-400/30">
              <h2 className="text-xl font-semibold text-sky-100">
                Why clients choose EZ Dock style systems
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-sky-100">
                <li>Made in the USA with weather-resistant materials</li>
                <li>Modular, customizable layouts for any shoreline</li>
                <li>Low maintenance compared to traditional wood docks</li>
                <li>Proven performance in harsh weather conditions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl bg-white px-6 py-14">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Customizable for Any Application
          </h2>
          <p className="mt-2 max-w-3xl text-slate-600">
            EZ Dock has served residential, commercial, industrial, and
            government projects since 1991. Whether you need a private lake
            dock, kayak launch, marina access, or temporary event rental, this
            modular platform adapts to your exact use case.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {applications.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-medium text-slate-700 shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-14">
          <h2 className="text-3xl font-bold text-slate-900">
            Product Categories
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {products.map((product) => (
              <article
                key={product.title}
                className="rounded-xl border border-slate-200 p-5"
              >
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={1200}
                    height={800}
                    className="mb-4 h-40 w-full rounded-lg object-cover"
                  />
                ) : null}
                <h3 className="text-lg font-semibold text-slate-900">
                  {product.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {product.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-14">
        <div className="rounded-2xl bg-slate-900 p-8 text-white md:p-10">
          <h2 className="text-3xl font-bold">Need temporary dock rentals?</h2>
          <p className="mt-3 max-w-3xl text-slate-200">
            Dock rentals are available for fishing tournaments, triathlons, swim
            events, boat races, concerts, and temporary work platforms.
            Sections are easy to deploy and can be reconfigured as needs change.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/quote-request"
              className="rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
            >
              Request Pricing
            </a>
            <a
              href="/contact"
              className="rounded-full border border-slate-400 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Talk to the Team
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <p className="text-sm font-medium text-slate-700">
            Cooperative purchasing options available through:
          </p>
          <div className="flex items-center gap-6">
            <Image
              src="/images/ezdock/sourcewell.png"
              alt="Sourcewell logo"
              width={200}
              height={67}
              className="h-10 w-auto object-contain"
            />
            <Image
              src="/images/ezdock/buyboard.png"
              alt="BuyBoard logo"
              width={200}
              height={67}
              className="h-10 w-auto object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
