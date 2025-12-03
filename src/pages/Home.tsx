import React from 'react';
import { Wrench, Droplets, Home as HomeIcon, Building, Phone, Users, Award, Clock } from 'lucide-react';

const Home: React.FC = () => {
  const services = [
    {
      icon: Wrench,
      title: "Emergency Plumbing",
      description: "24/7 emergency response for burst pipes, leaks, and urgent plumbing issues. We're always available when you need us most."
    },
    {
      icon: HomeIcon,
      title: "Residential Services",
      description: "Complete plumbing solutions for homes including installations, repairs, maintenance, and upgrades."
    },
    {
      icon: Building,
      title: "Commercial Plumbing",
      description: "Professional commercial plumbing services for offices, restaurants, retail spaces, and industrial properties."
    },
    {
      icon: Droplets,
      title: "Water Systems",
      description: "Water heater installation, water treatment systems, and efficient plumbing solutions for better water quality."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-32"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 102, 204, 0.8), rgba(32, 178, 170, 0.8)), url('https://images.unsplash.com/photo-1583432836338-a7ad99b8efb9?auto=format&fit=crop&w=1600&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Mount Edgecombe Plumbling and Holdings
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Your Trusted Plumbing Partner in Mount Edgecombe
            </p>
            <p className="text-lg mb-12 opacity-80 max-w-2xl mx-auto">
              Professional plumbing services with over 10 years of experience. 
              From emergency repairs to complete installations, we're here to solve all your plumbing needs.
            </p>
            
            {/* Contact Numbers */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="tel:0652191154" 
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                065 219 1154
              </a>
              <a 
                href="tel:0670090178" 
                className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                067 009 0178
              </a>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/projects" 
                className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Our Services
              </a>
              <a 
                href="/contact" 
                className="border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Professional Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer comprehensive plumbing solutions for residential, commercial, and emergency needs. 
                Our certified professionals deliver quality workmanship with guaranteed satisfaction.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-center leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <a 
                href="/projects" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                View Our Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Why Choose Mount Edgecombe Plumbling and Holdings?
                </h2>
                <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                  <p>
                    With over a decade of experience serving the Mount Edgecombe community, 
                    we've built our reputation on reliability, professionalism, and exceptional 
                    customer service. Our team of certified plumbers is committed to delivering 
                    lasting solutions that keep your plumbing systems running smoothly.
                  </p>
                  <p>
                    We understand that plumbing issues can be stressful, which is why we offer 
                    prompt response times, transparent pricing, and clear communication throughout 
                    every project. From minor repairs to major installations, we approach every 
                    job with the same dedication to quality workmanship.
                  </p>
                  <p>
                    As a locally owned and operated business, we take pride in serving our 
                    community with integrity and expertise. Your satisfaction is our priority, 
                    and we stand behind our work with comprehensive warranties and ongoing support.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-8 h-8 text-teal-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">1000+</div>
                    <div className="text-sm text-gray-600">Happy Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="w-8 h-8 text-teal-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">10+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Clock className="w-8 h-8 text-teal-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">24/7</div>
                    <div className="text-sm text-gray-600">Emergency Service</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 p-8 rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1582554685890-8db26a50db0b?auto=format&fit=crop&w=1200&q=80"
                  alt="Mount Edgecombe Plumbling Team"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://via.placeholder.com/800x600/e5e7eb/6b7280?text=Professional+Plumbing+Team`;
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Solve Your Plumbing Problems?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today for reliable, professional plumbing services in Mount Edgecombe.
              We're here to help with all your plumbing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
              >
                Get Free Quote
              </a>
              <a 
                href="tel:0652191154" 
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
              >
                <Phone className="w-5 h-5 inline mr-2" />
                Call: 065 219 1154
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
