import { LandingPageFeatureTilesProps } from "@/types";

export const footerLinks = [
  {
    title: "Company",
    links: ["About us", "Press", "Careers", "Engineering", "Accessibility"],
  },
  {
    title: "Resources",
    links: [
      "Big Ideas",
      "Points",
      "Resources",
      "Training",
      "Remote Learning",
      "ClassDojo Plus",
      "Dojo Tutor",
    ],
  },
  {
    title: "Support",
    links: [
      "Help Center",
      "Contact",
      "Cookie Settings",
      "Transparency Notice at Collection",
      "Privacy and Security",
    ],
  },
  {
    title: "Community",
    links: [
      "Teacher Community",
      "Facebook",
      "Twitter",
      "Instagram",
      "Wall of Love",
    ],
  },
];

export const landingPageFeatureTiles: LandingPageFeatureTilesProps[] = [
  {
    id: 1,
    title: "Connection — made simple",
    description:
      "One simple way to message teachers, families, and staff—anytime, anywhere. Clear communication, instant updates, and automatic translation in more than 35 languages ",
    background: "bg-[url('/images/tiles/first-block.png')]",
    icon: "/images/icons/chat.png",
    image: "/app-store.png",
  },
  {
    id: 2,
    title: "Offer a window into their world",
    description:
      "With Stories, teachers can securely share photos, videos and updates on a private feed so parents can see the classroom magic for themselves ✨",
    background: "bg-[url('/images/tiles/second-block.png')]",
    icon: "/images/icons/gallery-love.png",
    image: "/app-store.png",
  },
  {
    id: 3,
    title: "Keep everyone up-to-date",
    description:
      "Adding Events to the calendar is easy and keeps everyone in the loop with automatic reminders 📅",
    background: "bg-[url('/images/tiles/third-block.png')]",
    icon: "/images/icons/calendar.png",
    image: "/app-store.png",
  },
  {
    id: 4,
    title: "Help them grow their own way",
    description:
      "ClassDojo helps teachers and families collaborate to support social-emotional learning with Points and Big Ideas—and gives kids a voice of their own with Portfolios 🎨",
    background: "bg-[url('/images/tiles/fourth-block.png')]",
    icon: "/images/icons/doll.png",
    image: "/app-store.png",
  },
  {
    id: 5,
    title: "Build the best classroom yet",
    description:
      "From attendance sheets to timers and everything in between, the Teacher Toolkit will save time and energy for what really matters—helping kids grow 🌱",
    background: "bg-[url('/images/tiles/fifth-block.png')]",
    icon: "/images/icons/paint-brush.png",
    image: "/app-store.png",
  },
];
