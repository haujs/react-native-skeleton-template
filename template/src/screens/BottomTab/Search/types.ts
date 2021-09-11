import {NewsItemType} from '@components/Home/types';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {RootStackRoutes, BottomTabRoutes} from '@navigation/types';

export interface PostItemType {
  id: string;
  title: string;
  posts: NewsItemType[];
}

export interface Category {
  id: string;
  title: string;
}

export interface SearchProps {
  navigation: NavigationProp<RootStackRoutes>;
  route: RouteProp<BottomTabRoutes, 'Search'>;
}
