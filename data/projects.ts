const guided = [
  {
    name: 'Omnifood',
    gitHub: '',
    deploy: 'https://omnifood-sukh.netlify.app/',
    imgURL: '/project.images/Omnifood.png',
    imgAlt: 'omnifood',
    tech: ['HTML', 'CSS'],
    description:
      'This project was a guided project based on building a responsive web design using various CSS techniques. This really helped me clear my fundamentals of CSS and how the grid and flex function works.',
  },
  {
    name: 'Mapty',
    gitHub: '',
    deploy: '',
    imgURL: '/project.images/Mapty.png',
    imgAlt: 'Mapty',
    tech: ['HTML', 'CSS', 'Javascript'],
    description:
      'This was a guided project to build a map based tracking app using javascript. In this project external library called Leaflet was used to display the map and it was specifically targeted to learn how constructor classes work in javascript.',
  },
  {
    name: 'Javascript Cafe',
    gitHub: 'https://github.com/sukhjeetChauhan/Cafe',
    deploy: '',
    imgURL: '/project.images/cafe.png',
    imgAlt: 'cafe',
    tech: ['HTML', 'CSS', 'javascript'],
    description:
      'In this project, challenge was to display the prices based on the customer order. In addition to this also needed to keep track of the inventory of all the products in the cafe. If we ran out of any product, we should have ability to alert that we have ran out and also have abilty to update the inventory.',
  },
  {
    name: 'Test Driven app',
    gitHub: '',
    deploy: '',
    imgURL: '/project.images/tdd.png',
    imgAlt: 'coding test cycle',
    tech: ['HTML', 'CSS', 'javascript', 'unit testing'],
    description:
      'This project was mostly build by myself by just a little oversight from the facilitators. The primary goal of this project was to learn test driven programming. Doing this project made me realize how you can make your code cleaner and simpler with test driven approach.',
  },
]

const selfMade = [
  {
    name: 'MealEasy',
    gitHub: 'https://github.com/MealEasy',
    deploy: 'https://meal-easy.pushed.nz/',
    imgURL: '/project.images/meal-easy.png',
    imgAlt: 'meal-easy',
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
    name: 'Flex Formulate',
    gitHub: 'https://github.com/sukhjeetChauhan/FlexFormulate',
    deploy: '',
    imgURL: '/project.images/fitness.png',
    imgAlt: 'fitness landing page',
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
    description:
      'This is my ongoing personal project. The main idea of this app is to build an app which provides more flexibility to the users in terms of designing their own personal health schedule. It shows exercises to the user based on choice of their workout days and choice of their body part. Further functionality that I plan to add to this is to dispaly the user amount of calories they can consume based on their personal goals and finally also add functionality of giving them upto date information on health industry.',
  },
  {
    name: 'Books Todos',
    gitHub: 'https://github.com/sukhjeetChauhan/Books-to-dos',
    deploy: 'https://books-to-do.pushed.nz/',
    imgURL: '/project.images/todos.png',
    imgAlt: 'todos',
    tech: [
      'React',
      'Express',
      'vite',
      'typescript',
      'node.js',
      'knex',
      'sql lite',
    ],
    description:
      'This is a basic fullstack todos app. I added little extra touch of this app being a Books-to-Read todos instead of a normal todos. The aim of this project was to practice backend crud operations and setting up back end routes',
  },
  {
    name: 'AT Transport Tracker',
    gitHub: '',
    deploy: '',
    imgURL: '/project.images/AT-api.png',
    imgAlt: 'AT tracker app',
    tech: ['React', 'Express', 'vite', 'typescript', 'node.js'],
    description:
      'This project was initiated to understand consumption of server side apis. I used Auckland transport api along with React Leaflet library to display live data of Auckland public transport on Auckland map.',
  },
  {
    name: 'Recipe App',
    gitHub: 'https://github.com/sukhjeetChauhan/Recipe-App',
    deploy: 'https://sukhjeetchauhan.github.io/Recipe-App/',
    imgURL: '/project.images/RecipeApp.png',
    imgAlt: 'Recipe app landing page',
    tech: ['HTML', 'CSS', 'javascript'],
    description:
      'This was my first javascript project undertaken by me to understand consuming apis with javascript and also to expand my understanding in how different components of javascript work. The idea behind this app was to display give recipe ideas to the users based on the ingredients they have.',
  },
  {
    name: 'Calculator',
    gitHub: 'https://github.com/sukhjeetChauhan/calculator',
    deploy: 'https://sukhjeetchauhan.github.io/calculator-app/',
    imgURL: '/project.images/calculator.png',
    imgAlt: 'calculator',
    tech: ['HTML', 'CSS', 'javascript'],
    description:
      'This was a one day javascript project undertaken by me to understand implementing the working of a calculator. I had to work with lot of conditionals to build this app. This helped me strengthen my understanding of the  work-flow of a javascript app.',
  },
]

export { guided, selfMade }
