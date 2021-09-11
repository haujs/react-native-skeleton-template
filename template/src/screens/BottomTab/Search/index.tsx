import {CustomIcon} from '@assets/icons';
import {Block, Text} from '@components/base';
import {NewsItemType} from '@components/Home/types';
import {useTheme} from '@theme';
import Helper from '@utils/helpers';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {categories, defaultCate, sampleNews} from './data';
import {Category, PostItemType, SearchProps} from './types';
import {NewsItem} from '@components/Home';

const Search = ({}: SearchProps) => {
  const {Colors} = useTheme();
  const {t} = useTranslation('Search');
  const [currentCate, setCurrentCate] = useState('default');

  const _renderCateItem = (item: Category) => {
    const isSelected = item.id === currentCate;
    return (
      <TouchableOpacity key={item.id} onPress={() => setCurrentCate(item.id)}>
        <Block padding={{right: 23}}>
          <Text
            fontType={isSelected ? 'bold' : 'demiBold'}
            color={isSelected ? 'oceanBlue' : 'secondaryText'}>
            {item.title}
          </Text>
        </Block>
      </TouchableOpacity>
    );
  };

  const _renderPostItem = (item: NewsItemType) => {
    return (
      <NewsItem
        key={item.id}
        isFirst={false}
        item={item}
        style={styles.postItem}
      />
    );
  };

  const _renderPosts = ({item}: {item: PostItemType}) => {
    if (currentCate !== 'default' && item.id !== currentCate) {
      return null;
    }
    return (
      <Block padding={{horizontal: 27}} margin={{bottom: 29}}>
        {item.posts.map(_renderPostItem)}
        <TouchableOpacity
          style={[
            styles.readMoreBtn,
            {backgroundColor: Helper.colorOpacity(Colors.lightBlue, 0.1)},
          ]}>
          <Text center color="oceanBlue" fontType="demiBold" size={16}>
            {t('readMore', {category: item.title})}
          </Text>
        </TouchableOpacity>
      </Block>
    );
  };

  const _keyExtractor = (item: PostItemType) => item.id;

  return (
    <Block flex inset="top" backgroundColor="white">
      <FlatList
        data={formatData(categories, sampleNews)}
        renderItem={_renderPosts}
        keyExtractor={_keyExtractor}
        ListHeaderComponent={
          <Block>
            <Block padding={{horizontal: 27, top: 16}}>
              <Block row align="center" justify="space-between">
                <Text fontType="bold" size={23}>
                  {t('headlines')}
                </Text>
                <CustomIcon name="more-2" size={6} color={Colors.primaryText} />
              </Block>
              <TouchableOpacity activeOpacity={0.6}>
                <Block
                  margin={{top: 18}}
                  padding={17}
                  align="center"
                  radius={10}
                  justify="center"
                  backgroundColor={Helper.colorOpacity(
                    Colors.veryLightPink,
                    0.25,
                  )}>
                  <Text size={17} fontType="demiBold" color="secondaryText">
                    {t('search')}
                  </Text>
                </Block>
              </TouchableOpacity>
            </Block>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.contentContainer}>
              {[...defaultCate, ...categories].map(_renderCateItem)}
            </ScrollView>
          </Block>
        }
      />
    </Block>
  );
};

export default Search;

const styles = StyleSheet.create({
  contentContainer: {paddingTop: 28, paddingBottom: 51, paddingLeft: 27},
  readMoreBtn: {padding: 14, borderRadius: 10},
  postItem: {marginBottom: 0},
});

const formatData = (cateArr: Category[], posts: NewsItemType[]) => {
  let result = [];
  for (let i = 0; i < cateArr.length; i++) {
    let postInCate = [];
    const cateItem = cateArr[i];
    for (let j = 0; j < posts.length; j++) {
      const postItem = posts[j];
      if (postItem.category.id === cateItem.id) {
        postInCate.push(postItem);
      }
    }
    result.push({...cateItem, posts: postInCate});
  }
  return result;
};
