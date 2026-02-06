import {
  BrainCircuit,
  Code,
  Github,
  Linkedin,
  Mail,
  Paintbrush,
  Twitter,
  Users,
} from 'lucide-react';

export const personalData = {
  name: 'Alex Doe',
  title: 'Full-Stack Developer & UI/UX Enthusiast',
  bio: "A passionate and creative full-stack developer with a knack for building beautiful, functional, and user-centered web applications. With a strong foundation in both front-end and back-end technologies, I enjoy turning complex problems into elegant solutions. I'm always eager to learn new things and collaborate with like-minded individuals to create amazing digital experiences.",
  contact: {
    email: 'alex.doe@example.com',
    social: [
      { name: 'GitHub', url: 'https://github.com', icon: Github },
      { name: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin },
      { name: 'Twitter', url: 'https://twitter.com', icon: Twitter },
    ],
  },
};

export const skills = [
  {
    category: 'Technical Skills',
    icon: Code,
    list: [
      {
        name: 'React & Next.js',
        level: 95,
        description: 'Building modern, server-rendered React applications.',
      },
      {
        name: 'TypeScript',
        level: 90,
        description: 'Strongly-typed JavaScript for robust codebases.',
      },
      {
        name: 'Node.js & Express',
        level: 85,
        description: 'Creating scalable and efficient back-end services.',
      },
      {
        name: 'Database (SQL & NoSQL)',
        level: 80,
        description: 'Experience with PostgreSQL, MongoDB, and Firebase.',
      },
      {
        name: 'Tailwind CSS',
        level: 98,
        description:
          'Rapidly building custom user interfaces with utility-first CSS.',
      },
    ],
  },
  {
    category: 'Design & UX',
    icon: Paintbrush,
    list: [
      {
        name: 'Figma',
        level: 90,
        description: 'Prototyping and designing user interfaces.',
      },
      {
        name: 'UI/UX Principles',
        level: 85,
        description:
          'Applying user-centered design principles for intuitive experiences.',
      },
      {
        name: 'Responsive Design',
        level: 95,
        description: 'Ensuring seamless experiences across all devices.',
      },
    ],
  },
  {
    category: 'Soft Skills',
    icon: Users,
    list: [
      {
        name: 'Problem Solving',
        level: 95,
        description:
          'Analytical and critical thinking to resolve complex issues.',
      },
      {
        name: 'Collaboration',
        level: 90,
        description: 'Working effectively in team environments.',
      },
      {
        name: 'Communication',
        level: 92,
        description: 'Clearly articulating ideas and feedback.',
      },
    ],
  },
  {
    category: 'AI & Machine Learning',
    icon: BrainCircuit,
    list: [
      {
        name: 'Genkit & Firebase',
        level: 80,
        description:
          "Building AI-powered features with Google's generative AI stack.",
      },
      {
        name: 'Prompt Engineering',
        level: 85,
        description: 'Crafting effective prompts for large language models.',
      },
    ],
  },
];

export const projects = [
  {
    id: 'project-1',
    title: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce website built with Next.js, Stripe for payments, and a custom CMS for product management. Designed for a seamless shopping experience.',
    imageKey: 'project1',
    link: '#',
    tags: ['Next.js', 'Stripe', 'Tailwind CSS', 'Full-Stack'],
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    description:
      'A collaborative task management tool with real-time updates using Firebase. Features include drag-and-drop boards, user authentication, and notifications.',
    imageKey: 'project2',
    link: '#',
    tags: ['React', 'Firebase', 'Real-time', 'Productivity'],
  },
  {
    id: 'project-3',
    title: 'Portfolio Generator',
    description:
      'A SaaS application that allows users to generate their own professional portfolio websites using AI-powered content suggestions and customizable templates.',
    imageKey: 'project3',
    link: '#',
    tags: ['AI', 'SaaS', 'Next.js', 'GenAI'],
  },
];
