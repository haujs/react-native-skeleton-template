import Images from '@assets/images';

export const defaultCate = [{id: 'default', title: 'Latest'}];

export const categories = [
  {id: 'cat_1', title: 'Architecture'},
  {id: 'cat_2', title: 'Tech'},
  {id: 'cat_3', title: 'Tips - Trick'},
];

export const sampleNews = [
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
  {
    id: 'new_4',
    title: 'best time to see the sunset \nin the afternoon.',
    duration: 2,
    category: {id: 'cat_3', title: 'Tips & Trick'},
    image: Images().news3,
  },
  {
    id: 'new_5',
    title: '(Update) Iphone 13 Rumor New design?',
    duration: 2,
    category: {id: 'cat_2', title: 'Tech'},
    image: Images().news2,
  },
];
