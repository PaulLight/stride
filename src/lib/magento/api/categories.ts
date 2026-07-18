import { getClient } from "@/lib/magento/client";
import { CategoriesQuery } from "@/lib/magento/queries/categories";

export async function getCategories() {
    const { data } = await getClient().query({
        query: CategoriesQuery,
    });

    const { children } = data?.categories?.items?.[0] ?? {};

    return (children ?? []).filter(
        (item): item is NonNullable<typeof item> =>
            item != null && item.include_in_menu === 1
    );
}
