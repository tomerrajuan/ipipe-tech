import { CtaBand, PageHero } from "../components/PageHero"
import { asset, products } from "../data"
import { Reveal } from "../motion"

export function Products() {
  return (
    <>
      <PageHero
        eyebrow="Our products"
        title="A sub for every diameter."
        body="From tight bends to long hauls, Neptune, Koi, and Dolphin cover pipe diameters from 4″ to 30″, pressures up to 50 bar, and distances up to 10 km. Precision, performance, and reliability underground."
      />

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="overflow-x-auto rounded-3xl border border-line bg-cream">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-foam text-muted">
              <tr>
                <th className="px-6 py-4 font-medium">Model</th>
                <th className="px-6 py-4 font-medium">Diameter</th>
                <th className="px-6 py-4 font-medium">Pressure</th>
                <th className="px-6 py-4 font-medium">Distance</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.slug} className="border-t border-line">
                  <td className="px-6 py-4 font-semibold">{product.name}</td>
                  <td className="px-6 py-4 text-muted">
                    {product.diameter} ({product.diameterCm})
                  </td>
                  <td className="px-6 py-4 text-muted">{product.pressure}</td>
                  <td className="px-6 py-4 text-muted">{product.distance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-16 space-y-24">
          {products.map((product, i) => (
            <Reveal key={product.slug}>
              <article
                className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
              >
                <div className="overflow-hidden rounded-3xl border border-line bg-foam">
                  <img
                    src={asset(product.image)}
                    alt={product.name}
                    className="h-full w-full object-contain p-8"
                  />
                </div>
                <div>
                  <p className="text-xs tracking-[0.18em] text-muted uppercase">{product.role}</p>
                  <h2 className="mt-2 text-4xl font-semibold tracking-tight">{product.name}</h2>
                  <p className="mt-4 text-muted">{product.summary}</p>
                  <dl className="mt-8 grid grid-cols-3 gap-4">
                    <div>
                      <dt className="text-xs text-muted">Diameter</dt>
                      <dd className="mt-1 font-semibold">{product.diameter}</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-muted">Pressure</dt>
                      <dd className="mt-1 font-semibold">{product.pressure}</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-muted">Range</dt>
                      <dd className="mt-1 font-semibold">{product.distance}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  )
}
