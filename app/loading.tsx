export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-[60vh] w-full">
            <div className="flex flex-col items-center gap-4">
                {/* Spinner */}
                <div className="relative w-16 h-16">
                    <div className="absolute top-0 left-0 w-full h-full border-4 border-orange-600/20 rounded-full"></div>
                    <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-orange-600 rounded-full animate-spin"></div>
                </div>

                {/* Loading text */}
                <p className="text-orange-600 text-xl font-light animate-pulse">
                    Loading...
                </p>
            </div>
        </div>
    );
}

