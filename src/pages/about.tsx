import React from 'react';
import { motion } from 'framer-motion';
import { Image, Button, Card, CardBody, Accordion, AccordionItem } from "@heroui/react";
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const AboutPage: React.FC = () => {
  const aboutItems = [
    { 
      title: 'Публічна інформація',
      path: '/about/public-info',
      icon: 'lucide:info'
    },
    { 
      title: 'Адміністрація та викладачі',
      path: '/about/administration',
      icon: 'lucide:users'
    },
    { 
      title: 'Структура та органи управління',
      path: '/about/structure',
      icon: 'lucide:git-branch'
    },
    { 
      title: 'Історія закладу',
      path: '/about/history',
      icon: 'lucide:history'
    },
    { 
      title: 'Галерея',
      path: '/about/gallery',
      icon: 'lucide:image'
    },
    { 
      title: 'Наші герої',
      path: '/about/heroes',
      icon: 'lucide:medal'
    },
    { 
      title: '3D-тур',
      path: '/about/3d-tour',
      icon: 'lucide:view'
    },
    { 
      title: 'Нормативні акти',
      path: '/about/regulations',
      icon: 'lucide:file-text'
    },
    { 
      title: 'Звіти',
      path: '/about/reports',
      icon: 'lucide:bar-chart-2'
    },
    { 
      title: 'Матеріально-технічне забезпечення',
      path: '/about/facilities',
      icon: 'lucide:tool'
    },
    { 
      title: 'Закупівлі',
      path: '/about/procurement',
      icon: 'lucide:shopping-cart'
    }
  ];

  const faqItems = [
    {
      question: "Яка історія створення ліцею?",
      answer: "Альтернативний Енергетичний Ліцей був заснований у 2008 році з метою підготовки висококваліфікованих фахівців у галузі альтернативної енергетики та сучасних технологій. За роки існування ліцей став провідним навчальним закладом у своїй галузі в Україні."
    },
    {
      question: "Які цінності сповідує ліцей?",
      answer: "Наші основні цінності - інноваційність, професіоналізм, відповідальність, екологічність та студентоцентризм. Ми прагнемо виховувати не лише професіоналів своєї справи, але й свідомих громадян, які дбають про майбутнє планети."
    },
    {
      question: "Хто входить до складу адміністрації ліцею?",
      answer: "До складу адміністрації входять директор, заступники директора з навчальної та виховної роботи, керівники навчально-практичних центрів та адміністративний персонал. Детальну інформацію про кожного члена адміністрації можна знайти у розділі 'Адміністрація та викладачі'."
    },
    {
      question: "Як організована структура управління ліцеєм?",
      answer: "Структура управління ліцеєм включає адміністративну раду, педагогічну раду, методичні об'єднання викладачів та учнівське самоврядування. Кожен підрозділ має свої функції та відповідальність, що забезпечує ефективне функціонування закладу."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://img.heroui.chat/image/places?w=1920&h=600&u=lyceum_about"
            alt="About Us"
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Про нас</h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Дізнайтеся більше про Альтернативний Енергетичний Ліцей, нашу історію, цінності та досягнення
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-md p-6 sticky top-24"
              >
                <h3 className="text-xl font-semibold mb-4">Розділи</h3>
                <ul className="space-y-2">
                  {aboutItems.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Link 
                        to={item.path} 
                        className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md transition-colors text-gray-700 hover:text-primary"
                      >
                        <Icon icon={item.icon} className="text-primary" />
                        <span>{item.title}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6">Альтернативний Енергетичний Ліцей</h2>
                <p className="text-gray-600 mb-6 text-lg">
                  Альтернативний Енергетичний Ліцей - це сучасний навчальний заклад, який спеціалізується на підготовці фахівців у галузі альтернативної енергетики та сучасних технологій. Ми поєднуємо традиційну освіту з інноваційними підходами, щоб надати нашим студентам найкращі можливості для професійного розвитку.
                </p>

                <div className="mb-8 rounded-lg overflow-hidden">
                  <Image
                    src="https://img.heroui.chat/image/places?w=800&h=400&u=lyceum_building"
                    alt="Будівля ліцею"
                    className="w-full h-auto"
                  />
                </div>

                <h3 className="text-2xl font-semibold mb-4">Наша місія</h3>
                <p className="text-gray-600 mb-6">
                  Наша місія полягає у підготовці висококваліфікованих фахівців для галузі альтернативної енергетики, здатних впроваджувати інноваційні технології та сприяти сталому розвитку України. Ми прагнемо створити освітнє середовище, яке стимулює творчість, критичне мислення та практичні навички наших студентів.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card>
                    <CardBody className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-primary-50 p-3 rounded-full">
                          <Icon icon="lucide:eye" className="text-primary text-xl" />
                        </div>
                        <h4 className="text-xl font-semibold">Наше бачення</h4>
                      </div>
                      <p className="text-gray-600">
                        Стати провідним освітнім центром у галузі альтернативної енергетики в Україні, чиї випускники будуть затребувані на ринку праці та зможуть зробити вагомий внесок у розвиток галузі.
                      </p>
                    </CardBody>
                  </Card>

                  <Card>
                    <CardBody className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-primary-50 p-3 rounded-full">
                          <Icon icon="lucide:heart" className="text-primary text-xl" />
                        </div>
                        <h4 className="text-xl font-semibold">Наші цінності</h4>
                      </div>
                      <ul className="text-gray-600 space-y-2">
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-primary" />
                          <span>Інноваційність</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-primary" />
                          <span>Професіоналізм</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-primary" />
                          <span>Відповідальність</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-primary" />
                          <span>Екологічність</span>
                        </li>
                      </ul>
                    </CardBody>
                  </Card>
                </div>

                <h3 className="text-2xl font-semibold mb-4">Часті запитання</h3>
                <div className="mb-8">
                  <Accordion variant="bordered">
                    {faqItems.map((item, index) => (
                      <AccordionItem key={index} title={item.question}>
                        <p className="text-gray-600">{item.answer}</p>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                <div className="flex justify-center">
                  <Button 
                    as={Link}
                    to="/about/history"
                    color="primary"
                    endContent={<Icon icon="lucide:arrow-right" />}
                  >
                    Дізнатися більше про історію ліцею
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;