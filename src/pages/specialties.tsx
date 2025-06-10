import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, Image, Button } from "@heroui/react";
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

interface Specialty {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  duration: string;
  qualification: string;
  features: string[];
}

const SpecialtiesPage: React.FC = () => {
  const specialties: Specialty[] = [
    {
      id: "renewable-energy",
      title: "Відновлювальна енергетика",
      description: "Підготовка фахівців з проектування, монтажу та обслуговування систем відновлювальної енергетики, включаючи сонячні панелі, вітрогенератори та інші альтернативні джерела енергії.",
      icon: "lucide:sun",
      image: "https://img.heroui.chat/image/places?w=600&h=400&u=specialty1",
      duration: "3 роки",
      qualification: "Технік-енергетик",
      features: [
        "Проектування систем відновлювальної енергетики",
        "Монтаж та обслуговування сонячних панелей",
        "Монтаж та обслуговування вітрогенераторів",
        "Енергоаудит та енергоефективність"
      ]
    },
    {
      id: "electrical-installation",
      title: "Електромонтажні роботи",
      description: "Підготовка фахівців з монтажу, налагодження та обслуговування електричних систем та обладнання для житлових, комерційних та промислових об'єктів.",
      icon: "lucide:plug",
      image: "https://img.heroui.chat/image/places?w=600&h=400&u=specialty2",
      duration: "2.5 роки",
      qualification: "Електромонтажник",
      features: [
        "Монтаж електричних мереж та систем",
        "Налагодження електрообладнання",
        "Обслуговування електричних систем",
        "Читання та розробка електричних схем"
      ]
    },
    {
      id: "automation-iot",
      title: "Автоматизація та IoT",
      description: "Підготовка фахівців з проектування, впровадження та обслуговування систем автоматизації та технологій інтернету речей для енергетичної галузі.",
      icon: "lucide:cpu",
      image: "https://img.heroui.chat/image/places?w=600&h=400&u=specialty3",
      duration: "3 роки",
      qualification: "Технік з автоматизації",
      features: [
        "Програмування контролерів",
        "Розробка систем автоматизації",
        "Впровадження технологій IoT",
        "Обслуговування систем автоматизації"
      ]
    },
    {
      id: "energy-efficient-buildings",
      title: "Енергоефективні будівлі",
      description: "Підготовка фахівців з проектування, будівництва та обслуговування енергоефективних будівель з використанням сучасних технологій та матеріалів.",
      icon: "lucide:home",
      image: "https://img.heroui.chat/image/places?w=600&h=400&u=specialty4",
      duration: "3 роки",
      qualification: "Технік-будівельник",
      features: [
        "Проектування енергоефективних будівель",
        "Використання сучасних будівельних матеріалів",
        "Монтаж систем опалення та кондиціонування",
        "Енергоаудит будівель"
      ]
    },
    {
      id: "welding-technologies",
      title: "Зварювальні технології",
      description: "Підготовка фахівців з сучасних зварювальних технологій для різних галузей промисловості, включаючи енергетику, машинобудування та будівництво.",
      icon: "lucide:flame",
      image: "https://img.heroui.chat/image/places?w=600&h=400&u=specialty5",
      duration: "2.5 роки",
      qualification: "Зварювальник",
      features: [
        "Ручне дугове зварювання",
        "Напівавтоматичне зварювання",
        "Аргонове зварювання",
        "Контроль якості зварних з'єднань"
      ]
    },
    {
      id: "locksmith-works",
      title: "Слюсарні роботи",
      description: "Підготовка фахівців з слюсарних робіт з використанням сучасного обладнання та технологій для різних галузей промисловості.",
      icon: "lucide:wrench",
      image: "https://img.heroui.chat/image/places?w=600&h=400&u=specialty6",
      duration: "2 роки",
      qualification: "Слюсар",
      features: [
        "Слюсарна обробка металів",
        "Монтаж та демонтаж обладнання",
        "Ремонт механізмів та машин",
        "Читання та розробка технічних креслень"
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://img.heroui.chat/image/places?w=1920&h=600&u=specialties_hero"
            alt="Specialties"
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Спеціальності</h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Ознайомтеся з нашими спеціальностями у сфері альтернативної енергетики та сучасних технологій
            </p>
          </motion.div>
        </div>
      </section>

      {/* Specialties Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Наші освітні програми</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Ми пропонуємо широкий спектр спеціальностей, які відповідають сучасним вимогам ринку праці та дозволяють нашим випускникам бути конкурентоспроможними
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <motion.div
                key={specialty.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      alt={specialty.title}
                      src={specialty.image}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white p-2 rounded-full">
                      <Icon icon={specialty.icon} className="text-xl" />
                    </div>
                  </div>
                  <CardBody className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{specialty.title}</h3>
                    <p className="text-gray-600 mb-4">{specialty.description}</p>
                    
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Icon icon="lucide:clock" className="text-primary" />
                        <span className="text-gray-700">{specialty.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon icon="lucide:award" className="text-primary" />
                        <span className="text-gray-700">{specialty.qualification}</span>
                      </div>
                    </div>
                    
                    <h4 className="font-semibold mb-2">Ви навчитеся:</h4>
                    <ul className="text-gray-600 mb-6 space-y-1">
                      {specialty.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Icon icon="lucide:check" className="text-primary mt-1" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      as={Link}
                      to={`/specialties/${specialty.id}`}
                      color="primary" 
                      endContent={<Icon icon="lucide:arrow-right" />}
                      className="w-full"
                    >
                      Детальніше
                    </Button>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Готові приєднатися до нас?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Якщо ви зацікавлені в навчанні за однією з наших спеціальностей, заповніть заявку на вступ або зв'яжіться з нами для отримання додаткової інформації.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                as={Link}
                to="/applicants"
                color="primary" 
                size="lg"
                className="font-medium"
                startContent={<Icon icon="lucide:file-text" />}
              >
                Подати заявку
              </Button>
              <Button 
                as={Link}
                to="/contact"
                variant="flat" 
                color="default"
                size="lg"
                className="font-medium"
                startContent={<Icon icon="lucide:phone" />}
              >
                Зв'язатися з нами
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SpecialtiesPage;