import React from 'react';
import { Card, CardBody, Button, Image } from "@heroui/react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

interface NewsCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  link: string;
  index: number;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, excerpt, image, date, category, link, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-48 overflow-hidden">
          <Image
            alt={title}
            src={image}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-4 left-4 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
            {category}
          </div>
        </div>
        <CardBody className="p-6">
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
            <Icon icon="lucide:calendar" className="text-primary" />
            <span>{date}</span>
          </div>
          <h3 className="text-xl font-semibold mb-3 line-clamp-2">{title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
          <Button 
            as={Link}
            to={link}
            color="primary" 
            variant="light"
            endContent={<Icon icon="lucide:arrow-right" />}
            className="mt-auto"
          >
            Читати далі
          </Button>
        </CardBody>
      </Card>
    </motion.div>
  );
};

const NewsSection: React.FC = () => {
  const news = [
    {
      title: "Відкриття нової лабораторії сонячної енергетики",
      excerpt: "У нашому ліцеї відбулося урочисте відкриття нової лабораторії сонячної енергетики, оснащеної найсучаснішим обладнанням для навчання та досліджень.",
      image: "https://img.heroui.chat/image/places?w=600&h=400&u=news1",
      date: "15 вересня 2023",
      category: "Події",
      link: "/news/1"
    },
    {
      title: "Наші студенти перемогли у всеукраїнському конкурсі інновацій",
      excerpt: "Команда студентів нашого ліцею здобула перше місце у всеукраїнському конкурсі інноваційних проектів з альтернативної енергетики.",
      image: "https://img.heroui.chat/image/places?w=600&h=400&u=news2",
      date: "28 серпня 2023",
      category: "Досягнення",
      link: "/news/2"
    },
    {
      title: "Початок набору на нові спеціальності 2023/2024",
      excerpt: "Оголошуємо про початок набору студентів на нові спеціальності у сфері відновлювальної енергетики та автоматизації на 2023/2024 навчальний рік.",
      image: "https://img.heroui.chat/image/places?w=600&h=400&u=news3",
      date: "10 серпня 2023",
      category: "Вступ",
      link: "/news/3"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center mb-12"
        >
          <div>
            <h2 className="text-3xl font-bold mb-2 text-gray-800">Останні новини</h2>
            <p className="text-gray-600 max-w-2xl text-lg">
              Дізнайтеся про останні події та досягнення нашого ліцею
            </p>
          </div>
          <Button 
            as={Link}
            to="/news"
            color="primary" 
            variant="light"
            endContent={<Icon icon="lucide:arrow-right" />}
            className="mt-4 md:mt-0"
          >
            Всі новини
          </Button>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <NewsCard 
              key={index}
              title={item.title}
              excerpt={item.excerpt}
              image={item.image}
              date={item.date}
              category={item.category}
              link={item.link}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;