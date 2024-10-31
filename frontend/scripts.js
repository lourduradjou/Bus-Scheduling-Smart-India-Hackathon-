// Create the script element for Google Maps
const script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`;
script.async = true;
document.head.appendChild(script);

script.onload = () => {
  // Initialize your map here after the script has loaded
  console.log("Google Maps script loaded successfully!");
  // Example: initializeMap();
};
