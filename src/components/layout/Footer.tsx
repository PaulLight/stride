export default function Footer() {
    return (
        <footer className="mt-auto border-t border-(--border) bg-ink text-paper">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                    <p className="font-display text-sm font-black tracking-tight">
                        STRIDE
                    </p>

                    <p className="text-sm opacity-50">
                        Newsletter signup coming soon
                    </p>

                    <p className="text-sm opacity-50">
                        Powered by Magento + Next.js
                    </p>
                </div>
            </div>
        </footer>
    )
}