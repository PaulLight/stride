import { getClient } from "@/lib/magento/client";
import { CategoryProductsQuery } from "@/lib/magento/queries/category-products";
import type {
    ProductAttributeSortInput,
    CategoryDataQuery
} from "@/lib/magento/generated/graphql";

const DEFAULT_SORT: ProductAttributeSortInput = {
    position: 'ASC' as const,
};

type ProductsData = NonNullable<CategoryDataQuery['products']>;
type ProductItems = NonNullable<ProductsData['items']>;
type PageInfo = NonNullable<ProductsData['page_info']>;
type Product = NonNullable<ProductItems[number]>;
type CategoryData = {
    products: Product[],
    pageInfo: PageInfo
    totalCount: number
}

export async function getCategoryProducts(
    categoryUid: string = '0',
    search = '',
    pageSize = 12,
    currentPage = 1,
    sort: ProductAttributeSortInput = DEFAULT_SORT
): Promise<CategoryData> {
    const { data } = await getClient().query({
        query: CategoryProductsQuery,
        variables: {
            categoryUid,
            search,
            pageSize,
            currentPage,
            sort
        }
    });

    const { items, page_info, total_count } = data?.products ?? {};

    const products = (items ?? []).filter(
        (item): item is NonNullable<typeof item> => item != null
    )

    const pageInfo: PageInfo = page_info ?? {
        __typename: "SearchResultPageInfo" as const,
        current_page: currentPage,
        page_size: pageSize,
        total_pages: 1,
    };

    return {
        products,
        pageInfo,
        totalCount: total_count ?? 0,
    };
}
