
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Nexus Global</h3>
            <p className="text-gray-300 mb-4">
              Empowering businesses through innovative Banking as a Service solutions and digital transformation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products#finexsus" className="text-gray-300 hover:text-white transition-colors">
                  Finexsus
                </Link>
              </li>
              <li>
                <Link to="/products#payzo-books" className="text-gray-300 hover:text-white transition-colors">
                  Payzo Books
                </Link>
              </li>
              <li>
                <Link to="/products#payzo-hr" className="text-gray-300 hover:text-white transition-colors">
                  Payzo HR
                </Link>
              </li>
              <li>
                <Link to="/products#rhevira" className="text-gray-300 hover:text-white transition-colors">
                  RHEVIRA
                </Link>
              </li>
              <li>
                <Link to="/products#growk" className="text-gray-300 hover:text-white transition-colors">
                  GrowK
                </Link>
              </li>
              <li>
                <Link to="/products#sentinel360" className="text-gray-300 hover:text-white transition-colors">
                  Sentinel360
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#custom-software" className="text-gray-300 hover:text-white transition-colors">
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link to="/services#ai-development" className="text-gray-300 hover:text-white transition-colors">
                  AI Development & Enablement
                </Link>
              </li>
              <li>
                <Link to="/services#product-design" className="text-gray-300 hover:text-white transition-colors">
                  Product Design
                </Link>
              </li>
              <li>
                <Link to="/services#cloud-setup" className="text-gray-300 hover:text-white transition-colors">
                  Cloud Setup & Architecture
                </Link>
              </li>
              <li>
                <Link to="/services#dedicated-team" className="text-gray-300 hover:text-white transition-colors">
                  Dedicated Team
                </Link>
              </li>
              <li>
                <Link to="/services#devops-services" className="text-gray-300 hover:text-white transition-colors">
                  DevOps Services
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-nexus-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Our Offices</p>
                  <p className="text-gray-300">Dubai, Saudi Arabia, India (3 locations)</p>
                </div>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-nexus-400 shrink-0" />
                <span className="text-gray-300">+971 4 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-nexus-400 shrink-0" />
                <span className="text-gray-300">info@nexusglobal.sa</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <div className="mb-4 flex flex-wrap justify-center gap-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/products" className="hover:text-white transition-colors">Products</Link>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <Link to="/careers" className="hover:text-white transition-colors">Careers</Link>
            <Link to="/tech-stack" className="hover:text-white transition-colors">Tech Stack</Link>
            <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
          </div>
          <p>&copy; {currentYear} Nexus Global. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
