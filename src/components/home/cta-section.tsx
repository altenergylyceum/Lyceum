import React from 'react';
import { Button } from "@heroui/react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Готові розпочати свій шлях у світ альтернативної енергетики?
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-white text-opacity-90 mb-8 text-lg">
              Приєднуйтесь до нашого ліцею та отримайте якісну освіту, яка відкриє перед вами двері у майбутнє!
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              as={Link}
              to="/applicants"
              color="default" 
              size="lg"
              className="font-medium text-lg bg-white text-primary"
              startContent={<Icon icon="lucide:file-text" />}
            >
              Подати заявку
            </Button>
            <Button 
              as={Link}
              to="/contact"
              variant="flat" 
              size="lg"
              className="font-medium text-lg border-white text-white"
              startContent={<Icon icon="lucide:phone" />}
            >
              Зв'язатися з нами
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;