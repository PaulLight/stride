import { getClient } from "@/lib/magento/client";
import { ProductsQuery } from "@/lib/magento/queries/products";

import type {
    ProductAttributeSortInput,
} from "@/lib/magento/generated/graphql";
import type {
    TrendingProduct
} from "@/lib/magento/types/products-widget"

const DEFAULT_SORT: ProductAttributeSortInput = {
    position: 'ASC' as const,
};

export async function getProducts(
    search = "",
    pageSize = 8,
    sort: ProductAttributeSortInput = DEFAULT_SORT
): Promise<TrendingProduct[]> {
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
