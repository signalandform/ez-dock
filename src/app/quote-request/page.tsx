"use client";

import { FormEvent, useState } from "react";

type QuoteState = {
  name: string;
  email: string;
  phone: string;
  location: string;
  application: string;
  notes: string;
};

const initialState: QuoteState = {
  name: "",
  email: "",
  phone: "",
  location: "",
  application: "",
  notes: "",
};

export default function QuoteRequestPage() {
  const [form, setForm] = useState<QuoteState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialState);
  };

  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-14">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
          EZ Dock Texas
        </p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900">
          Quote Request
        </h1>
        <p className="mt-4 text-slate-600">
          Complete this form to get details and pricing for the floating dock
          products you are interested in. If you are unsure which products fit
          your goals, our team can help recommend the right configuration.
        </p>
      </div>

      <form
        onSubmit={onSubmit}
        className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <label className="text-sm font-medium text-slate-700">
            Full Name
            <input
              required
              value={form.name}
              onChange={(event) =>
                setForm((previous) => ({ ...previous, name: event.target.value }))
              }
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-sky-600 focus:ring"
            />
          </label>

          <label className="text-sm font-medium text-slate-700">
            Email
            <input
              required
              type="email"
              value={form.email}
              onChange={(event) =>
                setForm((previous) => ({
                  ...previous,
                  email: event.target.value,
                }))
              }
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-sky-600 focus:ring"
            />
          </label>

          <label className="text-sm font-medium text-slate-700">
            Phone
            <input
              required
              value={form.phone}
              onChange={(event) =>
                setForm((previous) => ({
                  ...previous,
                  phone: event.target.value,
                }))
              }
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-sky-600 focus:ring"
            />
          </label>

          <label className="text-sm font-medium text-slate-700">
            Project Location
            <input
              required
              value={form.location}
              onChange={(event) =>
                setForm((previous) => ({
                  ...previous,
                  location: event.target.value,
                }))
              }
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-sky-600 focus:ring"
            />
          </label>
        </div>

        <label className="mt-4 block text-sm font-medium text-slate-700">
          Application Type
          <select
            required
            value={form.application}
            onChange={(event) =>
              setForm((previous) => ({
                ...previous,
                application: event.target.value,
              }))
            }
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-sky-600 focus:ring"
          >
            <option value="">Select one</option>
            <option value="residential">Residential Dock</option>
            <option value="pwc">PWC / BoatPort</option>
            <option value="commercial">Commercial / Marina</option>
            <option value="camp">Camp / HOA / Park</option>
            <option value="rental">Temporary Dock Rental</option>
          </select>
        </label>

        <label className="mt-4 block text-sm font-medium text-slate-700">
          Project Notes
          <textarea
            rows={5}
            value={form.notes}
            onChange={(event) =>
              setForm((previous) => ({
                ...previous,
                notes: event.target.value,
              }))
            }
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-sky-600 focus:ring"
            placeholder="Water depth, shoreline details, desired layout, timeline..."
          />
        </label>

        <button
          type="submit"
          className="mt-6 rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-800"
        >
          Submit Quote Request
        </button>

        {submitted ? (
          <p className="mt-4 rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            Thanks! Your demo quote request was submitted. In production, this
            would send your lead details to your CRM or email workflow.
          </p>
        ) : null}
      </form>
    </div>
  );
}
