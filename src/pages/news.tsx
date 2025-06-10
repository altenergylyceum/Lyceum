import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, Image, Button, Input } from "@heroui/react";
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
}

const NewsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const newsData: NewsItem[] = [
    {
      id: 1,
      title: "Відкриття нової лабораторії сонячної енергетики",
      excerpt: "У нашому ліцеї відбулося урочисте відкриття нової лабораторії сонячної енергетики, оснащеної найсучаснішим обладнанням для навчання та досліджень.",
      content: "Повний текст новини про відкриття лабораторії...",
      image: "https://img.heroui.chat/image/places?w=600&h=400&u=news1",
      date: "15 вересня 2023",
      category: "Події"
    },
    {
      id: 2,
      title: "Наші студенти перемогли у всеукраїнському конкурсі інновацій",
      excerpt: "Команда студентів нашого ліцею здобула перше місце у всеукраїнському конкурсі інноваційних проектів з альтернативної енергетики.",
      content: "Повний текст новини про перемогу студентів...",
      image: "https://img.heroui.chat/image/places?w=600&h=400&u=news2",
      date: "28 серпня 2023",
      category: "Досягнення"
    },
    {
      id: 3,
      title: "Початок набору на нові спеціальності 2023/2024",
      excerpt: "Оголошуємо про початок набору студентів на нові спеціальності у сфері відновлювальної енергетики та автоматизації на 2023/2024 навчальний рік.",
      content: "Повний текст новини про набір...",
      image: "https://img.heroui.chat/image/places?w=600&h=400&u=news3",
      date: "10 серпня 2023",
      category: "Вступ"
    },
    {
      id: 4,
      title: "Візит міністра освіти до нашого ліцею",
      excerpt: "Міністр освіти України відвідав наш ліцей та високо оцінив рівень підготовки студентів та технічне оснащення навчальних лабораторій.",
      content: "Повний текст новини про візит міністра...",
      image: "https://img.heroui.chat/image/places?w=600&h=400&u=news4",
      date: "5 серпня 2023",
      category: "Події"
    },
    {
      id: 5,
      title: "Підписання меморандуму про співпрацю з провідними компаніями галузі",
      excerpt: "Наш ліцей підписав меморандум про співпрацю з провідними компаніями у галузі альтернативної енергетики, що відкриває нові можливості для наших студентів.",
      content: "Повний текст новини про меморандум...",
      image: "https://img.heroui.chat/image/places?w=600&h=400&u=news5",
      date: "20 липня 2023",
      category: "Партнерство"
    },
    {
      id: 6,
      title: "Літня школа з відновлювальної енергетики",
      excerpt: "У липні в нашому ліцеї пройшла літня школа з відновлювальної енергетики для учнів старших класів, які цікавляться цією галуззю.",
      content: "Повний текст новини про літню школу...",
      image: "https://img.heroui.chat/image/places?w=600&h=400&u=news6",
      date: "15 липня 2023",
      category: "Освіта"
    }
  ];

  const categories = ['all', ...Array.from(new Set(newsData.map(item => item.category)))];

  const filteredNews = newsData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://img.heroui.chat/image/places?w=1920&h=600&u=news_hero"
            alt="News"
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Новини</h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Останні події, досягнення та оголошення Альтернативного Енергетичного Ліцею
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow">
                <Input
                  placeholder="Пошук новин..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  startContent={<Icon icon="lucide:search" className="text-gray-400" />}
                  className="w-full"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category, index) => (
                  <Button
                    key={index}
                    color={selectedCategory === category ? "primary" : "default"}
                    variant={selectedCategory === category ? "solid" : "flat"}
                    onPress={() => setSelectedCategory(category)}
                    className="capitalize"
                  >
                    {category === 'all' ? 'Всі' : category}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.length > 0 ? (
              filteredNews.map((news, index) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        alt={news.title}
                        src={news.image}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                        {news.category}
                      </div>
                    </div>
                    <CardBody className="p-6">
                      <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                        <Icon icon="lucide:calendar" className="text-primary" />
                        <span>{news.date}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 line-clamp-2">{news.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{news.excerpt}</p>
                      <Button 
                        as={Link}
                        to={`/news/${news.id}`}
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
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <Icon icon="lucide:search-x" className="text-gray-400 text-5xl mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Новини не знайдено</h3>
                <p className="text-gray-600">
                  Спробуйте змінити параметри пошуку або категорію
                </p>
                <Button 
                  color="primary" 
                  variant="light"
                  onPress={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="mt-4"
                >
                  Скинути фільтри
                </Button>
              </div>
            )}
          </div>

          {/* Pagination */}
          {filteredNews.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center mt-12"
            >
              <div className="flex gap-2">
                <Button variant="flat" isDisabled>
                  <Icon icon="lucide:chevron-left" />
                </Button>
                <Button variant={filteredNews.length > 0 ? "solid" : "flat"} color="primary">1</Button>
                <Button variant="flat">2</Button>
                <Button variant="flat">3</Button>
                <Button variant="flat">
                  <Icon icon="lucide:chevron-right" />
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
};

export default NewsPage;