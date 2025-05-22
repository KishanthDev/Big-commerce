import { DollarSign, Award, Users } from "lucide-react";
export default function WhySell() {
  const features = [
    {
      title: "No Commissions",
      icon: <DollarSign />,
      description:
        "Keep 100% of your sales. We don’t take a cut from your hard earned money.",
    },
    {
      title: "Affordable Rentals",
      icon: <Award />,
      description:
        "Low monthly subscription with no hidden fees. Start small and scale as you grow.",
    },
    {
      title: "Local Customers",
      icon: <Users />,
      description:
        "Connect with customers in your area who are looking for exactly what you offer.",
    },
  ];

  return (
    <section className="py-16 dark:bg-black">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-semibold dark:text-white text-center mb-12">
          Why Sell With Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-300 p-8 rounded-lg shadow-sm text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 text-blue-600 text-2xl">
                {feature.icon}
              </div>
              <h3 className="text-xl dark:text-black   font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
