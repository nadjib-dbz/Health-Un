import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, HelpCircle, LogIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Components
import PlanForm, { FormData } from '../components/health-plan/PlanForm';
import PlanDisplay from '../components/health-plan/PlanDisplay';

const HealthPlanPage = () => {
  const [userFormData, setUserFormData] = useState<FormData | null>(null);
  const [showPlan, setShowPlan] = useState(false);
  const [formCompleted, setFormCompleted] = useState(false);

  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Check for saved form data when component mounts
  useEffect(() => {
    if (isAuthenticated) {
      const savedFormData = sessionStorage.getItem('healthPlanFormData');
      if (savedFormData) {
        try {
          const parsedData = JSON.parse(savedFormData) as FormData;
          setUserFormData(parsedData);
          setShowPlan(true);

          // Clear the saved data
          sessionStorage.removeItem('healthPlanFormData');

          // Scroll to plan section after a short delay
          setTimeout(() => {
            document.getElementById('plan-results')?.scrollIntoView({ behavior: 'smooth' });
          }, 500);
        } catch (error) {
          console.error('Error parsing saved form data:', error);
          sessionStorage.removeItem('healthPlanFormData');
        }
      }
    }
  }, [isAuthenticated]);

  const handleFormSubmit = (data: FormData) => {
    setUserFormData(data);

    if (isAuthenticated) {
      // If user is already authenticated, show the plan
      setShowPlan(true);

      // Scroll to plan section
      setTimeout(() => {
        document.getElementById('plan-results')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // If user is not authenticated, mark the form as completed but don't show the plan yet
      setFormCompleted(true);
    }
  };

  const handleSignInClick = () => {
    // Store form data in session storage to retrieve after login
    if (userFormData) {
      sessionStorage.setItem('healthPlanFormData', JSON.stringify(userFormData));
    }

    // Navigate to auth page with return path
    navigate('/auth', {
      state: {
        from: '/health-plan',
        message: 'Sign in to view your personalized health plan.'
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Personalized Health Plan - Health'un</title>
        <meta name="description" content="Create your personalized health and wellness plan based on your unique goals, preferences, and lifestyle." />
      </Helmet>

      <section className="pt-20 pb-12 md:pt-24 md:pb-16 bg-primary-50 dark:bg-primary-900/20">
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

      {formCompleted && !isAuthenticated && (
        <section id="sign-in-prompt" className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container-custom max-w-4xl">
            <motion.div
              className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-heading font-semibold mb-4 dark:text-white">Your Plan is Ready!</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Sign in to view your personalized health plan based on the information you provided.
              </p>
              <button
                onClick={handleSignInClick}
                className="btn btn-primary text-lg px-8 py-4"
              >
                <LogIn className="mr-2" size={20} />
                Sign in & Get Your Plan Now!
              </button>
            </motion.div>
          </div>
        </section>
      )}

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