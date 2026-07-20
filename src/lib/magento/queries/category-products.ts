import { graphql } from "@/lib/magento/generated";

export const CategoryProductsQuery = graphql(`
    query categoryData(
        $uid: String!
        $search: String
        $currentPage: Int
        $sort: ProductAttributeSortInput
        $pageSize: Int
    ) {
        products(
            search: $search
            sort: $sort
            currentPage: $currentPage
            filter: { category_uid: { eq: $uid } }
            pageSize: $pageSize
        ) {
            total_count
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
            page_info {
                __typename
                current_page
                page_size
                total_pages
            }
            sort_fields {
                __typename
                default
                options {
                    __typename
                    label
                    value
                }
            }
        }
    }
`)
