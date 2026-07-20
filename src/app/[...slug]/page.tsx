import { notFound } from "next/navigation";
import { getClient } from "@/lib/magento/client";
import { RouteQuery } from "@/lib/magento/queries/route";
import CategoryTree from "@/components/catalog/CategoryTree";

type Props = {
    params: Promise<{ slug: string[] }>;
    searchParams: Promise<Record<string, string>>;
}

export default async function RoutePage({ params, searchParams }: Props) {
    const { slug } = await params;
    const query = await searchParams;

    const path = slug.join("/");

    const { data } = await getClient().query({
        query: RouteQuery,
        variables: {
            url: path
        }
    })

    const route = data?.route;

    if (!route) {
        return notFound();
    }

    switch (route.__typename) {
        case "SimpleProduct":
        case "ConfigurableProduct":
        case "BundleProduct":
        case "GroupedProduct":
        case "DownloadableProduct":
        case "VirtualProduct":
            return (
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <p className="text-sm font-mono text-cobalt">{route.__typename}</p>
                    <h1 className="font-display text-3xl font-white mt-2">{route.name}</h1>
                    <p className="font-display text-sm mt-2">{route.sku}</p>
                </div>
            )
        case "CategoryTree":
            return (
                <CategoryTree
                    path={path}
                    route={route}
                    searchParams={query}
                />
            )
        case "CmsPage":
            return (
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <p className="text-sm font-mono text-cobalt">{route.__typename}</p>
                    <h1 className="font-display text-3xl font-white mt-2">{route.title}</h1>
                </div>
            )

        default:
            return notFound();
    }
}
