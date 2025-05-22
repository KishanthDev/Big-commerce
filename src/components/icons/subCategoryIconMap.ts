import React from "react";
import {
  Car,
  Store,
  CircleDollarSign,
  Wrench,
  PackageOpen,
  Hospital,
  Stethoscope,
  Smile,
  Pill,
  HeartPulse,
  Dog,
  Book,
  GraduationCap,
  Users,
  Briefcase,
  Utensils,
  Salad,
  Coffee,
  CakeSlice,
  Bike,
  Shirt,
  Monitor,
  Gem,
  ShoppingCart,
  Building2,
  Gavel,
  Megaphone,
  ClipboardList,
  Sofa,
  Paintbrush,
  Hammer,
  Plug,
  Brush,
  Trees,
  Ruler,
  Plane,
  Hotel,
  KeyRound,
  Globe,
  Bus,
  Building,
  Home,
  HardHat,
  Landmark,
  Film,
  Music2,
  CalendarClock,
  Video,
  Dumbbell,
  Medal,
  TreeDeciduous,
  Activity,
  ShoppingBag,
  PawPrint,
  Scissors,
  GlobeLock,
  MonitorSmartphone,
  Smartphone,
  LayoutTemplate,
  Code2,
  ShieldCheck,
  Flame,
  ShieldAlert,
  CreditCard,
  LineChart,
  Mail,
} from "lucide-react";

export const subCategoryIconMap: { [key: string]: React.ElementType } = {
  // Automotive
  "Car Repair": Wrench,
  "Car Sales": Car,
  Tires: CircleDollarSign,
  "Auto Parts": PackageOpen,

  // Health & Medical
  Hospitals: Hospital,
  Clinics: Stethoscope,
  Dentists: Smile,
  Pharmacies: Pill,
  "Physiotherapy Centres": HeartPulse,
  "Veterinary Clinics": Dog,

  // Education
  "Schools (Primary, Secondary)": Book,
  "Colleges & Universities": GraduationCap,
  "Tuition Services": Users,
  "Educational Consultants": Briefcase,

  // Restaurants & Food
  "Fast Food": Utensils,
  "Fine Dining": Salad,
  Cafés: Coffee,
  Bakeries: CakeSlice,
  "Food Delivery Services": Bike,

  // Shopping & Retail
  "Clothing Stores": Shirt,
  "Electronics Stores": Monitor,
  "Jewellery Showrooms": Gem,
  "Grocery Stores": ShoppingCart,
  "Department Stores": Store,
  "Furniture Showrooms": Sofa,

  // Home Services
  "Interior Designers": Paintbrush,
  Carpenters: Hammer,
  Plumbers: Gavel,
  Electricians: Plug,
  Cleaners: Wrench,
  Landscapers: Trees,
  "Home Renovation": Ruler,

  // Professional Business Services
  "Chartered Accountants": ClipboardList,
  Lawyers: Brush,
  "Marketing Agencies": Megaphone,
  "Business Consultants": Briefcase,

  // Travel & Transportation
  Airlines: Plane,
  Hotels: Hotel,
  "Car Rentals": KeyRound,
  "Travel Agencies": Globe,
  "Public Transport": Bus,

  // Real Estate
  "Builders and Developers": Building,
  "Civil Contractors": HardHat,
  "Real Estate Agents": Home,
  "Property Management": Building2,

  // Financial Services
  Banks: Landmark,
  "Loan Agencies": CircleDollarSign,
  "Insurance Agencies": ShieldCheck,
  "Investment Services": LineChart,
  "Credit Unions": CreditCard,

  // Government & Community
  "Local Government Offices": Landmark,
  "Community Centers": Users,
  Libraries: Book,
  "Post Offices": Mail,

  // Entertainment & Media
  "Movie Theaters": Film,
  "Music Stores": Music2,
  "Event Management": CalendarClock,
  "Convention Halls": Building2,
  "Media Production": Video,

  // Sports & Recreation
  Gyms: Dumbbell,
  "Sports Leagues": Medal,
  Parks: TreeDeciduous,
  "Recreation Centers": Activity,
  "Sports Equipment Stores": ShoppingBag,

  // Pets & Animals
  "Pet Stores": PawPrint,
  Veterinarians: Dog,
  "Pet Grooming": Scissors,
  "Animal Shelters": HeartPulse,
  "Pet Training": GraduationCap,

  // Computers & Mobile
  "Internet Service Providers": GlobeLock,
  "Computer Sales and Repair": MonitorSmartphone,
  "Mobile Sales and Repair": Smartphone,
  "Web Design": LayoutTemplate,
  "Software Solutions": Code2,

  // Safety & Security
  "Private Security Services": ShieldCheck,
  "Fire Departments": Flame,
  "Police Stations": ShieldAlert,
  "Safety Equipment Suppliers": HardHat,
};
