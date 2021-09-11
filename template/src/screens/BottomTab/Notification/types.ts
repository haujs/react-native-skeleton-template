import {NavigationProp, RouteProp} from '@react-navigation/native';
import {RootStackRoutes, BottomTabRoutes} from '@navigation/types';

export interface NotificationProps {
  navigation: NavigationProp<RootStackRoutes>;
  route: RouteProp<BottomTabRoutes, 'Notification'>;
}

export interface Article {
  id: string;
  title: string;
  duration: number;
  category: {
    id: string;
    title: string;
  };
  image: any;
}

export interface TodayNews {
  id: string;
  title: string;
  subTitle: string;
  image: any;
}

export interface NotificationItemType {
  item: Array<TodayNews | Article>;
  index: number;
}
