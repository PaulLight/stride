import type { TrendingProductsQuery } from "@/lib/magento/generated/graphql";

type TrendingData = NonNullable<TrendingProductsQuery['products']>;
type TrendingItems = NonNullable<TrendingData['items']>;
export type TrendingProduct = NonNullable<TrendingItems[number]>;