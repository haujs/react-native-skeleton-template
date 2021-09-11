import {CustomIcon} from '@assets/icons';
import {Block, Image, Text} from '@components/base';
import {NewsItem} from '@components/Home';
import {useTheme} from '@theme';
import Helper from '@utils/helpers';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {notificationData} from './data';
import {
  Article,
  NotificationItemType,
  NotificationProps,
  TodayNews,
} from './types';

const Notification = ({}: NotificationProps) => {
  const {Colors} = useTheme();
  const {t} = useTranslation('Notification');

  const _renderItem = (item: Article | TodayNews) => {
    if (isArticle(item)) {
      return <NewsItem key={item.id} item={item} style={{marginBottom: 0}} />;
    }
    return (
      <TouchableOpacity
        key={item.id}
        onPress={() => {}}
        activeOpacity={0.6}
        style={styles.itemContainer}>
        <Block row align="center">
          <Image source={item.image} square={60} radius={10} />
          <Block margin={{left: 22}} flexGrow flexShrink>
            <Text size={16} fontType="demiBold">
              {item.title}
            </Text>
            <Text color="secondaryText" size={15} fontType="demiBold">
              {t('from', {pos: item.subTitle})}
            </Text>
          </Block>
          <TouchableOpacity activeOpacity={0.6} hitSlop={Helper.getHitSlop(10)}>
            <CustomIcon name="more" size={20} color={Colors.secondaryText} />
          </TouchableOpacity>
        </Block>
      </TouchableOpacity>
    );
  };

  const _renderNotificationItem = ({item, index}: NotificationItemType) => {
    return (
      <Block margin={{top: 24}}>
        <Block row align="center" justify="space-between" margin={{bottom: 20}}>
          <Text fontType="bold" size={15} color="secondaryText">
            {t(index ? 'today' : 'articleForYou')}
          </Text>
          <TouchableOpacity hitSlop={Helper.getHitSlop()} onPress={() => {}}>
            <Text fontType="bold" size={13}>
              {t('seeAll')}
            </Text>
          </TouchableOpacity>
        </Block>
        {item.map(_renderItem)}
      </Block>
    );
  };

  const _keyExtractor = (_: NotificationItemType['item'], index: number) =>
    String(index);

  return (
    <Block flex inset="top" backgroundColor="white">
      <FlatList
        data={Object.values(notificationData)}
        renderItem={_renderNotificationItem}
        keyExtractor={_keyExtractor}
        ListHeaderComponent={
          <Block row align="center" justify="space-between">
            <Text fontType="bold" size={23}>
              {t('notification')}
            </Text>
            <CustomIcon name="more-2" size={6} color={Colors.primaryText} />
          </Block>
        }
        contentContainerStyle={styles.contentContainer}
      />
    </Block>
  );
};

export default Notification;

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 27,
  },
  itemContainer: {marginBottom: 23},
});

const isArticle = (item: Article | TodayNews): item is Article => {
  return (item as Article).category !== undefined;
};
