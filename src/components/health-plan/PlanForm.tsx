import { useState } from 'react';
import { motion } from 'framer-motion';

export interface FormData {
  age: string;
  gender: string;
  height: string;
  weight: string;
  activityLevel: string;
  goals: string[];
  dietaryRestrictions: string[];
  sleepHours: string;
  stressLevel: string;
}

interface PlanFormProps {
  onSubmit: (data: FormData) => void;
}

const PlanForm: React.FC<PlanFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    age: '',
    gender: '',
    height: '',
    weight: '',
    activityLevel: '',
    goals: [],
    dietaryRestrictions: [],
    sleepHours: '',
    stressLevel: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, category: 'goals' | 'dietaryRestrictions') => {
    const { value, checked } = e.target;

    if (checked) {
      setFormData(prev => ({
        ...prev,
        [category]: [...prev[category], value]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [category]: prev[category].filter(item => item !== value)
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-heading font-semibold mb-6 text-gray-900 dark:text-white">Your Personal Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Age */}
        <div>
          <label htmlFor="age" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Age
          </label>
          <input
            id="age"
            name="age"
            type="number"
            min="1"
            max="120"
            required
            value={formData.age}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        {/* Gender */}
        <div>
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            required
            value={formData.gender}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Height */}
        <div>
          <label htmlFor="height" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Height (cm)
          </label>
          <input
            id="height"
            name="height"
            type="number"
            min="50"
            max="250"
            required
            value={formData.height}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        {/* Weight */}
        <div>
          <label htmlFor="weight" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Weight (kg)
          </label>
          <input
            id="weight"
            name="weight"
            type="number"
            min="20"
            max="300"
            required
            value={formData.weight}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        {/* Activity Level */}
        <div>
          <label htmlFor="activityLevel" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Activity Level
          </label>
          <select
            id="activityLevel"
            name="activityLevel"
            required
            value={formData.activityLevel}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">Select</option>
            <option value="sedentary">Sedentary (little to no exercise)</option>
            <option value="light">Light (light exercise 1-3 days/week)</option>
            <option value="moderate">Moderate (moderate exercise 3-5 days/week)</option>
            <option value="active">Active (hard exercise 6-7 days/week)</option>
            <option value="veryActive">Very Active (hard daily exercise & physical job)</option>
          </select>
        </div>

        {/* Sleep Hours */}
        <div>
          <label htmlFor="sleepHours" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Average Sleep Hours (per night)
          </label>
          <select
            id="sleepHours"
            name="sleepHours"
            required
            value={formData.sleepHours}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">Select</option>
            <option value="less-than-5">Less than 5 hours</option>
            <option value="5-6">5-6 hours</option>
            <option value="7-8">7-8 hours</option>
            <option value="more-than-8">More than 8 hours</option>
          </select>
        </div>

        {/* Stress Level */}
        <div className="md:col-span-2">
          <label htmlFor="stressLevel" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Stress Level
          </label>
          <select
            id="stressLevel"
            name="stressLevel"
            required
            value={formData.stressLevel}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">Select</option>
            <option value="low">Low (rarely feel stressed)</option>
            <option value="moderate">Moderate (sometimes feel stressed)</option>
            <option value="high">High (often feel stressed)</option>
            <option value="severe">Severe (constantly feel stressed)</option>
          </select>
        </div>
      </div>

      {/* Health Goals */}
      <div className="mt-8">
        <h3 className="text-lg font-medium mb-3 text-gray-800 dark:text-gray-200">Health Goals (select all that apply)</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {['Weight loss', 'Muscle gain', 'Better sleep', 'Stress reduction', 'Improved energy', 'Heart health', 'Balanced nutrition', 'General wellness'].map((goal) => (
            <div key={goal} className="flex items-center">
              <input
                id={`goal-${goal}`}
                name={`goal-${goal}`}
                type="checkbox"
                value={goal}
                checked={formData.goals.includes(goal)}
                onChange={(e) => handleCheckboxChange(e, 'goals')}
                className="w-4 h-4 text-primary-600 border-gray-300 dark:border-gray-600 rounded focus:ring-primary-500"
              />
              <label htmlFor={`goal-${goal}`} className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                {goal}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Dietary Restrictions */}
      <div className="mt-6">
        <h3 className="text-lg font-medium mb-3 text-gray-800 dark:text-gray-200">Dietary Restrictions (if any)</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {['Vegetarian', 'Vegan', 'Gluten-free', 'Dairy-free', 'Nut allergies', 'Low-carb', 'Halal', 'No restrictions'].map((restriction) => (
            <div key={restriction} className="flex items-center">
              <input
                id={`restriction-${restriction}`}
                name={`restriction-${restriction}`}
                type="checkbox"
                value={restriction}
                checked={formData.dietaryRestrictions.includes(restriction)}
                onChange={(e) => handleCheckboxChange(e, 'dietaryRestrictions')}
                className="w-4 h-4 text-primary-600 border-gray-300 dark:border-gray-600 rounded focus:ring-primary-500"
              />
              <label htmlFor={`restriction-${restriction}`} className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                {restriction}
              </label>
            </div>
          ))}
        </div>
      </div>

      <motion.button
        type="submit"
        className="mt-8 w-full btn btn-primary"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Generate My Health Plan
      </motion.button>
    </form>
  );
};

export default PlanForm;