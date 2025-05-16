import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import TeamSection from '../components/about/TeamSection';
import homeImage from '../assets/Home.jpeg';
import aboutUsImage from '../assets/abtus.jpeg';

// Import team images
import hebaImg from '../assets/Team/heba.jpg';
import houssemImg from '../assets/Team/houssem.jpeg';
import nadjibImg from '../assets/Team/nadjib.jpeg';
import amelImg from '../assets/Team/amel.jpg';
import saraImg from '../assets/Team/sara.jpg';
import lynaImg from '../assets/Team/lyna.jpg';

// Team members data
const teamMembers = [
  {
    name: 'Heba',
    role: 'Chief Operating Officer',
    image: hebaImg,
    description: 'With over 10 years of experience in healthcare operations, Heba leads our day-to-day activities ensuring we deliver exceptional wellness solutions to our community.',
  },
  {
    name: 'Houssem',
    role: 'Chief Executive Officer',
    image: houssemImg,
    description: 'Houssem founded Health\'un with a vision to transform health information accessibility in Algeria. His background in both technology and healthcare drives our mission forward.',
  },
  {
    name: 'Nadjib',
    role: 'Chief Financial Officer',
    image: nadjibImg,
    description: 'Nadjib brings financial expertise to Health\'un, ensuring sustainable growth while maintaining our commitment to quality and accessibility in health services.',
  },
  {
    name: 'Amel',
    role: 'Project Management Director',
    image: amelImg,
    description: 'Amel oversees all our wellness initiatives and partnerships, bringing her extensive experience in healthcare project management to deliver impactful programs.',
  },
  {
    name: 'Sara',
    role: 'Sales Director',
    image: saraImg,
    description: 'Sara leads our marketplace growth strategy, connecting Algerian bio-producers with health-conscious consumers and expanding our reach across the country.',
  },
  {
    name: 'Lyna',
    role: 'Human Resources Director',
    image: lynaImg,
    description: 'Lyna cultivates our team culture and talent acquisition, ensuring Health\'un attracts passionate professionals dedicated to our wellness mission.',
  },
];

// Company values
const values = [
  {
    title: 'Quality',
    description: 'We ensure all health information and products meet the highest standards of quality and scientific accuracy.',
  },
  {
    title: 'Accessibility',
    description: 'We believe health information and natural products should be accessible to all Algerians.',
  },
  {
    title: 'Community',
    description: 'We foster a supportive community of health-conscious individuals across Algeria.',
  },
  {
    title: 'Sustainability',
    description: 'We promote sustainable practices in all aspects of our business and the products we offer.',
  },
];

const AboutUsPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Health'un</title>
        <meta name="description" content="Learn about the Health'un team and our mission to promote wellness across Algeria." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-primary-50 dark:bg-primary-900">
        <div className="container-custom">
          <div className="text-center">
            <motion.h1
              className="title-md text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About Health'un
            </motion.h1>
            <motion.p
              className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Founded with a mission to make trusted health information and natural products accessible to everyone in Algeria.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Image */}
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={aboutUsImage}
                alt="Our Mission"
                className="w-full h-auto rounded-xl shadow-lg object-cover max-h-[400px]"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="title-sm text-gray-900 dark:text-white mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                At Health'un, we're on a mission to transform how Algerians access health information and natural products. We combine local expertise with global wellness standards to create a trusted platform for your health journey.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Our platform connects you with verified health content, personalized wellness plans, and quality bio products from local producers, all in one place.
              </p>

              <ul className="space-y-3 mb-8">
                {['Provide trustworthy health information', 'Support local bio product producers', 'Create personalized wellness plans', 'Build a health-conscious community'].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <CheckCircle className="text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span className="dark:text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="title-md text-gray-900 dark:text-white mb-4">Our Values</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              The core principles that guide everything we do at Health'un.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="font-heading font-semibold text-xl mb-2 dark:text-white">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection members={teamMembers} />
    </>
  );
};

export default AboutUsPage;
