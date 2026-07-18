import Link from "next/link"
import Image from "next/image"
import { getCategories } from "@/lib/magento/api/categories";
import { getProducts } from "@/lib/magento/api/products";

export default async function Home() {
    const [categories, products] = await Promise.all([
        getCategories(),
        getProducts(),
    ]);

    return (
          <>
              <section className="flex flex-col items-center justify-center px-4 py-32 text-center">
                  <h1 className="font-display text-5xl font-black tracking-tight sm:text-7xl">
                      BUILT TO MOVE.
                  </h1>
                  <p className="mt-4 max-w-md text-base opacity-60">
                      Headless storefront on Magento GraphQL + Next.js.
                  </p>
                  <Link
                      href="/women.html"
                      className="mt-8 inline-block bg-cobalt px-8 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-90"
                  >
                      Shop Now
                  </Link>
              </section>

              <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <h2 className="font-display text-2xl font-black tracking-tight">
                      Shop by Category
                  </h2>
                  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                      {categories.map((cat) => (
                          <Link
                              key={cat.uid}
                              href={`/${cat.url_key ?? ""}${cat.url_suffix ?? ""}`}
                              className="group flex h-40 items-end rounded bg-mist/20 p-6 transition-colors hover:bg-mist/40"
                          >
                            <span className="font-display text-xl font-black">
                                {cat.name}
                            </span>
                          </Link>
                      ))}
                  </div>
              </section>

              <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                  <h2 className="font-display text-2xl font-black tracking-tight">
                      Trending Now
                  </h2>
                  <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                      {products.map((product) => (
                          <Link
                              key={product.uid}
                              href={`/${product.url_key ?? ""}${product.url_suffix ?? ""}`}
                              className="group"
                          >
                              {product.small_image?.url && (
                                  <div className="aspect-4/5 overflow-hidden rounded bg-mist/10">
                                      <Image
                                          src={product.small_image.url}
                                          alt={product.small_image.label ?? product.name ?? ""}
                                          width={400}
                                          height={500}
                                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                      />
                                  </div>
                              )}
                              <p className="mt-3 text-sm font-medium">
                                  {product.name}
                              </p>
                              <p className="mt-1 font-mono text-sm opacity-60">
                                  {product.price_range?.minimum_price?.final_price?.currency}{" "}
                                  {product.price_range?.minimum_price?.final_price?.value?.toFixed(2)}
                              </p>
                          </Link>
                      ))}
                  </div>
              </section>
        </>
    );
}
