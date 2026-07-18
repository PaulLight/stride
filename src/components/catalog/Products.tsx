import { getCategoryProducts } from "@/lib/magento/api/category-products";
import ProductCard from "@/components/ui/ProductCard";

export default async function Products({ uid }: { uid: string }) {
    const { products, pageInfo, totalCount } = await getCategoryProducts(uid);

    return (
        <section className="mt-8">
            <p className="text-sm opacity-50 mb-6">
                {totalCount} products
            </p>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {products.map((product) => (
                    <ProductCard key={product.uid} product={product} />
                ))}
            </div>
        </section>
    );
}
