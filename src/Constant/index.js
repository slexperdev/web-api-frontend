export const Constant = {
  TOKEN: "TOKEN",
  TRAVEL_AGENT_ID: "TRAVEL_AGENT_ID",
  CURRENCY: "$",
  NAV_LINKS: [
    {
      name: "Cruise Reservations",
      to: "/",
    },
    {
      name: "Activity Reservations",
      to: "/activity",
    },
    {
      name: "Package Reservations",
      to: "/package",
    },
  ],
  RATING: [
    { value: 5, label: "⭑⭑⭑⭑⭑" },
    { value: 4, label: "⭑⭑⭑⭑" },
    { value: 3, label: "⭑⭑⭑" },
    { value: 2, label: "⭑⭑" },
    { value: 1, label: "⭑" },
  ],
  CABIN_CLASS: [
    { value: "Interior cabin", label: "Interior cabin" },
    { value: "Ocean View Cabin", label: "Ocean View Cabin" },
    { value: "Balcony Cabin", label: "Balcony Cabin" },
    { value: "Suites", label: "Suites" },
    { value: "Family Cabin", label: "Family Cabin" },
    { value: "Connecting Cabin", label: "Connecting Cabin" },
    { value: "Single Cabin", label: "Single Cabin" },
  ],
  DECK: [
    { value: "inside", label: "Inside" },
    { value: "oceanview", label: "Oceanview" },
    { value: "balcony", label: "Balcony" },
    { value: "suite", label: "Suite" },
  ],
  TYPE_OF_ACTIVITY: [
    { value: "Adventure", label: "Adventure" },
    { value: "Sight Seeing", label: "Sight Seeing" },
    { value: "Theme Park", label: "Theme Park" },
    { value: "Tour", label: "Tour" },
  ],
  SPECIALTY: [
    { value: "Honeymoon", label: "Honeymoon" },
    { value: "Beach holiday", label: "Beach holiday" },
    { value: "Wildlife excursion", label: "Wildlife excursion" },
    { value: "Family holiday", label: "Family holiday" },
  ],
  MEAL_PREFERENCES: [
    {
      value: "Vegetarian and Vegan Options",
      label: "Vegetarian and Vegan Options",
    },
    {
      value: "Gluten-Free and Allergen-Free Options",
      label: "Gluten-Free and Allergen-Free Options",
    },
    { value: "Kosher and Halal Meals", label: "Kosher and Halal Meals" },
    {
      value: "Low-Carb or Low-Fat Options",
      label: "Low-Carb or Low-Fat Options",
    },
    { value: "Customizable Menus", label: "Customizable Menus" },
  ],
};
