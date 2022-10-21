// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: '',
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good morning genius!',
  greetingAfternoon: 'Have you taken a break yet?',
  greetingEvening: 'Hello Emma!',
  greetingNight: 'Go the fk to bed',
  
  //greetingMorning: 'Happy birthday genius!',
  //greetingAfternoon: 'Happy birthday, I hope you have the best day',
  //greetingEvening: 'Happy birthday, You are amazing, and now 21!',
  //greetingNight: 'I hope you had a great birthday!',

  // Weather
  weatherKey: 'bb30b901d29ed3093dcc1381ce592da8',
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'F', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '37.427475',
  defaultLongitude: '-122.169716',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Drive',
      icon: 'hard-drive',
      link: 'https://drive.google.com/drive',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.google.com/mail/u/0/#',
    },
    {
      id: '3',
      name: 'Trello',
      icon: 'trello',
      link: 'https://trello.com/',
    },
    {
      id: '4',
      name: 'Calendar',
      icon: 'calendar',
      link: 'https://calendar.google.com/calendar/r',
    },
    {
      id: '5',
      name: 'Canvas',
      icon: 'aperture',
      link: 'https://canvas.stanford.edu/',
    },
    {
      id: '6',
      name: 'Gradescope',
      icon: 'bar-chart-2',
      link: 'https://www.gradescope.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'film',
  secondListIcon: 'coffee',

  // Links
  lists: {
    firstList: [
      {
        name: 'Netflix',
        link: 'https://www.netflix.com/',
      },
      {
        name: 'Hulu',
        link: 'https://www.hulu.com/',
      },
      {
        name: 'Youtube',
        link: 'https://www.youtube.com/',
      },
      {
        name: 'Filler',
        link: 'https://www.youtube.com/',
      },
    ],
    secondList: [
      {
        name: 'Outlook',
        link: 'https://outlook.live.com/mail/0/inbox',
      },
      {
        name: 'Instagram',
        link: 'https://instagram.com/',
      },
      {
        name: 'Telegram',
        link: 'https://webk.telegram.org',
      },
      {
        name: 'GroupMe',
        link: 'https://web.groupme.com/chats',
      },
    ],
  },
};
