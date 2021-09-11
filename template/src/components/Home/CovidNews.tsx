import {CustomIcon} from '@assets/icons';
import {Block, Text} from '@components/base';
import {useTheme} from '@theme';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity} from 'react-native';

interface CovidNewsProps {
  onPress?: () => void;
}

const CovidNews: React.FC<CovidNewsProps> = ({onPress}) => {
  const {Colors} = useTheme();
  const {t} = useTranslation('Home');

  return (
    <TouchableOpacity activeOpacity={0.6} {...{onPress}}>
      <Block
        padding={19}
        row
        align="center"
        border={{width: 1, color: Colors.veryLightPink}}
        radius={10}>
        <Text
          fontType="demiBold"
          size={16}
          color="oceanBlue"
          flexShrink
          flexGrow
          margin={{right: 35}}>
          {t('covidNews')}
          <Text color="secondaryText" size={16}>
            {t('covidSubtitle')}
          </Text>
        </Text>
        <CustomIcon name="chevron-right" color="#000000" size={24} />
      </Block>
    </TouchableOpacity>
  );
};

export default CovidNews;
