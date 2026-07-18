/* eslint-disable */
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
/** The list of available currency codes. */
export type CurrencyEnum =
  | 'AED'
  | 'AFN'
  | 'ALL'
  | 'AMD'
  | 'ANG'
  | 'AOA'
  | 'ARS'
  | 'AUD'
  | 'AWG'
  | 'AZM'
  | 'AZN'
  | 'BAM'
  | 'BBD'
  | 'BDT'
  | 'BGN'
  | 'BHD'
  | 'BIF'
  | 'BMD'
  | 'BND'
  | 'BOB'
  | 'BRL'
  | 'BSD'
  | 'BTN'
  | 'BUK'
  | 'BWP'
  | 'BYN'
  | 'BZD'
  | 'CAD'
  | 'CDF'
  | 'CHE'
  | 'CHF'
  | 'CHW'
  | 'CLP'
  | 'CNY'
  | 'COP'
  | 'CRC'
  | 'CUP'
  | 'CVE'
  | 'CZK'
  | 'DJF'
  | 'DKK'
  | 'DOP'
  | 'DZD'
  | 'EEK'
  | 'EGP'
  | 'ERN'
  | 'ETB'
  | 'EUR'
  | 'FJD'
  | 'FKP'
  | 'GBP'
  | 'GEK'
  | 'GEL'
  | 'GHS'
  | 'GIP'
  | 'GMD'
  | 'GNF'
  | 'GQE'
  | 'GTQ'
  | 'GYD'
  | 'HKD'
  | 'HNL'
  | 'HRK'
  | 'HTG'
  | 'HUF'
  | 'IDR'
  | 'ILS'
  | 'INR'
  | 'IQD'
  | 'IRR'
  | 'ISK'
  | 'JMD'
  | 'JOD'
  | 'JPY'
  | 'KES'
  | 'KGS'
  | 'KHR'
  | 'KMF'
  | 'KPW'
  | 'KRW'
  | 'KWD'
  | 'KYD'
  | 'KZT'
  | 'LAK'
  | 'LBP'
  | 'LKR'
  | 'LRD'
  | 'LSL'
  | 'LSM'
  | 'LTL'
  | 'LVL'
  | 'LYD'
  | 'MAD'
  | 'MDL'
  | 'MGA'
  | 'MKD'
  | 'MMK'
  | 'MNT'
  | 'MOP'
  | 'MRO'
  | 'MUR'
  | 'MVR'
  | 'MWK'
  | 'MXN'
  | 'MYR'
  | 'MZN'
  | 'NAD'
  | 'NGN'
  | 'NIC'
  | 'NOK'
  | 'NPR'
  | 'NZD'
  | 'OMR'
  | 'PAB'
  | 'PEN'
  | 'PGK'
  | 'PHP'
  | 'PKR'
  | 'PLN'
  | 'PYG'
  | 'QAR'
  | 'RHD'
  | 'ROL'
  | 'RON'
  | 'RSD'
  | 'RUB'
  | 'RWF'
  | 'SAR'
  | 'SBD'
  | 'SCR'
  | 'SDG'
  | 'SEK'
  | 'SGD'
  | 'SHP'
  | 'SKK'
  | 'SLL'
  | 'SOS'
  | 'SRD'
  | 'STD'
  | 'SVC'
  | 'SYP'
  | 'SZL'
  | 'THB'
  | 'TJS'
  | 'TMM'
  | 'TND'
  | 'TOP'
  | 'TRL'
  | 'TRY'
  | 'TTD'
  | 'TWD'
  | 'TZS'
  | 'UAH'
  | 'UGX'
  | 'USD'
  | 'UYU'
  | 'UZS'
  | 'VEB'
  | 'VEF'
  | 'VND'
  | 'VUV'
  | 'WST'
  | 'XCD'
  | 'XOF'
  | 'XPF'
  | 'YER'
  | 'YTL'
  | 'ZAR'
  | 'ZMK'
  | 'ZWD';

/** Specifies the attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order. It's possible to sort products using searchable attributes with enabled 'Use in Filter Options' option */
export type ProductAttributeSortInput = {
  /** Attribute label: Product Name */
  name?: SortEnum | null | undefined;
  /** Sort by the position assigned to each product. */
  position?: SortEnum | null | undefined;
  /** Attribute label: Price */
  price?: SortEnum | null | undefined;
  /** Sort by the search relevance score (default). */
  relevance?: SortEnum | null | undefined;
};

/** Indicates whether to return results in ascending or descending order. */
export type SortEnum =
  | 'ASC'
  | 'DESC';

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { __typename: 'Query', categories: { __typename: 'CategoryResult', items: Array<{ __typename: 'CategoryTree', uid: string, children: Array<{ __typename: 'CategoryTree', uid: string, url_key: string | null, url_suffix: string | null, include_in_menu: number | null, name: string | null, level: number | null } | null> | null } | null> | null } | null };

