export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
}

export const articles: Article[] = [
  {
    id: 1,
    title: "10 Mediterranean Diet Principles for Algerian Cooking",
    excerpt: "Discover how to incorporate Mediterranean diet principles into traditional Algerian cuisine for optimal health benefits.",
    content: "The Mediterranean diet is renowned worldwide for its health benefits, and Algerians are fortunate to have many of its elements already present in traditional cuisine. This article explores how to enhance your Algerian cooking with Mediterranean principles without losing authentic flavors...",
    image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Nutrition",
    date: "May 15, 2025",
    readTime: "7 min read",
    author: {
      name: "Dr. Fatima Khalil",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=120",
      role: "Nutritionist"
    }
  },
  {
    id: 2,
    title: "Understanding Seasonal Allergies in Northern Algeria",
    excerpt: "Learn about common seasonal allergies in Northern Algeria, their symptoms, and natural remedies to manage them effectively.",
    content: "Northern Algeria's diverse climate creates unique seasonal allergy patterns. This comprehensive guide helps you identify common triggers, recognize symptoms early, and discover both medical and natural approaches to finding relief...",
    image: "https://images.pexels.com/photos/144474/pexels-photo-144474.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Wellness",
    date: "April 22, 2025",
    readTime: "5 min read",
    author: {
      name: "Dr. Karim Benali",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=120",
      role: "Immunologist"
    }
  },
  {
    id: 3,
    title: "5 Traditional Algerian Herbs with Proven Health Benefits",
    excerpt: "Explore the science-backed health benefits of common herbs used in Algerian traditional medicine and cuisine.",
    content: "Algeria's rich botanical heritage includes numerous herbs that have been used for centuries in traditional medicine. Modern science is now confirming the health benefits of many of these plants. This article examines five commonly available Algerian herbs and their evidence-based therapeutic properties...",
    image: "https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Nutrition",
    date: "March 30, 2025",
    readTime: "8 min read",
    author: {
      name: "Amina Hadj",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=120",
      role: "Herbalist"
    }
  },
  {
    id: 4,
    title: "Home Workouts Adapted for Small Algerian Apartments",
    excerpt: "Effective exercise routines designed specifically for limited space in typical urban Algerian apartments.",
    content: "Staying active in urban environments can be challenging, especially in compact living spaces common in Algerian cities. This guide provides practical, space-efficient workout routines that require minimal equipment while delivering maximum fitness benefits...",
    image: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Fitness",
    date: "May 2, 2025",
    readTime: "6 min read",
    author: {
      name: "Youcef Zidane",
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=120",
      role: "Fitness Coach"
    }
  },
  {
    id: 5,
    title: "Managing Stress in Fast-Paced Algerian Cities",
    excerpt: "Practical techniques to maintain mental well-being amid the unique stressors of urban Algerian lifestyles.",
    content: "The rapid pace of modern life in Algeria's growing urban centers creates unique mental health challenges. This article explores culturally relevant stress management techniques that blend traditional wisdom with contemporary psychological approaches...",
    image: "https://images.pexels.com/photos/897817/pexels-photo-897817.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Mental Health",
    date: "April 18, 2025",
    readTime: "9 min read",
    author: {
      name: "Dr. Leila Touati",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=120",
      role: "Psychologist"
    }
  },
  {
    id: 6,
    title: "The Role of Olive Oil in Preventing Heart Disease",
    excerpt: "New research on how locally produced Algerian olive oil contributes to cardiovascular health.",
    content: "Olive oil has been a cornerstone of North African cuisine for millennia, and recent scientific studies are revealing its powerful cardioprotective properties. This article examines the specific compounds in Algerian olive varieties that may offer superior heart health benefits...",
    image: "https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking.jpg?auto=compress&cs=tinysrgb&w=1600",
    category: "Nutrition",
    date: "March 15, 2025",
    readTime: "7 min read",
    author: {
      name: "Dr. Samir Boudaoud",
      avatar: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=120",
      role: "Cardiologist"
    }
  },
  {
    id: 7,
    title: "Tech Neck: Preventing Posture Problems in the Digital Age",
    excerpt: "How to maintain good posture and prevent neck strain while using smartphones and computers.",
    content: "As digital device usage increases across Algeria, more people are experiencing 'tech neck' - a modern health concern with potential long-term consequences. This guide offers practical ergonomic solutions and strengthening exercises to protect your neck and spine...",
    image: "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Wellness",
    date: "May 7, 2025",
    readTime: "5 min read",
    author: {
      name: "Dr. Omar Khaled",
      avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=120",
      role: "Physiotherapist"
    }
  },
  {
    id: 8,
    title: "Benefits of High-Intensity Interval Training for Busy Professionals",
    excerpt: "How HIIT workouts can maximize fitness results in minimal time for Algeria's busy working population.",
    content: "For time-pressed professionals in Algeria's growing economy, finding efficient exercise solutions is essential. This article explores how High-Intensity Interval Training (HIIT) can deliver superior fitness benefits in sessions as short as 20 minutes...",
    image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Fitness",
    date: "April 10, 2025",
    readTime: "6 min read",
    author: {
      name: "Samira Larbi",
      avatar: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=120",
      role: "Sports Scientist"
    }
  },
  {
    id: 9,
    title: "Digital Detox: Balancing Technology Use for Better Mental Health",
    excerpt: "Strategies to create healthy boundaries with digital devices for improved psychological wellbeing.",
    content: "As smartphone and social media use continues to rise in Algeria, finding a healthy balance has become increasingly important for mental wellbeing. This article provides a practical framework for implementing a personalized digital detox without completely disconnecting from the modern world...",
    image: "https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Mental Health",
    date: "March 25, 2025",
    readTime: "8 min read",
    author: {
      name: "Dr. Nadia Rahal",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=120",
      role: "Mental Health Counselor"
    }
  }
];

export const getArticleCategories = (): string[] => {
  const categories = articles.map(article => article.category);
  return [...new Set(categories)];
};

export const searchArticles = (query: string): Article[] => {
  const lowercaseQuery = query.toLowerCase();
  return articles.filter(
    article => 
      article.title.toLowerCase().includes(lowercaseQuery) || 
      article.excerpt.toLowerCase().includes(lowercaseQuery) ||
      article.category.toLowerCase().includes(lowercaseQuery)
  );
};

export const filterArticlesByCategory = (category: string): Article[] => {
  if (category === 'All') {
    return articles;
  }
  return articles.filter(article => article.category === category);
};