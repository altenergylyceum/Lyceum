import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, Image, Button, Accordion, AccordionItem } from "@heroui/react";
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

interface ResourceCategory {
  id: string;
  title: string;
  icon: string;
  items: ResourceItem[];
}

interface ResourceItem {
  id: string;
  title: string;
  description: string;
  link: string;
}

const StudentsTeachersPage: React.FC = () => {
  const studentResources: ResourceCategory[] = [
    {
      id: "rights-duties",
      title: "Права та обов'язки учня",
      icon: "lucide:shield",
      items: [
        {
          id: "rights",
          title: "Права учнів",
          description: "Інформація про права учнів у нашому ліцеї",
          link: "/students-teachers/rights-duties/rights"
        },
        {
          id: "duties",
          title: "Обов'язки учнів",
          description: "Інформація про обов'язки учнів у нашому ліцеї",
          link: "/students-teachers/rights-duties/duties"
        }
      ]
    },
    {
      id: "e-library",
      title: "Електронна бібліотека",
      icon: "lucide:book-open",
      items: [
        {
          id: "textbooks",
          title: "Електронні підручники",
          description: "Доступ до електронних підручників з різних предметів",
          link: "/students-teachers/e-library/textbooks"
        },
        {
          id: "materials",
          title: "Навчальні матеріали",
          description: "Додаткові навчальні матеріали для самостійного вивчення",
          link: "/students-teachers/e-library/materials"
        }
      ]
    },
    {
      id: "distance-learning",
      title: "Дистанційне навчання",
      icon: "lucide:laptop",
      items: [
        {
          id: "platform",
          title: "Платформа дистанційного навчання",
          description: "Інформація про платформу дистанційного навчання та як нею користуватися",
          link: "/students-teachers/distance-learning/platform"
        },
        {
          id: "courses",
          title: "Онлайн-курси",
          description: "Доступні онлайн-курси для студентів",
          link: "/students-teachers/distance-learning/courses"
        }
      ]
    }
  ];

  const teacherResources: ResourceCategory[] = [
    {
      id: "methodical-work",
      title: "Методична робота",
      icon: "lucide:clipboard",
      items: [
        {
          id: "plans",
          title: "Методичні плани",
          description: "Методичні плани для викладачів",
          link: "/students-teachers/methodical-work/plans"
        },
        {
          id: "recommendations",
          title: "Методичні рекомендації",
          description: "Рекомендації щодо організації навчального процесу",
          link: "/students-teachers/methodical-work/recommendations"
        }
      ]
    },
    {
      id: "materials",
      title: "Методичні матеріали для педагогів",
      icon: "lucide:file-text",
      items: [
        {
          id: "lesson-plans",
          title: "Плани уроків",
          description: "Зразки планів уроків з різних предметів",
          link: "/students-teachers/materials/lesson-plans"
        },
        {
          id: "presentations",
          title: "Презентації",
          description: "Презентації для використання на уроках",
          link: "/students-teachers/materials/presentations"
        }
      ]
    },
    {
      id: "competitions",
      title: "Конкурси фахової майстерності",
      icon: "lucide:trophy",
      items: [
        {
          id: "upcoming",
          title: "Майбутні конкурси",
          description: "Інформація про майбутні конкурси фахової майстерності",
          link: "/students-teachers/competitions/upcoming"
        },
        {
          id: "results",
          title: "Результати конкурсів",
          description: "Результати минулих конкурсів фахової майстерності",
          link: "/students-teachers/competitions/results"
        }
      ]
    }
  ];

  const faqItems = [
    {
      question: "Як отримати доступ до електронної бібліотеки?",
      answer: "Для доступу до електронної бібліотеки необхідно авторизуватися на сайті, використовуючи свій студентський або викладацький обліковий запис. Після авторизації ви отримаєте доступ до всіх електронних ресурсів відповідно до вашого статусу."
    },
    {
      question: "Як працює система дистанційного навчання?",
      answer: "Система дистанційного навчання базується на платформі Moodle. Для доступу до курсів необхідно авторизуватися, використовуючи свій обліковий запис. На платформі ви знайдете всі необхідні матеріали, завдання та тести для успішного навчання."
    },
    {
      question: "Як взяти участь у конкурсі фахової майстерності?",
      answer: "Для участі у конкурсі фахової майстерності необхідно заповнити заявку, яку можна отримати у свого куратора або завантажити з відповідного розділу сайту. Заповнену заявку потрібно подати до організаційного комітету конкурсу у встановлені терміни."
    },
    {
      question: "Як отримати консультацію викладача?",
      answer: "Для отримання консультації викладача ви можете звернутися до нього особисто під час консультаційних годин, які вказані у розкладі, або надіслати запит через систему електронного зв'язку ліцею."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://img.heroui.chat/image/places?w=1920&h=600&u=students_hero"
            alt="Students and Teachers"
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Учням і педагогам</h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Ресурси, матеріали та інформація для учнів та педагогів нашого ліцею
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Students Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Ресурси для учнів</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {studentResources.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardBody className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-primary-50 p-3 rounded-full">
                          <Icon icon={category.icon} className="text-primary text-xl" />
                        </div>
                        <h3 className="text-xl font-semibold">{category.title}</h3>
                      </div>
                      <ul className="space-y-4 mb-6">
                        {category.items.map((item) => (
                          <li key={item.id}>
                            <Link 
                              to={item.link}
                              className="block p-3 rounded-md transition-all duration-200 hover:bg-gray-50"
                            >
                              <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                              <p className="text-gray-600 text-sm">{item.description}</p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <Button 
                        as={Link}
                        to={`/students-teachers/${category.id}`}
                        color="primary" 
                        variant="light"
                        endContent={<Icon icon="lucide:arrow-right" />}
                        className="w-full"
                      >
                        Всі ресурси
                      </Button>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Divider */}
          <div className="my-16 flex items-center">
            <div className="flex-grow h-px bg-gray-200"></div>
            <div className="px-4 text-gray-500 font-medium">Ресурси для педагогів</div>
            <div className="flex-grow h-px bg-gray-200"></div>
          </div>

          {/* Teachers Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Ресурси для педагогів</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teacherResources.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardBody className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-primary-50 p-3 rounded-full">
                          <Icon icon={category.icon} className="text-primary text-xl" />
                        </div>
                        <h3 className="text-xl font-semibold">{category.title}</h3>
                      </div>
                      <ul className="space-y-4 mb-6">
                        {category.items.map((item) => (
                          <li key={item.id}>
                            <Link 
                              to={item.link}
                              className="block p-3 rounded-md transition-all duration-200 hover:bg-gray-50"
                            >
                              <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                              <p className="text-gray-600 text-sm">{item.description}</p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <Button 
                        as={Link}
                        to={`/students-teachers/${category.id}`}
                        color="primary" 
                        variant="light"
                        endContent={<Icon icon="lucide:arrow-right" />}
                        className="w-full"
                      >
                        Всі ресурси
                      </Button>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Часті запитання</h2>
            <div className="max-w-3xl mx-auto">
              <Accordion variant="bordered">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} title={item.question}>
                    <p className="text-gray-600">{item.answer}</p>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Потрібна додаткова допомога?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Якщо ви не знайшли відповідь на своє запитання або вам потрібна додаткова інформація, зв'яжіться з нами.
            </p>
            <Button 
              as={Link}
              to="/contact"
              color="primary" 
              size="lg"
              className="font-medium"
              startContent={<Icon icon="lucide:mail" />}
            >
              Зв'язатися з нами
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default StudentsTeachersPage;