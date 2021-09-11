import {Block, Text, Image} from '@components/base';
import React from 'react';
import {CustomIcon} from '@assets/icons';
import {useTheme} from '@theme';

interface HeaderProps {
  avatarUrl?: string;
}

const Header: React.FC<HeaderProps> = ({avatarUrl}) => {
  const {Colors} = useTheme();

  return (
    <Block row align="center" justify="space-between" margin={{bottom: 25}}>
      <Block row align="center">
        <CustomIcon name="logo" size={27} color={Colors.oceanBlue} />
        <Text
          size={23}
          margin={{left: 7, right: 4}}
          color="oceanBlue"
          style={{fontFamily: 'BR Firma Bold'}}>
          Pixels
        </Text>
        <Text size={23} style={{fontFamily: 'BR Firma Medium'}}>
          News
        </Text>
      </Block>
      <Image
        source={{
          uri: avatarUrl,
        }}
        round={35}
      />
    </Block>
  );
};

export default Header;
