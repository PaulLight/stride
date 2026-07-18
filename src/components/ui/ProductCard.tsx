import Link from "next/link";
import Image from "next/image";

export default async function ProductCard({ product }: { product: any }) {
    return (
        <Link
            href={`/${product.url_key ?? ""}${product.url_suffix ?? ""}`}
            className="group"
        >
            {product.small_image?.url && (
                <div className="aspect-4/5 overflow-hidden rounded bg-mist/10">
                    <Image
                        src={product.small_image.url}
                        alt={product.small_image.label ?? product.name ?? ""}
                        width={400}
                        height={500}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
            )}
            <p className="mt-3 text-sm font-medium">
                {product.name}
            </p>
            <p className="mt-1 font-mono text-sm opacity-60">
                {product.price_range?.minimum_price?.final_price?.currency}{" "}
                {product.price_range?.minimum_price?.final_price?.value?.toFixed(2)}
            </p>
        </Link>
    );
}
