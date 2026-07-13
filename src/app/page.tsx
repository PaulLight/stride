import { getClient } from "@/lib/magento/client";
import { graphql } from "@/lib/magento/generated";

const StoreConfigQuery = graphql(`
    query StoreConfig {
        storeConfig {
            store_name 
        }
    }
`)

export default async function Home() {
    const { data } = await getClient().query({ query: StoreConfigQuery });

    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-6 px-16 py-32">
          <h1 className="font-display text-7xl font-black tracking-tight">
              {data?.storeConfig?.store_name ?? "STRIDE"}
          </h1>
      <p className="max-w-md text-center font-sans text-base text-paper/70">
        Headless storefront on Magento GraphQL + Next.js.
      </p>
      <p className="font-mono text-xl tabular-nums text-cobalt">
        SKU MJ-01 &nbsp;&middot;&nbsp; &euro;49.00
      </p>
    </div>
    );
}
