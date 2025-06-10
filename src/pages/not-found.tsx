import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@heroui/react";
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const NotFoundPage: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="text-9xl font-bold text-primary">404</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold mb-4">Сторінку не знайдено</h1>
            <p className="text-gray-600 text-lg max-w-md mx-auto">
              Сторінка, яку ви шукаєте, не існує або була переміщена.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              as={Link}
              to="/"
              color="primary" 
              size="lg"
              className="font-medium"
              startContent={<Icon icon="lucide:home" />}
            >
              На головну
            </Button>
            <Button 
              as={Link}
              to="/contact"
              variant="flat" 
              color="default"
              size="lg"
              className="font-medium"
              startContent={<Icon icon="lucide:mail" />}
            >
              Зв'язатися з нами
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;