
import { Server, Laptop, Book, Database } from 'lucide-react';

const features = [
  {
    name: 'Virtual Machines',
    description:
      'Access Windows, Linux, and macOS virtual machines with pre-installed development tools and software.',
    icon: Server,
  },
  {
    name: 'Cloud IDE',
    description:
      'Code directly in your browser with our integrated development environment supporting multiple programming languages.',
    icon: Laptop,
  },
  {
    name: 'Learning Resources',
    description:
      'Access tutorials, documentation, and guided exercises to help you learn new technologies and skills.',
    icon: Book,
  },
  {
    name: 'Persistent Storage',
    description:
      'Your work is automatically saved to secure cloud storage, accessible from any device.',
    icon: Database,
  },
];

const FeaturesSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-lab-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for learning
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our cloud-based lab provides all the tools and environments needed for effective learning and practice.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative animate-fade-up">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-lab-600 to-teal-600 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
