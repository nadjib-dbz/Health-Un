import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image?: string;
  description?: string;
  socialLinks?: {
    type: string;
    url: string;
  }[];
}

interface TeamSectionProps {
  title?: string;
  subtitle?: string;
  members: TeamMember[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const TeamSection: React.FC<TeamSectionProps> = ({
  title = "Meet the Health'un Team",
  subtitle = "The passionate individuals behind our mission to promote wellness across Algeria.",
  members
}) => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center mb-4">
            <div className="h-1 w-10 bg-primary-600 rounded-full mr-2"></div>
            <h2 className="title-md text-gray-900">{title}</h2>
            <div className="h-1 w-10 bg-primary-600 rounded-full ml-2"></div>
          </div>
          {subtitle && (
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {members.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              variants={item}
            >
              <div className="p-6 flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 shadow-md border-4 border-primary-100">
                  <img
                    src={member.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=1d9852&color=fff`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                {member.description && (
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <p className="text-gray-700 text-sm leading-relaxed">{member.description}</p>
                  </div>
                )}
                {member.socialLinks && member.socialLinks.length > 0 && (
                  <div className="flex space-x-3 mt-2">
                    {member.socialLinks.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        className="text-gray-500 hover:text-primary-600 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="sr-only">{link.type}</span>
                        {/* Social icons would go here */}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
