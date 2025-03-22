import { CalendarDays, Users, Ticket, PartyPopper, MapPin, Star } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "How It Works", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "Rahul Sharma",
    company: "EventWala",
    image: user1,
    text: "Planning our corporate event was effortless with this platform. Everything from guest management to ticketing was seamless!",
  },
  {
    user: "Priya Patel",
    company: "Festive Planners",
    image: user2,
    text: "An excellent tool for managing large-scale weddings and festivals. The automation features saved us hours of manual work!",
  },
  {
    user: "Amit Verma",
    company: "Shaadi Bliss",
    image: user3,
    text: "This platform made wedding planning stress-free. Our clients love how easy it is to RSVP and get all event details!",
  },
  {
    user: "Aman Singh",
    company: "Bollywood Beats",
    image: user4,
    text: "Managing concerts has never been easier. The ticketing system and attendee tracking features are absolute game-changers!",
  },
  {
    user: "Vikram Malhotra",
    company: "Elite Gatherings India",
    image: user5,
    text: "From venue selection to post-event analytics, this tool does it all. Highly recommended for event organizers!",
  },
  {
    user: "Ananya Roy",
    company: "Synergy Conferences India",
    image: user6,
    text: "Our conference planning workflow has drastically improved with this platform. The collaboration tools are top-notch!",
  },
];

export const features = [
  {
    icon: <CalendarDays />, 
    text: "Event Scheduling",
    description: "Effortlessly schedule and manage events with our intuitive calendar system.",
  },
  {
    icon: <Users />, 
    text: "Guest Management",
    description: "Easily send invitations, track RSVPs, and manage guest lists in one place.",
  },
  {
    icon: <Ticket />, 
    text: "Ticketing System",
    description: "Sell and distribute tickets with seamless integration to your event page.",
  },
  {
    icon: <PartyPopper />, 
    text: "Theme & Decor Planning",
    description: "Customize event themes with our built-in decor planning and design tools.",
  },
  {
    icon: <MapPin />, 
    text: "Venue Selection",
    description: "Find and book the perfect venue with our extensive location database.",
  },
  {
    icon: <Star />, 
    text: "Post-Event Feedback",
    description: "Gather insights with built-in feedback collection and analytics tools.",
  },
];

export const pricingOptions = [
  {
    title: "Basic",
    price: "$0",
    features: [
      "Create up to 3 events",
      "Limited guest management",
      "Basic analytics",
    ],
  },
  {
    title: "Pro",
    price: "$15/month",
    features: [
      "Unlimited events",
      "Advanced guest management",
      "Customizable ticketing",
      "Detailed analytics",
    ],
  },
  {
    title: "Enterprise",
    price: "$50/month",
    features: [
      "All Pro features",
      "Custom branding",
      "Dedicated event manager",
      "Priority support",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Event Planning Guide" },
  { href: "#", text: "FAQ" },
  { href: "#", text: "Contact Support" },
  { href: "#", text: "Community Forum" },
];
export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];
export const communityLinks = [
  { href: "#", text: "Upcoming Events" },
  { href: "#", text: "Networking Meetups" },
  { href: "#", text: "Event Planning Webinars" },
  { href: "#", text: "Success Stories" },
];