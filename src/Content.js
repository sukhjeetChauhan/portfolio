// import images
import Hero_person from './assets/images/Hero/person.png'

import figma from './assets/images/Skills/figma.png'
import django from './assets/images/Skills/Django.png'
import reactjs from './assets/images/Skills/react.png'
import nodejs from './assets/images/Skills/node.png'
import python from './assets/images/Skills/python.png'
import tailwind from './assets/images/Skills/tailwind.png'
import typescript from './assets/images/Skills/TypeScript.png'
import wordpress from './assets/images/Skills/WordPress.png'
import pg from './assets/images/Skills/PostgresSQL.png'

import services_logo1 from './assets/images/Services/logo1.png'
import services_logo2 from './assets/images/Services/logo2.png'
import services_logo3 from './assets/images/Services/logo3.png'

import recipeApp from './assets/images/Projects/RecipeApp.png'
import mealEasy from './assets/images/Projects/meal-easy.png'
import pizzastop from './assets/images/Projects/pizzastop.png'

import avatar1 from './assets/images/Testimonials/avatar1.png'
import avatar2 from './assets/images/Testimonials/avatar2.png'
import avatar3 from './assets/images/Testimonials/avatar3.png'
import avatar4 from './assets/images/Testimonials/avatar4.png'

import self_image from './assets/images/Hireme/PicNoBackground.png'

// import icons from react-icons
import { GrMail } from 'react-icons/gr'
import { MdArrowForward, MdCall } from 'react-icons/md'
import { BsInstagram } from 'react-icons/bs'
import { TbSmartHome } from 'react-icons/tb'
import { BiUser } from 'react-icons/bi'
import { RiServiceLine, RiProjectorLine } from 'react-icons/ri'
import { MdOutlinePermContactCalendar } from 'react-icons/md'

