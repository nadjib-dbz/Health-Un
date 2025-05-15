import { motion } from 'framer-motion';
import { Heart, Utensils, Dumbbell, Moon, Brain, Check } from 'lucide-react';
import { FormData } from './PlanForm';

interface PlanDisplayProps {
  userData: FormData;
}

const PlanDisplay: React.FC<PlanDisplayProps> = ({ userData }) => {
  // Calculate BMI
  const heightInM = parseFloat(userData.height) / 100;
  const weightInKg = parseFloat(userData.weight);
  const bmi = weightInKg / (heightInM * heightInM);

  // Generate nutrition plan based on goals
  const getNutritionPlan = () => {
    if (userData.goals.includes('Weight loss')) {
      return {
        calorieRange: '1800-2000',
        macros: { protein: '30%', carbs: '40%', fats: '30%' },
        mealPlan: [
          'Breakfast: Greek yogurt with berries and nuts',
          'Lunch: Grilled chicken salad with olive oil dressing',
          'Dinner: Baked fish with steamed vegetables',
          'Snacks: Apple with almond butter, vegetable sticks'
        ]
      };
    }

    if (userData.goals.includes('Muscle gain')) {
      return {
        calorieRange: '2500-2800',
        macros: { protein: '35%', carbs: '45%', fats: '20%' },
        mealPlan: [
          'Breakfast: Eggs with whole grain toast and avocado',
          'Lunch: Quinoa bowl with chicken, vegetables, and legumes',
          'Dinner: Lean steak with sweet potato and leafy greens',
          'Snacks: Protein smoothie, nuts and dried fruits'
        ]
      };
    }

    return {
      calorieRange: '2000-2200',
      macros: { protein: '25%', carbs: '50%', fats: '25%' },
      mealPlan: [
        'Breakfast: Oatmeal with fruits and honey',
        'Lunch: Mediterranean bowl with couscous and vegetables',
        'Dinner: Grilled protein with roasted vegetables',
        'Snacks: Mixed nuts, fresh seasonal fruits'
      ]
    };
  };

  // Generate fitness plan based on activity level and goals
  const getFitnessPlan = () => {
    if (userData.activityLevel === 'sedentary' || userData.activityLevel === 'light') {
      return {
        weeklyPlan: [
          '3 days of low-impact cardio (walking, cycling)',
          '2 days of basic strength training',
          'Daily flexibility stretches (10 minutes)',
          'At least 8,000 steps daily'
        ]
      };
    }

    if (userData.activityLevel === 'moderate') {
      return {
        weeklyPlan: [
          '3-4 days of moderate cardio (jogging, swimming)',
          '2-3 days of strength training with progressive overload',
          'Flexibility work twice weekly',
          'At least 10,000 steps daily'
        ]
      };
    }

    return {
      weeklyPlan: [
        '4-5 days of alternating cardio intensity',
        '3-4 days of targeted strength training',
        'Recovery/active rest days',
        'Mobility work integrated daily'
      ]
    };
  };

  // Generate wellness recommendations based on stress and sleep
  const getWellnessRecommendations = () => {
    const recommendations = [];

    if (userData.stressLevel === 'high' || userData.stressLevel === 'severe') {
      recommendations.push(
        'Daily meditation practice (10-15 minutes)',
        'Breathing exercises during stress triggers',
        'Weekly digital detox period',
        'Consider journaling for stress management'
      );
    } else {
      recommendations.push(
        'Regular mindfulness practice',
        'Outdoor time in nature',
        'Social connection with friends/family'
      );
    }

    if (userData.sleepHours === 'less-than-5' || userData.sleepHours === '5-6') {
      recommendations.push(
        'Establish consistent sleep/wake schedule',
        'Create a calming bedtime routine',
        'Limit screen time 1 hour before bed',
        'Maintain cool, dark sleeping environment'
      );
    }

    return recommendations;
  };

  const nutritionPlan = getNutritionPlan();
  const fitnessPlan = getFitnessPlan();
  const wellnessRecommendations = getWellnessRecommendations();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-heading font-semibold mb-2 text-gray-900 dark:text-white">Your Personalized Health Plan</h2>
        <p className="text-gray-600 dark:text-gray-400">Based on your unique profile and goals</p>
      </div>

      {/* Overview & Stats */}
      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-8">
        <h3 className="font-medium text-gray-900 dark:text-white mb-3">Profile Overview</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">BMI</p>
            <p className="text-lg font-semibold dark:text-white">{bmi.toFixed(1)}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {bmi < 18.5 ? 'Underweight' :
               bmi < 25 ? 'Healthy' :
               bmi < 30 ? 'Overweight' : 'Obese'}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">Daily Calorie Need</p>
            <p className="text-lg font-semibold dark:text-white">{nutritionPlan.calorieRange}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">kcal</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">Primary Goals</p>
            <p className="text-lg font-semibold dark:text-white">{userData.goals.length}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Selected</p>
          </div>
        </div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Nutrition Section */}
        <motion.div variants={item} className="mb-8">
          <div className="flex items-center mb-4">
            <div className="bg-primary-100 dark:bg-primary-900/50 p-2 rounded-full mr-3">
              <Utensils className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="text-xl font-heading font-semibold dark:text-white">Nutrition Plan</h3>
          </div>
          <div className="ml-12">
            <div className="mb-3">
              <p className="text-gray-700 dark:text-gray-300 mb-1">Recommended Daily Macros:</p>
              <div className="flex gap-3">
                <span className="bg-primary-50 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 text-sm px-3 py-1 rounded-full">
                  Protein: {nutritionPlan.macros.protein}
                </span>
                <span className="bg-primary-50 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 text-sm px-3 py-1 rounded-full">
                  Carbs: {nutritionPlan.macros.carbs}
                </span>
                <span className="bg-primary-50 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 text-sm px-3 py-1 rounded-full">
                  Fats: {nutritionPlan.macros.fats}
                </span>
              </div>
            </div>
            <div>
              <p className="text-gray-700 dark:text-gray-300 mb-2">Sample Meal Plan:</p>
              <ul className="space-y-2">
                {nutritionPlan.mealPlan.map((meal, index) => (
                  <li key={index} className="flex items-start">
                    <Check size={16} className="text-primary-600 dark:text-primary-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">{meal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Fitness Section */}
        <motion.div variants={item} className="mb-8">
          <div className="flex items-center mb-4">
            <div className="bg-primary-100 dark:bg-primary-900/50 p-2 rounded-full mr-3">
              <Dumbbell className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="text-xl font-heading font-semibold dark:text-white">Fitness Plan</h3>
          </div>
          <div className="ml-12">
            <p className="text-gray-700 dark:text-gray-300 mb-2">Weekly Exercise Recommendations:</p>
            <ul className="space-y-2">
              {fitnessPlan.weeklyPlan.map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check size={16} className="text-primary-600 dark:text-primary-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Wellness Section */}
        <motion.div variants={item} className="mb-8">
          <div className="flex items-center mb-4">
            <div className="bg-primary-100 dark:bg-primary-900/50 p-2 rounded-full mr-3">
              <Brain className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="text-xl font-heading font-semibold dark:text-white">Wellness Recommendations</h3>
          </div>
          <div className="ml-12">
            <ul className="space-y-2">
              {wellnessRecommendations.map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check size={16} className="text-primary-600 dark:text-primary-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Sleep Section */}
        <motion.div variants={item}>
          <div className="flex items-center mb-4">
            <div className="bg-primary-100 dark:bg-primary-900/50 p-2 rounded-full mr-3">
              <Moon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="text-xl font-heading font-semibold dark:text-white">Sleep Guidance</h3>
          </div>
          <div className="ml-12">
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              Based on your profile, we recommend <span className="font-medium dark:text-white">{userData.goals.includes('Better sleep') ? '7-9' : '7-8'} hours</span> of quality sleep per night.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
              <p className="text-blue-800 dark:text-blue-300 text-sm">
                <span className="font-medium">Pro tip:</span> Quality sleep is essential for your {userData.goals.includes('Weight loss') ? 'weight management' : 'health'} goals. Consider using our sleep tracking feature to monitor your patterns.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">This plan is personalized based on your inputs and designed to be sustainable.</p>
          <motion.button
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Heart size={16} className="mr-2" />
            Save Plan
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default PlanDisplay;