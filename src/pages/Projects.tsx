import React from 'react';
import { Wrench, Home, Building, AlertTriangle } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Residential Bathroom Renovation",
      category: "Residential",
      description: "Complete bathroom plumbing overhaul with modern fixtures and water-saving solutions",
      image: "https://images.unsplash.com/photo-1583432836338-a7ad99b8efb9?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 2,
      title: "Commercial Kitchen Installation",
      category: "Commercial",
      description: "Full commercial kitchen plumbing system for restaurant including grease traps and industrial sinks",
      image: "https://images.unsplash.com/photo-1543352634-20f7d4c43683?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 3,
      title: "Emergency Pipe Repair",
      category: "Emergency",
      description: "24/7 emergency response to burst pipe, completed repair with minimal water damage",
      image: "https://images.unsplash.com/photo-1521207419-76dc3a23c0f7?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 4,
      title: "Water Heater Installation",
      category: "Residential",
      description: "Energy-efficient water heater installation with warranty and maintenance plan",
      image: "https://images.unsplash.com/photo-1601972592825-2acf9812e062?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 5,
      title: "Office Building Plumbing",
      category: "Commercial",
      description: "Multi-floor office building plumbing system installation and maintenance",
      image: "https://images.unsplash.com/photo-1518432031267-5f8fa575a4c7?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 6,
      title: "Drain Cleaning Service",
      category: "Emergency",
      description: "Advanced hydro-jetting technology used to clear severe drain blockages",
      image: "https://images.unsplash.com/photo-1554215420-2166d2f0c3d0?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  const categories = [
    {
      name: "All Projects",
      icon: Wrench,
      count: projects.length
    },
    {
      name: "Residential",
      icon: Home,
      count: projects.filter(p => p.category === "Residential").length
    },
    {
      name: "Commercial",
      icon: Building,
      count: projects.filter(p => p.category === "Commercial").length
    },
    {
      name: "Emergency",
      icon: AlertTriangle,
      count: projects.filter(p => p.category === "Emergency").length
    }
  ];

  const [activeCategory, setActiveCategory] = React.useState("All Projects");

  const filteredProjects = activeCategory === "All Projects" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl opacity-90">Showcasing our expertise through completed plumbing projects</p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.name}
                    onClick={() => setActiveCategory(category.name)}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                      activeCategory === category.name
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <Icon className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-sm font-medium">{category.name}</div>
                    <div className="text-xs opacity-75">({category.count})</div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-w-4 aspect-h-3 bg-gray-200">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://via.placeholder.com/400x300/e5e7eb/6b7280?text=${encodeURIComponent(project.title)}`;
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {project.category}
                      </span>
                      <Wrench className="w-4 h-4 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
            <p className="text-blue-100 mb-8">Contact us today to discuss your plumbing needs and get a free quote.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Get a Quote
              </a>
              <a
                href="tel:0652191154"
                className="bg-teal-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors duration-200"
              >
                Call Now: 065 219 1154
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
