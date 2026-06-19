export default function Values() {
  const values = [
    {
      title: "Skill Development",
      icon: "🛡️",
      description:
        "Enhance cybersecurity knowledge, practical skills, and career readiness through continuous learning.",
    },
    {
      title: "Awareness",
      icon: "📢",
      description:
        "Educate people about scams, cyber threats, online safety, and digital hygiene.",
    },
    {
      title: "Networking",
      icon: "🤝",
      description:
        "Connect students, professionals, researchers, and organizations across Erode.",
    },
    {
      title: "Career Opportunities",
      icon: "💼",
      description:
        "Share jobs, internships, referrals, and guidance for cybersecurity careers.",
    },
    {
      title: "Expert Sessions",
      icon: "🎤",
      description:
        "Monthly sessions with industry experts, practitioners, and researchers.",
    },
    {
      title: "Cyber Updates",
      icon: "🌐",
      description:
        "Stay informed about vulnerabilities, breaches, tools, and cybersecurity trends.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            What Value Are We Providing?
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Building skills, awareness, opportunities, and connections for
            Erode's cybersecurity community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {values.map((value) => (
            <div
              key={value.title}
              className="bg-yellow-50 border border-yellow-200 rounded-3xl p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-4">
                {value.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {value.title}
              </h3>

              <p className="text-gray-600">
                {value.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}