/**
 * Utility functions for placeholder images and videos
 */

// Generate placeholder image URL from Unsplash
export function getPlaceholderImage(
  width: number = 800,
  height: number = 600,
  keywords: string = "konaseema andhra pradesh"
): string {
  // Using Unsplash Random API with better error handling
  const seed = keywords.replace(/\s+/g, "-").toLowerCase();
  return `https://picsum.photos/seed/${seed}/${width}/${height}`;
}

// Generate placeholder image with specific category
export function getCategoryImage(category: string, index: number = 0): string {
  // Use reliable image URLs based on category
  const categoryImages: Record<string, string[]> = {
    nature: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop",
    ],
    culture: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop",
    ],
    places: [
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    ],
    festival: [
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop",
    ],
    location: [
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&h=600&fit=crop",
    ],
    heritage: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
    ],
    tradition: [
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop",
    ],
    food: [
      "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=800&h=600&fit=crop",
    ],
  };

  const images = categoryImages[category] || categoryImages.nature || [];
  return images[index % images.length] || `https://picsum.photos/seed/${category}-${index}/800/600`;
}

// Generate location-specific placeholder image
export function getLocationImage(locationName: string): string {
  // Use reliable Unsplash images with specific IDs
  const locationMap: Record<string, string> = {
    "Amalapuram": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
    "అమలాపురం": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
    "Dindi Resorts": "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=1200&h=800&fit=crop",
    "దిండి రిసార్ట్‌లు": "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=1200&h=800&fit=crop",
    "Yanam Coastline": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop",
    "యానం తీరం": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop",
    "Papikondalu Gateway": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
    "పాపికొండలు గేట్‌వే": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
    "Atreyapuram": "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop",
    "అత్రేయాపురం": "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop",
  };
  
  return locationMap[locationName] || `https://picsum.photos/seed/${locationName.replace(/\s+/g, "-")}/1200/800`;
}

// Generate food-specific placeholder image
export function getFoodImage(foodName: string): string {
  // Use a more reliable image service
  const foodMap: Record<string, string> = {
    "Pootharekulu": "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=800&h=600&fit=crop",
    "Gongura": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop",
    "Chepa Pulusu": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&h=600&fit=crop",
    "Mango Pickles": "https://images.unsplash.com/photo-1606914469633-bd3921072a1a?w=800&h=600&fit=crop",
    "Pulihora": "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&h=600&fit=crop",
    "Coconut Sweets": "https://images.unsplash.com/photo-1563805042-7688c019e1b3?w=800&h=600&fit=crop",
    "పూతరేకులు": "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=800&h=600&fit=crop",
    "గోంగూర": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop",
    "చేప పులుసు": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&h=600&fit=crop",
    "మామిడి ఊరగాయలు": "https://images.unsplash.com/photo-1606914469633-bd3921072a1a?w=800&h=600&fit=crop",
    "పులిహోర": "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&h=600&fit=crop",
    "కొబ్బరి తీపులు": "https://images.unsplash.com/photo-1563805042-7688c019e1b3?w=800&h=600&fit=crop",
  };
  
  return foodMap[foodName] || `https://picsum.photos/seed/${foodName.replace(/\s+/g, "-")}/800/600`;
}

// Placeholder video URLs (YouTube videos about Andhra Pradesh)
export const placeholderVideos = [
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Replace with actual Andhra Pradesh videos
  "https://www.youtube.com/watch?v=9bZkp7q19f0",
  "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
];

// Get placeholder video URL
export function getPlaceholderVideo(index: number = 0): string {
  // Using YouTube placeholder videos about Andhra Pradesh
  const videos = [
    "https://www.youtube.com/watch?v=example1", // Replace with real videos
    "https://www.youtube.com/watch?v=example2",
    "https://www.youtube.com/watch?v=example3",
  ];
  return videos[index % videos.length];
}

// Alternative: Use placeholder.com service
export function getPlaceholderComImage(
  width: number = 800,
  height: number = 600,
  text: string = "Andhra Pradesh"
): string {
  return `https://via.placeholder.com/${width}x${height}/1e3a8a/fbbf24?text=${encodeURIComponent(text)}`;
}

