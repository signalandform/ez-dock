export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-14">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
          Contact
        </p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900">
          Talk With EZ Dock Texas
        </h1>
        <p className="mt-4 text-slate-600">
          We make your dock planning process simple. Reach out by phone or email
          and our team will guide you through product options and next steps.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">
            Office Information
          </h2>
          <dl className="mt-4 space-y-3 text-sm text-slate-700">
            <div>
              <dt className="font-semibold">Business Name</dt>
              <dd>EZ Dock of Texas, L.P.</dd>
            </div>
            <div>
              <dt className="font-semibold">Address</dt>
              <dd>3500 Raider Drive, Hurst, Texas 76053 USA</dd>
            </div>
            <div>
              <dt className="font-semibold">Email</dt>
              <dd>
                <a
                  href="mailto:sales@ezdocktexas.com"
                  className="text-sky-700 hover:text-sky-800"
                >
                  sales@ezdocktexas.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Toll-Free Phone</dt>
              <dd>
                <a
                  href="tel:8006548168"
                  className="text-sky-700 hover:text-sky-800"
                >
                  (800) 654-8168
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Local Mobile</dt>
              <dd>
                <a
                  href="tel:8176840202"
                  className="text-sky-700 hover:text-sky-800"
                >
                  (817) 684-0202
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Fax</dt>
              <dd>(817) 510-7909</dd>
            </div>
            <div>
              <dt className="font-semibold">Hours</dt>
              <dd>Weekdays: 8:00 AM to 5:00 PM | Saturday/Sunday: Closed</dd>
            </div>
          </dl>
        </section>

        <section className="rounded-xl border border-slate-200 bg-slate-900 p-6 text-white">
          <h2 className="text-xl font-semibold">Need a custom design?</h2>
          <p className="mt-3 text-sm text-slate-200">
            Share your shoreline goals, water depth details, and preferred
            watercraft. We will help you identify the right dock and access
            configuration.
          </p>
          <div className="mt-6 space-y-3">
            <a
              href="/quote-request"
              className="block rounded-full bg-sky-500 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-sky-600"
            >
              Request a Quote
            </a>
            <a
              href="tel:8006548168"
              className="block rounded-full border border-slate-400 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Call Sales Team
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
