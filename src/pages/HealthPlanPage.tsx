import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, HelpCircle } from 'lucide-react';

// Components
import PlanForm, { FormData } from '../components/health-plan/PlanForm';
import PlanDisplay from '../components/health-plan/PlanDisplay';

const HealthPlanPage = () => {
  const [userFormData, setUserFormData] = useState<FormData | null>(null);
  const [showPlan, setShowPlan] = useState(false);

  const handleFormSubmit = (data: FormData) => {
    setUserFormData(data);
    setShowPlan(true);

    // Scroll to plan section
    setTimeout(() => {
      document.getElementById('plan-results')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      <Helmet>
        <title>Personalized Health Plan - Health'un</title>
        <meta name="description" content="Create your personalized health and wellness plan based on your unique goals, preferences, and lifestyle." />
      </Helmet>

      <section className="py-12 md:py-16 bg-primary-50 dark:bg-primary-900/20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.h1
              className="title-md text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Your Personalized Health Plan
            </motion.h1>
            <motion.p
              className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Answer a few questions about your health, goals, and preferences to receive a customized wellness plan tailored just for you.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white dark:bg-gray-950">
        <div className="container-custom max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <motion.div
              className="flex flex-col items-center text-center p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-primary-100 dark:bg-primary-900/50 p-3 rounded-full mb-4">
                <FileText className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2 dark:text-white">Complete Profile</h3>
              <p className="text-gray-600 dark:text-gray-400">Fill out your health profile with accurate information for better recommendations.</p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center text-center p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-primary-100 dark:bg-primary-900/50 p-3 rounded-full mb-4">
                <CheckCircle className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2 dark:text-white">Get Your Plan</h3>
              <p className="text-gray-600 dark:text-gray-400">Receive a personalized health plan based on your unique needs and goals.</p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center text-center p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-primary-100 dark:bg-primary-900/50 p-3 rounded-full mb-4">
                <HelpCircle className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2 dark:text-white">Expert Guidance</h3>
              <p className="text-gray-600 dark:text-gray-400">Access to professional advice and answers to your health questions.</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <PlanForm onSubmit={handleFormSubmit} />
          </motion.div>
        </div>
      </section>

      {showPlan && userFormData && (
        <section id="plan-results" className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container-custom max-w-4xl">
            <PlanDisplay userData={userFormData} />
          </div>
        </section>
      )}
    </>
  );
};

export default HealthPlanPage;