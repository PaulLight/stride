import type { ProductAttributeSortInput, TrendingProductsQuery } from "@/lib/magento/generated/graphql";
import { getClient } from "@/lib/magento/client";
import { ProductsQuery } from "@/lib/magento/queries/products";

const DEFAULT_SORT: ProductAttributeSortInput = {
    position: 'ASC' as const,
};

type ProductsData = NonNullable<TrendingProductsQuery['products']>;
type ProductItems = NonNullable<ProductsData['items']>;
type Product = NonNullable<ProductItems[number]>;

export async function getProducts(
    search = "",
    pageSize = 8,
    sort: ProductAttributeSortInput = DEFAULT_SORT
): Promise<Product[]> {
    const { data } = await getClient().query({
        query: ProductsQuery,
        variables: {
            search,
            pageSize,
            sort,
        },
    });

    const { items } = data?.products ?? {};

    return (items ?? []).filter(
        (item): item is NonNullable<typeof item> => item != null
    );
}
