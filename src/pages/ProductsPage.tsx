
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: "finexsus",
    name: "Finexsus",
    icon: "🏦",
    tagline: "Leading Banking as a Service (BaaS) Provider in MENA Region",
    description: "Nexus Global's Finexsus is a fully integrated, API-driven platform that enables banks and fintechs to launch next-gen financial services in just 8 weeks. With 260+ ready-to-use APIs, Finexsus empowers businesses to seamlessly implement digital banking, payments, lending, compliance, and more—all while ensuring regulatory compliance, security, and scalability.",
    features: [
      "260+ Ready-to-use APIs",
      "Full integration with existing core banking systems",
      "Rapid deployment in 8 weeks",
      "Regulatory compliant solutions",
      "Secure and scalable architecture",
      "Comprehensive documentation and support"
    ]
  },
  {
    id: "payzo-books",
    name: "Payzo Books",
    icon: "📊",
    tagline: "The World's First AI-Powered Accounting System – ZATCA Integrated",
    description: "Payzo Books revolutionizes financial management with AI-powered accounting that integrates seamlessly with ZATCA (Zakat, Tax and Customs Authority). This innovative platform automates bookkeeping, simplifies tax compliance, and provides real-time financial insights for businesses of all sizes.",
    features: [
      "AI-powered transaction categorization",
      "Automatic ZATCA compliance reporting",
      "Real-time financial dashboard",
      "Invoice generation and management",
      "Expense tracking and receipt scanning",
      "Multi-user access with role-based permissions"
    ]
  },
  {
    id: "payzo-hr",
    name: "Payzo HR",
    icon: "👨‍💼",
    tagline: "AI-Based HR System – From Recruitment to Payroll",
    description: "Payzo HR is a comprehensive human resources management system that streamlines the entire employee lifecycle. From candidate sourcing and recruitment to onboarding, performance management, and payroll processing, our AI-driven platform helps organizations optimize their HR operations and enhance employee experience.",
    features: [
      "Intelligent candidate matching and screening",
      "Automated onboarding workflows",
      "Performance management and review automation",
      "Time and attendance tracking",
      "Integrated payroll processing",
      "Employee self-service portal"
    ]
  },
  {
    id: "rhevira",
    name: "RHEVIRA",
    icon: "⚙️",
    tagline: "Automated DevOps CI/CD Pipeline Framework",
    description: "RHEVIRA helps organizations achieve compliance, quality, and accelerated delivery with our automated DevOps CI/CD pipeline framework. This powerful platform streamlines software development lifecycles, ensures code quality through automated testing, and enables continuous deployment with minimal manual intervention.",
    features: [
      "Automated build and deployment pipelines",
      "Integrated quality gates and code analysis",
      "Compliance checks and security scanning",
      "Environment provisioning and management",
      "Release management and versioning",
      "Comprehensive monitoring and alerts"
    ]
  },
  {
    id: "growk",
    name: "GrowK",
    icon: "💰",
    tagline: "Save & Invest in Digital Gold – Starting from 100 SAR",
    description: "GrowK makes investing in gold accessible to everyone with a low entry point of just 100 SAR. Our platform allows users to purchase digital gold securely, track its performance in real-time, and liquidate investments whenever needed. With GrowK, building wealth through gold investment has never been more straightforward.",
    features: [
      "Low minimum investment (100 SAR)",
      "Real-time gold price tracking",
      "Secure digital gold certificates",
      "Instant buying and selling",
      "Portfolio performance analytics",
      "Optional physical delivery of gold"
    ]
  },
  {
    id: "sentinel360",
    name: "Sentinel360",
    icon: "🛡️",
    tagline: "Comprehensive Cybersecurity Solutions for Ultimate Protection",
    description: "Sentinel360 provides end-to-end cybersecurity solutions that safeguard your organization's digital assets from evolving threats. Our multi-layered security approach combines advanced threat detection, vulnerability management, security monitoring, and incident response to ensure your business remains protected against cyber attacks.",
    features: [
      "24/7 security operations center",
      "Advanced threat detection and prevention",
      "Vulnerability assessment and management",
      "Security awareness training",
      "Incident response and forensics",
      "Compliance management and reporting"
    ]
  }
];

const ProductsPage = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Scroll to the product section if there's a hash in the URL
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          const yOffset = -100; // Account for fixed header
          const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="pt-20">
      <section className="bg-nexus-800 text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-lg md:text-xl text-nexus-100">
              Innovative solutions designed to transform industries and drive growth
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-24">
            {products.map((product, index) => (
              <div 
                id={product.id} 
                key={product.id} 
                className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 0 ? "order-none" : "order-none lg:order-last"}>
                  <div className="text-4xl mb-4">{product.icon}</div>
                  <h2 className="text-3xl font-bold mb-3">{product.name}</h2>
                  <p className="text-lg text-nexus-600 font-medium mb-6">{product.tagline}</p>
                  <p className="text-gray-700 mb-8">{product.description}</p>
                  
                  <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-nexus-100 text-nexus-600 p-1 rounded-full mr-3 mt-1">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button asChild>
                    <Link to="/contact">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                
                <div className={index % 2 === 0 ? "order-none lg:order-last" : "order-none"}>
                  <Card className="overflow-hidden shadow-lg bg-gradient-to-br from-gray-50 to-gray-100 border-none">
                    <div className={`h-2 w-full bg-nexus-${index % 2 === 0 ? '500' : '700'}`} />
                    <CardContent className="p-8">
                      <div className="bg-white rounded-lg shadow-inner p-8 min-h-[300px] flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-8xl mb-6">{product.icon}</div>
                          <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                          <p className="text-gray-600">{product.tagline}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="bg-nexus-50 py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Our team is ready to help you implement the right solutions for your specific needs
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
