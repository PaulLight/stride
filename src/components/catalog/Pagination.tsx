import { DefinitePageInfo } from "@/lib/magento/types/category-products";
import Link from "next/link";

type Props = {
    path: string;
    pageInfo: DefinitePageInfo,
    searchParams: Record<string, string>
}

const DEFAULT_STEP = 2;

export default async function Pagination({ path, pageInfo, searchParams }: Props) {
    const {
        total_pages = 1,
        current_page,
    } = pageInfo;

    if (total_pages <= 1) return null;

    const buildUrl = (page: number) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', page.toString())

        return `\/${path}?${params.toString()}`
    }
    const buttonClasses = "cursor-pointer border rounded justify-center items-center w-12 h-12 text-base leading-6 flex mr-0 border-solid"

    const prevBtn = current_page !== 1 ? (
        <Link className={buttonClasses + ' border-cobalt'} href={buildUrl(current_page - 1)}>
            <span>Prev</span>
        </Link>
    ) : null

    const nextBtn = current_page !== total_pages ? (
        <Link className={buttonClasses + ' border-cobalt'} href={buildUrl(current_page + 1)}>
            <span>Next</span>
        </Link>
    ) : null

    const renderPage = (isActive: boolean, page: number) => {
        return isActive ? (
            <div key={page} className={buttonClasses + ' border-cobalt'}>
                <span>{page}</span>
            </div>
        ) : (
            <Link key={page} className={buttonClasses} href={buildUrl(page)}>
                <span>{page}</span>
            </Link>
        )
    }

    const middleStart = current_page - DEFAULT_STEP > 1
        ? current_page - DEFAULT_STEP
        : 2;
    const middleEnd = total_pages - DEFAULT_STEP > current_page
        ? current_page + DEFAULT_STEP
        : total_pages - 1

    const middlePagesArray = Array.from(
        { length: middleEnd - middleStart + 1 },
        (_, i) => middleStart + i
    );
    const pagesArray = [...new Set([1, ...middlePagesArray, total_pages])];

    let prevPage = 0;
    const middlePages = pagesArray.flatMap((page) => {
        const hasGap = page - prevPage > 1;
        prevPage = page;

        const elements = [];
        if (hasGap) {
            elements.push(
                <div key={`dots-${page}`} className={buttonClasses}>
                    <span>...</span>
                </div>
            );
        }
        elements.push(renderPage(current_page === page, page));
        return elements;
    });

    console.log(pagesArray)

    return (
        <nav className="mt-8 flex flex-row gap-2" aria-label="Pagination">
            {prevBtn}
            {middlePages}
            {nextBtn}
        </nav>
    );
}
