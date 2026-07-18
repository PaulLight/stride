export default function ProductsShimmer({ length} : { length: number}) {
    return (
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length }).map((_, i) => (
                <div key={i} className="animate-pulse">
                    <div className="aspect-4/5 rounded bg-mist/20" />
                    <div className="mt-3 h-4 w-3/4 rounded bg-mist/20" />
                    <div className="mt-2 h-3 w-1/3 rounded bg-mist/20" />
                </div>
            ))}
        </div>
    );
}