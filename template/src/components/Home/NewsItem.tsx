import {Block, Image, Text} from '@components/base';
import Helper from '@utils/helpers';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity} from 'react-native';
import {NewsItemType} from './types';

interface NewsItemProps {
  item: NewsItemType;
  isFirst: boolean;
  onPress?: () => void;
  onPressCategory?: () => void;
}

const NewsItem: React.FC<NewsItemProps> = ({
  item,
  isFirst,
  onPress,
  onPressCategory,
}) => {
  const {t} = useTranslation('Home');
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      {...{onPress}}
      style={{marginBottom: isFirst ? 49 : 30}}>
      <Block style={{flexDirection: isFirst ? 'column' : 'row-reverse'}}>
        <Image
          source={item.image}
          width={isFirst ? '100%' : 83}
          height={isFirst ? 132 : 83}
          margin={{bottom: 18}}
          radius={10}
        />
        <Block flexGrow flexShrink>
          <Text size={16} fontType="demiBold" margin={{right: 41}}>
            {item.title}
          </Text>
          <Block row align="center" margin={{top: 10}}>
            <Text color="secondaryText">
              {t('duration', {hour: item.duration})}
            </Text>
            <Block
              round={4}
              backgroundColor="secondaryText"
              margin={{horizontal: 15}}
            />
            <TouchableOpacity
              hitSlop={Helper.getHitSlop()}
              onPress={onPressCategory}>
              <Text color="secondaryText">{item.category.title}</Text>
            </TouchableOpacity>
          </Block>
        </Block>
      </Block>
    </TouchableOpacity>
  );
};

export default NewsItem;
