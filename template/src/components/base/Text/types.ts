import {TextProps} from 'react-native';
import {DefaultStyleProps} from '../utils';

export interface CommonTextProps extends DefaultStyleProps, TextProps {
  /**
   * Specifies font weight.
   *
   * Default is **"regular"**
   */
  fontType?: 'regular' | 'bold';

  /**
   * Color of text - key of **Colors (theme/colors.ts)** or **Color keywords**
   *
   * Default is **"primaryText"**
   */
  color?: string;

  /**
   * Specifies text alignment. textAlign: 'center'
   */
  center?: boolean;

  /**
   * Specifies text alignment. textAlign: 'right'
   */
  right?: boolean;

  /**
   * Specifies text alignment. textAlign: 'justify'
   */
  justify?: boolean;

  /**
   * Size of text
   *
   * Default is **14**
   */
  size?: number;

  /**
   * Line height of text
   *
   * Default is **size** * 1.5
   */
  lineHeight?: number;

  /**
   * Background color of text - key of Colors (theme/colors.ts) or Color keywords
   */
  backgroundColor?: string;

  children?: any;
}