export type TrendingProductsQueryVariables = Exact<{
  search?: string | null | undefined;
  sort?: ProductAttributeSortInput | null | undefined;
  pageSize?: number | null | undefined;
}>;


export type TrendingProductsQuery = { __typename: 'Query', products: { __typename: 'Products', items: Array<
      | { __typename: 'BundleProduct', uid: string, name: string | null, sku: string | null, url_key: string | null, url_suffix: string | null, small_image: { __typename: 'ProductImage', url: string | null, label: string | null } | null, price_range: { __typename: 'PriceRange', minimum_price: { __typename: 'ProductPrice', final_price: { __typename: 'Money', currency: CurrencyEnum | null, value: number | null } } } }
      | { __typename: 'ConfigurableProduct', uid: string, name: string | null, sku: string | null, url_key: string | null, url_suffix: string | null, small_image: { __typename: 'ProductImage', url: string | null, label: string | null } | null, price_range: { __typename: 'PriceRange', minimum_price: { __typename: 'ProductPrice', final_price: { __typename: 'Money', currency: CurrencyEnum | null, value: number | null } } } }
      | { __typename: 'DownloadableProduct', uid: string, name: string | null, sku: string | null, url_key: string | null, url_suffix: string | null, small_image: { __typename: 'ProductImage', url: string | null, label: string | null } | null, price_range: { __typename: 'PriceRange', minimum_price: { __typename: 'ProductPrice', final_price: { __typename: 'Money', currency: CurrencyEnum | null, value: number | null } } } }
      | { __typename: 'GroupedProduct', uid: string, name: string | null, sku: string | null, url_key: string | null, url_suffix: string | null, small_image: { __typename: 'ProductImage', url: string | null, label: string | null } | null, price_range: { __typename: 'PriceRange', minimum_price: { __typename: 'ProductPrice', final_price: { __typename: 'Money', currency: CurrencyEnum | null, value: number | null } } } }
      | { __typename: 'SimpleProduct', uid: string, name: string | null, sku: string | null, url_key: string | null, url_suffix: string | null, small_image: { __typename: 'ProductImage', url: string | null, label: string | null } | null, price_range: { __typename: 'PriceRange', minimum_price: { __typename: 'ProductPrice', final_price: { __typename: 'Money', currency: CurrencyEnum | null, value: number | null } } } }
      | { __typename: 'VirtualProduct', uid: string, name: string | null, sku: string | null, url_key: string | null, url_suffix: string | null, small_image: { __typename: 'ProductImage', url: string | null, label: string | null } | null, price_range: { __typename: 'PriceRange', minimum_price: { __typename: 'ProductPrice', final_price: { __typename: 'Money', currency: CurrencyEnum | null, value: number | null } } } }
     | null> | null } | null };

export type ResolveRouteQueryVariables = Exact<{
  url: string;
}>;


export type ResolveRouteQuery = { __typename: 'Query', route:
    | { __typename: 'BundleProduct', sku: string | null, name: string | null, url_key: string | null }
    | { __typename: 'CategoryTree', uid: string, name: string | null, url_key: string | null }
    | { __typename: 'CmsPage', identifier: string | null, title: string | null, url_key: string | null }
    | { __typename: 'ConfigurableProduct', sku: string | null, name: string | null, url_key: string | null }
    | { __typename: 'DownloadableProduct', sku: string | null, name: string | null, url_key: string | null }
    | { __typename: 'GroupedProduct', sku: string | null, name: string | null, url_key: string | null }
    | { __typename: 'RoutableUrl' }
    | { __typename: 'SimpleProduct', sku: string | null, name: string | null, url_key: string | null }
    | { __typename: 'VirtualProduct', sku: string | null, name: string | null, url_key: string | null }
   | null };


export const GetCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"url_key"}},{"kind":"Field","name":{"kind":"Name","value":"url_suffix"}},{"kind":"Field","name":{"kind":"Name","value":"include_in_menu"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"level"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCategoriesQuery, GetCategoriesQueryVariables>;
export const TrendingProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TrendingProducts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ProductAttributeSortInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"url_key"}},{"kind":"Field","name":{"kind":"Name","value":"url_suffix"}},{"kind":"Field","name":{"kind":"Name","value":"small_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"price_range"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"minimum_price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"final_price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<TrendingProductsQuery, TrendingProductsQueryVariables>;
export const ResolveRouteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ResolveRoute"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"url"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"route"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"url"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductInterface"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url_key"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CategoryTree"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url_key"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CmsPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"identifier"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url_key"}}]}}]}}]}}]} as unknown as DocumentNode<ResolveRouteQuery, ResolveRouteQueryVariables>;