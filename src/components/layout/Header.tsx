import Link from 'next/link'
import Navigation from "@/components/layout/Navigation"

export default function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-[--border] bg-(--background)/95 backdrop-blur-sm">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link href="/" className="font-display text-xl font-black tracking-tight">
                    STRIDE
                </Link>

                <Navigation />

                <div className="flex items-center gap-4">
                    <button
                        type="button"
                        className="text-sm font-mono opacity-50"
                        aria-label="Search"
                    >
                        ⌘K
                    </button>
                    <Link
                        href="/cart"
                        className="flex items-center gap-1 text-sm font-mono"
                        aria-label="Shopping cart"
                    >
                        Cart
                        <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-cobalt px-1.5 text-xs font-medium text-paper">
                            0
                        </span>
                    </Link>
                </div>
            </div>
        </header>
    )
}
