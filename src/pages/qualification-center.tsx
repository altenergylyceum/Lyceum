import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, Image, Button, Accordion, AccordionItem } from "@heroui/react";
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

interface Certificate {
  id: string;
  title: string;
  description: string;
  duration: string;
  requirements: string[];
}

const QualificationCenterPage: React.FC = () => {
  const certificates: Certificate[] = [
    {
      id: "solar-installer",
      title: "Монтажник систем сонячної енергетики",
      description: "Сертифікат підтверджує кваліфікацію фахівця з монтажу та обслуговування систем сонячної енергетики.",
      duration: "2 місяці",
      requirements: [
        "Базові знання з електротехніки",
        "Вік від 18 років",
        "Середня технічна освіта (бажано)"
      ]
    },
    {
      id: "energy-auditor",
      title: "Енергоаудитор",
      description: "Сертифікат підтверджує кваліфікацію фахівця з проведення енергетичного аудиту будівель та промислових об'єктів.",
      duration: "3 місяці",
      requirements: [
        "Технічна освіта",
        "Базові знання з енергетики та теплотехніки",
        "Вік від 21 року"
      ]
    },
    {
      id: "electrician",
      title: "Електромонтажник",
      description: "Сертифікат підтверджує кваліфікацію фахівця з монтажу, налагодження та обслуговування електричних систем та обладнання.",
      duration: "2.5 місяці",
      requirements: [
        "Базові знання з електротехніки",
        "Вік від 18 років",
        "Відсутність медичних протипоказань"
      ]
    },
    {
      id: "welder",
      title: "Зварювальник",
      description: "Сертифікат підтверджує кваліфікацію фахівця з різних видів зварювання для різних галузей промисловості.",
      duration: "2 місяці",
      requirements: [
        "Базові навички зварювання",
        "Вік від 18 років",
        "Відсутність медичних протипоказань"
      ]
    }
  ];

  const faqItems = [
    {
      question: "Як отримати сертифікат кваліфікаційного центру?",
      answer: "Для отримання сертифікату необхідно пройти відповідний курс навчання та скласти кваліфікаційний іспит. Курси можуть включати як теоретичну, так і практичну підготовку. Після успішного складання іспиту видається сертифікат, який підтверджує вашу кваліфікацію."
    },
    {
      question: "Чи визнаються сертифікати кваліфікаційного центру роботодавцями?",
      answer: "Так, сертифікати нашого кваліфікаційного центру визнаються роботодавцями по всій Україні. Ми співпрацюємо з провідними компаніями галузі, які беруть участь у розробці навчальних програм та оцінюванні кваліфікації."
    },
    {
      question: "Який термін дії сертифікату?",
      answer: "Термін дії сертифікату залежить від конкретної спеціальності та може становити від 3 до 5 років. Після закінчення терміну дії сертифікату необхідно пройти процедуру підтвердження кваліфікації."
    },
    {
      question: "Чи можна пройти навчання дистанційно?",
      answer: "Для деяких курсів можливе дистанційне навчання теоретичної частини. Однак, практична частина та кваліфікаційний іспит проводяться очно в нашому кваліфікаційному центрі."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://img.heroui.chat/image/places?w=1920&h=600&u=qualification_center_hero"
            alt="Qualification Center"
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Кваліфікаційний центр</h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Отримайте офіційне підтвердження своєї кваліфікації у галузі альтернативної енергетики та сучасних технологій
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Про кваліфікаційний центр</h2>
                <p className="text-gray-600 mb-6">
                  Кваліфікаційний центр Альтернативного Енергетичного Ліцею - це сучасний центр оцінювання та підтвердження кваліфікації фахівців у галузі альтернативної енергетики та сучасних технологій. Ми проводимо оцінювання відповідно до професійних стандартів та видаємо сертифікати, які підтверджують кваліфікацію фахівців.
                </p>
                <p className="text-gray-600 mb-6">
                  Наш кваліфікаційний центр акредитований Міністерством освіти і науки України та співпрацює з провідними компаніями галузі, що забезпечує високий рівень визнання наших сертифікатів роботодавцями.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    as={Link}
                    to="/qualification-center/certificates"
                    color="primary" 
                    endContent={<Icon icon="lucide:arrow-right" />}
                  >
                    Всі сертифікати
                  </Button>
                  <Button 
                    as={Link}
                    to="/qualification-center/standards"
                    variant="flat" 
                    color="default"
                    endContent={<Icon icon="lucide:arrow-right" />}
                  >
                    Професійні стандарти
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-100 rounded-lg z-0"></div>
                <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                  <Image
                    alt="Кваліфікаційний центр"
                    src="https://img.heroui.chat/image/places?w=600&h=400&u=qualification_center"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-50 rounded-lg z-0"></div>
              </div>
            </div>
          </motion.div>

          {/* Certificates Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Сертифікати</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Ознайомтеся з сертифікатами, які можна отримати в нашому кваліфікаційному центрі
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certificates.map((certificate, index) => (
                <motion.div
                  key={certificate.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardBody className="p-6">
                      <h3 className="text-xl font-semibold mb-3">{certificate.title}</h3>
                      <p className="text-gray-600 mb-4">{certificate.description}</p>
                      
                      <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                        <Icon icon="lucide:clock" className="text-primary" />
                        <span>Тривалість: {certificate.duration}</span>
                      </div>
                      
                      <h4 className="font-semibold mb-2">Вимоги:</h4>
                      <ul className="text-gray-600 mb-6 space-y-1">
                        {certificate.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Icon icon="lucide:check" className="text-primary mt-1" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        as={Link}
                        to={`/qualification-center/certificates/${certificate.id}`}
                        color="primary" 
                        variant="light"
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
          </motion.div>

          {/* Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Процес отримання сертифікату</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Ознайомтеся з процесом отримання сертифікату в нашому кваліфікаційному центрі
              </p>
            </div>
            
            <div className="relative">
              {/* Process steps */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>
              
              <div className="space-y-12">
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <Card>
                          <CardBody className="p-6">
                            <h3 className="text-xl font-semibold mb-3">1. Подання заявки</h3>
                            <p className="text-gray-600">
                              Заповніть заявку на отримання сертифікату, вказавши свої дані та бажану спеціальність. Наші консультанти зв'яжуться з вами для уточнення деталей та надання додаткової інформації.
                            </p>
                          </CardBody>
                        </Card>
                      </motion.div>
                    </div>
                    <div className="md:w-1/2 md:pl-8 relative">
                      <div className="hidden md:block absolute left-0 top-1/2 w-8 h-1 bg-primary transform -translate-x-full -translate-y-1/2"></div>
                      <div className="hidden md:flex absolute left-0 top-1/2 w-8 h-8 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 items-center justify-center text-white font-bold">
                        1
                      </div>
                      <div className="md:hidden flex w-8 h-8 bg-primary rounded-full items-center justify-center text-white font-bold mb-4">
                        1
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0 md:order-2">
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <Card>
                          <CardBody className="p-6">
                            <h3 className="text-xl font-semibold mb-3">2. Навчання (за потреби)</h3>
                            <p className="text-gray-600">
                              Якщо вам потрібно підвищити свою кваліфікацію перед сертифікацією, ви можете пройти відповідний курс навчання в нашому ліцеї. Курси включають як теоретичну, так і практичну підготовку.
                            </p>
                          </CardBody>
                        </Card>
                      </motion.div>
                    </div>
                    <div className="md:w-1/2 md:pl-8 relative md:order-1">
                      <div className="hidden md:block absolute right-0 top-1/2 w-8 h-1 bg-primary transform translate-x-full -translate-y-1/2"></div>
                      <div className="hidden md:flex absolute right-0 top-1/2 w-8 h-8 bg-primary rounded-full transform translate-x-1/2 -translate-y-1/2 items-center justify-center text-white font-bold">
                        2
                      </div>
                      <div className="md:hidden flex w-8 h-8 bg-primary rounded-full items-center justify-center text-white font-bold mb-4">
                        2
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <Card>
                          <CardBody className="p-6">
                            <h3 className="text-xl font-semibold mb-3">3. Кваліфікаційний іспит</h3>
                            <p className="text-gray-600">
                              Пройдіть кваліфікаційний іспит, який включає теоретичну та практичну частини. Іспит проводиться відповідно до професійних стандартів та оцінюється незалежною комісією.
                            </p>
                          </CardBody>
                        </Card>
                      </motion.div>
                    </div>
                    <div className="md:w-1/2 md:pl-8 relative">
                      <div className="hidden md:block absolute left-0 top-1/2 w-8 h-1 bg-primary transform -translate-x-full -translate-y-1/2"></div>
                      <div className="hidden md:flex absolute left-0 top-1/2 w-8 h-8 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 items-center justify-center text-white font-bold">
                        3
                      </div>
                      <div className="md:hidden flex w-8 h-8 bg-primary rounded-full items-center justify-center text-white font-bold mb-4">
                        3
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0 md:order-2">
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <Card>
                          <CardBody className="p-6">
                            <h3 className="text-xl font-semibold mb-3">4. Отримання сертифікату</h3>
                            <p className="text-gray-600">
                              Після успішного складання іспиту ви отримуєте сертифікат, який підтверджує вашу кваліфікацію. Сертифікат визнається роботодавцями по всій Україні та має термін дії від 3 до 5 років.
                            </p>
                          </CardBody>
                        </Card>
                      </motion.div>
                    </div>
                    <div className="md:w-1/2 md:pl-8 relative md:order-1">
                      <div className="hidden md:block absolute right-0 top-1/2 w-8 h-1 bg-primary transform translate-x-full -translate-y-1/2"></div>
                      <div className="hidden md:flex absolute right-0 top-1/2 w-8 h-8 bg-primary rounded-full transform translate-x-1/2 -translate-y-1/2 items-center justify-center text-white font-bold">
                        4
                      </div>
                      <div className="md:hidden flex w-8 h-8 bg-primary rounded-full items-center justify-center text-white font-bold mb-4">
                        4
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Часті запитання</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Відповіді на найпоширеніші запитання про кваліфікаційний центр
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion variant="bordered">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} title={item.question}>
                    <p className="text-gray-600">{item.answer}</p>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">Готові отримати сертифікат?</p>
              <Button 
                as={Link}
                to="/qualification-center/apply"
                color="primary" 
                size="lg"
                className="font-medium"
              >
                Подати заявку
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default QualificationCenterPage;