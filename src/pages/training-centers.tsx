import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, Image, Button } from "@heroui/react";
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

interface TrainingCenter {
  id: string;
  title: string;
  description: string;
  image: string;
  equipment: string[];
  courses: string[];
  icon: string;
}

const TrainingCentersPage: React.FC = () => {
  const trainingCenters: TrainingCenter[] = [
    {
      id: "construction",
      title: "НПЦ будівельних робіт",
      description: "Навчально-практичний центр будівельних робіт забезпечує підготовку фахівців у галузі будівництва з використанням сучасних технологій та матеріалів, з особливим акцентом на енергоефективне будівництво.",
      image: "https://img.heroui.chat/image/places?w=600&h=400&u=center1",
      equipment: [
        "Сучасні будівельні інструменти та обладнання",
        "Лабораторія будівельних матеріалів",
        "Макети енергоефективних будівельних конструкцій",
        "Комп'ютерна лабораторія з програмним забезпеченням для проектування"
      ],
      courses: [
        "Енергоефективне будівництво",
        "Сучасні будівельні технології",
        "Проектування енергоефективних будівель",
        "Реконструкція та модернізація будівель"
      ],
      icon: "lucide:home"
    },
    {
      id: "renewable-energy",
      title: "НПЦ відновлювальної енергії",
      description: "Навчально-практичний центр відновлювальної енергії спеціалізується на підготовці фахівців у галузі альтернативної енергетики, включаючи сонячну, вітрову та інші види відновлювальної енергії.",
      image: "https://img.heroui.chat/image/places?w=600&h=400&u=center2",
      equipment: [
        "Сонячні панелі різних типів",
        "Вітрогенератори малої потужності",
        "Лабораторія акумуляторних систем",
        "Обладнання для моніторингу та аналізу енергоефективності"
      ],
      courses: [
        "Проектування систем сонячної енергетики",
        "Монтаж та обслуговування вітрогенераторів",
        "Системи акумулювання енергії",
        "Інтеграція відновлювальних джерел енергії"
      ],
      icon: "lucide:sun"
    },
    {
      id: "locksmith",
      title: "НПЦ слюсарних робіт",
      description: "Навчально-практичний центр слюсарних робіт забезпечує підготовку фахівців з слюсарної справи з використанням сучасного обладнання та технологій для різних галузей промисловості.",
      image: "https://img.heroui.chat/image/places?w=600&h=400&u=center3",
      equipment: [
        "Сучасні слюсарні верстати та інструменти",
        "Обладнання для механічної обробки металів",
        "Вимірювальні прилади та інструменти",
        "Комп'ютеризовані системи контролю якості"
      ],
      courses: [
        "Основи слюсарної справи",
        "Механічна обробка металів",
        "Монтаж та демонтаж механізмів",
        "Ремонт та обслуговування обладнання"
      ],
      icon: "lucide:wrench"
    },
    {
      id: "welding",
      title: "НПЦ зварювальних робіт",
      description: "Навчально-практичний центр зварювальних робіт спеціалізується на підготовці фахівців з сучасних зварювальних технологій для різних галузей промисловості, включаючи енергетику та машинобудування.",
      image: "https://img.heroui.chat/image/places?w=600&h=400&u=center4",
      equipment: [
        "Сучасні зварювальні апарати різних типів",
        "Обладнання для різних видів зварювання",
        "Системи контролю якості зварних з'єднань",
        "Засоби індивідуального захисту"
      ],
      courses: [
        "Ручне дугове зварювання",
        "Напівавтоматичне зварювання",
        "Аргонове зварювання",
        "Контроль якості зварних з'єднань"
      ],
      icon: "lucide:flame"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://img.heroui.chat/image/places?w=1920&h=600&u=training_centers_hero"
            alt="Training Centers"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Навчально-практичні центри</h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Сучасні навчально-практичні центри для підготовки висококваліфікованих фахівців
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Наші навчально-практичні центри</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Навчально-практичні центри Альтернативного Енергетичного Ліцею оснащені сучасним обладнанням та забезпечують практичну підготовку студентів за різними спеціальностями
            </p>
          </motion.div>

          <div className="space-y-16">
            {trainingCenters.map((center, index) => (
              <motion.div
                key={center.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-lg overflow-hidden shadow-lg">
                    <Image
                      alt={center.title}
                      src={center.image}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white p-3 rounded-full">
                      <Icon icon={center.icon} className="text-xl" />
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">{center.title}</h3>
                  <p className="text-gray-600 mb-6">{center.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-lg mb-3">Обладнання та технології:</h4>
                    <ul className="space-y-2">
                      {center.equipment.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Icon icon="lucide:check" className="text-primary mt-1" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-lg mb-3">Навчальні курси:</h4>
                    <ul className="space-y-2">
                      {center.courses.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Icon icon="lucide:check" className="text-primary mt-1" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    as={Link}
                    to={`/training-centers/${center.id}`}
                    color="primary" 
                    endContent={<Icon icon="lucide:arrow-right" />}
                  >
                    Детальніше
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Card className="bg-primary-50 p-8">
              <CardBody>
                <h3 className="text-2xl font-bold mb-4">Співпраця з бізнесом</h3>
                <p className="text-gray-600 mb-6">
                  Наші навчально-практичні центри активно співпрацюють з провідними компаніями галузі, що дозволяє нашим студентам отримувати практичний досвід роботи з сучасним обладнанням та технологіями, а також забезпечує високий рівень працевлаштування випускників.
                </p>
                <Button 
                  as={Link}
                  to="/contact"
                  color="primary" 
                  className="font-medium"
                >
                  Дізнатися про можливості співпраці
                </Button>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TrainingCentersPage;