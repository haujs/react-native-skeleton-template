import Images from '@assets/images';
import {Block, Text} from '@components/base';
import {Header, NewsItem, CovidNews} from '@components/Home';
import React from 'react';
import {FlatList} from 'react-native';
import {HomeScreenProps} from './types';
import {NewsItemType} from '@components/Home/types';
import HomeStyles from './Home.styles';
import {useTranslation} from 'react-i18next';

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const {t} = useTranslation('Home');
  const _renderItem = ({item, index}: {item: NewsItemType; index: number}) => {
    return <NewsItem item={item} isFirst={index === 0} />;
  };

  const _keyExtractor = (item: NewsItemType) => item.id;

  return (
    <Block flex backgroundColor="white" inset="top">
      <FlatList
        ListHeaderComponent={
          <Block margin={{bottom: 18}}>
            <Header avatarUrl={avatarUrl} />
            <CovidNews />
            <Text fontType="bold" size={19} margin={{top: 26}}>
              {t('newsForYou')}
            </Text>
            <Text size={15} fontType="demiBold" color="secondaryText">
              {t('newsForYouSubTitle')}
            </Text>
          </Block>
        }
        data={sampleNews}
        renderItem={_renderItem}
        keyExtractor={_keyExtractor}
        contentContainerStyle={HomeStyles.contentContainerStyle}
      />
    </Block>
  );
};

export default HomeScreen;

const sampleNews = [
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

const avatarUrl =
  'https://images.unsplash.com/photo-1631116617815-b7375480a016?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80';
