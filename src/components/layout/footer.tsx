import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link, Divider } from "@heroui/react";
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8">
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
              <h3 className="font-bold text-xl">Шептицький Професійний Ліцей</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Ми надаємо студентам можливість вивчати найсучасніші напрямки технологій та енергетики.
            </p>
            <div className="flex gap-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Icon icon="logos:facebook" className="text-2xl" />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Icon icon="logos:instagram-icon" className="text-2xl" />
              </Link>
              <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Icon icon="logos:youtube-icon" className="text-2xl" />
              </Link>
              <Link href="https://telegram.org" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <Icon icon="logos:telegram" className="text-2xl" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg mb-4">Навігація</h3>
            <ul className="space-y-2">
              <li>
                <Link as={RouterLink} to="/" className="text-gray-400 hover:text-primary transition-colors">
                  Головна
                </Link>
              </li>
              <li>
                <Link as={RouterLink} to="/about" className="text-gray-400 hover:text-primary transition-colors">
                  Про нас
                </Link>
              </li>
              <li>
                <Link as={RouterLink} to="/news" className="text-gray-400 hover:text-primary transition-colors">
                  Новини
                </Link>
              </li>
              <li>
                <Link as={RouterLink} to="/specialties" className="text-gray-400 hover:text-primary transition-colors">
                  Спеціальності
                </Link>
              </li>
              <li>
                <Link as={RouterLink} to="/applicants" className="text-gray-400 hover:text-primary transition-colors">
                  Вступникам
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg mb-4">Контакти</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Icon icon="lucide:map-pin" className="text-primary mt-1" />
                <span className="text-gray-400">вул. Енергетична, 25, м. Київ, 03056</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon icon="lucide:phone" className="text-primary" />
                <Link href="tel:+380441234567" className="text-gray-400 hover:text-primary transition-colors">
                  +38 (044) 123-45-67
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Icon icon="lucide:mail" className="text-primary" />
                <Link href="mailto:info@energylyceum.edu.ua" className="text-gray-400 hover:text-primary transition-colors">
                  info@energylyceum.edu.ua
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Icon icon="lucide:clock" className="text-primary" />
                <span className="text-gray-400">Пн-Пт: 8:00 - 17:00</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg mb-4">Підписка на новини</h3>
            <p className="text-gray-400 mb-4">
              Отримуйте останні новини та оновлення про наш ліцей.
            </p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Ваш email" 
                className="px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-primary"
                required
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-600 transition-colors"
              >
                Підписатися
              </button>
            </form>
          </motion.div>
        </div>

        <Divider className="my-8 bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Альтернативний Енергетичний Ліцей. Всі права захищені.
          </p>
          <div className="flex gap-4">
            <Link as={RouterLink} to="/privacy-policy" className="text-gray-400 hover:text-primary transition-colors text-sm">
              Політика конфіденційності
            </Link>
            <Link as={RouterLink} to="/terms" className="text-gray-400 hover:text-primary transition-colors text-sm">
              Умови використання
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;