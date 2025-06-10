import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link, DropdownItem } from "@heroui/react";
import { motion } from 'framer-motion';

interface MegaMenuProps {
  menuId: string;
  isMobile?: boolean;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ menuId, isMobile = false }) => {
  // Menu data structure
  const menuData = {
    about: {
      title: 'Про нас',
      items: [
        { label: 'Публічна інформація', path: '/about/public-info' },
        { label: 'Адміністрація та викладачі', path: '/about/administration' },
        { label: 'Структура та органи управління закладу освіти', path: '/about/structure' },
        { label: 'Історія закладу', path: '/about/history' },
        { label: 'Галерея', path: '/about/gallery' },
        { label: 'Наші герої', path: '/about/heroes' },
        { label: 'Зд-тур', path: '/about/3d-tour' },
        { label: 'Нормативні акти', path: '/about/regulations' },
        { label: 'Звіти', path: '/about/reports' },
        { label: 'Матеріально-технічне забезпечення', path: '/about/facilities' },
        { label: 'Закупівлі', path: '/about/procurement' },
      ]
    },
    'students-teachers': {
      title: 'Учням і педагогам',
      items: [
        { label: 'Права та обов\'язки учня', path: '/students-teachers/rights-duties' },
        { label: 'Електронна бібліотека', path: '/students-teachers/e-library' },
        { label: 'Виховна робота', path: '/students-teachers/educational-work' },
        { label: 'Волонтерська робота', path: '/students-teachers/volunteer-work' },
        { label: 'Дистанційне навчання', path: '/students-teachers/distance-learning' },
        { label: 'Розклад занять', path: '/students-teachers/schedule' },
        { label: 'Протидія булінгу', path: '/students-teachers/anti-bullying' },
        { label: 'Кібергігієна', path: '/students-teachers/cyber-hygiene' },
        { label: 'Безпека в цифровому просторі', path: '/students-teachers/digital-safety' },
        { label: 'Підготовка та проведення ЗНО', path: '/students-teachers/zno' },
        { label: 'Методична робота', path: '/students-teachers/methodical-work' },
        { label: 'Методичні матеріали для педагогів', path: '/students-teachers/materials' },
        { label: 'Конкурси фахової майстерності', path: '/students-teachers/competitions' },
        { label: 'Гуртки', path: '/students-teachers/clubs' },
        { label: 'Гуртожиток та їдальня', path: '/students-teachers/dormitory' },
        { label: 'Учнівське самоврядування', path: '/students-teachers/student-government' },
        { label: 'Центр кар\'єри', path: '/students-teachers/career-center' },
      ]
    },
    applicants: {
      title: 'Вступникам',
      items: [
        { label: 'Заява на вступ', path: '/applicants/application' },
        { label: 'Правила прийому', path: '/applicants/admission-rules' },
        { label: 'Професії після 9 кл', path: '/applicants/after-9th' },
        { label: 'Професії після 11 кл', path: '/applicants/after-11th' },
        { label: 'Питання та відповіді', path: '/applicants/faq' },
        { label: 'Документи до вступу', path: '/applicants/documents' },
      ]
    },
    'training-centers': {
      title: 'НПЦ',
      items: [
        { label: 'Нпц будівельних робіт', path: '/training-centers/construction' },
        { label: 'Нпц відновлювальної енергії', path: '/training-centers/renewable-energy' },
        { label: 'Нпц слюсарних робіт', path: '/training-centers/locksmith' },
        { label: 'Нпц зварювальних робіт', path: '/training-centers/welding' },
      ]
    },
    'qualification-center': {
      title: 'Кваліфікаційний центр',
      items: [
        { label: 'Сертифікати', path: '/qualification-center/certificates' },
        { label: 'Професійні стандарти', path: '/qualification-center/standards' },
        { label: 'Нормативні документи', path: '/qualification-center/documents' },
      ]
    }
  };

  const currentMenu = menuData[menuId as keyof typeof menuData];
  
  if (!currentMenu) return null;

  if (isMobile) {
    return (
      <>
        {currentMenu.items.map((item, index) => (
          <DropdownItem 
            key={index} 
            as={RouterLink} 
            to={item.path}
            className="py-2"
          >
            {item.label}
          </DropdownItem>
        ))}
      </>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentMenu.items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.03 }}
          >
            <Link 
              as={RouterLink} 
              to={item.path}
              className="block p-3 rounded-md transition-all duration-200 hover:bg-gray-50 hover:text-primary"
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;