export const appConfig = {
  apiRoot: 'http://localhost:3000',
  isDeviceDebbuger: false,
};

export const MOCK_EVENTS = [
  {
    id: 1,
    name: 'Dialog Flow',
    category_id: 1,
    description:
      'Nesse workshop Neto Silva, o líder de Chatbot do PJBank. nos ensinará como criar uma aplicação utilizando o Dialog Flow do Google. O conteúdo abordado será a apresentação do DialogFlow e criar uma aplicação prática usando a própria IDE do serviço; Pre-requisito:      - Por se tratar de um workshop é necessário levar seu computador, sob sua responsabilidade.',
    age: 'Livre para todos os públicos',
    date: new Date(),
    address: 'R. da Abolição, 881 · Campinas',
    tickets: [
      {
        id: 1,
        name: 'Ingresso Simples',
        description: 'Ingresso que permite todas as palestras',
        cost: 55.5,
      },
      {
        id: 2,
        name: 'Ingresso VIP',
        description: 'Ingresso que permite todas as palestras e tem acesso ao network',
        cost: 150,
      },
    ],
  },
  {
    id: 2,
    name: 'Virtual Product Summit: The Online Product Management Conference',
    category_id: 2,
    description:
      'On October 24, we will be presenting the first Virtual Product Summit, a Product School online conference dedicated to Product Management. Featuring six of the most prominent product minds from companies like Tinder, Amazon, and Airbnb, each talk will focus on the most trending insights in the product world.      This four-hour long conference will be available for livestream on Youtube, Facebook, and LinkedIn. To ensure that you don’t miss out on any of this valuable information, all slides will be available for download during the talks. Join us as we bring together the biggest online product community in the world to learn from those who are leading the charge in the industry.',
    age: '+16',
    date: new Date(),
    address: 'Online',
    tickets: [
      {
        id: 1,
        name: 'Inscrição',
        description: 'Ingresso que permite todas as palestras',
        cost: 55.5,
      },
    ],
  },
  {
    id: 3,
    name: '#14 Agile Beer Campinas',
    category_id: 1,
    description:
      'Essa edição será realizada na Programmers, que fica na Av. John Dalton, 301 - Edifício 3, conjunto 13A (Techno Park Campinas). Vamos compartilhar experiências e conhecimento sobre os métodos ágeis, expandir nosso network e ainda tomar uma cerveja juntos.',
    age: '+16',
    date: new Date(),
    address: 'Campinas',
    tickets: [
      {
        id: 1,
        name: 'Ingresso gratuito',
        description: 'Ingresso que permite todas as palestras',
        cost: 55.5,
      },
    ],
  },
  {
    id: 4,
    name: '31º CocoaTalks Campinas',
    category_id: 3,
    description:
      'Essa edição será realizada na Programmers, que fica na Av. John Dalton, 301 - Edifício 3, conjunto 13A (Techno Park Campinas). Vamos compartilhar experiências e conhecimento sobre os métodos ágeis, expandir nosso network e ainda tomar uma cerveja juntos.',
    age: '+16',
    date: new Date(),
    address: 'Zup IT Campinas - Av. José Rocha Bomfim, 214 · Campinas',
    tickets: [
      {
        id: 1,
        name: 'Ingresso simples',
        description: 'Ingresso que permite todas as palestras',
        cost: 55.5,
      },
      {
        id: 2,
        name: 'Ingresso Premium',
        description: 'Ingresso que permite todas as palestras',
        cost: 85.5,
      },
    ],
  },
];

export const categories = [
  {
    id: 1,
    name: 'Palestras',
    image: 'https://d2v9ipibika81v.cloudfront.net/uploads/sites/185/2017/01/badge-speech-1.png',
  },
  {
    id: 2,
    name: 'Workshops',
    image:
      'https://dpz4c7q921os3.cloudfront.net/images/block/d8d0045a1d081d1b4c9f336ec08ab71ee2ff10fb.jpeg',
  },
  {
    id: 4,
    name: 'Meetups',
    image: 'https://www.themartec.com/insidelook/wp-content/uploads/Meetups-Sydney-Startups.jpg',
  },
  {
    id: 5,
    name: 'Eventos online',
    image:
      'https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1463513356000/photosp/c5bce4d3-eb5d-4d6d-b9ce-71117b066187/stock-photo-business-technology-laptop-electronic-computer-corporate-editing-tutoring-users-c5bce4d3-eb5d-4d6d-b9ce-71117b066187.jpg',
  },
  // {
  //   id: 6,
  //   name: 'Show de talentos',
  //   image:
  //     'https://dpz4c7q921os3.cloudfront.net/images/block/52e9dff900383507c59075c88c46ed98249e866c.png',
  // },
];
