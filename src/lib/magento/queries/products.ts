import { graphql } from "@/lib/magento/generated";

export const ProductsQuery = graphql(`
    query TrendingProducts($search: String, $sort: ProductAttributeSortInput, $pageSize: Int) {
        products(
            search: $search
            sort: $sort
            pageSize: $pageSize
        ) {
            items {
                uid
                name
                sku
                url_key
                url_suffix
                small_image {
                    url
                    label

                }
                price_range {
                    minimum_price {
                        final_price {
                            currency
                            value
                        }
                    }
                }
            }
        }
    }
`)
