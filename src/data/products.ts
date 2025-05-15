export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  seller: {
    name: string;
    location: string;
    verified: boolean;
  };
  rating: number;
  organic: boolean;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Organic Olive Oil",
    description: "Premium cold-pressed extra virgin olive oil from the Kabylie mountains. Rich in antioxidants and heart-healthy fats.",
    price: 1200,
    image: "https://images.pexels.com/photos/33789/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600",
    category: "Oils",
    seller: {
      name: "Aït Mouloud Farm",
      location: "Tizi Ouzou",
      verified: true,
    },
    rating: 4.9,
    organic: true,
    inStock: true
  },
  {
    id: 2,
    name: "Raw Sidr Honey",
    description: "Pure, unprocessed Sidr honey known for its medicinal properties and distinct flavor. Collected from wild mountain regions.",
    price: 2500,
    image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Honey",
    seller: {
      name: "Sahara Bee Collective",
      location: "Béchar",
      verified: true,
    },
    rating: 4.8,
    organic: true,
    inStock: true
  },
  {
    id: 3,
    name: "Argan Oil Cosmetic Set",
    description: "Complete skincare set featuring pure argan oil products - moisturizer, serum, and hair treatment.",
    price: 3500,
    image: "https://images.pexels.com/photos/3321416/pexels-photo-3321416.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Cosmetics",
    seller: {
      name: "Atlas Natural Beauty",
      location: "Oran",
      verified: true,
    },
    rating: 4.7,
    organic: true,
    inStock: true
  },
  {
    id: 4,
    name: "Dried Fig and Nut Mix",
    description: "Energy-boosting trail mix featuring locally grown dried figs, almonds, and walnuts. Perfect natural snack.",
    price: 850,
    image: "https://images.pexels.com/photos/4051586/pexels-photo-4051586.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Snacks",
    seller: {
      name: "Aurès Harvest",
      location: "Batna",
      verified: true,
    },
    rating: 4.5,
    organic: true,
    inStock: true
  },
  {
    id: 5,
    name: "Natural Aloe Vera Gel",
    description: "100% pure aloe vera gel for skincare and sunburn relief. Sourced from organically grown plants.",
    price: 950,
    image: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Cosmetics",
    seller: {
      name: "Sahel Botanicals",
      location: "Annaba",
      verified: false,
    },
    rating: 4.3,
    organic: true,
    inStock: true
  },
  {
    id: 6,
    name: "Traditional Clay Cooking Tagine",
    description: "Handcrafted terra cotta tagine for authentic, healthy slow-cooking. Perfect for preserving nutrients in meals.",
    price: 1800,
    image: "https://images.pexels.com/photos/5677782/pexels-photo-5677782.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Cookware",
    seller: {
      name: "Kasbah Crafts",
      location: "Constantine",
      verified: true,
    },
    rating: 4.7,
    organic: false,
    inStock: true
  },
  {
    id: 7,
    name: "Organic Dates Gift Box",
    description: "Premium selection of Deglet Noor dates. High in fiber and natural energy. Sustainably grown.",
    price: 1400,
    image: "https://images.pexels.com/photos/7511800/pexels-photo-7511800.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Snacks",
    seller: {
      name: "Biskra Date Farms",
      location: "Biskra",
      verified: true,
    },
    rating: 4.9,
    organic: true,
    inStock: true
  },
  {
    id: 8,
    name: "Natural Rose Water",
    description: "Distilled rose water for culinary and skincare use. Made from Damask roses grown in the Aurès mountains.",
    price: 750,
    image: "https://images.pexels.com/photos/3923555/pexels-photo-3923555.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Cosmetics",
    seller: {
      name: "Tell Rose Gardens",
      location: "Blida",
      verified: true,
    },
    rating: 4.6,
    organic: true,
    inStock: true
  },
  {
    id: 9,
    name: "Herbal Tea Blend",
    description: "Specially formulated blend of local herbs known for digestive health and relaxation. Caffeine-free.",
    price: 600,
    image: "https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Beverages",
    seller: {
      name: "Algiers Herbalist",
      location: "Algiers",
      verified: false,
    },
    rating: 4.4,
    organic: true,
    inStock: true
  },
  {
    id: 10,
    name: "Natural Handmade Soap Set",
    description: "Set of 4 handcrafted soaps made with olive oil, argan oil, and essential oils. Free from chemicals and preservatives.",
    price: 1100,
    image: "https://images.pexels.com/photos/6693657/pexels-photo-6693657.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Cosmetics",
    seller: {
      name: "Médéa Soap Works",
      location: "Médéa",
      verified: true,
    },
    rating: 4.8,
    organic: true,
    inStock: true
  },
  {
    id: 11,
    name: "Prickly Pear Seed Oil",
    description: "Rare and potent anti-aging facial oil rich in vitamin E and essential fatty acids. Cold-pressed from organic seeds.",
    price: 4200,
    image: "https://images.pexels.com/photos/4464484/pexels-photo-4464484.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Oils",
    seller: {
      name: "Sahara Botanicals",
      location: "Ghardaïa",
      verified: true,
    },
    rating: 4.9,
    organic: true,
    inStock: false
  },
  {
    id: 12,
    name: "Ceramic Water Filter",
    description: "Handcrafted clay water purifier that naturally filters and mineralizes drinking water. Traditional design with modern efficacy.",
    price: 1900,
    image: "https://images.pexels.com/photos/6306081/pexels-photo-6306081.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Home",
    seller: {
      name: "Tlemcen Pottery Collective",
      location: "Tlemcen",
      verified: false,
    },
    rating: 4.3,
    organic: false,
    inStock: true
  }
];

export const getProductCategories = (): string[] => {
  const categories = products.map(product => product.category);
  return [...new Set(categories)];
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(
    product => 
      product.name.toLowerCase().includes(lowercaseQuery) || 
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery)
  );
};

export const filterProductsByCategory = (category: string): Product[] => {
  if (category === 'All') {
    return products;
  }
  return products.filter(product => product.category === category);
};

export const filterProductsByPrice = (minPrice: number, maxPrice: number): Product[] => {
  return products.filter(product => 
    product.price >= minPrice && product.price <= maxPrice
  );
};

export const sortProducts = (products: Product[], sortBy: string): Product[] => {
  const sortedProducts = [...products];
  
  switch (sortBy) {
    case 'price-low':
      return sortedProducts.sort((a, b) => a.price - b.price);
    case 'price-high':
      return sortedProducts.sort((a, b) => b.price - a.price);
    case 'rating':
      return sortedProducts.sort((a, b) => b.rating - a.rating);
    case 'newest':
    default:
      return sortedProducts;
  }
};