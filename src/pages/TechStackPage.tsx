
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const techCategories = [
  {
    name: "Frontend Technologies",
    description: "Modern frameworks and libraries for building responsive, interactive user interfaces",
    technologies: [
      { name: "React", icon: "⚛️", description: "Component-based UI library" },
      { name: "Angular", icon: "🅰️", description: "Full-featured application framework" },
      { name: "Vue.js", icon: "🟢", description: "Progressive JavaScript framework" },
      { name: "Next.js", icon: "▲", description: "React framework with SSR support" },
      { name: "TypeScript", icon: "📘", description: "Typed JavaScript for better reliability" }
    ]
  },
  {
    name: "Backend Technologies",
    description: "Robust frameworks and languages for building scalable, secure server-side applications",
    technologies: [
      { name: "Java Spring Boot", icon: "☕", description: "Enterprise-grade application framework" },
      { name: "Node.js", icon: "🟩", description: "JavaScript runtime for scalable applications" },
      { name: "Python Django", icon: "🐍", description: "High-level Python web framework" },
      { name: "Go", icon: "🐹", description: "Efficient and fast programming language" },
      { name: "ASP.NET Core", icon: "🔷", description: "Cross-platform framework for building cloud apps" }
    ]
  },
  {
    name: "Database Technologies",
    description: "Solutions for storing, retrieving, and managing structured and unstructured data",
    technologies: [
      { name: "PostgreSQL", icon: "🐘", description: "Advanced open-source SQL database" },
      { name: "MongoDB", icon: "🍃", description: "Document-oriented NoSQL database" },
      { name: "Redis", icon: "🔴", description: "In-memory data structure store" },
      { name: "MySQL", icon: "🐬", description: "Popular open-source SQL database" },
      { name: "Elasticsearch", icon: "🔍", description: "Distributed search and analytics engine" }
    ]
  },
  {
    name: "Cloud & DevOps",
    description: "Tools and platforms for efficient deployment, scaling, and management of applications",
    technologies: [
      { name: "AWS", icon: "☁️", description: "Comprehensive cloud computing platform" },
      { name: "Azure", icon: "📊", description: "Microsoft's cloud platform" },
      { name: "Google Cloud", icon: "🌐", description: "Suite of cloud computing services" },
      { name: "Kubernetes", icon: "🚢", description: "Container orchestration" },
      { name: "Docker", icon: "🐳", description: "Platform for building and shipping apps" }
    ]
  },
  {
    name: "AI & Machine Learning",
    description: "Technologies for building intelligent applications with data-driven insights",
    technologies: [
      { name: "TensorFlow", icon: "📊", description: "End-to-end ML platform" },
      { name: "PyTorch", icon: "🔥", description: "ML framework for research and production" },
      { name: "OpenAI", icon: "🤖", description: "Advanced AI models and APIs" },
      { name: "Scikit-learn", icon: "📈", description: "ML library for classical algorithms" },
      { name: "NLP Tools", icon: "💬", description: "Natural language processing libraries" }
    ]
  }
];

const TechStackPage = () => {
  return (
    <div className="pt-20">
      <section className="bg-nexus-800 text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Our Technology Stack</h1>
            <p className="text-lg md:text-xl text-nexus-100">
              Cutting-edge tools and frameworks that power our innovative solutions
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">How We Choose Our Technologies</h2>
            <p className="text-lg text-gray-700">
              At Nexus Global, we carefully select technologies that enable us to deliver robust, scalable, and 
              future-proof solutions. Our technology stack is regularly evaluated and updated to incorporate 
              the latest advancements while ensuring stability and security for our clients.
            </p>
          </div>
          
          <div className="space-y-24">
            {techCategories.map((category) => (
              <div key={category.name} className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-4">{category.name}</h2>
                  <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                    {category.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                  {category.technologies.map((tech) => (
                    <Card key={tech.name} className="hover:shadow-lg transition-all">
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl mb-4">{tech.icon}</div>
                        <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
                        <p className="text-gray-600">{tech.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-nexus-50 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Custom Technology Solutions</h2>
                <p className="text-lg text-gray-700 mb-6">
                  We don't believe in one-size-fits-all approaches. Our team evaluates each project's unique 
                  requirements to recommend the most suitable technology stack. We also integrate with your 
                  existing systems to ensure seamless operations.
                </p>
                <Button asChild>
                  <Link to="/contact">
                    Discuss Your Tech Requirements <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-4">Technology Assessment Process</h3>
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-nexus-100 text-nexus-800 rounded-full h-6 w-6 flex items-center justify-center font-bold mr-3 mt-1">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold">Project Requirements Analysis</h4>
                      <p className="text-gray-600">Understanding your business objectives and technical needs</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-nexus-100 text-nexus-800 rounded-full h-6 w-6 flex items-center justify-center font-bold mr-3 mt-1">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold">Technology Stack Recommendation</h4>
                      <p className="text-gray-600">Proposing optimal solutions based on your specific needs</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-nexus-100 text-nexus-800 rounded-full h-6 w-6 flex items-center justify-center font-bold mr-3 mt-1">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold">Proof-of-Concept Development</h4>
                      <p className="text-gray-600">Validating technical approach before full implementation</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-nexus-100 text-nexus-800 rounded-full h-6 w-6 flex items-center justify-center font-bold mr-3 mt-1">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold">Continuous Evaluation</h4>
                      <p className="text-gray-600">Regular review and optimization of the technology stack</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechStackPage;
