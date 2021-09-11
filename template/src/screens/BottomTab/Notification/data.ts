import Images from '@assets/images';

export const notificationData = {
  article: [
    {
      id: 'new_1',
      title: 'Dream home design inspiration for you in the future.',
      duration: 3,
      category: {id: 'cat_1', title: 'Architecture'},
      image: Images().news1,
    },
    {
      id: 'new_2',
      title: '(Update) Iphone 13 Rumor New design?',
      duration: 7,
      category: {id: 'cat_2', title: 'Tech'},
      image: Images().news2,
    },
    {
      id: 'new_3',
      title: 'best time to see the sunset \nin the afternoon.',
      duration: 9,
      category: {id: 'cat_3', title: 'Tips & Trick'},
      image: Images().news3,
    },
  ],
  today: [
    {
      id: 'brand_1',
      title: 'CNN Posts new news',
      subTitle: 'subscribe',
      image: Images().cnn,
    },
    {
      id: 'brand_2',
      title: 'football news',
      subTitle: 'tag',
      image: Images().fifa,
    },
    {
      id: 'brand_3',
      title: 'More about apple',
      subTitle: 'tag',
      image: Images().apple,
    },
  ],
};
