"use client";

export default function Professionals() {
  const professionals = [
    {
      name: "Gowtham",
      role: "VAPT Consultant",
      company: "Cyber Security Professional",
      skills: ["Web", "API", "Mobile"],
    },
  ];

  return (
    <div className="min-h-screen bg-yellow-50">
      <section className="py-20 text-center px-8">
        <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-medium">
          SecUErd Directory
        </span>

        <h1 className="text-6xl font-black mt-6">
          Cyber Professionals
          <span className="text-yellow-500"> of Erode</span>
        </h1>

        <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
          Discover cybersecurity professionals, researchers, bug bounty hunters,
          security engineers and mentors from Erode.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-8 pb-16">
        <input
          type="text"
          placeholder="Search professionals..."
          className="w-full p-4 rounded-2xl border bg-white"
        />
      </section>

      <section className="max-w-7xl mx-auto px-8 pb-20">
        <h2 className="text-3xl font-bold mb-8">
          Community Directory
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {professionals.map((person) => (
            <div
              key={person.name}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-yellow-100"
            >
              <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center text-2xl mb-5">
                👤
              </div>

              <h3 className="text-2xl font-bold">
                {person.name}
              </h3>

              <p className="text-yellow-600 mt-2">
                {person.role}
              </p>

              <p className="text-gray-500 mt-1">
                {person.company}
              </p>

              <div className="mt-5">
                <p className="font-semibold mb-2">
                  Skills
                </p>

                <div className="flex flex-wrap gap-2">
                  {person.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-yellow-100 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-yellow-500 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h2 className="text-5xl font-bold">
            Are You a Cybersecurity Professional?
          </h2>

          <p className="mt-6 text-xl">
            Join the SecUErd Professional Directory and help build Erode's cybersecurity ecosystem.
          </p>

          <button className="mt-10 bg-white text-yellow-600 px-8 py-4 rounded-xl font-bold">
            Submit Your Profile
          </button>
        </div>
      </section>
    </div>
  );
}