export const content = {
  nav: [
    {
      link: '#home',
      icon: TbSmartHome,
    },
    {
      link: '#skills',
      icon: BiUser,
    },
    {
      link: '#services',
      icon: RiServiceLine,
    },
    {
      link: '#projects',
      icon: RiProjectorLine,
    },
    {
      link: '#contact',
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: 'Web Developer',
    firstName: 'SUKHJEET',
    LastName: 'CHAUHAN',
    btnText: 'Hire Me',
    image: Hero_person,
    hero_content: [
      {
        count: '3+',
        text: 'Years of Experience in Web development',
      },
      {
        count: '10+',
        text: 'Projects Worked in my career',
      },
    ],
  },
  skills: {
    title: 'Skills',
    subtitle: 'MY TOP SKILLS',

    skills_content: [
      {
        name: 'React js',
        para: 'Building dynamic UIs and SPAs.',
        logo: reactjs,
      },
      {
        name: 'Node js',
        para: 'Developing server-side apps and APIs.',
        logo: nodejs,
      },
      {
        name: 'Typescript',
        para: 'Creating scalable and type-safe code.',
        logo: typescript,
      },
      {
        name: 'Python',
        para: 'Programming in Python for web and data.',
        logo: python,
      },
      {
        name: 'Django',
        para: 'Building web apps with Django framework.',
        logo: django,
      },
      {
        name: 'PostGres SQL',
        para: 'Managing databases with PostgreSQL.',
        logo: pg,
      },
      {
        name: 'Wordpress',
        para: 'Creating and managing WordPress sites.',
        logo: wordpress,
      },
      {
        name: 'Tailwind',
        para: 'Designing with Tailwind CSS framework.',
        logo: tailwind,
      },
      {
        name: 'Figma',
        para: 'Designing UIs and prototypes with Figma.',
        logo: figma,
      },
    ],

    icon: MdArrowForward,
  },
  services: {
    title: 'Services',
    subtitle: 'WHAT I OFFER',
    service_content: [
      {
        title: 'Front-End Development',
        para: 'Crafting responsive and interactive user interfaces using React.js and Tailwind CSS for modern web experiences.',
        logo: services_logo1,
      },
      {
        title: 'Full-Stack Development',
        para: 'Developing complete web solutions with React, Node.js, Django, and PostgreSQL, covering both front-end and back-end needs.',
        logo: services_logo2,
      },
      {
        title: 'WordPress Development',
        para: 'Building and customizing WordPress websites to deliver tailored and professional online presences.',
        logo: services_logo3,
      },
    ],
  },

  Projects: {
    title: 'Projects',
    subtitle: 'MY CREATIONS',
    // image: person_project,
    project_content: [
      {
        title: 'Pizza Stop',
        gitHub: 'https://github.com/sukhjeetChauhan/pizza-stop',
        deploy: 'https:pizzastopwellsford.co.nz',
        image: pizzastop,
        tech: [
          'React',
          'vite',
          'antd',
          'typescript',
          'node.js',
          'tailwind',
          'Firebase',
          'Stripe',
        ],
        description: `PizzaStop is a sleek and responsive food ordering website developed for a local pizza store. Built using React, Vite, and TypeScript, the platform ensures fast performance and type-safe code. The design leverages Ant Design (AntD) components for a consistent UI and Tailwind CSS for custom, responsive styling.
        The backend, powered by Node.js, integrates seamlessly with Firebase Firestore for real-time database management, allowing for dynamic content updates and efficient data handling. The platform features Stripe integration for secure payment processing, enabling customers to place orders with ease and confidence.
        An advanced order management system was developed, allowing store staff to track and manage orders effortlessly. To enhance customer experience, Firebase Cloud Functions automate email notifications, informing customers when their orders are accepted.`,
      },
      {
        title: 'MealEasy',
        gitHub: 'https://github.com/MealEasy',
        deploy: 'https://meal-easy.pushed.nz/',
        image: mealEasy,
        tech: [
          'React',
          'Express',
          'vite',
          'typescript',
          'node.js',
          'tailwind',
          'knex',
          'sql lite',
          'Auth0',
        ],
        description: `This was our final group project building a fullstack application. Our idea was to build an app which could provide functionality of planning your weekly meals for you based on type of food you prefer to eat. We used an external api to fetch the recipes by tailoring our api call based on individual choices of each user. We were also able to add filtering of recipes funcitonality based on your search variable.
        Our main challenge in this project was handling our complex database structure and using that data in different components on our front-end. We were successfully able to build all the required features and deploy it. Our future plans are to incude AI meal plan builder and mongoDB as database in it.
      `,
      },
      {
        title: 'Recipe App',
        gitHub: 'https://github.com/sukhjeetChauhan/Recipe-App',
        deploy: 'https://sukhjeetchauhan.github.io/Recipe-App/',
        image: recipeApp,
        tech: ['HTML', 'CSS', 'javascript'],
        description:
          'This was my first javascript project undertaken by me to understand consuming apis with javascript and also to expand my understanding in how different components of javascript work. The idea behind this app was to display give recipe ideas to the users based on the ingredients they have.',
      },
    ],
  },
  Testimonials: {
    title: 'Testimonials',
    subtitle: 'MY CLIENT REVIEWS',
    testimonials_content: [
      {
        review:
          '“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”',
        img: avatar1,
        name: 'JOHN DOE',
      },
      {
        review:
          '“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”',
        img: avatar2,
        name: 'Tom Alex',
      },
      {
        review:
          '“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”',
        img: avatar3,
        name: 'Johnny',
      },
      {
        review:
          '“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”',
        img: avatar4,
        name: 'ROBBIN',
      },
    ],
  },
  Hireme: {
    title: 'Hire Me',
    subtitle: 'FOR YOUR PROJECTS',
    image1: self_image,
    image2: self_image,
    para: 'Hire me to bring your vision to life with my expertise in full-stack web development. I deliver modern, responsive, and scalable solutions tailored to your business needs.',
    btnText: 'Hire Me',
  },
  Contact: {
    title: 'Contact Me',
    subtitle: 'GET IN TOUCH',
    social_media: [
      {
        text: 'chauhansukhjeet@gmail.com',
        icon: GrMail,
        link: 'mailto:chauhansukhjeet@gmail.com',
      },
      {
        text: '+64274370467',
        icon: MdCall,
        link: 'https://wa.me/1234567890',
      },
      {
        text: 'Socials',
        icon: BsInstagram,
        link: '',
      },
    ],
  },
  Footer: {
    text: 'All © Copy Right Reserved 2022',
  },
}
