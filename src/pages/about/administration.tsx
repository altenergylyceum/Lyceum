import React from 'react';
import { motion } from 'framer-motion';
import { Image, Card, CardBody } from "@heroui/react";
import { Icon } from '@iconify/react';

interface StaffMember {
  name: string;
  position: string;
  photo: string;
  email?: string;
  phone?: string;
}

const AdministrationPage: React.FC = () => {
  const staffMembers: StaffMember[] = [
    {
      name: "Онишкевич Руслан Богданович",
      position: "Директор ліцею",
      photo: "https://img.heroui.chat/image/avatar?w=200&h=200&u=director",
      email: "director@lyceum.edu.ua",
      phone: "+380 XX XXX XXXX"
    },
    {
      name: "Провозюк Руслана Петрівна",
      position: "Заступник директора",
      photo: "https://img.heroui.chat/image/avatar?w=200&h=200&u=deputy1",
      email: "deputy1@lyceum.edu.ua",
      phone: "+380 XX XXX XXXX"
    },
    {
      name: "Запісоцька Ольга Іванівна",
      position: "Головний бухгалтер",
      photo: "https://img.heroui.chat/image/avatar?w=200&h=200&u=accountant",
      email: "accountant@lyceum.edu.ua",
      phone: "+380 XX XXX XXXX"
    },
    {
      name: "Шмігель Іван Юрійович",
      position: "Старший майстер",
      photo: "https://img.heroui.chat/image/avatar?w=200&h=200&u=master",
      email: "master@lyceum.edu.ua",
      phone: "+380 XX XXX XXXX"
    },
    {
      name: "Вакантна посада",
      position: "Заступник з НВР",
      photo: "https://img.heroui.chat/image/avatar?w=200&h=200&u=vacant",
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Адміністрація та викладачі</h1>
          <p className="text-xl text-gray-600">
            Познайомтеся з керівництвом та ключовими співробітниками нашого ліцею
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          {staffMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              role="listitem"
            >
              <Card className="overflow-hidden h-full">
                <CardBody className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <Image
                        src={member.photo}
                        alt={`Фото ${member.name}`}
                        className="w-full h-full object-cover aspect-square"
                      />
                    </div>
                    <div className="md:w-2/3 p-4">
                      <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                      <p className="text-gray-600 mb-4">{member.position}</p>
                      {member.email && (
                        <div className="flex items-center mb-2">
                          <Icon icon="lucide:mail" className="text-primary mr-2" aria-hidden="true" />
                          <a href={`mailto:${member.email}`} className="text-gray-600 hover:text-primary">
                            {member.email}
                            <span className="sr-only">Електронна пошта {member.name}</span>
                          </a>
                        </div>
                      )}
                      {member.phone && (
                        <div className="flex items-center">
                          <Icon icon="lucide:phone" className="text-primary mr-2" aria-hidden="true" />
                          <a href={`tel:${member.phone}`} className="text-gray-600 hover:text-primary">
                            {member.phone}
                            <span className="sr-only">Телефон {member.name}</span>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdministrationPage;