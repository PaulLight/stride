import type { CategoryDataQuery } from "@/lib/magento/generated/graphql";
import {DeepNonNullable} from "@/lib/magento/types/core";

type CategoryProductsData = NonNullable<CategoryDataQuery['products']>;
type RawProductItems = NonNullable<CategoryProductsData['items']>;
type RawSortOptions = NonNullable<NonNullable<CategoryProductsData['sort_fields']>['options']>;

export type Product = NonNullable<RawProductItems[number]>;

export type RawPageInfo = NonNullable<CategoryProductsData['page_info']>;
export type DefinitePageInfo = DeepNonNullable<RawPageInfo>

export type SortOption = NonNullable<RawSortOptions[number]>;
export type SortFields = {
    __typename: "SortFields";
    default: string;
    options: SortOption[];
};

export type CategoryProductsResult = {
    products: Product[];
    pageInfo: DefinitePageInfo;
    sortFields: SortFields;
    totalCount: number;
};
