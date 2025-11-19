import Link from "next/link";

export default function Hero() {
    return (
        <section className="py-20 text-center">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tighter text-text-light-primary">
                    Build Your Digital Empire with Ready-to-Use Tools.
                </h1>

                <h2 className="mt-4 text-lg sm:text-xl text-text-light-secondary max-w-2xl mx-auto">
                    Buy ready-made websites, APIs, apps, and start your business instantly.
                </h2>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Link href={'/marketplace'} className="min-w-40 h-12 px-6 bg-linear-to-r from-secondary to-primary text-white font-bold rounded-lg shadow-lg shadow-primary/30 hover:opacity-90 flex items-center justify-center">
                        Browse Marketplace
                    </Link>

                    <button className="min-w-40 h-12 px-6 bg-gray-200 text-base font-bold rounded-lg hover:bg-gray-300">
                         a Seller
                    </button>
                </div>
            </div>
        </section>
    );
}