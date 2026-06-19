export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-yellow-50 to-white flex items-center">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center">

        <div>
          <div className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-medium mb-6">
            Erode Cybersecurity Community
          </div>

          <h1 className="text-6xl md:text-8xl font-black leading-tight">
            Sec<span className="text-yellow-500">UErd</span>
          </h1>

          <h2 className="text-2xl md:text-3xl mt-4 text-gray-700">
            Building Erode's Cybersecurity Ecosystem
          </h2>

          <div className="mt-6 inline-block border-2 border-yellow-500 rounded-xl px-6 py-3 bg-white shadow-sm">
            <span className="text-3xl font-bold text-yellow-600">
              Learn@127.0.0.1
            </span>
          </div>

          <p className="mt-8 text-lg text-gray-600 max-w-2xl">
            Learn, network, share opportunities, and grow together with
            cybersecurity students, professionals, researchers, and
            enthusiasts across Erode.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg">
              Join Waitlist
            </button>

            <button className="border-2 border-yellow-500 text-yellow-600 px-8 py-4 rounded-xl font-semibold">
              About Community
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="bg-yellow-100 border border-yellow-200 rounded-3xl p-10 w-full max-w-md shadow-xl">

            <h3 className="text-2xl font-bold text-yellow-700 mb-6">
              Community Highlights
            </h3>

            <div className="space-y-4">

              <div className="bg-white rounded-xl p-4">
                🛡️ Skill Development
              </div>

              <div className="bg-white rounded-xl p-4">
                🤝 Networking
              </div>

              <div className="bg-white rounded-xl p-4">
                💼 Career Opportunities
              </div>

              <div className="bg-white rounded-xl p-4">
                🎤 Monthly Expert Sessions
              </div>

              <div className="bg-white rounded-xl p-4">
                🌐 Cybersecurity Updates
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}