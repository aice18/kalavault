import { processSteps } from '@/lib/data';

export function ProcessSteps() {
  return (
    <section className="py-section-gap px-5 md:px-20 bg-subtle-smoke">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.35em] text-gallery-gold">Our Process</p>
          <h2 className="mt-4 text-4xl font-serif text-matte-black">Art Simplified for Your Life</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {processSteps.map((step) => (
            <div key={step.number} className="rounded-[32px] border border-black/5 bg-white p-8 text-center shadow-soft">
              <div className="text-sm uppercase tracking-[0.35em] text-secondary-fixed">{step.number}</div>
              <h3 className="mt-5 text-xl font-semibold text-matte-black">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-on-surface-variant">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
