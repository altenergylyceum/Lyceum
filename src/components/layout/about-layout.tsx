import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

interface AboutLayoutProps {
  children: React.ReactNode;
}

const AboutLayout: React.FC<AboutLayoutProps> = ({ children }) => {
  const location = useLocation();

  const menuItems = [
    { label: 'Публічна інформація', path: '/about/public-info' },
    { label: 'Адміністрація та викладачі', path: '/about/administration' },
    { label: 'Структура та органи управління', path: '/about/structure' },
    { label: 'Історія закладу', path: '/about/history' },
    { label: 'Галерея', path: '/about/gallery' },
    { label: 'Наші герої', path: '/about/heroes' },
    { label: '3D-тур', path: '/about/3d-tour' },
    { label: 'Нормативні акти', path: '/about/regulations' },
    { label: 'Звіти', path: '/about/reports' },
    { label: 'Матеріально-технічне забезпечення', path: '/about/facilities' },
    { label: 'Закупівлі', path: '/about/procurement' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <motion.aside
          className="md:w-1/4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <nav className="sticky top-24">
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className={`block py-2 px-4 rounded transition-colors ${
                      location.pathname === item.path
                        ? 'bg-primary text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </motion.aside>
        <main className="md:w-3/4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AboutLayout;