import React from 'react';
import { Card, CardBody, Image } from "@heroui/react";
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  position: string;
  image: string;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, position, image, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full">
        <CardBody className="p-6">
          <div className="flex justify-center mb-6">
            <Icon icon="lucide:quote" className="text-primary text-4xl" />
          </div>
          <p className="text-gray-600 mb-6 text-center italic">"{quote}"</p>
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
              <Image
                alt={name}
                src={image}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">{name}</h4>
              <p className="text-gray-500 text-sm">{position}</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Навчання в Альтернативному Енергетичному Ліцеї дало мені не лише теоретичні знання, але й практичні навички, які я зміг одразу застосувати на роботі.",
      name: "Олександр Петренко",
      position: "Випускник 2022, інженер-енергетик",
      image: "https://img.heroui.chat/image/avatar?w=200&h=200&u=person1"
    },
    {
      quote: "Викладачі ліцею - справжні професіонали своєї справи, які завжди готові допомогти та поділитися своїм досвідом. Дякую за якісну освіту!",
      name: "Марія Ковальчук",
      position: "Випускниця 2021, технолог",
      image: "https://img.heroui.chat/image/avatar?w=200&h=200&u=person2"
    },
    {
      quote: "Сучасне обладнання та інноваційні методи навчання дозволили мені стати конкурентоспроможним спеціалістом на ринку праці.",
      name: "Іван Мельник",
      position: "Випускник 2023, спеціаліст з автоматизації",
      image: "https://img.heroui.chat/image/avatar?w=200&h=200&u=person3"
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
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Відгуки випускників</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Що говорять наші випускники про навчання в Альтернативному Енергетичному Ліцеї
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              position={testimonial.position}
              image={testimonial.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;