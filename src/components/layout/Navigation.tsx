import Link from 'next/link';
import { getCategories } from "@/lib/magento/api/categories";

export default async function Navigation() {
    const categories = await getCategories();

    return (
        <nav className="hidden gap-8 sm:flex">
            {categories.map((item) => (
                <Link
                    key={item.uid}
                    href={`/${item.url_key ?? ""}${item.url_suffix ?? ""}`}
                    className="text-sm font-medium opacity-70 transition-opacity hover:opacity-100"
                >
                    {item.name}
                </Link>
            ))}
        </nav>
    )
}
