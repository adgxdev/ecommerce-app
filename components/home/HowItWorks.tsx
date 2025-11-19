import { Search, ShoppingBag, Wrench, Rocket } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Search className="text-secondary w-10 h-10" />,
      title: "1. Browse",
      desc: "Explore thousands of digital products in our marketplace.",
    },
    {
      icon: <ShoppingBag className="text-secondary w-10 h-10" />,
      title: "2. Buy",
      desc: "Purchase securely with our buyer protection guarantee.",
    },
    {
      icon: <Wrench className="text-secondary w-10 h-10" />,
      title: "3. Customize",
      desc: "Easily customize the product to fit your brand and needs.",
    },
    {
      icon: <Rocket className="text-secondary w-10 h-10" />,
      title: "4. Launch",
      desc: "Go live and start your new digital business venture.",
    },
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {steps.map((step) => (
          <div key={step.title} className="flex flex-col items-center">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-secondary/10 dark:bg-secondary/20 mb-4">
              {step.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-text-light-secondary dark:text-text-dark-secondary">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}