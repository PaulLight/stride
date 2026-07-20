import { getClient } from "@/lib/magento/client";
import { CategoryProductsQuery } from "@/lib/magento/queries/category-products";

import type { ProductAttributeSortInput } from "@/lib/magento/generated/graphql";
import {
    RawPageInfo,
    SortFields,
    CategoryProductsResult,
    SortOption,
} from "@/lib/magento/types/category-products"

type Props = {
    uid: string;
    search?: string;
    pageSize?: number;
    currentPage: number;
    sort?: ProductAttributeSortInput,
    searchParams?: Record<string, string>
}

const DEFAULT_SORT: ProductAttributeSortInput = {
    position: 'ASC' as const,
};

export async function getCategoryProducts(props: Props): Promise<CategoryProductsResult> {
    const {
        uid = '0',
        search = '',
        pageSize = 12,
        currentPage = 1,
        sort = DEFAULT_SORT,
        searchParams
    } = props;
    const { data } = await getClient().query({
        query: CategoryProductsQuery,
        variables: {
            uid,
            search,
            pageSize,
            currentPage,
            sort
        }
    });

    const { items, page_info, sort_fields, total_count } = data?.products ?? {};
    const { current_page, page_size, total_pages } = page_info ?? {}

    const products = (items ?? []).filter(
        (item): item is NonNullable<typeof item> => item != null
    )

    const pageInfo: RawPageInfo = page_info ?? {
        __typename: "SearchResultPageInfo" as const,
        current_page: current_page ?? currentPage,
        page_size: page_size ?? pageSize,
        total_pages: total_pages ?? 1,
    };

    const sortFields: SortFields = {
        __typename: "SortFields" as const,
        default: sort_fields?.default ?? "position",
        options: (sort_fields?.options ?? []).filter(
            (opt): opt is SortOption => opt != null
        ),
    };

    return {
        products,
        pageInfo,
        sortFields,
        totalCount: total_count ?? 0,
    };
}
