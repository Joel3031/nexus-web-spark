
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

type NavbarProps = {
  isScrolled: boolean;
};

const menuItems = [
  { name: 'Home', path: '/' },
  {
    name: 'Products',
    path: '/products',
    submenu: [
      { name: 'Finexsus', path: '/products#finexsus' },
      { name: 'Payzo Books', path: '/products#payzo-books' },
      { name: 'Payzo HR', path: '/products#payzo-hr' },
      { name: 'RHEVIRA', path: '/products#rhevira' },
      { name: 'GrowK', path: '/products#growk' },
      { name: 'Sentinel360', path: '/products#sentinel360' },
    ],
  },
  {
    name: 'Services',
    path: '/services',
    submenu: [
      { name: 'Custom Software Development', path: '/services#custom-software' },
      { name: 'AI Development & Enablement', path: '/services#ai-development' },
      { name: 'Product Design', path: '/services#product-design' },
      { name: 'Cloud Setup & Architecture', path: '/services#cloud-setup' },
      { name: 'Dedicated Team', path: '/services#dedicated-team' },
      { name: 'DevOps Services', path: '/services#devops-services' },
    ],
  },
  { name: 'Careers', path: '/careers' },
  { name: 'Tech Stack', path: '/tech-stack' },
  { name: 'About Us', path: '/about' },
];

const Navbar = ({ isScrolled }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const location = useLocation();
  
  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenSubmenu(null);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out",
        isScrolled 
          ? "bg-white/95 shadow-md backdrop-blur-md py-2" 
          : "bg-transparent py-4"
      )}
    >
      <nav className="container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="font-bold text-2xl md:text-3xl text-nexus-800">
            Nexus<span className="text-nexus-500">Global</span>
          </span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-1">
          {menuItems.map((item) => (
            <div key={item.name} className="relative group">
              <div className="flex items-center">
                <Link
                  to={item.path}
                  className={cn(
                    "px-3 py-2 text-sm font-medium transition-colors hover:text-nexus-600",
                    location.pathname === item.path ? "text-nexus-600" : "text-gray-700"
                  )}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <ChevronDown 
                    className="h-4 w-4 text-gray-500 group-hover:text-nexus-600 transition-transform group-hover:rotate-180" 
                  />
                )}
              </div>
              
              {item.submenu && (
                <div className="absolute left-0 top-full mt-1 hidden group-hover:block bg-white shadow-lg rounded-md overflow-hidden min-w-[240px] z-50">
                  <div className="py-2">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-nexus-50 hover:text-nexus-600"
                        onClick={closeMenu}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="hidden lg:block">
          <Button asChild>
            <Link to="/contact">Reach Out</Link>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in">
          <div className="py-4 container">
            {menuItems.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className={cn(
                        "flex items-center justify-between w-full px-4 py-2 text-left text-gray-700 hover:bg-nexus-50 hover:text-nexus-600",
                        location.pathname === item.path ? "text-nexus-600" : ""
                      )}
                    >
                      <span>{item.name}</span>
                      <ChevronDown 
                        className={cn(
                          "h-4 w-4 transition-transform",
                          openSubmenu === item.name ? "rotate-180" : ""
                        )} 
                      />
                    </button>
                    {openSubmenu === item.name && item.submenu && (
                      <div className="pl-4 space-y-1 mt-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-2 text-sm text-gray-600 hover:bg-nexus-50 hover:text-nexus-600"
                            onClick={closeMenu}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={cn(
                      "block px-4 py-2 text-gray-700 hover:bg-nexus-50 hover:text-nexus-600",
                      location.pathname === item.path ? "text-nexus-600" : ""
                    )}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-4 px-4">
              <Button className="w-full" asChild>
                <Link to="/contact" onClick={closeMenu}>
                  Reach Out
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
