import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react";
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import MegaMenu from './mega-menu';

const Header: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = React.useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMegaMenuToggle = (menuId: string) => {
    setActiveMegaMenu(prevMenu => prevMenu === menuId ? null : menuId);
  };

  const closeMegaMenu = () => {
    setActiveMegaMenu(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { id: 'home', label: 'Головна', path: '/' },
    { id: 'about', label: 'Про нас', path: '/about', hasMegaMenu: true },
    { id: 'news', label: 'Новини', path: '/news' },
    { id: 'specialties', label: 'Спеціальності', path: '/specialties' },
    { id: 'students-teachers', label: 'Учням і педагогам', path: '/students-teachers', hasMegaMenu: true },
    { id: 'applicants', label: 'Вступникам', path: '/applicants', hasMegaMenu: true },
    { id: 'training-centers', label: 'НПЦ', path: '/training-centers', hasMegaMenu: true },
    { id: 'qualification-center', label: 'Кваліфікаційний центр', path: '/qualification-center', hasMegaMenu: true },
  ];

  return (
    <>
      <Navbar 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}
        maxWidth="xl"
        height="5rem"
      >
        <NavbarBrand as={RouterLink} to="/" className="gap-2">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <div className="h-10 w-10">
              <svg viewBox="0 0 80 80" className="h-full w-full text-primary">
                <g fill="currentColor">
                  <path d="M20,0 L40,0 L40,20 L30,30 L20,20 L20,0 Z" />
                  <path d="M60,0 L40,0 L40,20 L50,30 L60,20 L60,0 Z" />
                  <path d="M0,20 L20,20 L30,30 L20,40 L10,30 L0,20 Z" />
                  <path d="M80,20 L60,20 L50,30 L60,40 L70,30 L80,20 Z" />
                  <path d="M30,30 L50,30 L40,40 L30,30 Z" />
                  <path d="M20,40 L40,60 L60,40 L50,30 L40,40 L30,30 L20,40 Z" />
                  <path d="M40,60 L40,80 L20,60 L40,60 Z" />
                  <path d="M40,60 L40,80 L60,60 L40,60 Z" />
                </g>
              </svg>
            </div>
            <p className="font-bold text-inherit text-lg">Шептицький Професійний Ліцей</p>
          </motion.div>
        </NavbarBrand>

        <NavbarContent className="hidden lg:flex gap-4" justify="center">
          {navItems.map((item) => (
            <div 
              key={item.id}
              className="nav-item relative"
              onMouseEnter={() => item.hasMegaMenu && handleMegaMenuToggle(item.id)}
              onMouseLeave={closeMegaMenu}
            >
              <NavbarItem isActive={location.pathname === item.path}>
                <Link 
                  as={RouterLink} 
                  to={item.path}
                  color={location.pathname === item.path ? "primary" : "foreground"}
                  className="font-medium"
                >
                  {item.label}
                  {item.hasMegaMenu && (
                    <Icon 
                      icon="lucide:chevron-down" 
                      className="ml-1 inline-block text-sm transition-transform duration-200"
                      style={{ transform: activeMegaMenu === item.id ? 'rotate(180deg)' : 'rotate(0)' }}
                    />
                  )}
                </Link>
              </NavbarItem>
              
              {item.hasMegaMenu && (
                <AnimatePresence>
                  {activeMegaMenu === item.id && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-screen bg-white shadow-lg z-50 border-t border-gray-100"
                      style={{ left: '-50%', transform: 'translateX(50%)' }}
                    >
                      <MegaMenu menuId={item.id} />
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Button 
              as={RouterLink} 
              to="/applicants"
              color="primary" 
              variant="flat"
              className="font-medium"
            >
              Подати заявку
            </Button>
          </NavbarItem>
          <NavbarItem className="lg:hidden">
            <Button 
              isIconOnly 
              variant="light" 
              onPress={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <Icon icon={isMobileMenuOpen ? "lucide:x" : "lucide:menu"} className="text-xl" />
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 w-full bg-white shadow-lg z-40 overflow-hidden"
          >
            <div className="container mx-auto py-4 px-4">
              {navItems.map((item) => (
                <div key={item.id} className="py-2">
                  {item.hasMegaMenu ? (
                    <Dropdown>
                      <DropdownTrigger>
                        <Button 
                          variant="light" 
                          className="w-full justify-between"
                          endContent={<Icon icon="lucide:chevron-down" className="text-sm" />}
                        >
                          {item.label}
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu aria-label={`${item.label} submenu`} className="w-full">
                        <MegaMenu menuId={item.id} isMobile={true} />
                      </DropdownMenu>
                    </Dropdown>
                  ) : (
                    <Button 
                      as={RouterLink} 
                      to={item.path}
                      variant="light"
                      color={location.pathname === item.path ? "primary" : "default"}
                      className="w-full text-left justify-start"
                      onPress={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Button>
                  )}
                </div>
              ))}
              <div className="mt-4">
                <Button 
                  as={RouterLink} 
                  to="/applicants"
                  color="primary" 
                  className="w-full"
                  onPress={() => setIsMobileMenuOpen(false)}
                >
                  Подати заявку
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;