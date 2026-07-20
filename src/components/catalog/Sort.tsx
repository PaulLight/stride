'use client'

import { useRouter, useSearchParams, usePathname} from "next/navigation";
import type { SortFields } from "@/lib/magento/types/category-products";

export default function Sort({ fields } : { fields: SortFields }) {
    const { options } = fields;
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname= usePathname();

    const crrSortValue = searchParams.get('sort')

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('sort', e.target.value)
        params.delete('page')
        router.push(`${pathname}?${params.toString()}`)
    }

    return (
        <div className="mb-8">
            <label className="sr-only" htmlFor="product-sort">
                Sort by:
            </label>
            <select
                name="sorting"
                id="product-sort"
                defaultValue={crrSortValue ?? fields.default}
                aria-label="Sort products"
                onChange={handleSelect}
                className="rounded border border-(--border) bg-transparent px-3 py-2 text-sm font-mono"
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value ?? ''}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}
