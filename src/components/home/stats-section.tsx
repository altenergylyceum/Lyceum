import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

interface StatItemProps {
  icon: string;
  value: string;
  label: string;
  index: number;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, label, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon icon={icon} className="text-primary text-2xl" />
      </div>
      <div className="text-3xl font-bold text-gray-800 mb-2">{value}</div>
      <div className="text-gray-600">{label}</div>
    </motion.div>
  );
};

const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: "lucide:users",
      value: "1,200+",
      label: "Студентів"
    },
    {
      icon: "lucide:award",
      value: "15+",
      label: "Років досвіду"
    },
    {
      icon: "lucide:graduation-cap",
      value: "95%",
      label: "Працевлаштування"
    },
    {
      icon: "lucide:briefcase",
      value: "50+",
      label: "Партнерів"
    }
  ];

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem 
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;