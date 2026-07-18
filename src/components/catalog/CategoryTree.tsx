import { Suspense } from "react";
import Products from "@/components/catalog/Products"
import ProductsShimmer from "@/components/shimmer/ProductsShimmer"
import type { ResolveRouteQuery } from "@/lib/magento/generated/graphql";

type Route = NonNullable<ResolveRouteQuery['route']>
type Props = {
    route: Extract<Route, { __typename: 'CategoryTree' }>;
};

export default async function CategoryTree({ route }: Props) {
    const shimmer = (
        <section className="mt-8">
            <p className="text-sm opacity-50 mb-4">
                <div className="mb-4 h-4 w-24 animate-pulse rounded bg-mist/20" />
            </p>

            <ProductsShimmer length={12} />
        </section>
    )

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-display text-3xl font-white mt-2">{route.name}</h1>

            <Suspense fallback={shimmer}>
                <Products uid={route.uid} />
            </Suspense>
        </div>
    )
}
