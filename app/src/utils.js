export const appConfig = {
  apiRoot: 'http://localhost:3000',
  isDeviceDebbuger: false,
};

export const MOCK_EVENTS = [
  {
    id: 1,
    name: 'Evento 01',
    description:
      "'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae tincidunt dolor. Nam hendrerit neque in accumsan bibendum. Integer enim eros, bibendum eget aliquam et, vestibulum nec urna. Proin luctus tristique odio, non auctor velit rhoncus at. Suspendisse interdum metus sit amet turpis volutpat pretium. Sed scelerisque mollis ultricies. Proin sodales cursus bibendum. Aliquam non dignissim erat, vel fringilla lectus.    Nulla pulvinar, leo ac ullamcorper suscipit, ipsum risus ultrices ligula, id scelerisque lectus tortor sit amet ex. Phasellus mollis faucibus leo, in venenatis lacus laoreet et. Pellentesque sagittis vel mi quis cursus. Maecenas ut nulla vitae justo suscipit egestas. Vestibulum faucibus mauris eget aliquam sagittis. Ut et justo eros. Nullam tortor tortor, mattis sit amet interdum vitae, congue id nisi. Nullam leo dolor, placerat a eros sed, ullamcorper viverra lacus. Donec non ornare ligula. Nullam vitae molestie ex. Fusce ultrices volutpat lectus in placerat. Nunc non posuere felis. Praesent molestie mi a dui interdum, in porta augue tristique. Donec eu ex vel lorem vehicula vulputate vulputate in ante. Aenean at justo semper, sollicitudin mauris in, laoreet turpis.'",
    age: '+18',
    date: new Date(),
    address: 'Av. antonio fred ozanan 9500',
    tickets: [
      {
        id: 1,
        name: 'Ingresso 01',
        description: 'Ingresso que permite todas as palestras',
        cost: 55.5,
      },
      {
        id: 2,
        name: 'Ingresso 02',
        description: 'Ingresso que permite todas as palestras e tem acesso ao network',
        cost: 150,
      },
    ],
  },
  {
    id: 2,
    name: 'Evento 02',
    description:
      'Evento foda meusduesaud asudsaudas asjdnasiudasduas asiudhasuidhasuid saiojdaiojsdijasi asiodjasi',
    age: '+18',
    date: new Date(),
    address: 'Av. antonio fred ozanan 9500',
    tickets: [
      {
        id: 1,
        name: 'Ingresso 01',
        description: 'Ingresso que permite todas as palestras',
        cost: 55.5,
      },
      {
        id: 2,
        name: 'Ingresso 02',
        description: 'Ingresso que permite todas as palestras e tem acesso ao network',
        cost: 150,
      },
    ],
  },
];

export const categories = [
  {
    id: 1,
    name: 'Palestras',
    image:
      'https://dpz4c7q921os3.cloudfront.net/images/block/84a413f825f71f57b8f3a048179ebb20aa3730d3.jpeg',
  },
  {
    id: 2,
    name: 'Workshops',
    image:
      'https://dpz4c7q921os3.cloudfront.net/images/block/d8d0045a1d081d1b4c9f336ec08ab71ee2ff10fb.jpeg',
  },
  {
    id: 3,
    name: 'Eventos',
    image:
      'https://dpz4c7q921os3.cloudfront.net/images/block/4e22355731786660ea9f915e1233a7df462ddce0.png',
  },
  {
    id: 4,
    name: 'Meetups',
    image:
      'https://dpz4c7q921os3.cloudfront.net/images/block/68531ffc3d5ebde5a4dabe9b6dc9b19b8c746e61.jpeg',
  },
  {
    id: 5,
    name: 'Eventos online',
    image:
      'https://dpz4c7q921os3.cloudfront.net/images/block/685f2b10a85cdfd7f5e82b38ca734cbaa0cfb125.png',
  },
  {
    id: 6,
    name: 'Show de talentos',
    image:
      'https://dpz4c7q921os3.cloudfront.net/images/block/52e9dff900383507c59075c88c46ed98249e866c.png',
  },
];
