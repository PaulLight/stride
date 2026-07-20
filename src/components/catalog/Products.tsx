import { getCategoryProducts } from "@/lib/magento/api/category-products";
import Sort from "@/components/catalog/Sort"
import ProductCard from "@/components/ui/ProductCard";
import Pagination from "@/components/catalog/Pagination";
import type { ResolveRouteQuery } from "@/lib/magento/generated/graphql";

type Route = NonNullable<ResolveRouteQuery['route']>

type Props = {
    path: string;
    route: Extract<Route, { __typename: 'CategoryTree' }>;
    searchParams: Record<string, string>;
}

export default async function Products({ path, route, searchParams }: Props) {
    const params = new URLSearchParams(searchParams);
    const currentPage = parseInt(params.get('page') || '1');

    const {
        products,
        pageInfo,
        sortFields,
        totalCount
    } = await getCategoryProducts({
        uid: route.uid,
        currentPage: currentPage,
        searchParams
    });

    return (
        <section className="my-8">
            <p className="text-sm opacity-50 mb-6">
                {totalCount} products
            </p>
            <Sort fields={sortFields}/>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {products.map((product) => (
                    <ProductCard key={product.uid} product={product} />
                ))}
            </div>
            <Pagination
                path={path}
                pageInfo={pageInfo}
                searchParams={searchParams}
            />
        </section>
    );
}
