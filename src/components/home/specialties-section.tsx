import React from 'react';
import { Card, CardBody, Button } from "@heroui/react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

interface SpecialtyCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
  index: number;
}

const SpecialtyCard: React.FC<SpecialtyCardProps> = ({ title, description, icon, link, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full hover:shadow-lg transition-shadow duration-300">
        <CardBody className="p-6">
          <div className="bg-primary-50 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
            <Icon icon={icon} className="text-primary text-2xl" />
          </div>
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-gray-600 mb-6">{description}</p>
          <Button 
            as={Link}
            to={link}
            color="primary" 
            variant="light"
            endContent={<Icon icon="lucide:arrow-right" />}
            className="mt-auto"
          >
            Детальніше
          </Button>
        </CardBody>
      </Card>
    </motion.div>
  );
};

const SpecialtiesSection: React.FC = () => {
  const specialties = [
    {
      title: "Відновлювальна енергетика",
      description: "Вивчення та впровадження технологій сонячної, вітрової та інших видів відновлювальної енергії.",
      icon: "lucide:sun",
      link: "/specialties/renewable-energy"
    },
    {
      title: "Електромонтажні роботи",
      description: "Підготовка фахівців з монтажу та обслуговування електричних систем та обладнання.",
      icon: "lucide:plug",
      link: "/specialties/electrical-installation"
    },
    {
      title: "Автоматизація та IoT",
      description: "Вивчення систем автоматизації та технологій інтернету речей для енергетичної галузі.",
      icon: "lucide:cpu",
      link: "/specialties/automation-iot"
    },
    {
      title: "Енергоефективні будівлі",
      description: "Проектування та будівництво енергоефективних будівель з використанням сучасних технологій.",
      icon: "lucide:home",
      link: "/specialties/energy-efficient-buildings"
    },
    {
      title: "Зварювальні технології",
      description: "Підготовка фахівців з сучасних зварювальних технологій для різних галузей промисловості.",
      icon: "lucide:flame",
      link: "/specialties/welding-technologies"
    },
    {
      title: "Слюсарні роботи",
      description: "Навчання слюсарним роботам з використанням сучасного обладнання та технологій.",
      icon: "lucide:wrench",
      link: "/specialties/locksmith-works"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Наші спеціальності</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Ми пропонуємо широкий спектр спеціальностей у сфері альтернативної енергетики та сучасних технологій
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty, index) => (
            <SpecialtyCard 
              key={index}
              title={specialty.title}
              description={specialty.description}
              icon={specialty.icon}
              link={specialty.link}
              index={index}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            as={Link}
            to="/specialties"
            color="primary" 
            size="lg"
            className="font-medium"
          >
            Всі спеціальності
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;