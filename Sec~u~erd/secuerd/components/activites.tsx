export default function Activities() {
  const activities = [
    {
      icon: "🎤",
      title: "Expert Session",
      description:
        "Monthly sessions from cybersecurity professionals and researchers.",
    },
    {
      icon: "🤝",
      title: "Networking Meetup",
      description:
        "Meet students, professionals, and security enthusiasts from Erode.",
    },
    {
      icon: "💼",
      title: "Career Opportunities",
      description:
        "Jobs, internships, referrals, and career guidance discussions.",
    },
    {
      icon: "🌐",
      title: "Cyber Updates",
      description:
        "Latest breaches, CVEs, tools, research, and industry news.",
    },
    {
      icon: "🎓",
      title: "Knowledge Sharing",
      description:
        "Members share experiences, projects, tools, and learning resources.",
    },
  ];

  return (
    <section className="py-24 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">
          <span className="text-yellow-600 font-semibold uppercase tracking-widest">
            Monthly Activities
          </span>

          <h2 className="text-5xl font-bold mt-4">
            What Happens in SecUErd?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {activities.map((activity) => (
            <div
              key={activity.title}
              className="bg-white rounded-3xl p-8 shadow-sm border border-yellow-100 hover:shadow-xl transition-all"
            >
              <div className="text-5xl mb-5">
                {activity.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {activity.title}
              </h3>

              <p className="text-gray-600">
                {activity.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}