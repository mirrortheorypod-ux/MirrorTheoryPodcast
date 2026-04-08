export default function EpisodesPage() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-20 max-w-5xl mx-auto">
      <h1 className="text-4xl font-semibold mb-10">Episodes</h1>

      <div className="space-y-6">
        <div className="p-6 bg-zinc-900 rounded-2xl">
          <h2 className="text-xl font-medium">Episode 1: The Beginning</h2>
          <p className="text-gray-400 mt-2">
            A conversation about origins and identity.
          </p>
        </div>

        <div className="p-6 bg-zinc-900 rounded-2xl">
          <h2 className="text-xl font-medium">Episode 2: Turning Points</h2>
          <p className="text-gray-400 mt-2">
            Moments that changed everything.
          </p>
        </div>
      </div>
    </main>
  )
}
