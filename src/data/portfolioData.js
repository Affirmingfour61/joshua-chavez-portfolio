export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

export const heroData = {
  name: 'Joshua Chavez',
  title: 'Computer Science Graduate | IT Specialist | Systems & Software Developer',
  intro:
    'I build practical software and support reliable systems that keep teams moving. With a background in IT support and software development, I focus on clear troubleshooting, clean automation, and solutions that work in real environments.',
  ctas: [
    { label: 'Resume', href: '/Joshua_Chavez_Resume_5-21.pdf' },
    { label: 'GitHub', href: 'https://github.com/Affirmingfour61' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/joshua-chavez-0314182a7/' },
    { label: 'Contact', href: '#contact' },
  ],
}

export const aboutText = [
  'I started in IT support, working directly with users and resolving issues in fast-paced environments. That experience built a strong foundation in troubleshooting, communication, and system reliability.',
  'As I advanced through Computer Science, I expanded into scripting, automation, and software development. I enjoy breaking down technical problems, identifying root causes, and delivering solutions that are easier to manage over time.',
]

export const skillGroups = [
  {
    category: 'Programming',
    skills: ['Python', 'Java', 'JavaScript', 'SQL', 'C++', 'Bash'],
  },
  {
    category: 'Web Development',
    skills: ['HTML', 'CSS', 'React', 'Node.js'],
  },
  {
    category: 'IT & Systems',
    skills: ['Active Directory', 'Microsoft 365', 'Linux', 'Windows', 'macOS'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Microsoft Excel', 'Microsoft Office'],
  },
  {
    category: 'Concepts',
    skills: ['Data Structures', 'Algorithms', 'Networking', 'Authentication', 'Agile'],
  },
]

export const projects = [
  {
    title: 'Personal Portfolio',
    highlights: [
      'Designed and deployed a recruiter-focused portfolio with full-screen sections, timeline experience view, and responsive layout.',
      'Built with React, Tailwind CSS, and Framer Motion; hosted on Render with automatic deploys from GitHub.',
      'Centralized content and links so projects, resume, and contact stay easy to update.',
    ],
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    githubUrl: 'https://github.com/Affirmingfour61/joshua-chavez-portfolio',
    demoUrl: 'https://joshua-chavez-portfolio-website.onrender.com',
    demoLabel: 'View site',
  },
  {
    title: 'Meal Match',
    highlights: [
      'Collaborated with a team of three on a standalone recipe and meal tracking product.',
      'Built a recipe and meal tracking experience with structured data entry and weekly planning workflows.',
      'Deployed the live meal tracker app on Render for real-world testing and demos.',
      'Recorded a video walkthrough covering core user flows and final functionality.',
    ],
    technologies: ['JavaScript', 'HTML', 'CSS', 'Render', 'Team Collaboration'],
    githubUrl: 'https://github.com/anghel9/MealMatch',
    demoUrl: 'https://mealmatch-x0dr.onrender.com',
    demoLabel: 'Live demo',
    videoUrl: 'https://www.youtube.com/watch?v=vxz9epjxXmo',
    videoLabel: 'Video walkthrough',
  },
  {
    title: 'Recipe Tracker & Meal Planner',
    highlights: [
      'CST Group 5 course project: React frontend paired with a Spring Boot REST API (Docker) on Render.',
      'Firebase OAuth2 sign-in, Swagger-documented endpoints, and role-based admin vs. user access.',
      'Supports recipes, ingredients, weekly meal plans, favorites, preference filters, and user stats.',
      'Backend exposes foods, recipes, meal plans, favorites, and user management over REST.',
    ],
    technologies: ['React', 'Spring Boot', 'Firebase', 'REST API', 'Docker', 'Team Collaboration'],
    githubUrl: 'https://github.com/Group5-Project2-RecipeTracker',
    demoUrl: 'https://meal-tracker-app-su87.onrender.com',
    demoLabel: 'Live demo',
    apiUrl: 'https://mealtracker-86x4.onrender.com',
    apiLabel: 'Live API',
  },
  {
    title: 'Video Game Recommender',
    highlights: [
      'CST438 Android team app that recommends free-to-play games using genre, platform, and play-style preferences.',
      'Owned admin tooling (add/remove users), game details (metadata and descriptions), and star-rating reviews stored in Room.',
      'Collaborated via Slack; delivered 14 completed stories including login, discovery, sorting, and recommendations.',
      'Strengthened Git workflow, API-to-database mapping, and early documentation habits.',
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'Room', 'REST API', 'Team Collaboration'],
    githubUrl: 'https://github.com/Paulo-Camacho/CST438sp26_inclass',
    demoUrl: 'https://www.youtube.com/shorts/yxECam1A5QM',
    demoLabel: 'Video walkthrough',
  },
  {
    title: 'Gym Log',
    highlights: [
      'Java application for logging workouts and tracking exercise sessions over time.',
      'Emphasizes organized data handling, clear structure, and practical OOP design.',
      'Supports consistent record-keeping for training progress and session history.',
    ],
    technologies: ['Java', 'OOP', 'Data Structures'],
    githubUrl: 'https://github.com/Affirmingfour61/HW4GymLog',
  },
  {
    title: 'Roulette Game',
    highlights: [
      'Java casino-style roulette with defined betting rules and game-state management.',
      'Interactive play loop with clear outcomes and user-facing feedback.',
      'Practice project for control flow, OOP modeling, and logic validation.',
    ],
    technologies: ['Java', 'Game Logic', 'OOP'],
    githubUrl: 'https://github.com/Affirmingfour61/roulette-Game',
  },
]

export const courseworkData = [
  {
    title: 'Data Structures and Algorithms',
    focus: 'Complexity analysis, problem decomposition, and efficient implementation strategies.',
  },
  {
    title: 'Database Systems',
    focus: 'Relational modeling, SQL query design, and practical data integrity patterns.',
  },
  {
    title: 'Computer Networks',
    focus: 'Network layers, routing concepts, troubleshooting fundamentals, and protocol behavior.',
  },
  {
    title: 'Operating Systems',
    focus: 'Process management, memory handling, concurrency basics, and system-level behavior.',
  },
  {
    title: 'Software Engineering',
    focus: 'Collaborative development practices, agile workflows, testing habits, and project structure.',
  },
  {
    title: 'Cybersecurity Fundamentals',
    focus: 'Authentication, risk awareness, access control, and secure system practices.',
  },
]

export const experienceData = {
  role: 'Professional Experience',
  summary:
    'Hands-on support and operations experience across higher education, technology support, and customer-facing environments, with a focus on troubleshooting, communication, and reliable execution.',
  timeline: [
    {
      title: 'IT Specialist',
      company: 'California State University, Monterey Bay',
      location: 'Monterey, CA',
      period: 'Sep 2024 - Present',
      bullets: [
        'Provide technical support for software and hardware issues, helping reduce user downtime.',
        'Guide users through troubleshooting steps to resolve common system and account problems.',
        'Deliver training and support for user interfaces and software tools to improve day-to-day efficiency.',
      ],
    },
    {
      title: 'Computer Repair Specialist',
      company: 'Self-Employed',
      location: 'Los Angeles, CA',
      period: 'Jun 2018 - Present',
      bullets: [
        'Diagnose and repair personal computer issues including hardware replacement and software troubleshooting.',
        'Support clients with practical recommendations to improve performance, stability, and usability.',
      ],
    },
    {
      title: 'Host Server',
      company: 'Cafe Vida',
      location: 'Pacific Palisades, CA',
      period: 'Jul 2023 - Jul 2024',
      bullets: [
        'Managed front-of-house service flow and guest support in a high-volume environment.',
        'Coordinated with team members to maintain efficient shift operations and customer satisfaction.',
      ],
    },
    {
      title: 'Shift Lead',
      company: 'Starbucks',
      location: 'El Segundo, CA',
      period: 'Apr 2020 - May 2023',
      bullets: [
        'Led a team of 2-3 baristas and managed customer interactions during peak shifts.',
        'Trained team members on service standards and workflow to improve shift consistency.',
        'Reconciled cash registers and balanced daily totals to maintain financial accuracy.',
      ],
    },
    {
      title: 'Data Entry Clerk',
      company: 'Salon Mar',
      location: 'Manhattan Beach, CA',
      period: 'Jun 2019 - May 2020',
      bullets: [
        'Entered and maintained client records with strong accuracy in the salon management system.',
        'Processed sales and service transactions while supporting smooth front-desk operations.',
        'Assisted with promotional materials and social updates to support marketing efforts.',
        'Improved inventory restocking workflow, reducing product shortages by 20%.',
      ],
    },
  ],
}

export const contactData = {
  email: 'joshchavez@csumb.edu',
  phone: '(424) 366-2394',
  linkedin: 'https://www.linkedin.com/in/joshua-chavez-0314182a7/',
  github: 'https://github.com/Affirmingfour61',
}
