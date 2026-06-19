export default function WhoCanJoin() {
  const members = [
    {
      icon: "🎓",
      title: "Students",
      description:
        "Start your cybersecurity journey and connect with professionals.",
    },
    {
      icon: "💼",
      title: "Working Professionals",
      description:
        "Expand your network and stay updated with industry trends.",
    },
    {
      icon: "🔍",
      title: "Security Researchers",
      description:
        "Share knowledge, research, and collaborate with the community.",
    },
    {
      icon: "🐞",
      title: "Bug Bounty Hunters",
      description:
        "Discuss methodologies, findings, and responsible disclosure.",
    },
    {
      icon: "⚙️",
      title: "Developers",
      description:
        "Learn secure coding practices and application security.",
    },
    {
      icon: "🖥️",
      title: "IT Professionals",
      description:
        "Build security awareness and strengthen defensive skills.",
    },
  ];

  return (
    <section className="py-24 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Who Can Join?
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Anyone from Erode and surrounding regions who is genuinely
            interested in cybersecurity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {members.map((member) => (
            <div
              key={member.title}
              className="bg-white rounded-3xl p-8 shadow-sm border border-yellow-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl mb-5">
                {member.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {member.title}
              </h3>

              <p className="text-gray-600">
                {member.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}