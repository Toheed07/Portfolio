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
  panduAI,
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
    date: "December 2022 - June 2023",
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
    title: "Full-Stack Web Developer",
    company_name: "Woxsen University",
    icon: woxsen,
    iconBg: "white",
    date: "December 2023 - February 2024",
    points: [
      "Debugged and resolved software issues in existing research projects, ensuring optimal functionality.",
      "Streamlined website communication by integrating a novel notification system leveraged on an API architecture.",
      "Developed an API with user-defined filtering options, enhancing data accessibility for users.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Dispatch For You",
    icon: dispatchForYou,
    iconBg: "#54595F",
    date: "June 2023 - April 2024",
    points: [
      "Implemented server-side pagination, resulting in a 30–50% reduction in server load and enhanced user experience",
      "Optimized image storage and resource utilization by utilizing Web3Storage and later transitioning to AWS, consistently achieving image size reductions of 80-90% using the Sharp package for efficient compression",
      "Led the integration of AWS Amplify UI to implement robust Cognito-based authentication, replacing Firebase and enhancing security and data management.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "PanduAI",
    icon: panduAI,
    iconBg: "#54595F",
    date: "June 2024 - October 2024",
    points: [
     "Developed and deployed a scalable AI-powered video editor platform on Azure, integrating with services like OpenAI, Stability AI, and ElevenLabs to generate high-quality videos based on user prompts, incorporating features like custom captions, filters, and scheduling, while ensuring efficient resource utilization through a robust queuing system (Celery) and a dynamic pooling mechanism for real-time progress updates.",
     "Successfully delivered a side project that leverages the core video generation logic to automate the creation of engaging lecture videos from Google Slides presentations for universities, integrating with Google APIs and implementing a recursive OpenAI-based script generation approach to handle long-form content." ,
     "Successfully architected and implemented a scalable video generation platform leveraging Python, FastAPI, Azure, and cutting-edge AI/ML technologies, enabling efficient and high-quality video production.",
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
