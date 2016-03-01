const app = {
  hero: {
    name: 'Sam Lau',
    info: 'Front-End Engineer @ Trimian',
    location: 'Sunnyvale, CA',
    tagline: 'Aesthetically driven self-taught programmer',
  },
  works: [
    {
      imageUrl: 'img/webmidi.png',
      description: 'An exploration into the web audio apis, building a daw using the browser.',
      url: '#',
      title: 'webmidi',
    },
    {
      imageUrl: 'img/appformix.png',
      description: `Cloud datacenter analytics dashboard, using socket.io for
      real-time and d3 for the visualizations.`,
      url: '#',
      title: 'appformix',
    },
  ],
  about: {
    picUrl: 'img/profile.jpg',
    summary: `Hello, my name is Sam and my passion is making cool things.
      I am a self-taught programmer and musician. I love to express myself
      through creative mediums, whether it be through code or music. I believe
      in unconventional routes and learning to love the practice.
      `,
  },
};

export function reducer(state = app, action) {
  switch (action.type) {
    default:
      return state;
  }
}
