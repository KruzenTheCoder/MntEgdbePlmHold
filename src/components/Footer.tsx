import React from 'react';
import { Phone, Mail, MapPin, Clock, Wrench } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Wrench className="w-8 h-8 text-teal-500" />
              <span className="text-xl font-bold">Mount Edgecombe Plumbling and Holdings</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Professional plumbing services in Mount Edgecombe with over 10 years of experience. 
              Reliable, affordable, and available 24/7 for all your plumbing needs.
            </p>
            <div className="flex space-x-4">
              <span className="bg-blue-600 text-xs px-2 py-1 rounded">Licensed</span>
              <span className="bg-teal-600 text-xs px-2 py-1 rounded">Insured</span>
              <span className="bg-green-600 text-xs px-2 py-1 rounded">24/7 Service</span>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-teal-500" />
                <div>
                  <p className="text-sm text-gray-300">065 219 1154</p>
                  <p className="text-sm text-gray-300">067 009 0178</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-teal-500" />
                <p className="text-sm text-gray-300">info@mountedgecombeplumbing.co.za</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-teal-500 mt-1" />
                <p className="text-sm text-gray-300">Mount Edgecombe and surrounding areas</p>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>7:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>8:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Emergency Only</span>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-700">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-teal-500" />
                  <span className="text-teal-400 font-medium">24/7 Emergency Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 Mount Edgecombe Plumbling and Holdings. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
