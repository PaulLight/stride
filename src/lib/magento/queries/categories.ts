import { graphql } from "@/lib/magento/generated";

export const CategoriesQuery = graphql(`
    query GetCategories {
        categories {
            items {
                uid
                children {
                    uid
                    url_key
                    url_suffix
                    include_in_menu
                    name
                    level
                }
            }
        }
    }
`)
