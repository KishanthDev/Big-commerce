export default function WhyShop() {
  const features = [
    {
      icon: "🔍",
      title: "Unique Products",
      description:
        "Discover one-of-a-kind items you won't find in big box stores. Every product has a story.",
    },
    {
      icon: "🤝",
      title: "Support Local",
      description:
        "Your purchases directly support independent creators and small business owners in your community.",
    },
    {
      icon: "⭐",
      title: "Verified Quality",
      description:
        "Every seller is vetted for quality and service. Shop with confidence knowing we stand behind them.",
    },
  ];

  return (
    <section className="py-16 dark:bg-black">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-semibold dark:text-white text-center mb-12">
          Why Shop With Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-300 p-8 rounded-lg shadow-sm text-center"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 text-blue-600 text-2xl">
                {feature.icon}
              </div>
              <h3 className="text-xl dark:text-black font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
