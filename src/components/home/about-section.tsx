import React from 'react';
import { Image, Button } from "@heroui/react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-100 rounded-lg z-0"></div>
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <Image
                alt="Альтернативний Енергетичний Ліцей"
                src="https://img.heroui.chat/image/dashboard?w=600&h=400&u=lyceum1"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-50 rounded-lg z-0"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Про наш ліцей
            </h2>
            
            <p className="text-gray-600 mb-6 text-lg">
              Альтернативний Енергетичний Ліцей - це сучасний навчальний заклад, який спеціалізується на підготовці фахівців у галузі альтернативної енергетики та сучасних технологій. Ми поєднуємо традиційну освіту з інноваційними підходами, щоб надати нашим студентам найкращі можливості для професійного розвитку.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-primary-50 p-2 rounded-md">
                  <Icon icon="lucide:award" className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Висока якість освіти</h3>
                  <p className="text-gray-600">Сучасні програми навчання та кваліфіковані викладачі</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-primary-50 p-2 rounded-md">
                  <Icon icon="lucide:lightbulb" className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Інноваційний підхід</h3>
                  <p className="text-gray-600">Використання новітніх технологій у навчальному процесі</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-primary-50 p-2 rounded-md">
                  <Icon icon="lucide:users" className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Індивідуальний підхід</h3>
                  <p className="text-gray-600">Увага до потреб та здібностей кожного студента</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-primary-50 p-2 rounded-md">
                  <Icon icon="lucide:briefcase" className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Працевлаштування</h3>
                  <p className="text-gray-600">Допомога у пошуку роботи після завершення навчання</p>
                </div>
              </div>
            </div>
            
            <Button 
              as={Link}
              to="/about"
              color="primary" 
              variant="flat"
              endContent={<Icon icon="lucide:arrow-right" />}
              className="font-medium"
            >
              Дізнатися більше
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;