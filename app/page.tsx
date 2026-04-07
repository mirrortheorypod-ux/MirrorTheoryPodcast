import Link from 'next/link'

const episodes = [
  {
    id: '1',
    title: 'The Beginning',
    guest: 'John Doe',
    slug: 'the-beginning',
    thumbnail: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2'
  },
  {
    id: '2',
    title: 'Turning Points',
    guest: 'Jane Smith',
    slug: 'turning-points',
    thumbnail: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7'
  }
]

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="py-32 grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-6">
        <div>
          <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">
            Podcast
          </p>

          <h1 className="text-6xl md:text-7xl font-semibold leading-tight">
            Mirror<br />Theory
          </h1>

          <p className="mt-6 text-lg text-gray-400 max-w-md">
            Conversations that break down how people become who they are.
          </p>

          <div className="mt-10 flex gap-4">
            <Link href="/episodes" className="bg-white text-black px-6 py-3 rounded-full">
              Start Listening
            </Link>
            <Link href="/episodes" className="text-gray-400 hover:text-white">
              Browse Episodes →
            </Link>
          </div>
        </div>

        <div className="aspect-[4/5] bg-gray-800 rounded-3xl" />
      </section>

      {/* EPISODES ROW */}
      <section className="px-6 max-w-6xl mx-auto pb-20">
        <h2 className="text-2xl mb-6">Latest Conversations</h2>

        <div className="flex gap-6 overflow-x-auto pb-4">
          {episodes.map(e => (
            <Link key={e.id} href={`/episodes/${e.slug}`} className="min-w-[300px] group">
              <div className="aspect-video bg-gray-800 rounded-2xl overflow-hidden">
                <img
                  src={e.thumbnail}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="mt-3">
                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  {e.guest}
                </p>
                <h3 className="text-lg font-medium">{e.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </main>
  )
}
