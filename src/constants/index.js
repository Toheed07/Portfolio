import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  bootstrap,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  python,
  cpp,
  arduino,
  nextjs,
  postgresql,
  meta,
  starbucks,
  unsualDigital,
  dispatchForYou,
  woxsen,
  iic,
  ecommerce,
  youtube,
  feePortal,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "AI/ML Developer",
    icon: backend,
  },
  {
    title: "Shopify and WordPress Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "Arduino",
    icon: arduino,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Postgresql",
    icon: postgresql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  

];

const experiences = [
  {
    title: "Full-Stack Web Developer",
    company_name: "Institution Innovation Council (IIC)",
    icon: iic,
    iconBg: "white",
    date: "December 2022 - Present",
    points: [
      "Collaborated with team members to develop innovative projects, bringing together diverse skills and expertise to tackle real-world problems.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Produced regular reports and updates on project progress, tracking milestones and identifying potential roadblocks to ensure successful project outcomes.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Unusal Digital",
    icon: unsualDigital,
    iconBg: "white",
    date: "June 2023 - July 2023",
    points: [
      "Successfully completed Shopify and WordPress projects with a focus on timely delivery, collaborating seamlessly with design and development teams to exceed client expectations.",
      "Maintained effective communication with project managers, ensuring project updates were relayed regularly for streamlined coordination and project success.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Dispatch For You",
    icon: dispatchForYou,
    iconBg: "#54595F",
    date: "June 2023 - Present",
    points: [
      "In a collaborative team environment, I contributed to the development of the Gravitii product using TypeScript, Next.js, and Python (FastAPI), showcasing proficiency in diverse technologies.",
      "Implemented advanced features, including Backend Pagination, Authentication, and Web3Storage for efficient data storage, enhancing the product's functionality.",
      "Fostered cross-functional collaboration to ensure a seamless user experience and optimize system performance, actively participating in discussions and aligning with team goals.",
      "Played a key role in component development and state management, contributing to the overall robustness and efficiency of the project.",
    ],
  },
  {
    title: "Full-Stack Web Developer",
    company_name: "Woxsen University",
    icon: woxsen,
    iconBg: "white",
    date: "November 2023 - Present",
    points: [
      "I initiated the process of familiarizing myself with essential project management and development tools crucial for upcoming tasks.",
      "Expressed eagerness to contribute actively to upcoming projects, demonstrating a proactive attitude toward learning and collaboration.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Fee Portal",
    description:
      "Web application allows students to easily pay their fees online, and includes features such as email notifications and an administrator dashboard for managing student accounts and transactions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    image: feePortal,
    source_code_link: "https://github.com/Toheed07/student-fee-portal",
  },
  {
    name: "E-commerce Store",
    description:
      "Web application that enables users to browse through an extensive catalog of products, add items to their cart, and securely checkout using Stripe's payment gateway. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/Toheed07/E-commerce-Store",
  },
  {
    name: "Youtube Clone",
    description:
      "The ReactJS-based YouTube clone website uses Material UI for a modern interface with responsive design. It includes search, filtering, and real-time data on new video releases, likes, and comments through API integration.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mui",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: youtube,
    source_code_link: "https://github.com/Toheed07/Youtube-Clone",
  },
];

export { services, technologies, experiences, testimonials, projects };
