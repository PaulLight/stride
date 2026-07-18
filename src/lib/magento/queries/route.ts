import { graphql } from "@/lib/magento/generated";

export const RouteQuery = graphql(`
    query ResolveRoute($url: String!) {
        route(url: $url) {
            __typename
            ... on ProductInterface {
                __typename
                sku
                name
                url_key
            }
            ... on CategoryTree {
                uid,
                name,
                url_key
            }
            ... on CmsPage {
                identifier
                title,
                url_key
            }
        }
    }
`)