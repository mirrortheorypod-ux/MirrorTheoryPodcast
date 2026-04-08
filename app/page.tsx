import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="py-40 text-center px-6">
        <h1 className="text-6xl md:text-7xl font-semibold tracking-tight">
          Mirror Theory
        </h1>

        <p className="mt-6 text-lg text-gray-400">
          Conversations that shape identity
        </p>
      </section>

      {/* FEATURED EPISODE */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="bg-zinc-900 rounded-3xl p-8">
          <p className="text-sm text-gray-400 mb-2">
            Featured Episode
          </p>

          <h2 className="text-2xl font-semibold">
            Episode 1: The Beginning
          </h2>

          <p className="text-gray-400 mt-2">
            A conversation about origins, identity, and the moments that shape us.
          </p>

          <Link href="/episodes" className="inline-block mt-6 bg-white text-black px-5 py-2 rounded-full">
            Watch Episode →
          </Link>
        </div>
      </section>

    </main>
  );
}
