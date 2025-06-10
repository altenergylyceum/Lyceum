import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, Image, Button, Accordion, AccordionItem, Input, Textarea } from "@heroui/react";
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const ApplicantsPage: React.FC = () => {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    education: '',
    specialty: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your server
    alert('Заявку успішно відправлено! Ми зв\'яжемося з вами найближчим часом.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      education: '',
      specialty: '',
      message: ''
    });
  };

  const faqItems = [
    {
      question: "Які документи потрібні для вступу?",
      answer: "Для вступу до ліцею необхідно подати такі документи: заява на вступ, копія паспорта або свідоцтва про народження, копія ідентифікаційного коду, документ про освіту (атестат або свідоцтво), медична довідка форми 086-о, 4 фотокартки розміром 3х4 см."
    },
    {
      question: "Які терміни подання документів?",
      answer: "Прийом документів на денну форму навчання розпочинається 1 липня і триває до 15 серпня. Для вступників на базі 9 класів - до 15 липня, на базі 11 класів - до 15 серпня."
    },
    {
      question: "Чи є вступні іспити?",
      answer: "Вступ до ліцею відбувається на конкурсній основі за результатами співбесіди та середнього бала документа про освіту. Для окремих спеціальностей може проводитися додаткове тестування з профільних предметів."
    },
    {
      question: "Чи є гуртожиток для іногородніх студентів?",
      answer: "Так, ліцей забезпечує іногородніх студентів місцями у гуртожитку. Для отримання місця у гуртожитку необхідно подати відповідну заяву разом з документами на вступ."
    },
    {
      question: "Чи є можливість навчатися за державним замовленням?",
      answer: "Так, ліцей здійснює підготовку фахівців як за державним замовленням, так і за контрактом. Кількість бюджетних місць визначається щороку і залежить від спеціальності."
    }
  ];

  const specialties = [
    {
      title: "Відновлювальна енергетика",
      after9: true,
      after11: true,
      duration9: "3 роки",
      duration11: "2 роки"
    },
    {
      title: "Електромонтажні роботи",
      after9: true,
      after11: true,
      duration9: "2.5 роки",
      duration11: "1.5 роки"
    },
    {
      title: "Автоматизація та IoT",
      after9: true,
      after11: true,
      duration9: "3 роки",
      duration11: "2 роки"
    },
    {
      title: "Енергоефективні будівлі",
      after9: true,
      after11: true,
      duration9: "3 роки",
      duration11: "2 роки"
    },
    {
      title: "Зварювальні технології",
      after9: true,
      after11: true,
      duration9: "2.5 роки",
      duration11: "1.5 роки"
    },
    {
      title: "Слюсарні роботи",
      after9: true,
      after11: false,
      duration9: "2 роки",
      duration11: "-"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://img.heroui.chat/image/places?w=1920&h=600&u=applicants_hero"
            alt="Applicants"
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Вступникам</h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Інформація для майбутніх студентів про вступ до Альтернативного Енергетичного Ліцею
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Application Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Подати заявку на вступ</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Заповніть форму нижче, і наші консультанти зв'яжуться з вами для надання детальної інформації про вступ та відповідей на ваші запитання.
                </p>
              </div>
              
              <Card>
                <CardBody className="p-6 md:p-8">
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <Input
                          label="Ім'я"
                          placeholder="Введіть ваше ім'я"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          isRequired
                        />
                      </div>
                      <div>
                        <Input
                          label="Прізвище"
                          placeholder="Введіть ваше прізвище"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          isRequired
                        />
                      </div>
                      <div>
                        <Input
                          label="Email"
                          placeholder="Введіть ваш email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          isRequired
                        />
                      </div>
                      <div>
                        <Input
                          label="Телефон"
                          placeholder="Введіть ваш телефон"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          isRequired
                        />
                      </div>
                      <div>
                        <Input
                          label="Освіта"
                          placeholder="9 клас, 11 клас, тощо"
                          name="education"
                          value={formData.education}
                          onChange={handleInputChange}
                          isRequired
                        />
                      </div>
                      <div>
                        <Input
                          label="Бажана спеціальність"
                          placeholder="Введіть бажану спеціальність"
                          name="specialty"
                          value={formData.specialty}
                          onChange={handleInputChange}
                          isRequired
                        />
                      </div>
                    </div>
                    <div className="mb-6">
                      <Textarea
                        label="Додаткова інформація"
                        placeholder="Введіть додаткову інформацію або запитання"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        minRows={4}
                      />
                    </div>
                    <div className="flex justify-center">
                      <Button 
                        type="submit" 
                        color="primary" 
                        size="lg"
                        className="font-medium"
                      >
                        Відправити заявку
                      </Button>
                    </div>
                  </form>
                </CardBody>
              </Card>
            </div>
          </motion.div>

          {/* Specialties Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Наші спеціальності</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Ознайомтеся з нашими спеціальностями для вступників після 9 та 11 класів
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-200 p-4 text-left">Спеціальність</th>
                    <th className="border border-gray-200 p-4 text-center">Після 9 класу</th>
                    <th className="border border-gray-200 p-4 text-center">Тривалість (9 кл.)</th>
                    <th className="border border-gray-200 p-4 text-center">Після 11 класу</th>
                    <th className="border border-gray-200 p-4 text-center">Тривалість (11 кл.)</th>
                  </tr>
                </thead>
                <tbody>
                  {specialties.map((specialty, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="border border-gray-200 p-4 font-medium">{specialty.title}</td>
                      <td className="border border-gray-200 p-4 text-center">
                        {specialty.after9 ? (
                          <Icon icon="lucide:check" className="text-primary mx-auto" />
                        ) : (
                          <Icon icon="lucide:x" className="text-gray-400 mx-auto" />
                        )}
                      </td>
                      <td className="border border-gray-200 p-4 text-center">{specialty.duration9}</td>
                      <td className="border border-gray-200 p-4 text-center">
                        {specialty.after11 ? (
                          <Icon icon="lucide:check" className="text-primary mx-auto" />
                        ) : (
                          <Icon icon="lucide:x" className="text-gray-400 mx-auto" />
                        )}
                      </td>
                      <td className="border border-gray-200 p-4 text-center">{specialty.duration11}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="flex justify-center mt-8">
              <Button 
                as={Link}
                to="/specialties"
                color="primary" 
                variant="light"
                endContent={<Icon icon="lucide:arrow-right" />}
              >
                Детальніше про спеціальності
              </Button>
            </div>
          </motion.div>

          {/* Admission Rules */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Правила прийому</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Ознайомтеся з правилами прийому до Альтернативного Енергетичного Ліцею
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardBody className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Необхідні документи</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <Icon icon="lucide:check" className="text-primary mt-1" />
                      <span>Заява на вступ</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon icon="lucide:check" className="text-primary mt-1" />
                      <span>Копія паспорта або свідоцтва про народження</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon icon="lucide:check" className="text-primary mt-1" />
                      <span>Копія ідентифікаційного коду</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon icon="lucide:check" className="text-primary mt-1" />
                      <span>Документ про освіту (атестат або свідоцтво)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon icon="lucide:check" className="text-primary mt-1" />
                      <span>Медична довідка форми 086-о</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon icon="lucide:check" className="text-primary mt-1" />
                      <span>4 фотокартки розміром 3х4 см</span>
                    </li>
                  </ul>
                </CardBody>
              </Card>
              
              <Card>
                <CardBody className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Етапи вступу</h3>
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex items-start gap-3">
                      <div className="bg-primary-50 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-medium">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Подання документів</h4>
                        <p className="text-sm">Подайте необхідні документи до приймальної комісії</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-primary-50 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-medium">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Співбесіда</h4>
                        <p className="text-sm">Пройдіть співбесіду з представниками приймальної комісії</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-primary-50 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-medium">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Конкурсний відбір</h4>
                        <p className="text-sm">Участь у конкурсному відборі за результатами співбесіди та середнього бала</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-primary-50 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-medium">4</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Зарахування</h4>
                        <p className="text-sm">Зарахування на навчання за результатами конкурсного відбору</p>
                      </div>
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </div>
            
            <div className="flex justify-center mt-8">
              <Button 
                as={Link}
                to="/applicants/admission-rules"
                color="primary" 
                variant="light"
                endContent={<Icon icon="lucide:arrow-right" />}
              >
                Детальніше про правила прийому
              </Button>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Часті запитання</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Відповіді на найпоширеніші запитання вступників
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
              <p className="text-gray-600 mb-4">Не знайшли відповідь на своє запитання?</p>
              <Button 
                as={Link}
                to="/contact"
                color="primary" 
                className="font-medium"
                startContent={<Icon icon="lucide:mail" />}
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

export default ApplicantsPage;