import React from 'react';
import { Users, Award, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Mount Edgecombe Plumbling and Holdings</h1>
            <p className="text-xl opacity-90">Your trusted plumbing partner in Mount Edgecombe</p>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Mount Edgecombe Plumbling and Holdings was founded with a simple mission: to provide 
                    reliable, professional plumbing services to the Mount Edgecombe community. With years 
                    of experience and a commitment to excellence, we've grown to become the area's 
                    most trusted plumbing service provider.
                  </p>
                  <p>
                    Our team of certified professionals brings expertise in residential, commercial, 
                    and emergency plumbing services. We pride ourselves on prompt response times, 
                    transparent pricing, and lasting solutions that keep our customers' plumbing 
                    systems running smoothly.
                  </p>
                  <p>
                    From small repairs to major installations, we approach every job with the same 
                    dedication to quality workmanship and customer satisfaction that has made us 
                    Mount Edgecombe's first choice for plumbing services.
                  </p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-center">
                  <Clock className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Years of Experience</h3>
                  <p className="text-4xl font-bold text-blue-600 mb-2">10+</p>
                  <p className="text-gray-600">Serving Mount Edgecombe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Expert Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Licensed Plumbers</h3>
                <p className="text-gray-600">Certified professionals with extensive training and experience</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Certified Technicians</h3>
                <p className="text-gray-600">Industry-certified experts in modern plumbing technologies</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Availability</h3>
                <p className="text-gray-600">Round-the-clock emergency service for urgent plumbing needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Certifications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Licensed Plumber</h4>
                <p className="text-sm text-gray-600">Master Plumbing License</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Gas Safe Registered</h4>
                <p className="text-sm text-gray-600">Gas Installation Certified</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Water Systems</h4>
                <p className="text-sm text-gray-600">Water Treatment Certified</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Insurance Approved</h4>
                <p className="text-sm text-gray-600">Fully Insured Services</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
