
import { Server, Users, Database } from 'lucide-react';

const stats = [
  { id: 1, name: 'Active Virtual Machines', value: '2,000+', icon: Server },
  { id: 2, name: 'Students Using Platform', value: '10,000+', icon: Users },
  { id: 3, name: 'Hours of Computing Power', value: '1M+', icon: Database }
];

const StatsSection = () => {
  return (
    <div className="bg-gray-50 pt-12 sm:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Trusted by students worldwide
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Our platform provides reliable cloud computing resources for educational institutions around the globe.
          </p>
        </div>
      </div>
      <div className="mt-10 pb-12 bg-white sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-50" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.id} className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r animate-fade-up">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500 flex items-center justify-center">
                      <stat.icon className="h-5 w-5 mr-2 text-lab-600" />
                      {stat.name}
                    </dt>
                    <dd className="order-1 text-4xl font-extrabold text-lab-600">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
